import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { BUTTON_KIND } from './button.constant';
import Spinner from '../Spinner';

interface ButtonProps {
  kind?: 'primary' | 'secondary' | 'text' | 'outline';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
  bgColor?: string;
  color?: string;
  fontSize?: string;
  padding?: string;
  icon?: HTMLImageElement | SVGImageElement | JSX.Element;
  loading?: boolean;
  width?: string;
  spinner?: {
    width: number;
    size: number;
    color: string;
  };
}

const Button: React.FC<ButtonProps> = ({
  kind,
  bgColor,
  disabled,
  icon,
  loading,
  children,
  spinner = {
    color: '#fff',
    width: 2,
    size: 16
  },
  ...props
}) => {
  const btnClasses = classNames('px-4 py-2 rounded font-medium text-sm flex', {
    'bg-primary-main text-gray-10 hover:bg-primary-hover': kind === BUTTON_KIND.PRIMARY,
    'bg-primary-secondary text-primary-main hover:text-primary-hover':
      kind === BUTTON_KIND.SECONDARY || kind === BUTTON_KIND.OUTLINE,
    'border-solid border border-primary-border hover:text-primary-hover':
      kind === BUTTON_KIND.OUTLINE && !disabled && !bgColor,
    'text-primary-main hover:text-primary-hover': kind === BUTTON_KIND.TEXT,
    'text-gray-50 bg-gray-20': disabled,
    'gap-3 flex items-center': !!icon || loading
  });

  return (
    <ButtonStyled className={btnClasses} bgColor={bgColor} disabled={disabled} {...props}>
      <>
        {loading && <Spinner {...spinner} />}
        {children}
        {icon}
      </>
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button<ButtonProps>`
  background: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
`;

export default Button;
