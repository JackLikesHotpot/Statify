import { useState } from 'react'
import { useRouter } from 'next/router';

import { GetServerSidePropsContext } from 'next';
import { getProfile } from '../../hooks/getProfile'
import { getTracks } from '../../hooks/getTracks';

import Track from '../../components/Track/Track';
import Header from '../../components/Header/Header';
import Tab from '../../components/Tab/Tab';

import styles from '../../styles/Page.module.css'
import { Montserrat } from 'next/font/google'
import Head from 'next/head';

const inter = Montserrat({
  subsets: ['latin'],
  variable: '--font-inter',
})

interface Track {
  name: string;
  id: string;
  uri: string;
  external_urls: Link;
  album: Album;
  duration_ms: number;
  preview_url: string;
}

interface ProfileProps {
  profileName: string;
  profileImage: string;
}

interface TrackProps {
  tracks: Track[];
}

interface Link {
  spotify: string;
}
interface Image {
  url: string;
  width: number;
  height: number;
}

interface Artist {
  external_urls: { spotify: string };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}
interface Album {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: { spotify: string };
  href: string;
  id: string;
  images: Image[];
  is_playable: boolean;
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

interface PageProps extends ProfileProps, TrackProps {}

const TrackPage: React.FC<PageProps> = ({tracks}) => {
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
    <>
    <Head>
      <title>Statify - Top Tracks</title>
      <meta name="description" content="Explore your recently played tracks with Statify!" />
    </Head>
    <div className={styles['grid']}>
    <Header/>
    <Tab onPeriodChange={handlePeriodChange}/>
      <div className={styles['grid']}>
      {tracks.map((track, index) => (
        <div key={track.id}>
          <Track 
            trackName={track.name}
            album={track.album}
            uri={track.uri}
            duration_ms={track.duration_ms}
            preview={track.preview_url}
            index={index}
          />
        </div>
      ))}
      </div>
    </div>
    </>
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
  const tracks = await getTracks(context, period_mean);

  return {
    props: {
      ...profileInfo.props,
      ...tracks.props,
    },
  };
};
  
export default TrackPage;