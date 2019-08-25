import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import ListTodosComponent from './ListTodosComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
class TodoApp extends Component {
    render() {
        return (
            <div className="secondComponent">
            <Router>
                <>
                    <HeaderComponent />
                        <Switch>
                            <Route path="/" exact component={LoginComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                            <AuthenticatedRoute path="/todos" exact component={ListTodosComponent}/>
                            <AuthenticatedRoute path="/logout" exact component={LogoutComponent}/>
                            <Route component={ErrorComponent} />
                        </Switch>
                    <FooterComponent />
                </>
            </Router>
            </div>
          );
    }
}
class LogoutComponent extends Component {
    render() {
        return(
            <>
                <h1>Logged out Successfully</h1>
                <div className="container">
                    Thank you for using the TODO list
                </div>
            </>
        )
    }
}


class WelcomeComponent extends Component {
    render () {
        return(
            <>
                <h1>Welcome! {this.props.match.params.name}</h1>
                <div className="container">
                You can manage your todos <Link to="/todos">here</Link>.
                </div>
            </>
        );
    }
}

function ErrorComponent() {
    return(<div>An Error Occurred...Please contact the System Administrator</div>);
}

export default TodoApp