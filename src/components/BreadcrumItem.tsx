import * as React from 'react';

export interface BreadcrumItemProps {
  children?: React.ReactNode
}

export const BreadcrumItem: React.SFC<BreadcrumItemProps> = ({ children }) => {
  return <li>{children}</li>;
};
