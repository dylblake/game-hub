import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '8d051c5eedb44e91ab96d54a920c3c83'
    }
})