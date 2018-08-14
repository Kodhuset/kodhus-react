import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button } from '../src/components/Button';


storiesOf('Button', module)
  .add('Default button', () => <Button onClick={action('clicked')}>Kodhus Button</Button>)
  .add('with rounded corners', () => (
      <Button corner='rounded' onClick={action('clicked')}>
        Rounded Button
      </Button>
  ))
  .add('with Fully rounded corners', () => (
    <Button corner='fully-rounded' onClick={action('clicked')}>
        Fully rounded Button
      </Button>
  ));
