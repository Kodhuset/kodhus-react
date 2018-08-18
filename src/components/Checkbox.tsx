import * as React from 'react';

export interface CheckboxProps {
  label?: string
}
export class Checkbox extends React.Component<CheckboxProps, {}> {
  render() {
    const { label } = this.props;
    return (
      <span className='cdt-checkbox'>
          <input type='checkbox'/>
          <label>{label}</label>
      </span>);
  }
}
