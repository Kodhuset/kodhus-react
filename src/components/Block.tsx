import * as React from 'react';

export interface BlockProps {
  children?: React.ReactNode,
  size?: 'col-1' | 'col-2' | 'col-3' | 'col-4' | 'col-5' |
   'col-6' | 'col-7' | 'col-8' | 'col-9' | 'col-10' | 'col-11' | 'col-12'
}

export const Block: React.SFC<BlockProps> = ({ children, size }) => {
  let classes = '';
  const sizes: any = {
    'col-1': 'cdt-1',
    'col-2': 'cdt-2',
    'col-3': 'cdt-3',
    'col-4': 'cdt-4',
    'col-5': 'cdt-5',
    'col-6': 'cdt-6',
    'col-7': 'cdt-7',
    'col-8': 'cdt-8',
    'col-9': 'cdt-9',
    'col-10': 'cdt-10',
    'col-11': 'cdt-11',
    'col-12': 'cdt-12',
  };
  if (size) classes += ` ${sizes[size]}`;
  return <div className={classes}>{children}</div>;
};
