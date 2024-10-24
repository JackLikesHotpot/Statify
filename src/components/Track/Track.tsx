import styles from './Track.module.css'
import playbutton from '../../../public/assets/spotify_black.png'

interface TrackProps {
  id: string;
  trackName: string,
  uri: string;
  duration_ms: number;
  album: string[]
  preview: string;
  index: number;
}

const getAlbumImage = (album: string[]) : string => {
  if (album['images'][0].url) {
    return (album['images'][0].url)
  }
  return ''
}

const getTrackArtists = (album: { artists: { name: string }[] }): string => {
  return album.artists.map(artist => artist.name).join(', ');
};


const Track: React.FC<TrackProps> = ({ index, id, trackName, uri, duration_ms, album, preview }) => {
  return  (
    // <div className={styles['track-page']}>
    <div>
    <div className={styles['track-card']} key={id}>
    <div className={styles['index']}>{index+1}</div>
      <div className={styles['track-image']}>{getAlbumImage(album) ? <img className='rounded-xl' src={getAlbumImage(album)} height='50' width='50'/> : ''}</div>
      <div className={styles['track-details']}>
        <div className={styles['track-name']}>{trackName}</div>
        <div className={styles['track-artist']}>{getTrackArtists(album)}</div>
      </div>
      <div className={styles['preview-audio']}><audio controls><source src={preview} type='audio/mp3'></source></audio></div>
      <div className={styles['track-play']}><a href={uri} target='_blank'><img src={playbutton.src} alt='Play on Spotify' width='30' height='30'/></a></div>
      </div>
    </div>
  );
};

export default Track;