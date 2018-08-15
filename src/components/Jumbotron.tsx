import * as React from 'react';

export interface JumbotronProps {
  children?: React.ReactNode,
  type?: 'rounded' | 'tilted',
  align?: 'left' | 'right' | 'center',
  tiltDir?: 'left' | 'right',
  style?: any
}

export const Jumbotron: React.SFC<JumbotronProps> =
({ children, type, align, tiltDir, style }) => {
  let classNames = '';
  if (align) {
    if (align === 'center') {
      classNames += ' center';
    } else if (align === 'right') {
      classNames += ' right';
    }
  }
  if (type) {
    if (type === 'rounded') {
      classNames += ' rounded';
      return <div className={`cdt-jumbotron ${classNames}`}>{children}</div>;
    }
    if (type === 'tilted') {
      return <div className={`cdt-jumbotron ${classNames}`}>
          {(tiltDir && tiltDir === 'right') ? <div className='cdt-bg-tilt-right'></div>
          : <div className='cdt-bg-tilt-left'></div>}
          {children}
      </div>;
    }
    return <div className={`cdt-jumbotron ${classNames}`}>{children}</div>;
  }
};
