import classNames from 'classnames';
import React, { useState } from 'react';
import ArrowIcon from './arrow.svg';

interface AccordianProps {
  title: string;
  change?: boolean;
  defaultState?: boolean;
  onClick?: (isOpen, title) => void;
  headingBgColor?: string;
  children?: React.ReactNode;
}

const Accordion: React.FC<AccordianProps> = ({
  title,
  defaultState = false,
  headingBgColor,
  change,
  onClick,
  children
}) => {
  const [isOpen, setIsOpen] = useState(defaultState);

  const headingClass = classNames({
    'flex justify-between  px-4 py-2 cursor-pointer rounded': true,
    'bg-gray-30 hover:bg-gray-40': !headingBgColor
  });

  const contentClass = classNames({
    'p-4 pt-1': true,
    hidden: !isOpen
  });

  return (
    <div>
      <div
        style={{ background: headingBgColor }}
        className={headingClass}
        onClick={() => {
          setIsOpen(ps => !ps);
          onClick && onClick(isOpen, title);
        }}
      >
        <p>{title}</p>
        <div className={isOpen && 'rotate-180'}>
          <ArrowIcon />
        </div>
      </div>
      <div className={contentClass}>{children}</div>
    </div>
  );
};

export default Accordion;
