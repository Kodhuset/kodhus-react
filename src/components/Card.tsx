import * as React from 'react';

export interface CardProps {
  children?: React.ReactNode
  [key: string]: any
}

export class Card extends React.Component<CardProps, {}> {
  render() {
    const { border, children } = this.props;
    let borderClass = '';
    if (border && border === 'true') {
      borderClass = ' border';
    }
    return (
    <div className={`cdt-card${borderClass}`}>{children}</div>
    );
  }
}
