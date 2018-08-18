import * as React from 'react';

export interface ListItemProps {
  children?: React.ReactNode
}

export const ListItem: React.SFC<ListItemProps> = ({ children }) => (
  <li>
    <div className='cdt-list-item'>{children}</div>
  </li>
);
