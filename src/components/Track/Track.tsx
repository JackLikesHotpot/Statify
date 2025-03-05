import styles from './Track.module.css'
import playbutton from '../../../public/assets/spotify_black.svg'
import Link from 'next/link'
import Image from 'next/image'

interface TrackProps {
  trackName: string,
  uri: string;
  duration_ms: number;
  album: Album;
  preview: string;
  index: number;
}

interface Image {
  height: number;
  url: string;
  width: number;
}

interface Artist {
  external_urls: { [key: string]: string };  // an object with string keys and values
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface Album {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: { spotify: string };
  href: string;
  id: string;
  images: Image[];
  is_playable: boolean;
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

const getAlbumImage = (album: Album): string => {
  return album.images[0]?.url || ''; 
};

const getTrackArtists = (album: Album): string => {
  return album.artists.map(artist => artist.name).join(', ');
};


const Track: React.FC<TrackProps> = ({ index, trackName, uri, album, preview }) => {
  const albumImage = getAlbumImage(album)
  const trackArtists = getTrackArtists(album)

  return  (
    <div className={styles['track-page']}>
    <div className={styles['track-card']}>
    <div className={styles['index']}>{index+1}</div>
      <div className={styles['track-image']}>{albumImage ? <Image className='track-image' alt={ trackName && albumImage ? `Album cover for ${trackName} by ${albumImage}` : `Spotify album cover for track.`} src={getAlbumImage(album)} height='50' width='50'/> : ``}</div>
      <div className={styles['track-details']}>
        <div className={styles['track-name']}>{trackName}</div>
        <div className={styles['track-artist']}>{trackArtists}</div>
      </div>
      {preview ? <div className={styles['preview-audio']}><audio controls><source src={preview} type='audio/mp3'></source></audio></div> : ``}
      <div className={styles['track-play']}><Link href={uri} target='_blank'><Image src={playbutton.src} alt='Play on Spotify' width='30' height='30'/></Link></div>
      </div>
    </div>
  );
};

export default Track;