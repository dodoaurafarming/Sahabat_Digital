import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PengaturanAkun() {
  const navigate = useNavigate();
  const [showPassOld, setShowPassOld] = useState(false);
  const [showPassNew, setShowPassNew] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(1);

  // Simulasi daftar avatar
  const avatars = [
    { id: 1, color: 'bg-blue-100', icon: 'face' },
    { id: 2, color: 'bg-green-100', icon: 'face_3' },
    { id: 3, color: 'bg-yellow-100', icon: 'face_4' },
    { id: 4, color: 'bg-red-100', icon: 'face_5' },
    { id: 5, color: 'bg-purple-100', icon: 'face_6' },
    { id: 6, color: 'bg-blue-50', icon: 'face_2' },
    { id: 7, color: 'bg-orange-100', icon: 'face_5' },
    { id: 8, color: 'bg-teal-100', icon: 'smart_toy' },
  ];

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  return (
    <div className="min-h-screen bg-surface-container-low flex flex-col">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm">
        <div className="h-16 px-4 flex items-center justify-between max-w-md mx-auto w-full">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => navigate('/profil-siswa')}
              className="w-11 h-11 rounded-full flex items-center justify-center text-primary bg-gray-50 hover:bg-gray-100 active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[24px]">arrow_back</span>
            </button>
            <h1 className="text-[20px] font-extrabold text-gray-800">Pengaturan</h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[18px]">verified_user</span>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-md mx-auto px-4 pt-20 pb-8 flex flex-col gap-4">
        
        {/* Toast Notification */}
        <div className={`fixed top-20 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-11/12 max-w-sm ${showToast ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <div className="bg-green-500 text-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3">
            <span className="material-symbols-outlined text-[24px]">check_circle</span>
            <p className="text-[14px] font-bold">Perubahan profil kamu berhasil disimpan!</p>
          </div>
        </div>

        {/* Card 1: Avatar Selector */}
        <div className="bg-white rounded-3xl p-5 shadow-sm flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-[20px] font-extrabold text-gray-800">Pilih Avatar Karakter</h2>
              <p className="text-[13px] font-semibold text-gray-500">Pilih gambar profil favoritmu</p>
            </div>
            <div className="relative">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center shadow-inner">
                 <span className="material-symbols-outlined text-3xl text-blue-500">
                    {avatars.find(a => a.id === selectedAvatar)?.icon}
                 </span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-[13px] font-bold">check</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2.5 pt-1">
            {avatars.map((av) => (
              <button 
                key={av.id}
                onClick={() => setSelectedAvatar(av.id)}
                className="group relative aspect-square rounded-2xl p-1 bg-gray-50 transition-all duration-150 active:scale-95 flex items-center justify-center shadow-sm"
              >
                <div className={`w-full h-full rounded-xl overflow-hidden flex items-center justify-center ${av.color}`}>
                   <span className="material-symbols-outlined text-3xl opacity-70">
                      {av.icon}
                   </span>
                </div>
                {selectedAvatar === av.id && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center shadow-md">
                    <span className="material-symbols-outlined text-[13px]">check</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Card 2: Change Password */}
        <div className="bg-white rounded-3xl p-5 shadow-sm flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[20px] icon-filled">lock</span>
            </div>
            <h2 className="text-[20px] font-extrabold text-gray-800">Ubah Kata Sandi</h2>
          </div>

          <div className="flex flex-col gap-3">
            {/* Old Pass */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[14px] font-bold text-gray-800">Kata Sandi Lama</label>
              <div className="relative flex items-center">
                <input type={showPassOld ? "text" : "password"} placeholder="Masukkan kata sandi lama" className="w-full h-12 pl-4 pr-11 bg-gray-50 rounded-2xl text-[16px] text-gray-800 placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-inner" />
                <button type="button" onClick={() => setShowPassOld(!showPassOld)} className="absolute right-2 w-9 h-9 flex items-center justify-center text-gray-400 hover:text-primary active:scale-90 transition-transform">
                  <span className="material-symbols-outlined text-[20px]">{showPassOld ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
            </div>

            {/* New Pass */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[14px] font-bold text-gray-800">Kata Sandi Baru</label>
              <div className="relative flex items-center">
                <input type={showPassNew ? "text" : "password"} placeholder="Minimal 6 karakter mudah diingat" className="w-full h-12 pl-4 pr-11 bg-gray-50 rounded-2xl text-[16px] text-gray-800 placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-inner" />
                <button type="button" onClick={() => setShowPassNew(!showPassNew)} className="absolute right-2 w-9 h-9 flex items-center justify-center text-gray-400 hover:text-primary active:scale-90 transition-transform">
                  <span className="material-symbols-outlined text-[20px]">{showPassNew ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
            </div>

            {/* Confirm Pass */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[14px] font-bold text-gray-800">Konfirmasi Kata Sandi Baru</label>
              <div className="relative flex items-center">
                <input type={showPassConfirm ? "text" : "password"} placeholder="Ulangi kata sandi baru" className="w-full h-12 pl-4 pr-11 bg-gray-50 rounded-2xl text-[16px] text-gray-800 placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all shadow-inner" />
                <button type="button" onClick={() => setShowPassConfirm(!showPassConfirm)} className="absolute right-2 w-9 h-9 flex items-center justify-center text-gray-400 hover:text-primary active:scale-90 transition-transform">
                  <span className="material-symbols-outlined text-[20px]">{showPassConfirm ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gray-50 rounded-2xl p-3 flex items-start gap-2.5 mt-1">
              <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5 icon-filled">lightbulb</span>
              <p className="text-[13px] font-semibold text-gray-500 leading-snug">Gunakan kata sandi yang mudah kamu ingat tetapi sulit ditebak orang lain.</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col items-center gap-3 pt-2">
          <button 
            onClick={handleSave}
            className="w-full h-[52px] bg-primary text-white font-bold text-[17px] rounded-full flex items-center justify-center shadow-[0_4px_0_#2563EB] active:translate-y-1 active:shadow-none transition-all gap-2"
          >
            <span className="material-symbols-outlined text-[20px]">save</span>
            <span>Simpan Perubahan</span>
          </button>
          <button 
            onClick={() => navigate('/profil-siswa')}
            className="py-2 px-6 font-bold text-[14px] text-gray-500 hover:text-primary active:scale-95 transition-colors"
          >
            Batal
          </button>
        </div>

      </main>
    </div>
  );
}