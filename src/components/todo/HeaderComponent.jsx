import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'
import {Link} from 'react-router-dom'


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

export default HeaderComponent