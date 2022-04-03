import axios from 'axios';
//mock API
export default axios.create({
    baseUrl: 'http://localhost:8080',
})