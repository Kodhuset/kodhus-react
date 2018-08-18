import * as React from 'react';

export interface HeadingProps {
  children?: React.ReactNode
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const Heading: React.SFC<HeadingProps> = ({ children, size = 'h1' }) => {
  let returnVal;
  if (size) {
    switch (size) {
      case 'h1':
        returnVal = <h1>{children}</h1>;
        break;
      case 'h2':
        returnVal = <h2>{children}</h2>;
        break;
      case 'h3':
        returnVal = <h3>{children}</h3>;
        break;
      case 'h4':
        returnVal = <h4>{children}</h4>;
        break;
      case 'h4':
        returnVal = <h5>{children}</h5>;
        break;
      case 'h6':
        returnVal = <h6>{children}</h6>;
        break;
      default:
        returnVal = <h1>{children}</h1>;
    }
  } else {
    returnVal = <h1>{children}</h1>;
  }
  return returnVal;
};
