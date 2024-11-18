import styles from './Artist.module.css'
import playbutton from '../../../public/assets/spotify_black.png'
import Link from 'next/link'
import Image from 'next/image'

interface ArtistProps {
  id: string;
  name: string,
  image: string;
  genres: string[];
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
    <div className={styles['artist-card']}>
    <div className={styles['index']}>{index+1}</div>
      <div className={styles['artist-image']}>{image ? <Image className='rounded-xl' src={image} height='50' width='50' alt='Placeholder' /> : ``}</div>
      <div className={styles['artist-details']}>
      <div className={styles['artist-name']}><Link href={`spotify:artist:${id}`} target='_blank'>{name}</Link></div>
        <div className={styles['artist-genre']}>{genres.length > 0 && genres.map(formatGenres).join(', ')}</div>
        </div>
        <div className={styles['artist-play']}><Link href={uri} target='_blank'><Image src={playbutton.src} alt='Play on Spotify' width='30' height='30'/></Link></div>
    </div>
  );
};

export default Artist;