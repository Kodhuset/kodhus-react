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
import { Checkbox } from './components/Checkbox';
import { Radio } from './components/Radio';
import { Toggle } from './components/Toggle';
import { List } from './components/List';
import { ListItem } from './components/ListItem';
import { ListItemAvatar } from './components/ListItemAvatar';
import { ListItemContent } from './components/ListItemContent';
import { ListItemExtra } from './components/ListItemExtra';
import { Dialog } from './components/Dialog';

import { NavLogo } from './components/NavLogo';
import { NavBar } from './components/NavBar';

import { Card } from './components/Card';
import { Breadcrumb } from './components/Breadcrumb';

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
  const menuStyles = {
    backgroundColor: '#282639', position: 'absolute', height: '100vh', top: 0, width: '200px' };
  return (<div>
      <Navigation>
        <NavLogo align='center'>
          <a href='#'>Logo here</a>
        </NavLogo>
        <NavBar>
          {navigations.primary.first &&
            (<nav>
              <ul>
                {navigations.primary.first.items.map((primaryItems: any, i: number) => {
                  return <li key={i}><a href='#'>{primaryItems.label}</a></li>;
                })}
              </ul>
          </nav>)
          }
          {navigations && navigations.primary.second &&
            (<nav>
              <ul>
                {navigations.primary.second.items.map((primaryItems: any, i: number) => {
                  return <li key={i}><a href='#'>{primaryItems.label}</a></li>;
                })}
              </ul>
          </nav>)
          }
        </NavBar>
        {/* <NavBar secondary='true' theme='dark'>
          <nav>
            <ul>
              {navigations && navigations.secondary.items.map((secondaryItems: any, i: number) => {
                return <li key={i}><a href='#'>{secondaryItems.label}</a></li>;
              })}
            </ul>
          </nav>
        </NavBar> */}
      </Navigation>
  </div>);

  // return (<Container>
  //   <Navigation itemStyle='underline' navigations={navigations}></Navigation>
  //   <BlockRow>
  //     <Notification actionLabel='close' autoClose='true'>
  //       This is a notification
  //     </Notification>
  //   </BlockRow>
  //   <BlockRow>
  //     <Block size='col-6'>
  //       <Tab tabs={tabs} selected='0' align='right' />
  //     </Block>
  //     <Block size='col-6'>
  //     <Button color='primary' withArrow='right'>Amazing</Button>
  //     </Block>
  //   </BlockRow>
  //   <BlockRow>
  //     <Breadcrumb></Breadcrumb>
  //   </BlockRow>
  //   <BlockRow>
  //     <Card />
  //   </BlockRow>
  //   {/* <Jumbotron type='tilted' tiltDir='right' align='center'>
  //     <Block size='col-6'>
  //       <h1>Introducing Codity advanced respnsive UI library</h1>
  //       <p className='cdt-sub-header'>
  //         This is a simple hero unit,
  //         a simple jumbotron-style component for calling
  //          extra attention to featured content or information.
  //       </p>
  //       <Button href='#' corner='rounded' size='large' color='primary'>Call to action</Button>
  //     </Block>
  //   </Jumbotron> */}
  //   <BlockRow>
  //     <FormControl>
  //       <label>Username</label>
  //       <Input  />
  //     </FormControl>
  //   </BlockRow>
  //   <BlockRow>
  //     <FormControl>
  //       <label>Password</label>
  //       <Input type='error' />
  //       <label>Something wrong</label>
  //     </FormControl>
  //   </BlockRow>
  //   <BlockRow>
  //     <FormControl>
  //       <Checkbox label='Are you strong or weak ??' />
  //     </FormControl>
  //   </BlockRow>
  //   <BlockRow>
  //     <FormControl>
  //       <Radio label='Are you strong or weak ??' />
  //     </FormControl>
  //   </BlockRow>
  //   <BlockRow>
  //     <FormControl>
  //       <Toggle label='Are you strong or weak ??' />
  //     </FormControl>
  //   </BlockRow>
  //   <BlockRow>
  //     <Block size='col-12'>
  //       <List>
  //         <ListItem>
  //           <ListItemAvatar>
  //           <i className='material-icons'>
  //                assessment
  //              </i>
  //           </ListItemAvatar>
  //           <ListItemContent>Item 1</ListItemContent>
  //           <ListItemExtra>
  //           <Toggle />
  //           </ListItemExtra>
  //         </ListItem>
  //         <ListItem>
  //           <ListItemAvatar>
  //           <i className='material-icons'>
  //               event
  //               </i>
  //           </ListItemAvatar>
  //           <ListItemContent>Item 2</ListItemContent>
  //           <ListItemExtra>
  //           <Toggle />
  //           </ListItemExtra>
  //         </ListItem>
  //       </List>
  //     </Block>
  //   </BlockRow>
  //   {/* <BlockRow>
  //     <Dialog />
  //   </BlockRow> */}
  // </Container>);

};

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
