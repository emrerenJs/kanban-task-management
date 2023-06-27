import { screen } from '@testing-library/react';
import ThemeProvider from './theme-provider';
import { renderWithProviders } from '../../__tests__/utils/redux';

describe('theme provider', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn()
      }))
    });

    renderWithProviders(
      <ThemeProvider>
        <div>x</div>
      </ThemeProvider>
    );
  });

  it('should creates a wrapper for inject class names for apply themes and color palettes', () => {
    expect(screen.getByTestId('theme-provider')).toBeInTheDocument();
  });

  it('should supports dark-light mode', () => {
    const mode = window.matchMedia('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light';
    expect(screen.getByTestId('theme-provider')).toHaveClass(mode);
  });
});
