import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Button } from './components/Button';
import { Container } from './components/Container';

interface AppProps {}

const App = (props: AppProps) => (
  <Container>
    <Button color='primary' withArrow='right'>Amazing</Button>
  </Container>
);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
