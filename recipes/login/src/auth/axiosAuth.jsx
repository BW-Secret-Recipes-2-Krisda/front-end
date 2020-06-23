import axios from 'axios';

export const axiosAuth = () => {
    const token=localStorage.getItem('token');

    return axios.create({
        headers: {
            'Content-Type' : 'application/json',
            Accept : 'application/json',
            Authorization : token          
        },
        baseURL: 'https://secret-recipes-app.herokuapp.com/api/auth/login'
    })
}