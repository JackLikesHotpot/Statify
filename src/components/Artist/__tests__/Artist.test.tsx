import { render, screen } from '@testing-library/react';
import Artist from '../Artist';
import '@testing-library/jest-dom'; 

jest.mock('next/image', () => ({ 
  __esModule: true, 
  default: ({ src, alt, width, height }: any) => (<img src={src} alt={alt} width={width} height={height} />)
}));
jest.mock('next/link', () => {
  return ({ children }: any) => children;
});

describe('Artist Component', () => {
  const mockProps = {
    index: 0,
    name: 'Artist Name',
    image: 'https://image.com/img',
    genres: ['Pop', 'Rock'],
    id: 'artist-id',
    uri: 'spotify:artist:artist-id'
  }

  it('should render the artist name', () => {
    render(<Artist {...mockProps}/>);
    const artistName = screen.getByText(mockProps.name);

    expect(artistName).toBeInTheDocument();
  })

  it('should render the artist image', () => {
    render(<Artist {...mockProps}/>);
    const artistImages = screen.getAllByRole('img')

    expect(artistImages[0]).toHaveAttribute('src', 'https://image.com/img');
  })

  it('should render the artist index to be 1 higher than the assigned value', () => {
    render(<Artist {...mockProps}/>);
    const artistIndex = screen.getByText('1');
    expect(artistIndex).toBeInTheDocument();
  })

  it('should render the genres of the artists', () => {
    render(<Artist {...mockProps}/>);
    const artistGenre = screen.getByText(mockProps.genres.join(', '));

    expect(artistGenre).toBeInTheDocument();
  })

  it('should render the artist spotify button', () => {
    render(<Artist {...mockProps}/>);
    const artistPlay = screen.getAllByRole('img')

    expect(artistPlay[artistPlay.length-1]).toHaveAttribute('alt', 'Play on Spotify');
  })

});