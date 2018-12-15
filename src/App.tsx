import { initializeIcons } from '@uifabric/icons';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import * as React from 'react';
import './App.css';
import logo from './logo.svg';

initializeIcons();

// ...or, register icons and pull the fonts from your own CDN:
initializeIcons('https://my.cdn.com/path/to/icons/');

class App extends React.Component {
  public render() {
    const name = 'Tom';
    const element = <h1>Hello, {name}</h1>;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <DefaultButton
          text='See Button'
          primary={ true }
          href='#/components/button'
        />
        <h1> {element} </h1>
      </div>
    );
  }
}

export default App;


