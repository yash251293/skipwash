import { render, screen } from '@testing-library/react';
import HomePageCard from './HomePageCard'; // Adjust path if needed
import { describe, it, expect } from 'vitest'; // If not using globals

describe('HomePageCard', () => {
  it('renders the title correctly', () => {
    const testTitle = "Test Title";
    render(<HomePageCard title={testTitle} />);
    expect(screen.getByText(testTitle)).toBeInTheDocument();
  });

  it('renders its children', () => { // Corrected arrow function syntax
    const testTitle = "Test Title"; // Added missing const
    render(
      <HomePageCard title={testTitle}>
        <div>Child Content</div>
      </HomePageCard>
    );
    expect(screen.getByText("Child Content")).toBeInTheDocument();
  });
});
