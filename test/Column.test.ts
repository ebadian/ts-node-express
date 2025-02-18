
import { render, screen } from '@testing-library/react';
import ColumnTextWrapper from '../src/views/components/Column';
import React from 'react';

describe('ColumnTextWrapper', () => {
  const mockProps = {
    text: 'Test Heading',
    href: '/test-link',
    longText: 'Test long text description.',
  };

  it('renders correctly', () => {
    const column = React.createElement(ColumnTextWrapper, mockProps);
    const rendedColumn = render(column);
    expect(rendedColumn).toMatchSnapshot();
  });
});
