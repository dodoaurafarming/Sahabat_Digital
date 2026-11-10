import { useState } from 'react';
import Button from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-surface-container-low flex flex-col relative overflow-hidden select-none">
      
      {/* Playful Ambient Background */}
      <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute top-1/3 -right-16 w-56 h-56 bg-yellow-200/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 left-10 w-44 h-44 bg-blue-200/40 rounded-full blur-2xl pointer-events-none"></div>

      <main className="flex-1 flex flex-col px-5 py-6 max-w-md mx-auto w-full z-10 justify-between">
        
        {/* Top Badge */}
        <div className="w-full flex items-center justify-center pt-2">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white rounded-full shadow-sm text-blue-900">
            <span className="material-symbols-outlined text-primary text-[18px] icon-filled">verified_user</span>
            <span className="font-bold text-[14px]">Ruang Aman Anak Hebat SD</span>
          </div>
        </div>

        {/* Central Visual */}
        <div className="flex flex-col items-center justify-center w-full my-auto text-center">
          <div className="relative group cursor-pointer transition-transform duration-300 hover:scale-[1.02] active:scale-95">
            <div className="absolute inset-0 bg-primary/15 rounded-full blur-xl transform scale-110"></div>
            <div className="relative w-44 h-44 rounded-full bg-white flex items-center justify-center p-4 shadow-[0_12px_30px_-6px_rgba(30,58,138,0.12)]">
              <div className="w-full h-full rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                <span className="material-symbols-outlined text-6xl">child_care</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col items-center">
            <h1 className="text-[26px] font-extrabold text-blue-900 tracking-tight text-center">
              Sahabat Digital
            </h1>
            <p className="text-[20px] text-gray-800 mt-3 max-w-[320px] leading-snug font-extrabold text-center">
              Mari ciptakan ruang digital yang aman dan bebas bullying bersama-sama!
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="w-full flex flex-col items-center gap-3 pt-4 pb-4">
          <Button onClick={() => setIsModalOpen(true)} icon="rocket_launch">
            Mulai Petualangan
          </Button>
          <p className="text-[13px] font-semibold text-gray-500 text-center flex items-center justify-center gap-1 mt-2">
            <span className="material-symbols-outlined text-primary text-[16px]">info</span>
            Klik Mulai untuk memilih peran sebagai Siswa atau Guru
          </p>
        </div>
      </main>

      {/* Modal Bottom Sheet */}
      <div 
        className={`fixed inset-0 bg-[#1E3A8A]/45 backdrop-blur-sm z-50 flex flex-col justify-end items-center transition-opacity duration-200 p-4 ${isModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={(e) => { if (e.target === e.currentTarget) setIsModalOpen(false) }}
      >
        <div className={`w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl flex flex-col gap-4 transform transition-transform duration-200 ${isModalOpen ? 'translate-y-0' : 'translate-y-8'}`}>
          
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-[20px] font-extrabold text-blue-900">Pilih Peranmu!</h2>
              <p className="text-[16px] text-gray-500">Siapakah kamu hari ini?</p>
            </div>
            <button onClick={() => setIsModalOpen(false)} className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200">
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          <div className="grid grid-cols-1 gap-3 mt-2">
            {/* Siswa Option */}
            <button onClick={() => navigate('/login-siswa')} className="flex items-center gap-4 p-3.5 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors text-left group">
              <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shadow-[0_3px_0_#1D4ED8] shrink-0">
                <span className="material-symbols-outlined text-[26px]">school</span>
              </div>
              <div className="flex-1">
                <div className="font-bold text-[18px] text-gray-900 group-hover:text-primary">Saya Siswa</div>
                <div className="text-[13px] font-semibold text-gray-500">Belajar seru, main kuis & curhat aman</div>
              </div>
              <span className="material-symbols-outlined text-gray-300 group-hover:text-primary text-[20px]">chevron_right</span>
            </button>

            {/* Guru Option */}
            <button onClick={() => navigate('/login-guru')} className="flex items-center gap-4 p-3.5 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors text-left group">
              <div className="w-12 h-12 rounded-xl bg-yellow-400 text-yellow-900 flex items-center justify-center shadow-[0_3px_0_#D97706] shrink-0">
                <span className="material-symbols-outlined text-[26px]">supervisor_account</span>
              </div>
              <div className="flex-1">
                <div className="font-bold text-[18px] text-gray-900 group-hover:text-primary">Saya Guru / Konselor</div>
                <div className="text-[13px] font-semibold text-gray-500">Pantau ruang curhat & modul ajar</div>
              </div>
              <span className="material-symbols-outlined text-gray-300 group-hover:text-primary text-[20px]">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}