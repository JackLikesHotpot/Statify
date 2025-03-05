import { render, screen } from '@testing-library/react';
import Artist from '../Artist';
import '@testing-library/jest-dom'; // for the matchers (e.g., toBeInTheDocument)

jest.mock('next/image', () => ({ 
  __esModule: true, 
  default: ({ src, alt, width, height }: any) => <img src={src} alt={alt} width={width} height={height} />
}));
jest.mock('next/link', () => {
  return ({ children }: any) => children;
});

describe('Artist Component', () => {
  const mockProps = {
    index: 0,
    name: 'Artist Name',
    image: 'https://image.com/img',
    genres: ['pop', 'rock'],
    id: 'artist-id',
    uri: 'spotify:artist:artist-id'
  }

  it('should render the artist name', () => {
    render(<Artist {...mockProps}/>);
    const artistName = screen.getByText(mockProps.name);

    console.log(artistName)
    expect(artistName).toBeInTheDocument();
  })

});