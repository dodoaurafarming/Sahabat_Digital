import { useNavigate } from 'react-router-dom';
import BottomNavGuru from '../../components/layout/BottomNavGuru';
import { useState } from 'react';

export default function ProfilGuru() {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const accessToken = '849 201';

  const handleCopy = () => {
    navigator.clipboard.writeText(accessToken.replace(/\s+/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-surface-container-low flex flex-col pb-28">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-xl shadow-sm">
        <div className="h-16 px-4 flex items-center justify-between max-w-md mx-auto w-full">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-[24px]">shield_with_heart</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-bold text-gray-500 leading-tight uppercase">Portal Guru</span>
              <h1 className="text-[20px] font-extrabold text-gray-800 leading-none">Profil</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">
              <span className="material-symbols-outlined text-[24px]">notifications</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-md mx-auto px-4 pt-20 flex flex-col gap-4">
        
        {/* Kartu Profil Utama */}
        <div className="bg-white rounded-2xl p-5 shadow-sm flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-blue-50 blur-2xl pointer-events-none"></div>
          <div className="absolute -bottom-10 -left-10 w-28 h-28 rounded-full bg-blue-50 blur-2xl pointer-events-none"></div>
          
          <div className="relative mb-3">
            <div className="w-24 h-24 rounded-full bg-blue-50 p-1 flex items-center justify-center shadow-sm">
              <div className="w-full h-full rounded-full bg-blue-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-5xl text-blue-500">face_3</span>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shadow-md">
              <span className="material-symbols-outlined text-[18px] icon-filled">verified</span>
            </div>
          </div>
          
          <h2 className="text-[20px] font-extrabold text-gray-800">Rahmawati, S.Pd.</h2>
          
          <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800">
            <span className="material-symbols-outlined text-[16px]">psychology</span>
            <span className="text-[13px] font-bold">Fasilitator Utama</span>
          </div>
          
          <p className="text-[16px] font-semibold text-gray-500 mt-2">SDIT Sahabat Bangsa • Wali Kelas 5B</p>
          
          <div className="grid grid-cols-2 gap-3 w-full mt-4 pt-3 bg-gray-50 rounded-xl p-3">
            <div className="flex flex-col items-center">
              <span className="text-[18px] font-extrabold text-primary">28</span>
              <span className="text-[13px] font-bold text-gray-500">Siswa Terpantau</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[18px] font-extrabold text-green-500">100%</span>
              <span className="text-[13px] font-bold text-gray-500">Respon Cepat</span>
            </div>
          </div>
        </div>

        {/* Kartu Kode Akses */}
        <div className="bg-white rounded-2xl p-5 shadow-sm relative">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5 text-gray-500">
              <span className="material-symbols-outlined text-[20px]">key</span>
              <span className="text-[13px] font-bold uppercase tracking-wider">Kode Akses Guru Aktif</span>
            </div>
            <span className="text-[13px] font-bold text-green-500 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse"></span>
              Aktif
            </span>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-4 flex flex-col items-center my-2 text-center">
            <span className="text-[32px] tracking-widest text-primary font-extrabold select-all">{accessToken}</span>
            <p className="text-[13px] font-semibold text-gray-500 mt-1">Gunakan kode ini untuk masuk ke portal guru di perangkat lain</p>
          </div>
          
          <button 
            onClick={handleCopy}
            className={`w-full h-12 text-white rounded-full font-bold text-[17px] flex items-center justify-center gap-2 shadow-[0_4px_0_#1D4ED8] active:translate-y-1 active:shadow-none transition-all ${copied ? 'bg-green-500 shadow-[0_4px_0_#059669]' : 'bg-primary'}`}
          >
            <span className="material-symbols-outlined text-[20px]">{copied ? 'check_circle' : 'content_copy'}</span>
            <span>{copied ? 'Berhasil Disalin!' : 'Salin Kode'}</span>
          </button>
        </div>

        {/* Menu Pengaturan */}
        <div className="flex flex-col gap-2 mt-2">
          <h3 className="text-[18px] font-extrabold text-gray-800 px-1">Pengaturan & Akun</h3>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col">
            
            <button onClick={() => navigate('/pengaturan-guru')} className="flex items-center gap-3 p-3 min-h-[56px] hover:bg-gray-50 transition-colors text-left border-b border-gray-100">
              <div className="w-11 h-11 rounded-full bg-gray-50 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[22px]">badge</span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-[14px] font-bold text-gray-800 truncate">Ubah Data Diri & Sekolah</h4>
                <p className="text-[13px] font-semibold text-gray-500 truncate">Nama, NUPTK, & Kontak</p>
              </div>
              <span className="material-symbols-outlined text-gray-300 text-[22px] shrink-0">chevron_right</span>
            </button>

            <button className="flex items-center gap-3 p-3 min-h-[56px] hover:bg-gray-50 transition-colors text-left border-b border-gray-100">
              <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <span className="material-symbols-outlined text-[22px]">groups</span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-[14px] font-bold text-gray-800 truncate">Kelola Akses Kelas & Siswa</h4>
                <p className="text-[13px] font-semibold text-gray-500 truncate">Pengaturan daftar kelas aktif</p>
              </div>
              <span className="material-symbols-outlined text-gray-300 text-[22px] shrink-0">chevron_right</span>
            </button>

            <div className="flex items-center gap-3 p-3 min-h-[56px] border-b border-gray-100">
              <div className="w-11 h-11 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600 shrink-0">
                <span className="material-symbols-outlined text-[22px]">notifications_active</span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-[14px] font-bold text-gray-800 truncate">Notifikasi Pengaduan</h4>
                <p className="text-[13px] font-semibold text-gray-500 truncate">Peringatan real-time curhat siswa</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer shrink-0">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-12 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>

            <button className="flex items-center gap-3 p-3 min-h-[56px] hover:bg-gray-50 transition-colors text-left border-b border-gray-100">
              <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[22px]">menu_book</span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-[14px] font-bold text-gray-800 truncate">Panduan Konseling & Etika</h4>
                <p className="text-[13px] font-semibold text-gray-500 truncate">SOP penanganan laporan perundungan</p>
              </div>
              <span className="material-symbols-outlined text-gray-300 text-[22px] shrink-0">chevron_right</span>
            </button>

            <button onClick={() => navigate('/pengaturan-guru')} className="flex items-center gap-3 p-3 min-h-[56px] hover:bg-gray-50 transition-colors text-left">
              <div className="w-11 h-11 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 shrink-0">
                <span className="material-symbols-outlined text-[22px]">lock_reset</span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-[14px] font-bold text-gray-800 truncate">Keamanan & Kata Sandi</h4>
                <p className="text-[13px] font-semibold text-gray-500 truncate">Perbarui PIN pengamanan akun</p>
              </div>
              <span className="material-symbols-outlined text-gray-300 text-[22px] shrink-0">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Tombol Logout */}
        <div className="flex flex-col gap-2 mt-2">
          <button 
            onClick={() => { if(confirm('Keluar dari aplikasi?')) navigate('/login-guru') }}
            className="w-full py-3 px-4 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 font-bold text-[17px] flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[22px]">logout</span>
            <span>Keluar dari Aplikasi</span>
          </button>
          <p className="text-center text-[13px] font-semibold text-gray-400 mt-1">
            Sahabat Digital Guru v2.4.0 • Ruang Aman Pendidikan
          </p>
        </div>

      </main>

      <BottomNavGuru />
    </div>
  );
}