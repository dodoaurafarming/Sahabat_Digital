import axios from 'axios';

export const api = axios.create({
  // GUNAKAN URL CLOUDFLARE TUNNEL ANDA
  baseURL: 'https://hired-musicians-lafayette-wheat.trycloudflare.com', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthToken = (token: string | null) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('token', token);
  } else {
    delete api.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
  }
};

const savedToken = localStorage.getItem('token');
if (savedToken) {
  setAuthToken(savedToken);
}