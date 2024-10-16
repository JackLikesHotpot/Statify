import React from 'react'

import { GetServerSideProps } from 'next';
import { getProfile } from '../../hooks/getProfile'
import { getTracks } from '../../hooks/getTracks';

import Track from '../../components/Track/Track';

import styles from '../../styles/You.module.css'
import { Montserrat } from 'next/font/google'

const inter = Montserrat({
  subsets: ['latin'],
  variable: '--font-inter',
})

interface Track {
  name: string;
  id: string;
  uri: string;
  external_urls: Link;
  album: string[];
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


interface PageProps extends ProfileProps, TrackProps {}

const TrackPage: React.FC<PageProps> = ({tracks}) => {

  return (
    <div className={styles['grid']}>
        <div className={styles['grid']}>
        <div>
        {tracks.map((track, index) => (
          <div>
            <Track 
              id={track.id}
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
    </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { spotify_access_token } = context.req.cookies; 

  if (!spotify_access_token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const profileInfo = await getProfile(context);
  const tracks = await getTracks(context);

  return {
    props: {
      ...profileInfo.props,
      ...tracks.props,
    },
  };
};
  
export default TrackPage;