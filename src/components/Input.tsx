import * as React from 'react';

export interface InputProps {
  [key: string]: any,
  type?: 'error'
}

export const Input: React.SFC<InputProps> = ({ type, rest }) => {
  let className = '';
  if (type) {
    if (type === 'error') {
      className = 'cdt-error';
    }
  }
  return <input type='text' {...rest} className={className} />;
};
