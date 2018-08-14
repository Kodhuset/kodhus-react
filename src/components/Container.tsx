import * as React from 'react';

export interface ContainerProps {
  children?: React.ReactNode
}
export const Container: React.SFC<ContainerProps>
= ({ children }) => (<div className='cdt-container'>{children}</div>);
