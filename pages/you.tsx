import { GetServerSideProps } from 'next';
import { getProfile } from '../hooks/getProfile'
import { getTracks } from '../hooks/getTracks';

import Profile from '../components/Profile/Profile';
import Track from '../components/Track/Track';

interface ProfileProps {
  profileName: string;
  profileImage: string;
}

interface TrackArtist {
  name: string;
}

interface TrackAlbumImage {
  url: string;
}

interface Track {
  name: string;
  artists: TrackArtist[];
  album: { images: TrackAlbumImage[]};
  external_urls: {spotify: string};
  popularity: number;
}

interface TrackProps {
  topTracks: Track[];
}

interface PageProps extends ProfileProps, TrackProps {}


const YouPage: React.FC<PageProps> = ({profileName, profileImage, topTracks}) => {

  return (
    <div>
      <Profile 
        displayName={profileName} 
        profileImage={profileImage} 
      />
      <div className='tracks'>
      {(topTracks.map((track) => (
        <Track
          trackName={track.name}
          trackArtist={track.artists.map((artist) => artist.name).join(', ')}
          trackURL={track.external_urls.spotify}
          trackImageURL={track.album.images[1]?.url}
          trackPopularity={track.popularity}
        />
      )))}</div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Call both functions
  const profileInfo = await getProfile(context);
  const trackInfo = await getTracks(context);

  // Merge the props
  return {
    props: {
      ...profileInfo.props,
      ...trackInfo.props,
    },
  };
};
  
export default YouPage;