import { render, screen } from '@testing-library/react';
import Iscroll from './Iscroll';
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}

  observe() {
    return null;
  }

  disconnect() {
    return null;
  };

  unobserve() {
    return null;
  }
};

test('renders component correctly', () => {
  render(<Iscroll />);
  const linkElement = screen.getByText(/Scroll down for more data/i);
  expect(linkElement).toBeInTheDocument();
});
