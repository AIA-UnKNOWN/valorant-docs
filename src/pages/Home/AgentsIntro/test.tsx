import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import AgentsIntro from './index';

describe('AgentsIntro component', () => {
  test('renders agents section title', () => {
    render(<AgentsIntro />);
    const title = screen.getByText(/play with your favorite agents/i);
    expect(title).toBeInTheDocument();
  });
});