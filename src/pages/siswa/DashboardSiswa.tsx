import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/layout/BottomNav';

export default function DashboardSiswa() {
  const navigate = useNavigate();
  
  // Ambil nama dari local storage (jika ada)
  const userName = localStorage.getItem('user_name') || 'Siswa Hebat';

  return (
    <div className="min-h-screen bg-surface-container-low flex flex-col pb-28">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/85 backdrop-blur-xl shadow-sm">
        <div className="h-16 px-4 flex items-center justify-between max-w-md mx-auto w-full">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[22px]">sentiment_satisfied</span>
            </div>
            <span className="text-[20px] font-extrabold text-gray-800">Beranda</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-surface-container-low px-2.5 py-1 rounded-full">
              <span className="material-symbols-outlined text-yellow-500 text-[18px] icon-filled">stars</span>
              <span className="font-bold text-[14px] text-gray-800">120</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center ring-2 ring-blue-200">
              <span className="material-symbols-outlined text-blue-500 text-[18px]">person</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-md mx-auto px-4 pt-20 flex flex-col gap-4">
        
        {/* Greeting Card */}
        <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative flex-shrink-0">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl text-blue-500">face</span>
              </div>
              <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white flex items-center justify-center">
                <span className="material-symbols-outlined text-[10px] text-white font-bold">check</span>
              </div>
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[20px] font-extrabold text-gray-800 truncate">Halo, {userName}!</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[13px] font-bold">SD Bintang 01</span>
              </div>
              <p className="text-[16px] text-gray-500 truncate">Siap jadi pahlawan kebaikan hari ini? 🌟</p>
            </div>
          </div>
          <button className="relative w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-sm text-gray-500 active:scale-95 transition-transform shrink-0">
            <span className="material-symbols-outlined text-[24px]">notifications</span>
            <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-red-400 animate-ping"></span>
            <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-red-400"></span>
          </button>
        </div>

        {/* Gamification Card */}
        <div className="flex flex-col bg-white rounded-2xl p-4 shadow-sm gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[20px] icon-filled">military_tech</span>
              </div>
              <div>
                <span className="font-bold text-[14px] text-gray-800 block">Level 3 - Sahabat Teladan</span>
                <span className="text-[13px] font-semibold text-gray-500">50 Poin lagi menuju Level 4</span>
              </div>
            </div>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-yellow-100 text-yellow-900 font-bold text-[14px]">Hebat!</span>
          </div>
          
          <div className="w-full bg-gray-100 h-3.5 rounded-full overflow-hidden p-0.5">
            <div className="bg-gradient-to-r from-blue-400 via-primary to-yellow-400 h-full rounded-full transition-all duration-700" style={{ width: '78%' }}></div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <div className="flex items-center gap-2 bg-surface-container-low px-3 py-2 rounded-full">
              <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                <span className="material-symbols-outlined text-[18px] icon-filled">local_fire_department</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[13px] font-semibold text-gray-500">Streak Aktif</span>
                <span className="font-bold text-[14px] text-gray-800">5 Hari Beruntun!</span>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-surface-container-low px-3 py-2 rounded-full">
              <div className="w-7 h-7 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                <span className="material-symbols-outlined text-[18px] icon-filled">monetization_on</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[13px] font-semibold text-gray-500">Poin Terkumpul</span>
                <span className="font-bold text-[14px] text-gray-800">450 Kebaikan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 gap-3">
          <button onClick={() => navigate('/materi')} className="group flex flex-col items-start text-left bg-white rounded-2xl p-4 shadow-[0_4px_0_#e6eefb] active:translate-y-1 transition-all">
            <div className="w-full flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[28px] icon-filled">menu_book</span>
              </div>
              <span className="bg-blue-100 text-blue-900 text-[13px] px-2 py-0.5 rounded-full font-bold">Level</span>
            </div>
            <span className="text-[20px] font-extrabold text-gray-800 mb-1">Materi Seru</span>
            <p className="text-[13px] font-semibold text-gray-500 line-clamp-2">Cerita bergambar & video ceria anti-bullying.</p>
          </button>

          <button onClick={() => navigate('/latihan')} className="group flex flex-col items-start text-left bg-white rounded-2xl p-4 shadow-[0_4px_0_#ffdf9e] active:translate-y-1 transition-all">
            <div className="w-full flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[28px] icon-filled">emoji_events</span>
              </div>
              <span className="bg-yellow-100 text-yellow-900 text-[13px] px-2 py-0.5 rounded-full font-bold">Tantangan</span>
            </div>
            <span className="text-[20px] font-extrabold text-gray-800 mb-1">Kuis Berani</span>
            <p className="text-[13px] font-semibold text-gray-500 line-clamp-2">Asah pemahamanmu & raih bintang emas!</p>
          </button>

          <button onClick={() => navigate('/curhat-siswa')} className="col-span-2 group flex flex-col items-start text-left bg-white rounded-2xl p-4 shadow-[0_4px_0_#ffdad6] active:translate-y-1 transition-all">
            <div className="w-full flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-500 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[28px] icon-filled">shield_with_heart</span>
                  <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 border-2 border-white">
                    <span className="material-symbols-outlined text-[12px] icon-filled">chat</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[20px] font-extrabold text-gray-800">Ruang Curhat</span>
                  </div>
                  <span className="bg-red-50 text-red-600 text-[13px] px-2 py-0.5 rounded-full font-bold inline-block mt-0.5">Aman & Rahasia 🔒</span>
                </div>
              </div>
              <span className="bg-red-400 text-white text-[13px] px-2.5 py-1 rounded-full font-bold flex items-center gap-1 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                1 Pesan Baru
              </span>
            </div>
            <p className="text-[16px] text-gray-500 leading-snug">Ceritakan apa yang kamu rasakan kepada gurumu & cek balasan pesanmu. 100% rahasia dan aman.</p>
          </button>
        </div>

        {/* Motivational Banner */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-100 via-gray-50 to-blue-50 rounded-2xl p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 flex-shrink-0 rounded-full bg-yellow-300 flex items-center justify-center text-yellow-800 shadow-sm">
              <span className="material-symbols-outlined text-[24px]">auto_awesome</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[14px] text-primary">Kebaikan Hari Ini</span>
              <p className="text-[16px] text-gray-800 leading-snug">Tahukah kamu? Kata-kata manismu bisa bikin teman tersenyum sepanjang hari! ✨</p>
            </div>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}