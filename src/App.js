import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        My Hello World!
        <FirstComponent />
        <SecondComponent />
      </div>
    );
  }
}

class FirstComponent extends Component {
  render() {
    return (
      <div className="firstComponent">
        My Hello World from First Component!
      </div>
    );
  }
}

function SecondComponent() {
  return (
    <div className="secondComponent">
      My Hello World from THIRD Component!
    </div>
  );
}

export default App;
