interface ArtistProps {
  artistName: string,
  artistURL: string;
  artistImage: string;
  followers: number;
  genres: string[];
  id: number;
}

const Artist: React.FC<ArtistProps> = ({ artistName, artistURL, artistImage, followers, genres, id }) => {
  return  (
    <div className='artist' key={id}>
      <div className='artistImage'><img src={artistImage}></img></div>
      <div className='artistDetails'>
        <div className='artistName'><h2><a href={artistURL}>{artistName}</a></h2></div>
        <div className='artistFollowers'><h3>{followers} followers</h3></div>
        <div className='artistGenres'><h3>Genres: {genres.join(', ')}</h3></div>
        </div>
      </div>
  );
};

export default Artist;