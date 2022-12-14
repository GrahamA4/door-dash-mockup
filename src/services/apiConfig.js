import axios from 'axios';

const getToken = () => {
  return new Promise((resolve) => {
    resolve(`Bearer ${localStorage.getItem('token') || null}`);
  });
};

const herokuURL = 'doordash-backend.herokuapp.com/api';

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? `https://${herokuURL}`
      : 'http://localhost:3001/api'
});
console.log(herokuURL);
api.interceptors.request.use(
  async function (config) {
    config.headers['Authorization'] = await getToken();
    return config;
  },
  function (error) {
    console.log('Request error: ', error);
    return Promise.reject(error);
  }
);

export default api;
