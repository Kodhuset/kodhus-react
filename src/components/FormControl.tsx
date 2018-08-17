import * as React from 'react';

export interface FormControlProps {
  children?: React.ReactNode
}

export const FormControl: React.SFC<FormControlProps> = ({ children }) => {
  return <div className='cdt-control'>{children}</div>;
};
