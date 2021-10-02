import axios from "axios";

const API_KEY = "AIzaSyCtjr2Ax2yzqb2hJbRdshN6RnNKUj7tlXg";

export default axios.create(
    {
        baseURL: "https://www.googleapis.com/youtube/v3",
        params:{
            part: "snippet",
            maxResults: 5,
            key: API_KEY,
            type:'video'
        }
    }
);