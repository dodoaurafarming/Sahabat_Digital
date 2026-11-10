import { createBrowserRouter } from 'react-router-dom';
import Welcome from './pages/onboarding/Welcome';
import LoginSiswa from './pages/auth/LoginSiswa';
import LoginGuru from './pages/auth/LoginGuru';
import DashboardSiswa from './pages/siswa/DashboardSiswa';
import CurhatSiswa from './pages/siswa/CurhatSiswa';
import Materi from './pages/siswa/Materi';
import Latihan from './pages/siswa/Latihan';
import HasilKuis from './pages/siswa/HasilKuis';
import ProfilSiswa from './pages/siswa/ProfilSiswa'; // <-- Baru
import PengaturanAkun from './pages/siswa/PengaturanAkun'; // <-- Baru
import DashboardGuru from './pages/guru/DashboardGuru';
import Pengaduan from './pages/guru/Pengaduan';

export const router = createBrowserRouter([
  { path: '/', element: <Welcome /> },
  { path: '/login-siswa', element: <LoginSiswa /> },
  { path: '/login-guru', element: <LoginGuru /> },
  { path: '/dashboard-siswa', element: <DashboardSiswa /> },
  { path: '/curhat-siswa', element: <CurhatSiswa /> },
  { path: '/materi', element: <Materi /> },
  { path: '/latihan', element: <Latihan /> },
  { path: '/hasil-kuis', element: <HasilKuis /> },
  { path: '/profil-siswa', element: <ProfilSiswa /> },         // <-- Baru
  { path: '/pengaturan-akun', element: <PengaturanAkun /> },  
  { path: '/dashboard-guru', element: <DashboardGuru /> },
  { path: '/pengaduan', element: <Pengaduan /> }, // <-- Baru
]);