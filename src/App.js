import React, {Component} from 'react';
import './App.css';
import './bootstrap.css';
import TodoApp from './components/todo/TodoApp'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter /> */}
        <TodoApp />
      </div>
    );
  }
}

// function SecondComponent() {
//   return (
//     <div className="secondComponent">
//       My Hello World from THIRD Component!
//     </div>
//   );
// }

// class LearningComponents extends Component {
//   render() {
//     return (
//       <div className="learningComponents">
//         My Hello World!
//         <FirstComponent />
//         <SecondComponent />
//       </div>
//     );
//   }
// }


export default App;
