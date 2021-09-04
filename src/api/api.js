import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "f29bc66b-e3a5-46c7-8bfc-39f9ef12838f"
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
