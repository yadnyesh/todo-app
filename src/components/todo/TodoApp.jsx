import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import ListTodosComponent from './ListTodosComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import TodoComponent from './TodoComponent.jsx'
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
                            <AuthenticatedRoute path="/todos/:id" exact component={TodoComponent}/>
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

export default TodoApp