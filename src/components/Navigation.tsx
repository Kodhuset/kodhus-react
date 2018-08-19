import * as React from 'react';

export interface NavigationProps {
  [key: string]: any
  itemStyle?: 'border' | 'highlight' | 'underline'
  navigations?: any
  children?: React.ReactNode

}

export class Navigation extends React.Component<NavigationProps, {}> {
  static defaultProps = {
    itemStyle: 'border',
  };

  render() {
    const { itemStyle, navigations, children, ...rest } = this.props;
    return (
      <div className={`cdt-top-nav ${itemStyle}`} {...rest}>
        {children}
      </div>
    );
  }
}
