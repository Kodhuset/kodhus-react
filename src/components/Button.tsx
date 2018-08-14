import * as React from 'react';

export interface ButtonProps {
  children?: React.ReactNode,
  color?: 'primary' | 'primary-alt' | 'secondary' | 'error' | 'gray',
  corner?: 'rounded' | 'fully-rounded',
  size?: 'small' | 'large',
  withArrow?: 'left' | 'right'
}

export const Button: React.SFC<ButtonProps> = (props) => {
  const defaultColors: any = {
    primary: 'cdt-btn-primary',
    'primary-alt': 'cdt-btn-primary-1',
    secondary: 'cdt-btn-secondary',
    error: 'cdt-btn-error',
    gray: 'cdt-btn-gray',
  };
  let cornerStyle = '';
  if (props.corner) {
    if (props.corner === 'rounded') {
      cornerStyle = ' cdt-btn-rounded';
    } else if (props.corner === 'fully-rounded') {
      cornerStyle = ' cdt-btn-full-rounded';
    }
  }
  let buttonSize = '';
  if (props.size) {
    if (props.size === 'small') {
      buttonSize = ' cdt-btn-small';
    } else if (props.size === 'large') {
      buttonSize = ' cdt-btn-large';
    }
  }
  let arrow = '';
  if (props.withArrow) {
    arrow = ' arrow';
    if (props.withArrow === 'left') {
      arrow += ' before';
    }
    if (props.withArrow === 'right') {
      arrow += ' after';
    }
  }
  const buttonColor = (defaultColors[props.color]) ? ` ${defaultColors[props.color]}` : '';
  return <button className={'cdt-btn' + buttonColor + cornerStyle + buttonSize + arrow}>
    { props.children }
  </button>;
};
