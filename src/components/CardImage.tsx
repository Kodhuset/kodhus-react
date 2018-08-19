import * as React from 'react';

export interface CardImageProps {
  children?: React.ReactNode
}

export const CardImage: React.SFC<CardImageProps> = ({ children }) => {

  return (
    <div className='image'>{children}</div>
  );
};
