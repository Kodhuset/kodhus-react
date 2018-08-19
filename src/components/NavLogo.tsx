import * as React from 'react';

export interface NavLogoProps {
  [key: string]: any
  children?: React.ReactNode
  align?: 'center'
}

export const NavLogo: React.SFC<NavLogoProps> = ({ children, align, ...rest }) => {
  let className = '';
  if (align && align === 'center') {
    className += ' center';
  }
  return (
    <div className={`logo${className}`} {...rest} >
      {children}
    </div>);
};
