import axios from "axios"

class TodoDataService {
    retrieveAllTodos(username) {
        return axios.get(`http://localhost:8080/users/${username}/todos`)
        //console.log("From executeHelloWorldService")
    }

    retrieveTodo(username, id) {
        return axios.get(`http://localhost:8080/users/${username}/todos/${id}`)
        //console.log("From executeHelloWorldService")
    }

    deleteTodo(name, id) {
        //console.log('executed service')
        return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
    }

    updateTodo(name, id, todo) {
        //console.log('executed service')
        return axios.put(`http://localhost:8080/users/${name}/todos/${id}`, todo);
    }

    createTodo(name, todo) {
        //console.log('executed service')
        return axios.post(`http://localhost:8080/users/${name}/todos/`, todo);
    }
}

export default new TodoDataService()