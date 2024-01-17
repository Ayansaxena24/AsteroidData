// __tests__/homepage.test.tsx
import configure from 'enzyme';


import App from './App';
test('renders Homepage component', () => {
  render(<App navigate={() => {}} />);
  const pageTitle = screen.getByText(/Asteroid Odyssey/i);
  const searchButton = screen.getByRole('button', { name: /search/i });
  const randomButton = screen.getByRole('button', { name: /surprise/i });
  expect(pageTitle).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();
  expect(randomButton).toBeInTheDocument();
});
test('handles input change with only numbers', () => {
    render(<App navigate={() => {}} />);
    const input = screen.getByLabelText(/Enter Asteroid ID/i);
    fireEvent.change(input, { target: { value: 'abcd123' } });
    expect(input.getAttribute('value')).toBe('');
    fireEvent.change(input, { target: { value: '1234567' } });
    expect(input.getAttribute('value')).toBe('1234567');
  });
test('search button is disabled until 7 numbers are entered', () => {
  render(<App navigate={() => {}} />);
  const input = screen.getByLabelText(/Enter Asteroid ID/i);
  const searchButton = screen.getByRole('button', { name: /search/i });
  expect(searchButton).toBeDisabled();
  fireEvent.change(input, { target: { value: '123' } });
  expect(searchButton).toBeDisabled();
  fireEvent.change(input, { target: { value: '1234567' } });
  expect(searchButton).not.toBeDisabled();
});