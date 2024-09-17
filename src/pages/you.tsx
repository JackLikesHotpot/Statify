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

  return (
    <div>
      <Profile displayName={profileName} profileImage={profileImage} />
      <div className='flex'>
      <div className='column w-1/4 bg-black'></div>
      <div className='artistList w-1/2 bg-black text-center place-content-center justify-center items-center'>
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
      <div className='column w-1/4 bg-black'></div>
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