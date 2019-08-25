import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class TodoApp extends Component {
    render() {
        return (
            <div className="secondComponent">
            <Router>
                <>
                    <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <Route path="/welcome/:name" component={WelcomeComponent}/>
                        <Route component={ErrorComponent} />
                    </Switch>
                </>
            </Router>
            </div>
          );
    }
}

class WelcomeComponent extends Component {
    render () {
        return(
            <div>
                Welcome {this.props.match.params.name}
            </div>
        );
    }
}

function ErrorComponent() {
    return(<div>An Error Occurred...Please contact the System Administrator</div>);
}

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "in28minutes",
            password: "dummy",
            hasLoginfailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    loginClicked() {
        if(this.state.username==="in28minutes" && this.state.password==="dummy"){
            this.props.history.push(`/welcome/${this.state.username}`)
        }
        else {
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginfailed:true}) 
        }    
    }

    render() {
        return (
            <div>
                {this.state.hasLoginfailed && <div>Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Successful</div>}
                User Name: <input type = "text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type = "password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button onClick={this.loginClicked}>Login</button>
            </div>
        );
    }
}

export default TodoApp