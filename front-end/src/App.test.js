import { render, screen } from '@testing-library/react';
import Application from 'components/application/Application';
import "@testing-library/jest-dom/extend-expect";

test('should see login page', () => {
  render(<Application />);
  const linkElement = screen.getByText('make.my.day');
  expect(linkElement).toBeInTheDocument();
});
