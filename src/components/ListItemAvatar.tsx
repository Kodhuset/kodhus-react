import * as React from 'react';
import { ListItemProps } from './ListItem';

export interface ListItemAvatarProps {
  children?: any
}

export const ListItemAvatar: React.SFC<ListItemAvatarProps> = ({ children }) => (
  <span className='avatar'>{children}</span>
);
