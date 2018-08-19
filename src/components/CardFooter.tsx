import * as React from 'react';

export interface CardFooterProps {
  children?: React.ReactNode
  border?: 'true' | 'false'
  [key: string]: any
}

export const CardFooter: React.SFC<CardFooterProps> = ({ border, children }) => {
  let borderClass = '';
  if (border && border === 'true') {
    borderClass = ' border';
  }
  return (
    <div className={`actions${borderClass}`}>{children}</div>
  );
};
