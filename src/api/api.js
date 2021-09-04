import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: '',
    headers: {
        "API-KEY": ""
    }
})


export const authAPI = {
    getAuthData() {     
        return instance.get(`auth/me`)                  
    },

    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe })
    },
    
    logout() {
        return instance.delete(`auth/login`)
    },
}
