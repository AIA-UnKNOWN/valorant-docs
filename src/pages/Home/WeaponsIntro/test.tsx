import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import WeaponsIntro from './index';

describe('WeaponsIntro component', () => {
  test('renders weapons section title', () => {
    render(<WeaponsIntro />);
    const title = screen.getByText(/choose your killer weapon/i);
    expect(title).toBeInTheDocument();
  });
});