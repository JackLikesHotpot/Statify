interface ArtistProps {
  artistName: string,
  artistImage: string;
  followers: number;
  genres: string[];
  id: string;
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

const Artist: React.FC<ArtistProps> = ({ artistName, artistImage, followers, genres, id }) => {
  
  return  (
    <div className='artist border-2 border-black bg-green-600 text-white items-center justify-center flex rounded-xl h-32' key={id}>
      <div className='artistImage object-cover flex-1 p-2'>{artistImage ? <img className='rounded-xl' src={artistImage} height='100' width='100'/> : ''}</div>
      <div className='artistDetails flex-1'>
      <div className='artistName font-bold text-4xl'><a href={`spotify:artist:${id}`} target='_blank'>{artistName}</a></div>
        <div className='artistGenres font-semibold'>{genres.length > 0 && genres.map(formatGenres).join(', ')}</div>
        <div className='artistFollowers'><p>{followers} followers</p></div>
        </div>
        </div>
  );
};

export default Artist;