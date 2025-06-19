import styles from './Track.module.css'
import playbutton from '../../../public/assets/spotify_black.svg'
import Link from 'next/link'
import Image from 'next/image'

interface TrackProps {
  trackName: string,
  uri: string;
  duration_ms: number;
  image: string;
  index: number;
  artists: string[]
}

interface Image {
  height: number;
  url: string;
  width: number;
}

const getTrackArtists = (artists: string[]): string => {
  return artists.map(artist => artist).join(', ');
};

const Track: React.FC<TrackProps> = ({ index, trackName, uri, image, artists }) => {

  return  (
    <div className={styles['track-page']}>
    <div className={styles['track-card']}>
    <div className={styles['index']}>{index+1}</div>
      <div className={styles['track-image']}>{<Image className='track-image' alt={ `Album cover for ${trackName}`} src={image} height='50' width='50'/>}</div>
      <div className={styles['track-details']}>
        <div className={styles['track-name']}>{trackName}</div>
        <div className={styles['track-artist']}>{getTrackArtists(artists)}</div>
      </div>
      <div className={styles['track-play']}><Link href={uri} target='_blank'><Image src={playbutton.src} alt='Play on Spotify' width='30' height='30'/></Link></div>
      </div>
    </div>
  );
};

export default Track;