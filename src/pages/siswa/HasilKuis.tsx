import { useNavigate } from 'react-router-dom';

export default function HasilKuis() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-surface-container-low flex flex-col pt-safe pb-safe relative overflow-hidden items-center justify-between px-6 py-4 selection:bg-blue-100">
      
      {/* Ambient Floating Confetti & Sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-6 left-8 w-3 h-3 rounded-full bg-yellow-400 opacity-75 animate-bounce"></div>
        <div className="absolute top-16 right-10 w-4 h-4 rounded-full bg-blue-300 opacity-60"></div>
        <div className="absolute top-1/4 left-5 w-3 h-3 rounded-md bg-red-400 rotate-45 opacity-70"></div>
        <div className="absolute top-1/3 right-8 w-3 h-3 rounded-full bg-green-500 opacity-70"></div>
        <div className="absolute bottom-28 left-10 w-4 h-4 rounded-md bg-yellow-300 rotate-12 opacity-60"></div>
        <div className="absolute bottom-36 right-7 w-3 h-3 rounded-full bg-blue-200 opacity-80"></div>
        <div className="absolute top-1/2 left-2 w-2 h-2 rounded-full bg-orange-400 opacity-60"></div>
        <div className="absolute top-2/3 right-4 w-3 h-3 rounded-md bg-blue-100 rotate-45 opacity-80"></div>
        {/* Soft Glow Orbs */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-64 h-64 bg-yellow-200/40 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl -z-10"></div>
      </div>

      {/* Top Brand Pill */}
      <header className="w-full flex items-center justify-center pt-2 pb-2 z-10">
        <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm">
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-[14px]">favorite</span>
          </div>
          <span className="text-[14px] font-bold text-primary">Sahabat Digital</span>
          <span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-yellow-100 text-yellow-900 text-[13px] font-bold">SD Hebat</span>
        </div>
      </header>

      {/* Central Celebration Stage */}
      <main className="w-full flex flex-col items-center justify-center text-center my-auto z-10 max-w-sm">
        {/* Trophy Illustration */}
        <div className="relative flex items-center justify-center mb-6">
          <div className="absolute inset-0 flex items-center justify-center animate-spin" style={{ animationDuration: '20s' }}>
            <svg className="w-56 h-56 text-yellow-200/40" fill="currentColor" viewBox="0 0 100 100">
              <polygon points="50,0 55,38 95,20 62,50 95,80 55,62 50,100 45,62 5,80 38,50 5,20 45,38"></polygon>
            </svg>
          </div>
          <div className="relative w-36 h-36 rounded-full bg-white flex items-center justify-center shadow-xl p-3">
            <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-yellow-500 via-yellow-300 to-yellow-200 flex flex-col items-center justify-center shadow-inner relative overflow-hidden">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/40 rounded-full blur-sm"></div>
              <span className="material-symbols-outlined text-white text-6xl drop-shadow-md icon-filled">emoji_events</span>
              <span className="material-symbols-outlined absolute top-2 right-2 text-white text-sm animate-ping">star</span>
            </div>
            <div className="absolute -bottom-2 bg-primary px-3 py-1 rounded-full shadow-md flex items-center gap-1">
              <span className="material-symbols-outlined text-yellow-300 text-xs icon-filled">workspace_premium</span>
              <span className="text-[13px] font-bold text-white uppercase tracking-wider">Juara 1</span>
            </div>
          </div>
        </div>

        {/* Headlines */}
        <div className="flex flex-col items-center space-y-1 mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-100 text-yellow-900 mb-1">
            <span className="material-symbols-outlined text-sm icon-filled">celebration</span>
            <span className="text-[13px] font-bold">Misi Selesai dengan Nilai Sempurna!</span>
          </div>
          <h1 className="text-[26px] font-extrabold text-gray-800">Hore, Luar Biasa! 🎉</h1>
          <p className="text-[16px] text-gray-500 max-w-xs px-2">
            Kamu berhasil menjawab <strong className="text-primary font-bold">5 dari 5 soal</strong> dengan benar! Kamu adalah <strong className="text-gray-800 font-bold">Penjaga Kebaikan Digital</strong> sejati!
          </p>
        </div>

        {/* Reward Card */}
        <div className="w-full bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-sm mb-2">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
              <span className="material-symbols-outlined text-lg icon-filled">stars</span>
            </div>
            <div className="text-[24px] font-extrabold text-primary">+50 Poin Diperoleh!</div>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            <div className="bg-gray-50 rounded-xl p-2.5 flex items-center gap-2 text-left">
              <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-lg icon-filled">task_alt</span>
              </div>
              <div className="min-w-0">
                <div className="text-[13px] font-semibold text-gray-500 leading-none">Jawaban</div>
                <div className="text-[14px] font-bold text-gray-800 truncate">5 / 5 Benar</div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-2.5 flex items-center gap-2 text-left">
              <div className="w-8 h-8 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-lg icon-filled">military_tech</span>
              </div>
              <div className="min-w-0">
                <div className="text-[13px] font-semibold text-gray-500 leading-none">Level XP</div>
                <div className="text-[14px] font-bold text-gray-800 truncate">+50 Sahabat</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Action Buttons */}
      <footer className="w-full flex flex-col items-center gap-3 pt-2 pb-4 z-10 max-w-xs">
        <button 
          onClick={() => navigate('/materi')}
          className="w-full h-12 bg-primary text-white rounded-full font-bold text-[17px] shadow-[0_4px_0_#004395] active:translate-y-1 active:shadow-none flex items-center justify-center gap-2 transition duration-150"
        >
          <span>Lanjut Level Berikutnya</span>
          <span className="material-symbols-outlined text-xl">rocket_launch</span>
        </button>
        <button 
          onClick={() => navigate('/dashboard-siswa')}
          className="w-full h-11 bg-gray-100 text-primary rounded-full font-bold text-[17px] active:scale-95 flex items-center justify-center gap-2 transition duration-150"
        >
          <span className="material-symbols-outlined text-lg">cottage</span>
          <span>Kembali ke Beranda</span>
        </button>
      </footer>
    </div>
  );
}