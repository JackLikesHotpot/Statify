import { render, screen } from '@testing-library/react';
import Track from '../Track';
import '@testing-library/jest-dom'; 

jest.mock('next/image', () => ({ 
  __esModule: true, 
  default: ({ src, alt, width, height }: any) => <img src={src} alt={alt} width={width} height={height} />
}));
jest.mock('next/link', () => {
  return ({ children }: any) => children;
});

interface TrackProps {
  trackName: string,
  uri: string;
  duration_ms: number;
  album: Album;
  preview: string;
  index: number;
}

interface Image {
  height: number;
  url: string;
  width: number;
}

interface Artist {
  external_urls: { [key: string]: string };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface Album {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: { spotify: string };
  href: string;
  id: string;
  images: Image[];
  is_playable: boolean;
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}


describe('Track Component', () => {
  const mockProps: TrackProps = {
    trackName: 'Track Name',
    uri: 'spotify:track:track-id',
    duration_ms: 300,
    album: {
      album_type: 'single',
      artists: [
        {
          name: 'Artist Name',
          id: 'artist-id',
          external_urls: { spotify: 'https://spotify.com/artist/artist-id' },
          href: 'https://api.spotify.com/v1/artists/artist-id',
          type: 'artist',
          uri: 'spotify:artist:artist-id',
        },
      ],
      available_markets: ['US', 'GB'],
      external_urls: { spotify: 'https://spotify.com/album/album-id' },
      href: 'https://api.spotify.com/v1/albums/album-id',
      id: 'album-id',
      images: [
        { url: 'https://image.com/album-cover.jpg', height: 300, width: 300 },
      ],
      is_playable: true,
      name: 'Album Name',
      release_date: '2022-01-01',
      release_date_precision: 'day',
      total_tracks: 10,
      type: 'album',
      uri: 'spotify:album:album-id',
    },
    preview: 'https://spotify-preview.com',
    index: 0,
  };
  

  it('should render the track name', () => {
    render(<Track {...mockProps}/>);
    const trackName = screen.getByText(mockProps.trackName);

    expect(trackName).toBeInTheDocument();
  })

  it('should render the track image', () => {
    render(<Track {...mockProps}/>);
    const trackImages = screen.getAllByRole('img')

    expect(trackImages[0]).toHaveAttribute('src', 'https://image.com/album-cover.jpg');
  })

  it('should render the track index to be 1 higher than the assigned value', () => {
    render(<Track {...mockProps}/>);
    const trackIndex = screen.getByText('1');
    expect(trackIndex).toBeInTheDocument();
  })

  it('should render the track artist', () => {
    render(<Track {...mockProps}/>);
    const trackArtist = screen.getByText(mockProps.album.artists[0].name);

    expect(trackArtist).toBeInTheDocument();
  })

  it('should render the track play button', () => {
    render(<Track {...mockProps}/>);
    const trackPlay = screen.getAllByRole('img')

    expect(trackPlay[trackPlay.length-1]).toHaveAttribute('alt', 'Play on Spotify');
  })

});