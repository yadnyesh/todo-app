import axios from "axios"

class HelloWorldService {

    executeHelloWorldService() {
        return axios.get('http://localhost:8080/hello-world-bean')
        //console.log("From executeHelloWorldService")
    }

    executeHelloWorldServicePath(name) {
        return axios.get(`http://localhost:8080/hello-world-bean/${name}`)
        //console.log("From executeHelloWorldService")
    }

}

export default new HelloWorldService();