import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class WelcomeComponent extends Component {
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
            </>
        );
    }

    retrieveWelcomeMessage() {
        console.log('Retrieve Welcome message')
    }
}


export default WelcomeComponent