import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/learning-examples/FirstComponent'
import Counter from './components/counter/Counter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
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

class LearningComponents extends Component {
  render() {
    return (
      <div className="learningComponents">
        My Hello World!
        <FirstComponent />
        <SecondComponent />
      </div>
    );
  }
}


export default App;
