import { useNavigate } from 'react-router-dom';

export default function Materi() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-surface-container-low flex flex-col pb-28">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-surface-container-low/90 backdrop-blur-xl shadow-sm">
        <div className="h-16 px-4 flex items-center justify-between gap-2 max-w-md mx-auto w-full">
          <button 
            onClick={() => navigate('/dashboard-siswa')}
            className="w-11 h-11 rounded-full bg-white text-primary flex items-center justify-center shadow-sm active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
          <div className="flex-1 text-center font-bold text-primary text-[18px] truncate">Materi Baca Level 1</div>
          <div className="w-11"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-md mx-auto px-4 pt-20 flex flex-col gap-5">
        
        {/* Badges */}
        <div className="flex items-center justify-between gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-100 text-blue-900 text-[13px] font-bold shadow-sm">
            <span className="material-symbols-outlined text-primary text-[18px] icon-filled">eco</span>
            <span>Modul Ramah Digital • Level 1</span>
          </div>
          <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-yellow-100 text-yellow-900 text-[13px] font-bold shadow-sm">
            <span className="material-symbols-outlined text-yellow-600 text-[16px] icon-filled">star</span>
            <span>+20 Poin</span>
          </div>
        </div>

        {/* Title */}
        <div className="flex flex-col gap-1">
          <h1 className="text-[24px] font-extrabold text-blue-900 leading-tight">
            Yuk, Belajar: Apa itu Mengejek di Internet?
          </h1>
          <p className="text-[16px] text-gray-500 leading-relaxed">
            Pernahkah kamu melihat teman yang sedih karena kata-kata di gawai atau game online? Mari cari tahu bersama mengapa kata-kata kita sangat berharga!
          </p>
        </div>

        {/* Main Image Card */}
        <div className="flex flex-col rounded-2xl overflow-hidden bg-white shadow-sm">
          <div className="relative w-full aspect-video bg-gray-200 flex items-center justify-center">
            <span className="material-symbols-outlined text-6xl text-gray-400">image</span>
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
              <span className="material-symbols-outlined text-primary text-[16px] icon-filled">favorite</span>
              <span className="text-[13px] font-bold text-blue-900">Sahabat Digital</span>
            </div>
          </div>
          <div className="p-4 flex items-start gap-2.5">
            <span className="material-symbols-outlined text-yellow-500 text-[24px] shrink-0 icon-filled">lightbulb</span>
            <p className="text-[14px] font-bold text-gray-600 leading-snug">
              Bermain dan belajar bersama di dunia digital dengan saling menghormati, mendengarkan, dan saling mendukung.
            </p>
          </div>
        </div>

        {/* 3 Secrets Card */}
        <div className="flex flex-col gap-4 bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[20px] icon-filled">menu_book</span>
            </div>
            <h2 className="text-[18px] font-bold text-blue-900">3 Rahasia Teman Digital yang Hebat</h2>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
              <div className="w-10 h-10 rounded-full bg-white text-green-500 flex items-center justify-center text-[22px] shrink-0 shadow-sm">😊</div>
              <div className="flex flex-col gap-0.5">
                <h3 className="text-[18px] font-bold text-blue-900">1. Kata-kata Baik Membawa Senyuman</h3>
                <p className="text-[16px] text-gray-600 leading-relaxed">Jika kita menulis pesan yang baik dan menyemangati, teman kita akan merasa senang, tenang, dan aman bermain bersama.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
              <div className="w-10 h-10 rounded-full bg-white text-red-500 flex items-center justify-center text-[22px] shrink-0 shadow-sm">🚫</div>
              <div className="flex flex-col gap-0.5">
                <h3 className="text-[18px] font-bold text-blue-900">2. Bercanda yang Sakit Bukanlah Mainan</h3>
                <p className="text-[16px] text-gray-600 leading-relaxed">Kalau temanmu merasa sedih, tersinggung, atau menangis karena terus diejek, itu bukan bercanda biasa. Itu namanya perundungan siber (cyberbullying).</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
              <div className="w-10 h-10 rounded-full bg-white text-yellow-500 flex items-center justify-center text-[22px] shrink-0 shadow-sm">⭐</div>
              <div className="flex flex-col gap-0.5">
                <h3 className="text-[18px] font-bold text-blue-900">3. Jadilah Pahlawan Kebaikan</h3>
                <p className="text-[16px] text-gray-600 leading-relaxed">Jangan ikut menertawakan! Segera beri kata-kata semangat ke temanmu dan lapor ke guru atau orang tua bila melihat teman disakiti.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Message */}
        <div className="relative overflow-hidden bg-blue-100 rounded-2xl p-4 shadow-sm mb-4">
          <div className="flex items-start gap-3 relative z-10">
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shrink-0 shadow-md">
              <span className="material-symbols-outlined text-[24px]">verified</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[13px] font-bold text-blue-800 tracking-wider uppercase">Pesan Super Penting</span>
              <p className="text-[20px] font-extrabold text-blue-900 leading-snug">
                “Jangan ketik apa yang tidak ingin kamu dengar langsung!”
              </p>
              <p className="text-[16px] text-blue-800 mt-1">
                Bayangkan temanmu sedang duduk tepat di depanmu sebelum mengirim komentar atau pesan singkat.
              </p>
            </div>
          </div>
        </div>

      </main>

      {/* Floating Bottom Button */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md shadow-[0_-8px_24px_rgba(30,58,138,0.08)] p-4 pb-safe">
        <div className="max-w-md mx-auto flex flex-col gap-1">
          <button 
            onClick={() => navigate('/latihan')}
            className="w-full h-14 rounded-xl bg-primary text-white font-bold text-[17px] shadow-[0_4px_0_#1D4ED8] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2"
          >
            <span>Lanjut ke Latihan</span>
            <span className="text-xl">🚀</span>
          </button>
          <div className="text-center mt-1">
            <span className="text-[13px] font-semibold text-gray-500">Uji pemahamanmu • Raih medali penjelajah digital</span>
          </div>
        </div>
      </div>
    </div>
  );
}