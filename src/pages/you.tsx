import React, { useState } from 'react'

import { GetServerSideProps } from 'next';
import { getProfile } from '../hooks/getProfile'
import { getArtists } from '../hooks/getArtists';
import { getTracks } from '../hooks/getTracks';

import Profile from '../components/Profile/Profile';
import Artist from '../components/Artist/Artist';
import Switch from '../components/Switch/Switch';
import Track from '../components/Track/Track';

import styles from '../styles/You.module.css'
import { Montserrat } from 'next/font/google'

// import background from '../assets/background.svg'; // Adjust the path accordingly

const inter = Montserrat({
  subsets: ['latin'],
  variable: '--font-inter',
})

interface Track {
  name: string;
  id: string;
  uri: string;
  popularity: number;
  external_urls: Link;
  album: string[];
  duration_ms: number;
  preview_url: string;
}

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
  followers: Followers;
}

interface TrackProps {
  tracks: Track[];
}

interface ArtistProps {
  artists: Artist[];
}

interface Link {
  spotify: string;
}

interface Followers {
  total: number;
}

interface PageProps extends ProfileProps, ArtistProps, TrackProps {}

const YouPage: React.FC<PageProps> = ({profileName, profileImage, artists, tracks}) => {

  const [isBoxChecked, setBoxChecked] = useState<boolean>(false);

  const handleCheckboxToggle = (isChecked: boolean) => {
    setBoxChecked(isChecked); // Update the parent's state based on the child's request
  };

  return (
    <div className={styles['grid']}>
      <Profile displayName={profileName} profileImage={profileImage} />
      <Switch isChecked={isBoxChecked} onToggle={handleCheckboxToggle}/>
      {isBoxChecked ? (
        <div className={styles['grid']}>
        <div >
        {artists.map((artist) => (
          <div>
            <Artist
              id={artist.id}
              artistName={artist.name}
              artistImage={artist.images && artist.images[1] ? artist.images[1].url : ''}
              followers={artist.followers.total}
              genres={artist.genres}
              />
          </div>
        ))}
        </div>
        <div></div>
      </div>
      ) : (
        <div>
        <div></div>
        <div>
        {tracks.map((track) => (
          <div>
            <Track 
              id={track.id}
              trackName={track.name}
              album={track.album}
              uri={track.uri}
              duration_ms={track.duration_ms}
              preview={track.preview_url}
            />
          </div>
        ))}
        </div>
        <div></div>
      </div>
      )
      }
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Call both functions
  const profileInfo = await getProfile(context);
  const artists = await getArtists(context);
  const tracks = await getTracks(context);

  // Merge the props
  return {
    props: {
      ...profileInfo.props,
      ...artists.props,
      ...tracks.props
    },
  };
};
  
export default YouPage;