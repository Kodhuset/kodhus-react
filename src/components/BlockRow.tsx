import * as React from 'react';

export interface BlockRowProps {
  children?: React.ReactNode
  [key: string]: any
}
export const BlockRow: React.SFC<BlockRowProps>
  = ({ children, ...rest }) => <div className='cdt-row' {...rest}>{children}</div>;
