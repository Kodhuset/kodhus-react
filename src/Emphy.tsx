import * as React from 'react';

export interface EmphyProps {
  children?: React.ReactNode
}

export const Emphy: React.SFC<EmphyProps> = ({ children }) => {
  return <div className='emphy'>{children}</div>;
};
