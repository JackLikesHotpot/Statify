import { useState } from 'react'
import { useRouter } from 'next/router';

import { GetServerSidePropsContext } from 'next';
import { getProfile } from '../../hooks/getProfile'
import { getArtists } from '../../hooks/getArtists';

import Header from '../../components/Header/Header';
import Artist from '../../components/Artist/Artist';
import Tab from '../../components/Tab/Tab';

import styles from '../../styles/Page.module.css'
import Head from 'next/head';
import { dummyArtists } from '../../../data/dummyData';

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

const ArtistPage: React.FC<PageProps> = ({ }) => {
  const router = useRouter();
  const { query } = router;

  const artists = dummyArtists;
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
      <title>Statify - Top Artists</title>
      <meta name="description" content="Explore your favourite artists with Statify!" />
    </Head>
    <div>
      <Header/>
      <Tab onPeriodChange={handlePeriodChange}/>
        <div>
        {artists.map((artist, index) => (
          <div key={artist.id}>
            <Artist
              id={artist.id}
              index={index}
              name={artist.name}
              image={artist.image}
              genres={artist.genres}
              uri={artist.uri}
              />
          </div>
        ))}
        <div></div>
      </div>
    </div>
    </>
  );
};
  
export default ArtistPage;