import React, {Component} from 'react'
import './Counter.css'


class Counter extends Component {
    
    constructor() {
        super();
        this.state = {
            counter: 0        
        }
        this.increment = this.increment.bind(this)
    }
    
    render() {
        return (
        <div className="counters">
            <button onClick={this.increment}>+1</button><br></br>
            <span className="count">{this.state.counter}</span>
        </div>
        );
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1
        });
    }  
    
  }


export default Counter  
