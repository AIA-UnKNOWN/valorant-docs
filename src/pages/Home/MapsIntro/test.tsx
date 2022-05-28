import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import MapsIntro from './index';

describe('AgentsIntro component', () => {
  test('renders maps section title', () => {
    render(<MapsIntro />);
    const title = screen.getByText(/play with amazing maps/i);
    expect(title).toBeInTheDocument();
  });
});