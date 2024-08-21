interface TrackProps {
  trackName: string,
  trackArtist: string;
  trackURL: string;
  trackImageURL: string;
  trackPopularity: number;
}

const Track: React.FC<TrackProps> = ({ trackName, trackArtist, trackURL, trackImageURL, trackPopularity }) => {
  return  (
    <div className='track'>
      <div className='trackImage'><img src={trackImageURL}></img></div>
      <div className='trackDetails'>
        <div className='trackName'><h2><a href={trackURL}>{trackName}</a></h2></div>
        <div className='trackArtist'><h3>{trackArtist}</h3></div>
        <div className='trackPopularity'><h3>{trackPopularity}</h3></div>
        </div>
      </div>
  );
};

export default Track;