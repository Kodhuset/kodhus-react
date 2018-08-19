import * as React from 'react';

export interface NavMobileProps {
  secondary?: 'true' | 'false',
  theme?: 'light' | 'dark',
  open?: boolean
}

export const NavMobile: React.SFC<NavMobileProps> = ({ children, theme, open }) => {
  let className = '';
  if (theme && theme === 'dark') {
    className += ' dark';
  }
  if (open) {
    className += ' open';
  }
  return <div className={`mobile-navigation navigations ${className}`}>{children}</div>;
};
