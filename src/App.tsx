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
    const name = 'Wai-Ing Yu';
    const element = <h1>Hello, {name}</h1>;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        office-ui-fabric-react button
        </p>
        <DefaultButton
          text='Tom Lee'
          primary={ true }
          href='#/components/button'
        />
        <h3> {element} </h3>
      </div>
    );
  }
}

export default App;


