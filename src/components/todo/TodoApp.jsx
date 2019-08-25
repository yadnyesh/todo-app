import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import { prototype } from 'stream';

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
                            <Route path="/welcome/:name" component={WelcomeComponent}/>
                            <Route path="/todos" exact component={ListTodosComponent}/>
                            <Route path="/logout" exact component={LogoutComponent}/>
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
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div href="/" className="navbar-brand"><a>Yadnyesh</a></div>
                    <ul className="navbar-nav">
                        <li className="nav-link"><Link to="/welcome/in28minutes" className="nav-link">Home</Link></li>
                        <li className="nav-link"><Link to="/todos" className="nav-link">Todos</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li className="nav-link"><Link to="/login" className="nav-link">Login</Link></li>
                        <li className="nav-link"><Link to="/logout" className="nav-link">Logout</Link></li>
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

class ListTodosComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos : [ 
                        {id : 1,description: 'Learn React', done:false, targetDate : new Date()},   
                        {id : 2,description: 'Learn Java', done:false, targetDate : new Date()},
                        {id : 3,description: 'Learn GraphQL', done:false, targetDate : new Date()},
                        {id : 4,description: 'Learn ElasticSearch', done:false, targetDate : new Date()}
                    ]
        }
    }
    render () {
        return(
            <div>
                <h1>List Todos</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Description</th>
                            <th>Complete By Date</th>
                            <th>Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo => (
                                    <tr>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                        <td>{todo.done.toString()}</td>
                                    </tr>
                                )    
                            )        
                        }        
                    </tbody>
                </table>
            </div>
        );
    }
}
class WelcomeComponent extends Component {
    render () {
        return(
            <div>
                Welcome {this.props.match.params.name}
                You can manage your todos <Link to="/todos">here</Link>.
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