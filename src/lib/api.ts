import axios from 'axios';

// Buat instance axios dengan base URL backend kita
export const api = axios.create({
  // UNTUK TESTING LOKAL:
  baseURL: 'http://localhost:5000/api', 
  
  // UNTUK NANTI SAAT DEMO DENGAN NGORK, GANTI MENJADI:
  // baseURL: 'https://xxxx-xx-xx-xx-xx.ngrok-free.app/api', 
  
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fungsi untuk menyimpan dan menghapus token
export const setAuthToken = (token: string | null) => {
  if (token) {
    // Jika ada token, pasang di header Authorization untuk setiap request
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('token', token); // Simpan di browser
  } else {
    // Jika logout, hapus token
    delete api.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
  }
};

// Saat aplikasi dimuat, cek apakah ada token tersimpan di browser
const savedToken = localStorage.getItem('token');
if (savedToken) {
  setAuthToken(savedToken);
}