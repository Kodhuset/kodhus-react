import * as React from 'react';

export interface NotificationProps {
  [key: string]: any
  children?: React.ReactNode
  actionLabel?: string,
  autoClose?: 'true' | 'false',
  position?: 'absolute' | 'fixed'
  action?(event: any): void
}

export class Notification extends React.Component<NotificationProps, { close: boolean }> {
  constructor(props: NotificationProps) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.state = { close: false };
  }

  handleClose(e: any) {
    if (this.props.autoClose && this.props.autoClose === 'true') {
      this.setState({ close: true });
    } else if (this.props.action) {
      this.props.action(e);
    } else {
      e.preventDefault;
      return;
    }
  }

  render() {
    const { children, actionLabel, autoClose, position } = this.props;
    let actionClasses = '';
    if (autoClose && autoClose === 'true') {
      actionClasses += ' close';
    }
    let positionClass = '';
    if (position === 'absolute') {
      positionClass = ' absolute';
    } else if (position === 'fixed') {
      positionClass = ' fixed';
    }

    return (!this.state.close ?  (<div className={`cdt-notification${positionClass}`}>
      <span className='message'>{children}</span>
      <span className={`close ${actionClasses}`}onClick={this.handleClose}>
      {!autoClose && actionLabel}
      </span>
  </div>) : null);
  }
}
