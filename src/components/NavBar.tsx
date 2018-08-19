import * as React from 'react';

export interface NavBarProps {
  secondary?: 'true' | 'false',
  theme?: 'light' | 'dark'
}

export const NavBar: React.SFC<NavBarProps> = ({ children, secondary, theme }) => {
  let className = '';
  if (secondary) {
    className += ' cdt-second-nav';
  }
  if (theme && theme === 'dark') {
    className += ' dark';
  }
  return <div className={`navigations ${className}`}>{children}</div>;
};
