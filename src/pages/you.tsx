import { GetServerSideProps } from 'next';
import { getProfile } from '../hooks/getProfile'
import { getArtists } from '../hooks/getArtists';

import Profile from '../components/Profile/Profile';
import Artist from '../components/Artist/Artist';

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
}

interface Artist {
  name: string;
  genres: string[];
  images: Image[];
  id: number;
  popularity: number;
  external_urls: Link;
  followers: Followers;
}

interface ArtistProps {
  artists: Artist[];
}

interface Link {
  href: string;
}

interface Followers {
  total: number;
}

interface PageProps extends ProfileProps, ArtistProps {}


const YouPage: React.FC<PageProps> = ({profileName, profileImage, artists}) => {

  return (
    <div>
      <Profile displayName={profileName} profileImage={profileImage} />
      <div className='artistList text-center justify-center items-center w-2/3'>
        {artists.map((artist) => (
          <div>
            <Artist
              id={artist.id}
              artistName={artist.name}
              artistURL={artist.external_urls.href}
              artistImage={artist.images[1].url}
              followers={artist.followers.total}
              genres={artist.genres}
              />
          </div>
        ))}
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