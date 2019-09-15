import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService.js'
class WelcomeComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            welcomeMessage : 'Test'
        }
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
    }

    render () {
        return(
            <>
                <h1>Welcome! {this.props.match.params.name}</h1>
                <div className="container">
                    You can manage your todos <Link to="/todos">here</Link>.
                </div>
                <div className="container">
                    Click here to get customized welcome messsage.
                    <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">Get Welcome Message</button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            </>
        );
    }

    retrieveWelcomeMessage() {
        HelloWorldService.executeHelloWorldServicePath(this.props.match.params.name)
        .then(response => {
            this.handleSuccessfulResponse(response)
            console.log(response)
        })
        .catch(error => this.handleError(error))
    }

    handleSuccessfulResponse(response) {
        this.setState({
            welcomeMessage: response.data.message
        })
    }

    handleError(error) {
        console.log(error.response)
        let errorMessage  = ''
        if(error.message)
            errorMessage += error.message
        
        if(error.response && error.response.data) {
            errorMessage += error.response.data.message
        }    
        this.setState({
            welcomeMessage: errorMessage
        })
    }
}


export default WelcomeComponent