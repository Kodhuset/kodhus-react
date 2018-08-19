import * as React from 'react';

export interface NavigationProps {
  [key: string]: any
  itemStyle?: 'border' | 'highlight' | 'underline'
  navigations?: any
  children?: React.ReactNode
  sticky?: 'true' | 'false'
  hideOnScroll?: 'true' | 'false'
  mobileTriggerPos?: 'right' | 'left'
  triggerclick?: (event: React.MouseEvent<HTMLButtonElement>, data: {}) => void

}

export class Navigation extends React.Component<NavigationProps, {}> {
  static defaultProps = {
    itemStyle: 'border',
  };
  constructor(props: NavigationProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e: any) {
    this.props.triggerclick(e, {});
  }

  render() {
    const { itemStyle, navigations, children, mobileTriggerPos, sticky, hideOnScroll, ...rest }
      = this.props;
    let extraClasses = '';
    let mobileClasses = '';
    if (mobileTriggerPos && mobileTriggerPos === 'left') {
      mobileClasses += ' left';
    }
    if (sticky && sticky === 'true') {
      extraClasses += ' sticky';
    }
    if (hideOnScroll && hideOnScroll === 'true') {
      extraClasses += ' hide-on-scroll';
    }
    return (
      <div className={`cdt-top-nav ${itemStyle}${extraClasses}`} {...rest}>
        <span className={`mobile-trigger${mobileClasses}`} onClick={this.handleClick}>
          <span></span>
        </span>
        {children}
      </div>
    );
  }
}
