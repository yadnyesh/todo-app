import React, {Component} from 'react'
import PropTypes from 'prop-types'
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
          <div className="Counter">
            <CounterButton by={1} incrementMethod={this.increment}/>
            <CounterButton by={5} incrementMethod={this.increment}/>
            <CounterButton by={10} incrementMethod={this.increment}/>
            <span className="count">{this.state.counter}</span>
          </div>
        );
      }
    
      increment(by) {
          console.log("Increment from child by: " + by)
        this.setState({
            counter: this.state.counter + by
        });
    }  

}

class CounterButton extends Component {
    
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
            <button onClick={this.increment}>{this.props.by}</button><br></br>
        </div>
        );
    }

    increment() {
        this.setState({
            counter: this.state.counter + this.props.by
        });
        this.props.incrementMethod(this.props.by);
    }  
    
  }

  CounterButton.defaultProps = {
      by : 1
  }

  CounterButton.propTypes = {
    by : PropTypes.number
}

export default Counter  
