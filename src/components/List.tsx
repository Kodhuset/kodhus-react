import * as React from 'react';

export interface ListProps {
  header?: string
  children?: any
  responsive?: 'true' | 'false',
  [key: string]: any
}

export const List: React.SFC<ListProps> = ({ header, children, responsive, rest }) => {
  let classes = '';
  if (responsive) {
    classes = ' cdt-nav cdt-nav-responsive';
  }
  return <div {...rest} className={`cdt-list${classes}`}>
    <header>
        {header}
    </header>
    <ul>
        {children}
    </ul>
</div>;
};
