import styles from './Artist.module.css'
import playbutton from '../../../public/assets/spotify_black.png'

interface ArtistProps {
  name: string,
  image: string;
  genres: string[];
  id: string;
  index: number;
  uri: string;
}

const formatGenres = (genre: string) : string => {
  if (genre.length === 0) {
    return genre
  }

  let firstLetter = genre.charAt(0).toUpperCase()

  if (genre.charAt(1) === '-') {
    const thirdChar = genre.charAt(2).toUpperCase();
    return `${firstLetter}${genre.charAt(1)}${thirdChar}${genre.slice(3)}`
  }
  return `${firstLetter}${genre.slice(1)}`
}

const Artist: React.FC<ArtistProps> = ({ index, name, image, genres, id, uri }) => {
  return  (
    <div className={styles['artist-card']} key={id}>
    <div className={styles['index']}>{index+1}</div>
      <div className={styles['artist-image']}>{image ? <img className='rounded-xl' src={image} height='100' width='100'/> : ''}</div>
      <div className={styles['artist-details']}>
      <div className={styles['artist-name']}><a href={`spotify:artist:${id}`} target='_blank'>{name}</a></div>
        <div className={styles['artist-genre']}>{genres.length > 0 && genres.map(formatGenres).join(', ')}</div>
        </div>
        <div className={styles['artist-play']}><a href={uri} target='_blank'><img src={playbutton.src} alt='Play on Spotify' width='30' height='30'/></a></div>
    </div>
  );
};

export default Artist;