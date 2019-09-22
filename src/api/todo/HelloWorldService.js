import axios from "axios"
import {API_URL} from '../../constants.js'


class HelloWorldService {

    executeHelloWorldService() {
        return axios.get(`${API_URL}/hello-world-bean`)
        //console.log("From executeHelloWorldService")
    }

    executeHelloWorldServicePath(name) {
        // let username = 'in28minutes'
        // let password = 'dummy'
        // let basicAuthHeader = 'Basic ' + window.btoa(username  + ":" + password)

        return axios.get(`${API_URL}/hello-world-bean/${name}`
        // ,
        //     {
        //         headers : {
        //             authorization : basicAuthHeader
        //         }
        //     }
        )
    }
}

export default new HelloWorldService();