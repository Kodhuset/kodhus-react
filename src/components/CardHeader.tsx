import * as React from 'react';

export interface CardHeaderProps {
  border? : 'true' | 'false'
  children?: React.ReactNode
}

export const CardHeader: React.SFC<CardHeaderProps> = ({ border, children }) => {
  let classNames = '';
  if (border && border === 'true') {
    classNames = 'border';
  }
  return (
    <header className={classNames}>{children}</header>
  );
};
