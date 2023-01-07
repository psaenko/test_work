import axios from "axios";

const defaultConfig = {
    baseURL: process.env.VUE_APP_API_URL,
    headers:{
        'Content-Type': 'application/json',
        'Accept': "application/json",
    },
    withCredentials: true,
}

export const DefaultAPIInterface = axios.create(defaultConfig);

