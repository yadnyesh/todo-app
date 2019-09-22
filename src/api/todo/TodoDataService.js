import axios from "axios"
import {API_URL, JPA_API_URL} from '../../constants.js'

class TodoDataService {
    retrieveAllTodos(username) {
        return axios.get(`${JPA_API_URL}/users/${username}/todos`)
        //console.log("From executeHelloWorldService")
    }

    retrieveTodo(username, id) {
        return axios.get(`${JPA_API_URL}/users/${username}/todos/${id}`)
        //console.log("From executeHelloWorldService")
    }

    deleteTodo(name, id) {
        //console.log('executed service')
        return axios.delete(`${JPA_API_URL}/users/${name}/todos/${id}`);
    }

    updateTodo(name, id, todo) {
        //console.log('executed service')
        return axios.put(`${JPA_API_URL}/users/${name}/todos/${id}`, todo);
    }

    createTodo(name, todo) {
        //console.log('executed service')
        return axios.post(`${JPA_API_URL}/users/${name}/todos/`, todo);
    }
}

export default new TodoDataService()