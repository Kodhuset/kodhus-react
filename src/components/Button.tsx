import * as React from 'react';

export interface ButtonProps {

  [key: string]: any;
  children?: React.ReactNode,
  color?: 'primary' | 'primary-alt' | 'secondary' | 'error' | 'gray',
  corner?: 'rounded' | 'fully-rounded',
  size?: 'small' | 'large',

  withArrow?: 'left' | 'right'
  onClick?: (event: React.MouseEvent<HTMLButtonElement>, data: ButtonProps) => void
}

export class Button extends React.Component<ButtonProps, {}> {
  constructor(props: ButtonProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e: any) {
    this.props.onClick(e, this.props);
  }
  render() {
    const { children, color, corner, size, withArrow, ...rest } = this.props;
    const defaultColors: any = {
      primary: 'cdt-btn-primary',
      'primary-alt': 'cdt-btn-primary-1',
      secondary: 'cdt-btn-secondary',
      error: 'cdt-btn-error',
      gray: 'cdt-btn-gray',
    };
    let cornerStyle = '';
    if (corner) {
      if (corner === 'rounded') {
        cornerStyle = ' cdt-btn-rounded';
      } else if (corner === 'fully-rounded') {
        cornerStyle = ' cdt-btn-full-rounded';
      }
    }
    let buttonSize = '';
    if (size) {
      if (size === 'small') {
        buttonSize = ' cdt-btn-small';
      } else if (size === 'large') {
        buttonSize = ' cdt-btn-large';
      }
    }

    let arrow = '';
    if (withArrow) {
      arrow = ' arrow';
      if (withArrow === 'left') {
        arrow += ' before';
      }
      if (withArrow === 'right') {
        arrow += ' after';
      }
    }
    const buttonColor = (defaultColors[color]) ? ` ${defaultColors[color]}` : '';
    return <button {...rest} onClick={this.handleClick}
    className={'cdt-btn' + buttonColor + cornerStyle + buttonSize + arrow}>
    { children }
  </button>;
  }
}
