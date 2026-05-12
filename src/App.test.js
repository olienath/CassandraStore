// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CassandraStore title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CassandraStore/i);
    expect(titleElement).toBeInTheDocument();
});
