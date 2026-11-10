import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginSiswa() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [name, setName] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;
    
    setIsLoading(true);
    
    // Simulasi proses login
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      
      // Berpindah ke Dashboard setelah animasi sukses selesai
      setTimeout(() => {
        navigate('/dashboard-siswa');
      }, 1000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-surface-container-low flex flex-col">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-surface-container-low/90 backdrop-blur-xl shadow-sm">
        <div className="h-16 px-4 flex items-center justify-between max-w-md mx-auto w-full">
          <button 
            onClick={() => navigate('/')} 
            className="w-11 h-11 rounded-full bg-white text-primary flex items-center justify-center shadow-sm active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
          <div className="flex-1 text-center font-bold text-gray-800 text-[18px]">Student Login</div>
          <div className="w-11"></div>
        </div>
      </header>

      <main className="flex-1 flex flex-col relative w-full pt-16 pb-8">
        <div className="w-full max-w-md mx-auto px-4 flex flex-col items-center">
          
          {/* Mascot Section */}
          <div className="flex flex-col items-center mb-6 relative mt-4">
            {/* Efek Glow di belakang */}
            <div className="absolute -top-3 w-44 h-44 rounded-full bg-primary/20 blur-xl"></div>
            
            {/* Wadah Relatif untuk Foto dan Badge */}
            <div className="relative">
              
              {/* Foto / Ikon */}
              <div className="w-40 h-40 rounded-full bg-white p-2 shadow-lg flex items-center justify-center overflow-hidden">
                <div className="w-full h-full rounded-full bg-blue-100 flex items-center justify-center">
                   <span className="material-symbols-outlined text-6xl text-blue-400">face</span>
                </div>
              </div>

              {/* Badge Kuning Timbul */}
              <div className="absolute bottom-1 -right-2 bg-yellow-300 text-yellow-900 rounded-full px-2 py-0.5 shadow-md flex items-center gap-0.5 animate-bounce z-10">
                <span className="material-symbols-outlined text-[16px]">waving_hand</span>
                <span className="font-bold text-[11px]">Hai!</span>
              </div>

            </div>

            <div className="text-center mt-5">
              <h1 className="text-[24px] font-extrabold text-primary tracking-tight">Halo, Teman Baik!</h1>
              <p className="text-[16px] text-gray-500 mt-1 max-w-[280px] mx-auto leading-snug">
                Yuk isi namamu dan mulai petualangan seru hari ini!
              </p>
            </div>
          </div>

          {/* Form Card */}
          <div className="w-full bg-white rounded-3xl p-6 shadow-xl mb-6">
            <form onSubmit={handleLogin} className="flex flex-col gap-5">
              
              {/* Name Input */}
              <div className="flex flex-col gap-1.5">
                <label className="flex items-center gap-1.5 font-bold text-[14px] text-gray-600 ml-1">
                  <span className="material-symbols-outlined text-primary text-[20px] icon-filled">sentiment_very_satisfied</span>
                  Nama Panggilan
                </label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ketik nama panggilanmu di sini..." 
                  required
                  className="w-full h-[52px] bg-surface-container-low text-gray-800 placeholder:text-gray-400 font-medium px-4 rounded-xl shadow-inner focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all"
                />
              </div>

              {/* Grade Select */}
              <div className="flex flex-col gap-1.5">
                <label className="flex items-center gap-1.5 font-bold text-[14px] text-gray-600 ml-1">
                  <span className="material-symbols-outlined text-primary text-[20px] icon-filled">school</span>
                  Kelas
                </label>
                <div className="relative">
                  <select 
                    required
                    className="w-full h-[52px] bg-surface-container-low text-gray-800 font-medium px-4 rounded-xl appearance-none shadow-inner focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all cursor-pointer pr-12"
                  >
                    <option value="" disabled defaultValue="">Pilih kelasmu sekarang...</option>
                    <option value="1">🎒 Kelas 1 SD</option>
                    <option value="2">✏️ Kelas 2 SD</option>
                    <option value="3">📚 Kelas 3 SD</option>
                    <option value="4">🎨 Kelas 4 SD</option>
                    <option value="5">🔬 Kelas 5 SD</option>
                    <option value="6">🌟 Kelas 6 SD</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-primary">
                    <span className="material-symbols-outlined text-[24px]">arrow_drop_down_circle</span>
                  </div>
                </div>
                <div className="flex items-start gap-1.5 ml-1 mt-0.5">
                  <span className="material-symbols-outlined text-primary text-[15px] shrink-0 mt-0.5">info</span>
                  <p className="text-[13px] font-semibold text-gray-500 leading-tight">
                    Pilihan kelas penting untuk menyesuaikan ruang curhat & kuis belajarmu.
                  </p>
                </div>
              </div>

              {/* Password Input */}
              <div className="flex flex-col gap-1.5">
                <label className="flex items-center gap-1.5 font-bold text-[14px] text-gray-600 ml-1">
                  <span className="material-symbols-outlined text-primary text-[20px] icon-filled">lock</span>
                  Kata Sandi
                </label>
                <div className="relative w-full flex items-center">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Masukkan kata sandi rahasiamu" 
                    required
                    className="w-full h-[52px] bg-surface-container-low text-gray-800 placeholder:text-gray-400 font-medium pl-4 pr-12 rounded-xl shadow-inner focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-primary transition-colors rounded-full"
                  >
                    <span className="material-symbols-outlined text-[22px]">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={isLoading || isSuccess}
                  className={`w-full h-14 font-bold text-[17px] rounded-xl flex items-center justify-center gap-2 transition-all duration-300
                    ${isSuccess 
                      ? 'bg-green-500 text-white shadow-[0_5px_0_#059669]' 
                      : 'bg-primary text-white shadow-[0_5px_0_#004395,0_12px_20px_rgba(0,88,190,0.3)] active:translate-y-1 active:shadow-[0_1px_0_#004395]'
                    }
                  `}
                >
                  {isLoading ? (
                    <>
                      <span className="material-symbols-outlined animate-spin text-[22px]">progress_activity</span>
                      <span>Membuka Gerbang...</span>
                    </>
                  ) : isSuccess ? (
                    <>
                      <span>Selamat Datang, {name}!</span>
                      <span className="material-symbols-outlined text-[24px]">celebration</span>
                    </>
                  ) : (
                    <>
                      <span>Masuk</span>
                      <span className="material-symbols-outlined text-[24px]">rocket_launch</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>

          {/* Footer Info */}
          <div className="w-full flex items-center justify-center gap-2 p-3 rounded-full bg-blue-50 text-center">
            <span className="material-symbols-outlined text-primary text-[20px] icon-filled">verified_user</span>
            <span className="text-[13px] font-semibold text-blue-900">Ruang aman & bersahabat untuk seluruh murid SD</span>
          </div>

        </div>
      </main>
    </div>
  );
}