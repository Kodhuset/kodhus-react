import * as React from 'react';

export interface ToggleProps {
  label?: string
}
export class Toggle extends React.Component<ToggleProps, {}> {
  render() {
    const { label } = this.props;
    return (
      <span className='cdt-toggle'>
          <input type='checkbox'/>
          <label>{label}</label>
      </span>);
  }
}
