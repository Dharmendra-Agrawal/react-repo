import axios from "axios";

export default axios.create(
    {
        baseURL: 'https://api.unsplash.com',
        headers : {
            Authorization: 'Client-ID Sero3qEfWlM6Vnn9o49eWBeuxlNP-BBsdKGsouQOCVY'
        }  
    }
);