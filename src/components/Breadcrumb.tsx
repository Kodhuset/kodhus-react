import * as React from 'react';

export interface BreadcrumbProps {}

export const Breadcrumb: React.SFC<BreadcrumbProps> = ({}) => {
  return (
    <nav className='cdt-breadcrumb'>
    <ol>
      <li><a href='#'>Home</a></li>
      <li><a href='#'>Portfolio</a></li>
      <li>User experience</li>
    </ol>
  </nav>
  );
};
