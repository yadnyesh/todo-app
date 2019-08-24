import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/learning-examples/FirstComponent'

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

function SecondComponent() {
  return (
    <div className="secondComponent">
      My Hello World from THIRD Component!
    </div>
  );
}

export default App;
