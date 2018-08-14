import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Button } from './components/Button';
import { Container } from './components/Container';
import { BlockRow } from './components/BlockRow';
import { Block } from './components/Block';
import { Tab } from './components/Tab';

interface AppProps {}

const App = (props: AppProps) => {
  const tabs = [
    { title: 'Tab 1', content: 'Tab content for tab 1' },
    { title: 'Tab 2', content: 'Tab content for tab 2' },
    { title: 'Tab 3', content: 'Tab content for tab 3' },
    { title: 'Tab 4', content: 'Tab content for tab 4' },
  ];
  return (<Container>
    <BlockRow>
      <Block size='col-6'>
        <Tab tabs={tabs} selected='0' align='right' />
      </Block>
      <Block size='col-6'>
      <Button color='primary' withArrow='right'>Amazing</Button>
      </Block>
    </BlockRow>
  </Container>);
};

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
