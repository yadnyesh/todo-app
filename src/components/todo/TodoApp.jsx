import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import ListTodosComponent from './ListTodosComponent.jsx'
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

class HeaderComponent extends Component {
    render() {

        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log(isUserLoggedIn);

        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div href="http://localhost:3000" className="navbar-brand"><a>Yadnyesh</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li className="nav-link"><Link to="/welcome/in28minutes" className="nav-link">Home</Link></li>}
                        {isUserLoggedIn && <li className="nav-link"><Link to="/todos" className="nav-link">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li className="nav-link"><Link to="/login" className="nav-link">Login</Link></li>}
                        {isUserLoggedIn && <li className="nav-link"><Link to="/logout" className="nav-link" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

class FooterComponent extends Component {
    render() {
        return(
            <footer className="footer">
                <span className="text-muted">All Rights not reserved</span>
            </footer>
        )
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