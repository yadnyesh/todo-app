import React, {Component} from 'react'
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'

class ListTodosComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos : [ 
                        // {id : 1,description: 'Learn React', done:false, targetDate : new Date()},   
                        // {id : 2,description: 'Learn Java', done:false, targetDate : new Date()},
                        // {id : 3,description: 'Learn GraphQL', done:false, targetDate : new Date()},
                        // {id : 4,description: 'Learn ElasticSearch', done:false, targetDate : new Date()}
                    ]
        }
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        console.log(nextProps)
        console.log(nextState)
        return true
    }
    componentDidMount() {
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveAllTodos(username)
        .then(
            response => {
                console.log(response)
                this.setState({
                    todos: response.data
                })
            }
        )
    }

    render () {
        return(
            <div>
                <h1>List Todos</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Description</th>
                                <th>Complete By Date</th>
                                <th>IsCompleted</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo => (
                                        <tr key={todo.id}>
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
            </div>
        );
    }
}

export default ListTodosComponent;