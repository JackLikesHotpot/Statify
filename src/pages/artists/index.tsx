import React from 'react'

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
}

interface ArtistProps {
  artists: Artist[];
}

interface Link {
  spotify: string;
}

interface PageProps extends ProfileProps, ArtistProps {}

const ArtistPage: React.FC<PageProps> = ({artists }) => {

  return (
    <div className={styles['grid']}>
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
  
export default ArtistPage;