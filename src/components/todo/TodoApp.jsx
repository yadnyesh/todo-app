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
            this.setState({showSuccessMessage:true})
            this.setState({hasLoginfailed:false})
        }
        else {
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginfailed:true}) 
        }    
    }

    render() {
        return (
            <div>
                <ShowInvalidCredentials hasLoginfailed={this.state.hasLoginfailed}/>
                <DisplaySuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>
                User Name: <input type = "text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type = "password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button onClick={this.loginClicked}>Login</button>
            </div>
        );
    }
}

function ShowInvalidCredentials(props) {
    if(props.hasLoginfailed) {
        return <div>Invalid Credentials</div>
    }
    return null
}

function DisplaySuccessMessage(props) {
    if(props.showSuccessMessage){
        return <div>Login Successful</div>
    }
    return null
}


export default TodoApp