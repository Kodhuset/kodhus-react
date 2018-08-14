import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Button } from './components/Button';

interface AppProps {}

const App = (props: AppProps) =>
<Button color='primary' withArrow='right'>Amazing</Button>;

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
