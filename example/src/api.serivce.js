// api.service.js
import axios from 'axios'

export default class ApiSerivce {
    fakeRequest() {
        return axios.get('https://jsonplaceholder.typicode.com/todos/1')
    }
}
