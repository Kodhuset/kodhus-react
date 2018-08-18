import * as React from 'react';
import { ListItemProps } from './ListItem';

export interface ListProps {
  header?: string,
  children?: any
}

export const List: React.SFC<ListProps> = ({ header, children }) => (
  <div className='cdt-list'>
    <header>
        {header}
    </header>
    <ul>
        {children}
    </ul>
</div>
);
