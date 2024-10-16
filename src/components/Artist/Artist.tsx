import styles from './Artist.module.css'

interface ArtistProps {
  artistName: string,
  artistImage: string;
  followers: number;
  genres: string[];
  id: string;
  index: number;
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

const Artist: React.FC<ArtistProps> = ({ index, artistName, artistImage, followers, genres, id }) => {
  return  (
    <div className={styles['artist-card']} key={id}>
    <div className={styles['index']}>{index+1}</div>
      <div className={styles['artist-image']}>{artistImage ? <img className='rounded-xl' src={artistImage} height='100' width='100'/> : ''}</div>
      <div className={styles['artist-details']}>
      <div className={styles['artist-name']}><a href={`spotify:artist:${id}`} target='_blank'>{artistName}</a></div>
        <div className={styles['artist-genre']}>{genres.length > 0 && genres.map(formatGenres).join(', ')}</div>
        <div className='artistFollowers'><p>{followers} followers</p></div>
        </div>
        </div>
  );
};

export default Artist;