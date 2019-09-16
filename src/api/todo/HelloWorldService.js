import axios from "axios"

class HelloWorldService {

    executeHelloWorldService() {
        return axios.get('http://localhost:8080/hello-world-bean')
        //console.log("From executeHelloWorldService")
    }

    executeHelloWorldServicePath(name) {
        // let username = 'in28minutes'
        // let password = 'dummy'
        // let basicAuthHeader = 'Basic ' + window.btoa(username  + ":" + password)

        return axios.get(`http://localhost:8080/hello-world-bean/${name}`
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