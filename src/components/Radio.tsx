import * as React from 'react';

export interface RadioProps {
  label?: string
}
export class Radio extends React.Component<RadioProps, {}> {
  render() {
    const { label } = this.props;
    return (
      <span className='cdt-radio'>
          <input type='radio'/>
          <label>{label}</label>
      </span>);
  }
}
