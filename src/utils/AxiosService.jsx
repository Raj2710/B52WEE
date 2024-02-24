import axios from "axios";

const AxiosService = axios.create({
    baseURL:"https://6486a3c8beba6297278efd7e.mockapi.io",
    headers:{
        "Content-Type":"application/json"
    }
})

export default AxiosService