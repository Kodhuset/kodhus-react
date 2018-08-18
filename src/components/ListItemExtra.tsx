import * as React from 'react';
import { ListItemProps } from './ListItem';

export interface ListItemExtraProps {
  children?: any
}

export const ListItemExtra: React.SFC<ListItemExtraProps> = ({ children }) => (
  <span className='extra'>{children}</span>
);
