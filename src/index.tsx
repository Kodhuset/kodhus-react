import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Button } from './components/Button';
import { Container } from './components/Container';
import { BlockRow } from './components/BlockRow';
import { Block } from './components/Block';
import { Tab } from './components/Tab';
import { Notification } from './components/Notification';
import { Jumbotron } from './components/Jumbotron';
import { Navigation } from './components/Navigation';
import { FormControl } from './components/FormControl';
import { Input } from './components/Input';

interface AppProps {}

const App = (props: AppProps) => {
  const tabs = [
    { title: 'Tab 1', content: 'Tab content for tab 1' },
    { title: 'Tab 2', content: 'Tab content for tab 2' },
    { title: 'Tab 3', content: 'Tab content for tab 3' },
    { title: 'Tab 4', content: 'Tab content for tab 4' },
  ];
  const navigations = {
    primary : {
      first: {
        items: [
          { label: 'About us' }, { label: 'Your team' },
          { label: 'Kodhus' }, { label: 'Prototypes' },
        ],
      },
      second: {
        items: [
          { label: 'About us' }, { label: 'Your team' },
          { label: 'Kodhus' }, { label: 'Prototypes' },
        ],
      },
    },
    secondary: {
      items: [
        { label: 'About us' }, { label: 'Your team' },
        { label: 'Kodhus' }, { label: 'Prototypes' },
      ],
    },
  };

  return (<Container>
    <Navigation itemStyle='underline' navigations={navigations}></Navigation>
    <BlockRow>
      <Notification actionLabel='close' autoClose='true'>
        This is a notification
      </Notification>
    </BlockRow>
    <BlockRow>
      <Block size='col-6'>
        <Tab tabs={tabs} selected='0' align='right' />
      </Block>
      <Block size='col-6'>
      <Button color='primary' withArrow='right'>Amazing</Button>
      </Block>
    </BlockRow>
    <Jumbotron type='tilted' tiltDir='right' align='center'>
      <Block size='col-6'>
        <h1>Introducing Codity advanced respnsive UI library</h1>
        <p className='cdt-sub-header'>
          This is a simple hero unit,
          a simple jumbotron-style component for calling
           extra attention to featured content or information.
        </p>
        <Button href='#' corner='rounded' size='large' color='primary'>Call to action</Button>
      </Block>
    </Jumbotron>
    <BlockRow>
      <FormControl>
        <label>Username</label>
        <Input  />
      </FormControl>
    </BlockRow>
    <BlockRow>
      <FormControl>
        <label>Password</label>
        <Input type='error' />
        <label>Something wrong</label>
      </FormControl>
    </BlockRow>
  </Container>);
};

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
