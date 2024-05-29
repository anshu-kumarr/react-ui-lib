import React from 'react';
import styled from 'styled-components';

const StyledSpinner = styled.div<{ size: number; color: string; width: number }>`
  border: ${({ width }) => `${width}px`} solid rgba(0, 0, 0, 0.1);
  border-left-color: ${({ color }) => color};
  border-radius: 50%;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
`;

type SpinnerProps = {
  size?: number;
  color?: string;
  width?: number;
};

const defaultProps: SpinnerProps = {
  size: 40,
  color: '#333',
  width: 4
};

// Spinner component
const Spinner: React.FC<SpinnerProps> = ({ size, color, width }) => {
  return (
    <StyledSpinner size={size} color={color} width={width} className="animate-spin" />
  );
};

Spinner.defaultProps = defaultProps;

export default Spinner;
