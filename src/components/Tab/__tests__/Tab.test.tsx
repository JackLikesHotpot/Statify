import { fireEvent, render, screen } from '@testing-library/react';
import Tab from '../Tab';
import '@testing-library/jest-dom'; 

describe('Tab component', () => {
  it('should render the default tab name on load', () => {
    render(<Tab/>)
    const tabText = screen.getByRole('heading', { name: /last 4 weeks/i})
    expect(tabText).toBeInTheDocument();
  })
  
  it('should render the all tab names on load', () => {
    render(<Tab/>)
    const buttons = screen.getAllByRole('button')
    expect(buttons[0].textContent).toBe('Last 4 weeks')
    expect(buttons[1].textContent).toBe('Last 6 months')
    expect(buttons[2].textContent).toBe('Last 12 months')
  })
})