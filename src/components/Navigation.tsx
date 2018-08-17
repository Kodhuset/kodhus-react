import * as React from 'react';

export interface NavigationProps {
  itemStyle?: 'border' | 'highlight' | 'underline',
  navigations: any

}

export class Navigation extends React.Component<NavigationProps, {}> {
  static defaulProps = {
    itemStyle: 'border',
  };

  render() {
    const { itemStyle, navigations } = this.props;
    return (
      <div className={`cdt-top-nav ${itemStyle}`}>
        <div className='logo'>
          <a href='#'>Logo here</a>
          <span className='mobile-trigger'>
            <span></span>
          </span>
        </div>
        {navigations.primary &&
          <div className='navigations'>
          {navigations.primary.first &&
            (<nav>
              <ul>
                {navigations.primary.first.items.map((primaryItems: any, i: number) => {
                  return <li key={i}><a href='#'>{primaryItems.label}</a></li>;
                })}
              </ul>
          </nav>)
          }
          {navigations.primary.second &&
            (<nav>
              <ul>
                {navigations.primary.second.items.map((primaryItems: any, i: number) => {
                  return <li key={i}><a href='#'>{primaryItems.label}</a></li>;
                })}
              </ul>
          </nav>)
          }
        </div>
        }
        {navigations.secondary && (
          <div className='navigations cdt-second-nav center underline dark'>
          <nav>
            <ul>
              {navigations.secondary.items.map((secondaryItems: any, i: number) => {
                return <li key={i}><a href='#'>{secondaryItems.label}</a></li>;
              })};
            </ul>
          </nav>
        </div>
        )}
      </div>
    );
  }
}
