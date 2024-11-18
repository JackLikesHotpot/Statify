import styles from './Track.module.css'
import playbutton from '../../../public/assets/spotify_black.png'
import Link from 'next/link'

interface TrackProps {
  id: string;
  trackName: string,
  uri: string;
  duration_ms: number;
  album: string[]
  preview: string;
  index: number;
}

interface artist {
  name: string;
}

interface Album {
  artists: artist[];
}

const getAlbumImage = (albumImages: string[]) : string => {
  if (albumImages['images'][0].url) {
    return (albumImages['images'][0].url)
  }
  return ``
}

const getTrackArtists = (album: Album): string => {
  return album.artists.map(artist => artist.name).join(', ');
};


const Track: React.FC<TrackProps> = ({ index, id, trackName, uri, album, preview }) => {
  const albumImage = getAlbumImage(album)
  const trackArtists = getTrackArtists(album)

  return  (
    <div className={styles['track-page']}>
    <div className={styles['track-card']}>
    <div className={styles['index']}>{index+1}</div>
      <div className={styles['track-image']}>{albumImage ? <img className='track-image' alt={ trackName && albumImage ? `Album cover for ${trackName} by ${albumImage}` : `Spotify album cover for track.`} src={getAlbumImage(album)} height='50' width='50'/> : ``}</div>
      <div className={styles['track-details']}>
        <div className={styles['track-name']}>{trackName}</div>
        <div className={styles['track-artist']}>{trackArtists}</div>
      </div>
      <div className={styles['preview-audio']}><audio controls><source src={preview} type='audio/mp3'></source></audio></div>
      <div className={styles['track-play']}><Link href={uri} target='_blank'><img src={playbutton.src} alt='Play on Spotify' width='30' height='30'/></Link></div>
      </div>
    </div>
  );
};

export default Track;