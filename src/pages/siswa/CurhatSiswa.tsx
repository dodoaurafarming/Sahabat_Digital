import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/layout/BottomNav';

export default function CurhatSiswa() {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    alert('Pesan rahasiamu terkirim ke Ibu Rahma! (Simulasi)');
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-surface-container-low flex flex-col pb-36">
      
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
            <div className="relative flex items-center">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-500 text-[18px]">person</span>
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full ring-2 ring-white"></span>
              </div>
              <div className="ml-2 flex flex-col">
                <div className="flex items-center gap-1.5">
                  <h1 className="text-[18px] font-bold text-gray-800 leading-tight tracking-tight">Ruang Curhat</h1>
                  <span className="material-symbols-outlined text-primary text-[16px]">verified</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-[13px] font-semibold text-gray-500">Aktif • Sahabat Guru</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-md mx-auto px-4 pt-20 flex flex-col gap-3">
        
        {/* Privacy Notice */}
        <div className="flex items-center justify-between bg-blue-50 px-4 py-2.5 rounded-2xl shadow-sm">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white shadow-sm">
              <span className="material-symbols-outlined text-[16px]">lock</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[14px] font-bold text-blue-900 leading-tight">Percakapan 100% Rahasia & Aman</span>
              <span className="text-[13px] font-semibold text-blue-700 leading-tight">Hanya kamu dan Ibu Rahma yang dapat membaca</span>
            </div>
          </div>
          <div className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span className="text-[13px] font-bold text-gray-600">Terlindungi</span>
          </div>
        </div>

        {/* Class Notice */}
        <div className="bg-white p-3 rounded-2xl shadow-sm flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[16px]">verified_user</span>
              </div>
              <span className="text-[14px] font-extrabold text-gray-800">Siswa Kelas 4 - 6</span>
            </div>
            <span className="bg-blue-50 text-primary text-[13px] px-2.5 py-0.5 rounded-full font-bold">Mode Ketik Mandiri Aktif</span>
          </div>
          <div className="flex items-start gap-2 bg-gray-50 p-2 rounded-xl">
            <span className="material-symbols-outlined text-gray-500 text-[18px] shrink-0">info</span>
            <p className="text-[13px] font-semibold text-gray-500 leading-relaxed">
              <strong className="font-bold text-gray-700">Catatan Ramah Anak:</strong> Untuk adik-adik Kelas 1-3, tersedia mode 'Bicara Suara / Panggilan Dampingan Guru' bersama orang tua.
            </p>
          </div>
        </div>

        {/* Chat Feed */}
        <div className="flex flex-col gap-4 mt-2">
          
          <div className="flex items-center justify-center my-1">
            <span className="px-3.5 py-1 bg-gray-200/80 rounded-full text-[13px] font-bold text-gray-500 shadow-sm">Hari Ini, 24 Mei 2026</span>
          </div>

          {/* Welcome Bubble */}
          <div className="bg-white p-4 rounded-3xl shadow-sm flex gap-3 items-start">
            <div className="w-10 h-10 rounded-2xl bg-blue-100 flex items-center justify-center text-primary shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-[24px]">favorite</span>
            </div>
            <div className="flex flex-col">
              <h2 className="text-[18px] font-bold text-primary">Ruang Curhat Sahabat</h2>
              <p className="text-[16px] text-gray-600 mt-1 leading-relaxed">
                Ceritakan apa pun yang membuatmu cemas, takut, atau tidak nyaman di sekolah atau gawai. Ibu Rahma siap mendengarkan dan melindungimu selalu!
              </p>
            </div>
          </div>

          {/* Teacher Message */}
          <div className="flex items-end gap-2.5 max-w-[88%] mr-auto">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-primary shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-[18px]">school</span>
            </div>
            <div className="flex flex-col gap-1 items-start">
              <div className="bg-white p-3.5 rounded-3xl rounded-bl-sm shadow-sm">
                <p className="text-[16px] text-gray-800 leading-relaxed">
                  Halo Budi! Ada apa hari ini? Kalau ada teman yang mengejek atau berbuat jahat kepadamu di kelas atau grup WhatsApp, jangan takut cerita ke Ibu ya.
                </p>
              </div>
              <span className="text-[13px] font-semibold text-gray-400 px-1.5">09:15</span>
            </div>
          </div>

          {/* Student Message */}
          <div className="flex items-end gap-2 max-w-[88%] ml-auto justify-end mt-2">
            <div className="flex flex-col gap-1 items-end">
              <div className="bg-primary text-white p-3.5 rounded-3xl rounded-br-sm shadow-md">
                <p className="text-[16px] leading-relaxed">
                  Halo Bu Rahma... Kemarin di grup WA kelas ada teman yang bikin stiker foto saya lalu diejek ramai-ramai. Saya sedih dan takut besok masuk sekolah 😢
                </p>
              </div>
              <div className="flex items-center gap-1 px-1.5">
                <span className="text-[13px] font-semibold text-gray-400">09:20</span>
                <span className="material-symbols-outlined text-primary text-[15px]">done_all</span>
              </div>
            </div>
          </div>

          {/* Feeling Prompt */}
          <div className="bg-gray-100/70 p-3 rounded-2xl flex flex-col gap-2 mt-2">
            <div className="flex items-center justify-between">
              <span className="text-[14px] font-bold text-gray-600">Bagaimana perasaanmu sekarang?</span>
              <span className="text-[13px] text-gray-400 font-semibold">Ketuk untuk kirim stiker</span>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              <button onClick={() => setMessage('😊 Lebih Tenang')} className="px-3 py-1.5 rounded-full bg-white text-gray-800 text-[14px] font-bold flex items-center gap-1.5 shadow-sm active:scale-95 transition-all">
                <span>😊</span> Lebih Tenang
              </button>
              <button onClick={() => setMessage('😰 Masih Takut')} className="px-3 py-1.5 rounded-full bg-white text-gray-800 text-[14px] font-bold flex items-center gap-1.5 shadow-sm active:scale-95 transition-all">
                <span>😰</span> Masih Takut
              </button>
              <button onClick={() => setMessage('❤️ Terima Kasih Bu')} className="px-3 py-1.5 rounded-full bg-white text-gray-800 text-[14px] font-bold flex items-center gap-1.5 shadow-sm active:scale-95 transition-all">
                <span>❤️</span> Terima Kasih Bu
              </button>
            </div>
          </div>

        </div>
      </main>

      {/* Chat Input Dock */}
      <div className="fixed bottom-20 left-0 right-0 z-40 px-4 max-w-md mx-auto w-full">
        <form onSubmit={handleSend} className="bg-white/95 backdrop-blur-xl p-2 rounded-full shadow-lg flex items-center gap-1.5">
          <button type="button" className="w-11 h-11 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 active:scale-90 transition-all shrink-0">
            <span className="material-symbols-outlined text-[22px]">attach_file</span>
          </button>
          <button type="button" className="w-11 h-11 rounded-full flex items-center justify-center text-yellow-600 hover:bg-gray-100 active:scale-90 transition-all shrink-0">
            <span className="material-symbols-outlined text-[22px]">mood</span>
          </button>
          <input 
            type="text" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tulis ceritamu di sini dengan tenang..." 
            className="flex-1 bg-gray-50 px-4 py-2.5 rounded-full text-gray-800 placeholder:text-gray-400 text-[16px] outline-none focus:bg-gray-100 transition-all"
          />
          <button 
            type="submit" 
            className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_4px_0_#004395] active:translate-y-1 active:shadow-[0_1px_0_#004395] transition-all shrink-0"
          >
            <span className="material-symbols-outlined text-[20px] ml-0.5">send</span>
          </button>
        </form>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}