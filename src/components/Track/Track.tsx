import styles from './Track.module.css'

interface TrackProps {
  id: string;
  trackName: string,
  uri: string;
  duration_ms: number;
  artist: string[]
  album: string[]
}

const getAlbumImage = (album: string[]) : string => {
  if (album['images'][0].url) {
    return (album['images'][0].url)
  }
  return ''
}

const Track: React.FC<TrackProps> = ({ artist, id, trackName, uri, duration_ms, album }) => {
  console.log(album)
  return  (
    <div className={styles['track-card']} key={id}>
      <div className={styles['track-image']}>{getAlbumImage(album) ? <img className='rounded-xl' src={getAlbumImage(album)} height='100' width='100'/> : ''}</div>
      <div className={styles['track-details']}>
      <div className={styles['track-name']}><a href={uri} target='_blank'>{trackName}</a></div>
        {/* <div className='track-release-date'><p>{getReleaseDate(album)} followers</p></div> */}
        </div>
        </div>
  );
};

export default Track;