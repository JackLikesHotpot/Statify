import { GetServerSideProps } from 'next';
import { getProfile } from '../hooks/getProfile'
import { getArtists } from '../hooks/getArtists';

import Profile from '../components/Profile/Profile';
import Artist from '../components/Artist/Artist';
import Switch from '../components/Switch/Switch'

import styles from '../styles/You.module.css'
import { Montserrat } from 'next/font/google'

import React, { useState } from 'react'


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
  followers: Followers;
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

interface PageProps extends ProfileProps, ArtistProps {}

const YouPage: React.FC<PageProps> = ({profileName, profileImage, artists}) => {

  const [isBoxChecked, setBoxChecked] = useState<boolean>(false);

  const handleCheckboxToggle = (isChecked: boolean) => {
    setBoxChecked(isChecked); // Update the parent's state based on the child's request
  };

  return (
    <div>
      <Profile displayName={profileName} profileImage={profileImage} />
      <Switch isChecked={isBoxChecked} onToggle={handleCheckboxToggle}/>
      <div className={styles['page']}>
      <div className={styles['column']}></div>
      <div className={styles['list']}>
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
      <div className={styles['column']}></div>
    </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Call both functions
  const profileInfo = await getProfile(context);
  const artists = await getArtists(context);

  // Merge the props
  return {
    props: {
      ...profileInfo.props,
      ...artists.props,
    },
  };
};
  
export default YouPage;