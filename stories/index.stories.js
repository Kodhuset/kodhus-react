import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button } from '../src/components/Button';
import { Container } from '../src/components/Container';
import { BlockRow } from '../src/components/BlockRow';
import { Block } from '../src/components/Block';
import { Tab } from '../src/components/Tab';

storiesOf('Grid', module)
  .add('container', () => <Container>Content comes here</Container>)
  .add('Block', () => (
    <BlockRow>
      <Block size='col-3'>col-3</Block>
      <Block size='col-9'>col-9</Block>
    </BlockRow>
  ));
  const tabs = [
    { title: 'Tab 1', content: 'Tab content for tab 1' },
    { title: 'Tab 2', content: 'Tab content for tab 2' },
    { title: 'Tab 3', content: 'Tab content for tab 3' },
    { title: 'Tab 4', content: 'Tab content for tab 4' },
  ];

  storiesOf('Tab', module)
  .add('default Tab', () => <Tab tabs={tabs} />)
  .add('Center aligned Tab', () => <Tab tabs={tabs} align='center' />)
  .add('Right aligned Tab', () => <Tab tabs={tabs} align='right' />);

storiesOf('Button', module)
  .add('Default button', () => <Button onClick={() => console.log('clicked')}>Default Button</Button>)
  .add('with rounded corners', () => (
      <Button corner='rounded'>
        Rounded Button
      </Button>
  ))
  .add('with Fully rounded corners', () => (
    <Button corner='fully-rounded'>
        Fully rounded Button
      </Button>
  ));
