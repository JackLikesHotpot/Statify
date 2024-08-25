interface ArtistProps {
  artistName: string,
  artistURL: string;
  artistImage: string;
  followers: number;
  genres: string[];
  id: number;
}

const formatGenres = (genre: string) => {
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

const Artist: React.FC<ArtistProps> = ({ artistName, artistURL, artistImage, followers, genres, id }) => {
  return  (
    <div className='artist border-2 border-rose-600 items-center justify-center flex width-4/6' key={id}>
      <div className='artistImage object-cover flex-1'><img src={artistImage} width='40%' height='40%'></img></div>
      <div className='artistDetails flex-1'>
      <div className='artistName font-bold text-4xl'><p><a href={artistURL}>{artistName}</a></p></div>
        <div className='artistFollowers'><p>{followers} followers</p></div>
        <div className='artistGenres'>{genres.length > 0 && genres.map(formatGenres).join(', ')}</div>
        </div>
        </div>
  );
};

export default Artist;