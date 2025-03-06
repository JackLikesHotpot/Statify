import { render, screen } from '@testing-library/react';
import Footer from '../Footer';
import '@testing-library/jest-dom'; 

jest.mock('../../../public/assets/github_logo.svg', () => ({
  src: 'mock-github-logo.svg',
}));
jest.mock('../../../public/assets/linkedin_logo.svg', () => ({
  src: 'mock-linkedin-logo.svg',
}));

describe('Footer component', () => {
  it('should render my name in the copyright', () => {
    render(<Footer />);
    const nameText = screen.getByText(/Jack Li/i);
    expect(nameText).toBeInTheDocument();
  });

  it('should render the copyright years', () => {
    render(<Footer />);
    const copyrightYears = screen.getByText(/2024-2024/i);
    expect(copyrightYears).toBeInTheDocument();
  });

  it('should render the framework hyperlinks', () => {
    render(<Footer />);

    const typeScriptLink = screen.getByRole('link', { name: /typescript/i})
    const reactLink = screen.getByRole('link', { name: /react/i})
    const nextLink = screen.getByRole('link', { name: /next.js/i})

    expect(typeScriptLink).toHaveAttribute('href', 'https://www.typescriptlang.org/');
    expect(reactLink).toHaveAttribute('href', 'https://react.dev/');
    expect(nextLink).toHaveAttribute('href', 'https://nextjs.org/');
  });
  
  it('should render the "This project is unrelated to Spotify" text', () => {
    render(<Footer />);
    const relationText = screen.getByText(/This project is unrelated to Spotify/i);
    expect(relationText).toBeInTheDocument();
  });


})