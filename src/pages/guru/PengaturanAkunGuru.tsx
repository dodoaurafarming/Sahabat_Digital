import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PengaturanAkunGuru() {
  const navigate = useNavigate();
  const [showOldPin, setShowOldPin] = useState(false);
  const [showNewPin, setShowNewPin] = useState(false);
  const [showConfirmPin, setShowConfirmPin] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [notifActive, setNotifActive] = useState(true);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 2000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-surface-container-low flex flex-col">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-xl shadow-sm">
        <div className="h-16 px-4 flex items-center justify-between max-w-md mx-auto w-full">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => navigate('/profil-guru')}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-primary hover:bg-gray-100 active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[22px]">arrow_back</span>
            </button>
            <h1 className="text-[20px] font-extrabold text-gray-800">Pengaturan Akun</h1>
          </div>
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center ring-2 ring-blue-200">
            <span className="material-symbols-outlined text-blue-500 text-[18px]">person</span>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-md mx-auto px-4 pt-20 pb-8 flex flex-col gap-4">
        
        {/* Profile Card Header */}
        <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-4">
          <div className="relative flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center p-0.5 shadow-sm ring-2 ring-blue-100">
               <span className="material-symbols-outlined text-4xl text-blue-400">face_3</span>
            </div>
            <button className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center shadow-md active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-[15px]">photo_camera</span>
            </button>
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <span className="inline-flex items-center gap-1 bg-blue-50 px-2.5 py-0.5 rounded-full text-[13px] font-bold text-primary w-fit mb-1">
              <span className="material-symbols-outlined text-[14px] icon-filled">verified</span>
              Fasilitator Resmi
            </span>
            <h2 className="text-[18px] font-extrabold text-gray-800 truncate">Rahmawati, S.Pd.</h2>
            <p className="text-[13px] font-semibold text-gray-500">NIP: 19890412 201402 2 003</p>
          </div>
        </div>

        <form onSubmit={handleSave} className="flex flex-col gap-4">
          
          {/* Card 1: Data Diri */}
          <div className="bg-white rounded-2xl p-5 shadow-sm flex flex-col gap-4">
            <div className="flex items-center gap-3 pb-2 border-b border-gray-100">
              <div className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[20px]">badge</span>
              </div>
              <div>
                <h3 className="text-[18px] font-extrabold text-gray-800">Data Tampilan Guru</h3>
                <p className="text-[13px] font-semibold text-gray-500">Identitas yang dilihat murid</p>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[14px] font-bold text-gray-800">Nama Lengkap & Gelar</label>
              <input type="text" defaultValue="Rahmawati, S.Pd." className="w-full h-12 bg-gray-50 rounded-xl px-4 text-[16px] font-medium text-gray-800 border border-transparent focus:border-blue-300 focus:bg-white focus:outline-none transition-all" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[14px] font-bold text-gray-800">Nama Panggilan / Sapaan</label>
              <input type="text" defaultValue="Ibu Rahma" className="w-full h-12 bg-gray-50 rounded-xl px-4 text-[16px] font-medium text-gray-800 border border-transparent focus:border-blue-300 focus:bg-white focus:outline-none transition-all" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[14px] font-bold text-gray-800 flex items-center justify-between">
                Unit Sekolah & Kelas
                <span className="text-[13px] font-semibold text-gray-400 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">lock</span> Terkunci
                </span>
              </label>
              <input type="text" value="SDIT Sahabat Bangsa - Kelas 5B" disabled className="w-full h-12 bg-gray-100 rounded-xl px-4 text-[16px] font-medium text-gray-500 cursor-not-allowed" />
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="material-symbols-outlined text-green-500 text-[15px] icon-filled">check_circle</span>
                <p className="text-[13px] font-semibold text-gray-500">Diverifikasi oleh administrator sekolah.</p>
              </div>
            </div>
          </div>

          {/* Card 2: Keamanan PIN */}
          <div className="bg-white rounded-2xl p-5 shadow-sm flex flex-col gap-4">
            <div className="flex items-center gap-3 pb-2 border-b border-gray-100">
              <div className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[20px]">security</span>
              </div>
              <div>
                <h3 className="text-[18px] font-extrabold text-gray-800">Keamanan & Kode Akses</h3>
                <p className="text-[13px] font-semibold text-gray-500">PIN 6 digit otentikasi portal guru</p>
              </div>
            </div>

            <div className="bg-blue-50/50 rounded-xl p-3 flex items-start gap-2.5">
              <span className="material-symbols-outlined text-primary text-[20px] mt-0.5 flex-shrink-0 icon-filled">tips_and_updates</span>
              <p className="text-[13px] font-semibold text-blue-800 leading-relaxed">
                Gunakan 6 digit angka rahasia yang mudah diingat untuk mempercepat masuk saat memvalidasi laporan.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[14px] font-bold text-gray-800">PIN Lama</label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3.5 text-gray-400 text-[20px]">lock</span>
                <input type={showOldPin ? "text" : "password"} placeholder="••••••" className="w-full h-12 bg-gray-50 rounded-xl pl-11 pr-11 text-[16px] tracking-widest text-gray-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all border border-transparent" />
                <button type="button" onClick={() => setShowOldPin(!showOldPin)} className="absolute right-3 text-gray-400 hover:text-primary">
                  <span className="material-symbols-outlined text-[20px]">{showOldPin ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[14px] font-bold text-gray-800">PIN Baru (6 Digit)</label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3.5 text-gray-400 text-[20px]">key</span>
                <input type={showNewPin ? "text" : "password"} placeholder="Masukkan 6 angka baru" className="w-full h-12 bg-gray-50 rounded-xl pl-11 pr-11 text-[16px] tracking-widest text-gray-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all border border-transparent" />
                <button type="button" onClick={() => setShowNewPin(!showNewPin)} className="absolute right-3 text-gray-400 hover:text-primary">
                  <span className="material-symbols-outlined text-[20px]">{showNewPin ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[14px] font-bold text-gray-800">Konfirmasi PIN Baru</label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3.5 text-gray-400 text-[20px]">pin</span>
                <input type={showConfirmPin ? "text" : "password"} placeholder="Ulangi 6 angka baru" className="w-full h-12 bg-gray-50 rounded-xl pl-11 pr-11 text-[16px] tracking-widest text-gray-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all border border-transparent" />
                <button type="button" onClick={() => setShowConfirmPin(!showConfirmPin)} className="absolute right-3 text-gray-400 hover:text-primary">
                  <span className="material-symbols-outlined text-[20px]">{showConfirmPin ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Toggle Notifikasi */}
          <div className="bg-white rounded-2xl p-5 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[20px]">notifications_active</span>
              </div>
              <div>
                <p className="text-[14px] font-bold text-gray-800">Notifikasi Konseling</p>
                <p className="text-[13px] font-semibold text-gray-500">Pemberitahuan curhat baru</p>
              </div>
            </div>
            <button 
              type="button"
              onClick={() => setNotifActive(!notifActive)}
              className={`w-12 h-7 rounded-full relative transition-colors duration-200 focus:outline-none shadow-inner ${notifActive ? 'bg-primary' : 'bg-gray-200'}`}
            >
              <span className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-all duration-200 shadow-sm ${notifActive ? 'right-1' : 'left-1'}`}></span>
            </button>
          </div>

          {/* Tombol Simpan */}
          <div className="pt-2">
            <button 
              type="submit"
              disabled={isSaving || isSaved}
              className={`w-full h-14 rounded-full font-bold text-[17px] flex items-center justify-center gap-2 transition-all duration-300
                ${isSaved 
                  ? 'bg-green-500 text-white shadow-[0_4px_0_#059669]' 
                  : 'bg-primary text-white shadow-[0_4px_0_#1D4ED8] active:translate-y-1 active:shadow-none hover:bg-blue-700'
                }
              `}
            >
              {isSaving ? (
                <>
                  <span className="material-symbols-outlined animate-spin text-[22px]">progress_activity</span>
                  <span>Menyimpan...</span>
                </>
              ) : isSaved ? (
                <>
                  <span className="material-symbols-outlined text-[22px]">task_alt</span>
                  <span>Berhasil Disimpan!</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[22px] icon-filled">check_circle</span>
                  <span>Simpan Perubahan</span>
                </>
              )}
            </button>
            <p className="text-center text-[13px] font-semibold text-gray-400 mt-3 flex items-center justify-center gap-1">
              <span className="material-symbols-outlined text-[15px]">verified_user</span>
              Data tersimpan aman sesuai protokol
            </p>
          </div>

        </form>
      </main>
    </div>
  );
}