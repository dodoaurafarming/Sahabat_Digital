import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/layout/BottomNav';

export default function ProfilSiswa() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-surface-container-low flex flex-col pb-28">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-xl shadow-sm">
        <div className="h-16 px-4 flex items-center justify-between gap-2 max-w-md mx-auto w-full">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => navigate('/dashboard-siswa')}
              className="w-11 h-11 rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-100 active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[24px]">arrow_back</span>
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-blue-500 text-[18px]">person</span>
              </div>
              <h1 className="text-[18px] font-bold text-gray-800">Profil</h1>
            </div>
          </div>
          <div className="w-11"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-md mx-auto px-4 pt-20 flex flex-col gap-4">
        
        {/* Kartu Identitas */}
        <section className="relative w-full bg-white rounded-2xl p-5 shadow-sm flex flex-col items-center text-center overflow-hidden">
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-100/40 rounded-full blur-xl pointer-events-none"></div>
          <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-50/40 rounded-full blur-lg pointer-events-none"></div>
          
          <div className="relative mb-3">
            <div className="w-24 h-24 rounded-full bg-blue-100 p-1.5 shadow-md flex items-center justify-center relative">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <span className="material-symbols-outlined text-5xl text-blue-400">face</span>
              </div>
              <div className="absolute -bottom-1 -right-1 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center shadow-[0_2px_0_#004395] text-[14px] font-bold">
                5
              </div>
            </div>
          </div>
          
          <h2 className="text-[20px] font-extrabold text-gray-800 mb-1">Budi Pratama</h2>
          
          <div className="inline-flex items-center gap-1.5 bg-gray-50 px-3 py-1 rounded-full mb-3">
            <span className="material-symbols-outlined text-primary text-[18px]">school</span>
            <span className="text-[13px] font-bold text-gray-600">Kelas 5-B • SDN Harapan Bangsa</span>
          </div>
          
          <div className="inline-flex items-center gap-1.5 bg-yellow-100/60 px-3.5 py-1.5 rounded-full">
            <span className="material-symbols-outlined text-yellow-600 text-[18px] icon-filled">workspace_premium</span>
            <span className="text-[14px] font-extrabold text-yellow-900 tracking-tight">Penjaga Kebaikan Digital</span>
            <span className="text-sm">🌟</span>
          </div>
        </section>

        {/* Grid Capaian Belajar */}
        <section className="w-full">
          <div className="flex items-center justify-between mb-2 px-1">
            <h3 className="text-[14px] font-bold text-gray-800">Capaian Saya Pekan Ini</h3>
            <span className="text-[13px] font-bold text-primary flex items-center gap-0.5">Semester 2 <span className="material-symbols-outlined text-[16px]">expand_more</span></span>
          </div>
          <div className="grid grid-cols-2 gap-3 w-full">
            
            <div className="bg-white rounded-xl p-3.5 flex flex-col justify-between shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[22px] icon-filled">menu_book</span>
                </div>
                <span className="text-[12px] font-bold text-primary bg-blue-50 px-2 py-0.5 rounded-full">Level</span>
              </div>
              <div>
                <div className="text-[26px] font-extrabold text-primary leading-none mb-1">6</div>
                <p className="text-[13px] font-semibold text-gray-500">Modul Selesai</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-3.5 flex flex-col justify-between shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                  <span className="material-symbols-outlined text-[22px] icon-filled">stars</span>
                </div>
                <span className="text-[12px] font-bold text-yellow-700 bg-yellow-100 px-2 py-0.5 rounded-full">XP</span>
              </div>
              <div>
                <div className="text-[26px] font-extrabold text-gray-800 leading-none mb-1">320</div>
                <p className="text-[13px] font-semibold text-gray-500">Poin Bintang</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-3.5 flex flex-col justify-between shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                  <span className="material-symbols-outlined text-[22px] icon-filled">local_fire_department</span>
                </div>
                <span className="text-[12px] font-bold text-orange-700 bg-orange-100 px-2 py-0.5 rounded-full">Aktif</span>
              </div>
              <div>
                <div className="text-[26px] font-extrabold text-orange-600 leading-none mb-1">7 <span className="text-[14px] font-bold text-gray-500">Hari</span></div>
                <p className="text-[13px] font-semibold text-gray-500">Hari Beruntun</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-3.5 flex flex-col justify-between shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-green-600">
                  <span className="material-symbols-outlined text-[22px] icon-filled">task_alt</span>
                </div>
                <span className="text-[12px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">Kuis</span>
              </div>
              <div>
                <div className="text-[26px] font-extrabold text-green-500 leading-none mb-1">28</div>
                <p className="text-[13px] font-semibold text-gray-500">Jawaban Tepat</p>
              </div>
            </div>

          </div>
        </section>

        {/* Menu Akun */}
        <section className="w-full space-y-2 pt-2">
          <h3 className="text-[14px] font-bold text-gray-800 px-1">Menu Akun</h3>
          <div className="w-full bg-white rounded-xl shadow-sm overflow-hidden flex flex-col">
            
            <button onClick={() => navigate('/pengaturan-akun')} className="w-full flex items-center justify-between p-3 min-h-[52px] hover:bg-gray-50 transition-colors text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[22px]">manage_accounts</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-bold text-gray-800 leading-snug">Pengaturan Akun</span>
                  <span className="text-[13px] text-gray-500">Kata sandi, avatar & data murid</span>
                </div>
              </div>
              <span className="material-symbols-outlined text-gray-300 text-[24px]">chevron_right</span>
            </button>

            <div className="h-[1px] w-full bg-gray-100"></div>

            <button className="w-full flex items-center justify-between p-3 min-h-[52px] hover:bg-gray-50 transition-colors text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600">
                  <span className="material-symbols-outlined text-[22px]">military_tech</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-bold text-gray-800 leading-snug">Peti Lencana</span>
                  <span className="text-[13px] text-gray-500">Koleksi 8 medali perlindungan diri</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                <span className="material-symbols-outlined text-gray-300 text-[24px]">chevron_right</span>
              </div>
            </button>

            <div className="h-[1px] w-full bg-gray-100"></div>

            <button className="w-full flex items-center justify-between p-3 min-h-[52px] hover:bg-gray-50 transition-colors text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <span className="material-symbols-outlined text-[22px]">help_center</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-bold text-gray-800 leading-snug">Pusat Bantuan & Panduan</span>
                  <span className="text-[13px] text-gray-500">Panduan ramah anak & kontak guru BK</span>
                </div>
              </div>
              <span className="material-symbols-outlined text-gray-300 text-[24px]">chevron_right</span>
            </button>

            <div className="h-[1px] w-full bg-gray-100"></div>

            <button 
              onClick={() => { if(confirm('Apakah adik ingin keluar dari akun ini?')) navigate('/login-siswa') }}
              className="w-full flex items-center justify-between p-3 min-h-[52px] hover:bg-red-50 transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                  <span className="material-symbols-outlined text-[22px]">logout</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-bold text-red-500 leading-snug">Keluar Akun</span>
                  <span className="text-[13px] text-red-400 opacity-85">Ganti akun atau akhiri sesi belajar</span>
                </div>
              </div>
              <span className="material-symbols-outlined text-red-500 text-[24px]">chevron_right</span>
            </button>

          </div>
        </section>

      </main>

      <BottomNav />
    </div>
  );
}