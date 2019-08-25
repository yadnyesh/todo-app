import React, {Component} from 'react'

class TodoApp extends Component {
    render() {
        return (
            <div className="secondComponent">
              <LoginComponent />
            </div>
          );
    }
}


class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "in28minutes",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this)  
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render() {
        return (
            <div>
                User Name: <input type = "text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type = "password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button>Login</button>
            </div>
        );
    }
}

export default TodoApp