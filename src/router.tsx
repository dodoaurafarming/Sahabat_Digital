import { createBrowserRouter } from 'react-router-dom';

// Onboarding
import Welcome from './pages/onboarding/Welcome';

// Auth
import LoginSiswa from './pages/auth/LoginSiswa';
import LoginGuru from './pages/auth/LoginGuru';

// Siswa
import DashboardSiswa from './pages/siswa/DashboardSiswa';
import Materi from './pages/siswa/Materi';
import Latihan from './pages/siswa/Latihan';
import HasilKuis from './pages/siswa/HasilKuis';
import CurhatSiswa from './pages/siswa/CurhatSiswa';
import ProfilSiswa from './pages/siswa/ProfilSiswa';
import PengaturanAkun from './pages/siswa/PengaturanAkun';

// Guru
import DashboardGuru from './pages/guru/DashboardGuru';
import Pengaduan from './pages/guru/Pengaduan';
import ProfilGuru from './pages/guru/ProfilGuru';             
import PengaturanAkunGuru from './pages/guru/PengaturanAkunGuru'; 

// Admin (Sementara dinonaktifkan karena file belum ada)
// import DashboardAdmin from './pages/admin/DashboardAdmin';
// import KelolaUser from './pages/admin/KelolaUser';
// import KelolaKode from './pages/admin/KelolaKode';

export const router = createBrowserRouter([
  // Rute Umum
  { path: '/', element: <Welcome /> },
  
  // Rute Auth
  { path: '/login-siswa', element: <LoginSiswa /> },
  { path: '/login-guru', element: <LoginGuru /> },

  // Rute Siswa
  { path: '/dashboard-siswa', element: <DashboardSiswa /> },
  { path: '/materi', element: <Materi /> },
  { path: '/latihan', element: <Latihan /> },
  { path: '/hasil-kuis', element: <HasilKuis /> },
  { path: '/curhat-siswa', element: <CurhatSiswa /> },
  { path: '/profil-siswa', element: <ProfilSiswa /> },
  { path: '/pengaturan-akun', element: <PengaturanAkun /> },

  // Rute Guru
  { path: '/dashboard-guru', element: <DashboardGuru /> },
  { path: '/pengaduan', element: <Pengaduan /> },
  { path: '/profil-guru', element: <ProfilGuru /> },             
  { path: '/pengaturan-guru', element: <PengaturanAkunGuru /> }, 

  // Rute Admin (Sementara dinonaktifkan)
  // { path: '/dashboard-admin', element: <DashboardAdmin /> },
  // { path: '/kelola-user', element: <KelolaUser /> },
  // { path: '/kelola-kode', element: <KelolaKode /> },
]);