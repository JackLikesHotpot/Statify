import { useState } from 'react'
import { useRouter } from 'next/router';

import { GetServerSidePropsContext } from 'next';
import { dummyTracks } from '../../../data/dummyData'

import Track from '../../components/Track/Track';
import Header from '../../components/Header/Header';
import Tab from '../../components/Tab/Tab';

import Head from 'next/head';

interface Track {
  name: string;
  id: string;
  uri: string;
  external_urls: Link;
  album: string;
  duration_ms: number;
  preview_url: string;
  artists: string[]
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

interface PageProps extends ProfileProps, TrackProps {}

const TrackPage: React.FC<PageProps> = ({}) => {
  const router = useRouter();
  const { query } = router;

  const tracks = dummyTracks;

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
    <div>
    <Header/>
    <Tab onPeriodChange={handlePeriodChange}/>
      <div>
      {tracks.map((track, index) => (
        <div key={track.index}>
          <Track 
            trackName={track.name}
            uri={track.uri}
            duration_ms={track.duration_ms}
            image={track.image}
            index={index}
            artists={track.artists}
          />
        </div>
      ))}
      </div>
    </div>
    </>
    );
};
  
export default TrackPage;