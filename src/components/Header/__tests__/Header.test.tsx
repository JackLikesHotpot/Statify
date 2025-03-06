import { render, screen } from '@testing-library/react';
import Header from '../Header';
import '@testing-library/jest-dom'; 

jest.mock('../../../public/assets/logo.svg', () => ({
  src: 'mock-statify-logo.svg',
}));

describe('Header component', () => {
  it('should render the tracks menu in the header', () => {
    render(<Header />);
    const tracksText = screen.getByText(/Top Tracks/i);
    expect(tracksText).toBeInTheDocument();
  });

  it('should render the artists menu in the header', () => {
    render(<Header />);
    const artistsText = screen.getByText(/Top Artists/i);
    expect(artistsText).toBeInTheDocument();
  });

  it('should render a hyperlink to the homepage in the header', () => {
    render(<Header />);
    const homePageLink = screen.getByRole('link', { name: /Statify/i});
    expect(homePageLink).toHaveAttribute('href', '/')
  })

  it('should render a logo svg in the header', () => {
    render(<Header />);
    const homePageLink = screen.getByRole('img', { name: /Statify/i});
    expect(homePageLink).toHaveAttribute('alt', 'The logo for the Statify website')
  })
})