import { useState } from 'react'
import { useRouter } from 'next/router';

import { GetServerSidePropsContext } from 'next';
import { getProfile } from '../../hooks/getProfile'
import { getArtists } from '../../hooks/getArtists';

import Header from '../../components/Header/Header';
import Artist from '../../components/Artist/Artist';
import Tab from '../../components/Tab/Tab';

import styles from '../../styles/You.module.css'
import { Montserrat } from 'next/font/google'

const inter = Montserrat({
  subsets: ['latin'],
  variable: '--font-inter',
})

interface ProfileProps {
  profileName: string;
  profileImage: string;
}

interface Image {
  url: string;
  height: number;
  width: number;
}

interface Artist {
  images: Image[];
  name: string;
  genres: string[];
  id: string;
  popularity: number;
  external_urls: Link;
}

interface ArtistProps {
  artists: Artist[];
}

interface Link {
  spotify: string;
}

interface PageProps extends ProfileProps, ArtistProps {}

const ArtistPage: React.FC<PageProps> = ({artists }) => {
  const router = useRouter();
  const { query } = router;

  const [period, setPeriod] = useState('Last 4 weeks')

  const handlePeriodChange = (newPeriod: string) => {
    router.push({
      pathname: router.pathname,
      query: { ...query, period: newPeriod}
    })
    
    setPeriod(newPeriod)
  }
  return (
    <div className={styles['grid']}>
      <Header/>
      <Tab onPeriodChange={handlePeriodChange}/>
        <div className={styles['grid']}>
        {artists.map((artist, index) => (
          <div>
            <Artist
              index={index}
              id={artist.id}
              name={artist.name}
              image={artist.images && artist.images[1] ? artist.images[1].url : ''}
              genres={artist.genres}
              uri={artist.external_urls.spotify}
              />
          </div>
        ))}
        <div></div>
      </div>
    </div>
  );
};

const getTimePeriod = (period: string) => {
  switch (period) {
    case 'Last 4 weeks':
      return 'short_term'
    case 'Last 6 months':
      return 'medium_term'
    case 'Last 12 months':
      return 'long_term'
    default:
      return 'short_term'
  }
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { spotify_access_token } = context.req.cookies; 
  const { period } = context.query

  const time_period = Array.isArray(period) ? period[0] : period || 'Last 4 weeks'
  const period_mean = getTimePeriod(time_period)
  if (!spotify_access_token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const profileInfo = await getProfile(context);
  const artists = await getArtists(context, period_mean);

  return {
    props: {
      ...profileInfo.props,
      ...artists.props,
    },
  };
};
  
export default ArtistPage;