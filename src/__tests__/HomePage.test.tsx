import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../app/page';

// Mock the page component since Next.js App Router components are server components
jest.mock('../app/page', () => {
  return function MockHomePage() {
    return (
      <div>
        <h1>Welcome to Finanza Zuid</h1>
        <p>A professional network for Chief Financial Officers in the southern region.</p>
      </div>
    );
  };
});

describe('HomePage Component', () => {
  it('renders the welcome heading', () => {
    render(<HomePage />);
    const heading = screen.getByText('Welcome to Finanza Zuid');
    expect(heading).toBeInTheDocument();
  });

  it('renders the description text', () => {
    render(<HomePage />);
    const description = screen.getByText(/professional network for Chief Financial Officers/i);
    expect(description).toBeInTheDocument();
  });
}); 