import * as React from 'react';

export interface BlockRowProps {
  children?: React.ReactNode
}
export const BlockRow: React.SFC<BlockRowProps>
  = ({ children }) => <div className='cdt-row'>{children}</div>;
