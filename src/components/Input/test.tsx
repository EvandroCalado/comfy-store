import { render, screen } from '@testing-library/react';
import { Input } from '.';

describe('Input', () => {
  it('should render default', () => {
    render(<Input />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should render with optional attributes', () => {
    render(<Input label="test" className="test" />);

    expect(screen.getByLabelText('test')).toBeInTheDocument();
    expect(screen.getByLabelText('test')).toHaveClass('test');
  });
});
