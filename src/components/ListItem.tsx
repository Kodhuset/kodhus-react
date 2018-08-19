import * as React from 'react';

export interface ListItemProps {
  children?: React.ReactNode
  [key: string]: any
}

export const ListItem: React.SFC<ListItemProps> = ({ children, rest }) => (
  <li {...rest}>
    <div className='cdt-list-item'>{children}</div>
  </li>
);
