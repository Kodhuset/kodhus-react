import * as React from 'react';

export interface CardMainProps {
  border? : 'true' | 'false'
  children?: React.ReactNode
}

export const CardMain: React.SFC<CardMainProps> = ({ border, children }) => {
  let classNames = '';
  if (border && border === 'true') {
    classNames = 'border';
  }
  return (
    <main className={classNames}>{children}</main>
  );
};
