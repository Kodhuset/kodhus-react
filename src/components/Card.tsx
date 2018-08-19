import * as React from 'react';

export interface CardProps {

}

export class Card extends React.Component<CardProps, {}> {
  render() {
    return (
    <div className='cdt-card border'>
      <header className='border'>
          <div className='header-text'>
              <div className='title'>Title</div>
              <div className='sub-title'>Subtitle</div>
          </div>
          <div className='header-action'>
              <a href='#'>Action</a>
          </div>
      </header>
      <div className='image'>
        Image tag comes here ...
      </div>
      <main className='border'>
          <p>Card content comes here ...</p>
      </main>
      <div className='actions border'>
      <button className='cdt-btn cdt-btn-primary cdt-btn-rounded'>Action 1</button>
      <button className='cdt-btn cdt-btn-rounded'>Action 2</button>
      </div>
  </div>
    );
  }
}
