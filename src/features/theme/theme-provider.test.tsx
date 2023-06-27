import { screen } from '@testing-library/react';
import ThemeProvider from './theme-provider';
import { renderWithProviders } from '../../__tests__/utils/redux';

describe('Theme Provider', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        dispatchEvent: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn()
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

  it('should supports dark-light mode with prefers-color-scheme: dark', () => {
    const mode = window.matchMedia('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light';
    expect(screen.getByTestId('theme-provider')).toHaveClass(mode);
  });

  it('should supports kanban-theme color palette by default', () => {
    expect(screen.getByTestId('theme-provider')).toHaveClass('kanban-theme');
  });
});
