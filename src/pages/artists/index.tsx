import React, { useState, useEffect } from 'react'

import { GetServerSideProps } from 'next';
import { getProfile } from '../../hooks/getProfile'
import { getArtists } from '../../hooks/getArtists';

import Profile from '../../components/Profile/Profile';
import Artist from '../../components/Artist/Artist';

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

const YouPage: React.FC<PageProps> = ({profileName, profileImage, artists }) => {

  return (
    <div className={styles['grid']}>
      <Profile displayName={profileName} profileImage={profileImage} />
        <div className={styles['grid']}>
        {artists.map((artist, index) => (
          <div>
            <Artist
              index={index}
              id={artist.id}
              artistName={artist.name}
              artistImage={artist.images && artist.images[1] ? artist.images[1].url : ''}
              followers={artist.followers.total}
              genres={artist.genres}
              />
          </div>
        ))}
        <div></div>
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
  const artists = await getArtists(context);

  return {
    props: {
      ...profileInfo.props,
      ...artists.props,
    },
  };
};
  
export default YouPage;