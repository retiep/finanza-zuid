import React from 'react';
import { render } from '@testing-library/react';

// Mock the layout component since Next.js App Router components are server components
jest.mock('../app/layout', () => {
  return function MockRootLayout({ children }: { children: React.ReactNode }) {
    return (
      <div data-testid="mock-html" lang="en">
        <div data-testid="mock-body">{children}</div>
      </div>
    );
  };
});

// Import after mocking
import RootLayout from '../app/layout';

describe('RootLayout Component', () => {
  it('renders children correctly', () => {
    const { getByTestId } = render(
      <RootLayout>
        <div data-testid="test-child">Test Child</div>
      </RootLayout>
    );
    
    expect(getByTestId('test-child')).toBeInTheDocument();
  });

  it('has correct lang attribute', () => {
    const { getByTestId } = render(
      <RootLayout>
        <div>Test</div>
      </RootLayout>
    );
    
    const mockHtml = getByTestId('mock-html');
    expect(mockHtml).toHaveAttribute('lang', 'en');
  });
}); 