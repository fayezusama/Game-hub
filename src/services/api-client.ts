import axios from "axios";

export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params: {
        key : '0d57fbbcb86f415a913eaf92cc85a145'
    }
})