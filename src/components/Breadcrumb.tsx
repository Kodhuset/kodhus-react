import * as React from 'react';

export interface BreadcrumbProps {
  children?: React.ReactNode
  transparentBg?: 'true' | 'false'
  [key: string]: any
}

export const Breadcrumb: React.SFC<BreadcrumbProps> = ({ children, transparentBg, ...rest }) => {
  let transparentClass = ' ';
  if (transparentBg && transparentBg === 'true') {
    transparentClass += 'transparent';
  }

  return (
    <nav className={`cdt-breadcrumb${transparentClass}`} {...rest}>
    <ol>
      {children}
    </ol>
  </nav>
  );
};
