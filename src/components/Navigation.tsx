import * as React from 'react';

export interface NavigationProps {
  itemStyle?: 'border' | 'highlight' | 'underline',
  items: any

}

export class Navigation extends React.Component<NavigationProps, {}> {
  static defaulProps = {
    itemStyle: 'border',
  };

  render() {
    const { itemStyle, items } = this.props;
    return (
      <div className={`cdt-top-nav ${itemStyle}`}>
        <div className='logo'>
          <a href='#'>Logo here</a>
          <span className='mobile-trigger'>
            <span></span>
          </span>
        </div>
        <div className='navigations menu-right'>
          <nav>
            <ul>
              {items.primary && items.primary.map((item: any, index: number) => {
                return <li key={index}><a href='#'>{item.label}</a></li>;
              })}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
