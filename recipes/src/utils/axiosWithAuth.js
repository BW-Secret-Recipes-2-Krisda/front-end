import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://secret-recipes-app.herokuapp.com/api',
        headers: {
            Authorization: token,
        },
    });
};

export default axiosWithAuth;