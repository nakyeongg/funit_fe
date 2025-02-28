import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/', // 로컬 주소로 변경
    withCredentials: true,  // 쿠키 자동 포함
});

axiosInstance.interceptors.request.use((config) => {
    const csrfToken = document.cookie
        .split('; ')
        .find(row => row.startsWith('csrftoken='))
        ?.split('=')[1];
    if (csrfToken) {
        config.headers['X-CSRFToken'] = csrfToken;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default axiosInstance;