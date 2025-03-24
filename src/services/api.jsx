import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `Bearer SEU_TOKEN_AQUI`,
  },
});

export default api;