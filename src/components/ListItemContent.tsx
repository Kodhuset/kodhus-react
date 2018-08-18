import * as React from 'react';
import { ListItemProps } from './ListItem';

export interface ListItemContentProps {
  children?: any
}

export const ListItemContent: React.SFC<ListItemContentProps> = ({ children }) => (
  <span className='item'>{children}</span>
);
