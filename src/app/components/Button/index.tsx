import React from "react";
import clsx from "clsx";

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  className?: string
  size?: 'small' | 'medium' | 'large';
  variant?: 'stroke' | 'filled';
  onClick?: () => void;
  children: React.ReactNode;
  // spinner
}

const variantList = {
  filled: 'bg-primary text-white hover:bg-primary-dark transition duration-200',
  stroke: 'border-1 border-primary text-primary',
}

const sizeList = {
  small: 'w-24 py-1',
  medium: 'w-28 py-1',
  large: 'w-36 py-1.5',
};

export const Button = ({
  type = 'button',
  icon,
  className,
  size = 'medium',
  variant = 'filled',
  onClick,
  children,
}: ButtonProps) => {
  return(
    <button
      type={type}
      className={clsx(
        'rounded-md cursor-pointer',
        variantList[variant],
        sizeList[size],
        className,
      )}
      onClick={onClick}
    >
      {
        icon &&
        <span className={`icon`}>
          {icon}
        </span>
      }
      {children}
    </button>
  )
}