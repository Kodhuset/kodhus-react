import * as React from 'react';

export interface DialogProps {}

export class Dialog extends React.Component<DialogProps, {}> {
  render() {
    return <div id='dialog' className='cdt-dialog-container'>
      <div className='cdt-dialog'>
          <header>
          <h6>Dialog header</h6>
          </header>
          <main>
            <div className='content'>
              Dialog Content
            </div>
          </main>
          <div className='actions'>
            <button className='cdt-btn cdt-btn-transparent' data-close='true'>Close</button>
            <button className='cdt-btn cdt-btn-transparent'>Submit</button>
          </div>
      </div>
    </div>;
  }
}
