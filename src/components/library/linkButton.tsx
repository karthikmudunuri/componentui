import React from 'react';
import { Button } from '../ui/Button';

interface ButtonProps {
  link?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Buttons: React.FC<ButtonProps> = ({ link, onClick, children }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (link) {
      window.open(link); // Opens link in a new tab
    }
  };

  return (
    <Button variant={'outline'} onClick={handleClick}>
      {children}
    </Button>
  );
};

export default Buttons;
