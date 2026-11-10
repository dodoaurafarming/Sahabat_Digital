import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginGuru() {
  const navigate = useNavigate();
  const [pin, setPin] = useState(['', '', '', '', '', '']);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handlePinChange = (index: number, value: string) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    if (!numericValue) return;
    const newPin = [...pin];
    newPin[index] = numericValue.substring(numericValue.length - 1);
    setPin(newPin);
    if (index < 5) inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !pin[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleLogin = () => {
    if (isLoading) return;
    setIsLoading(true);

    // SIMULASI LOGIN GURU
    setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem('token', 'dummy-token-guru');
      navigate('/dashboard-guru');
    }, 1000);
  };

  const isPinComplete = pin.every((digit) => digit !== '');

  return (
    <div className="min-h-screen bg-surface-container-low flex flex-col">
      <header className="w-full flex items-center justify-between pt-4 px-4 pb-2 max-w-md mx-auto">
        <button onClick={() => navigate('/')} className="w-11 h-11 rounded-full bg-white text-primary flex items-center justify-center shadow-sm active:scale-95 transition-all">
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>
        <div className="flex-1 text-center font-bold text-gray-800 text-[18px]">Teacher Login</div>
        <div className="w-11"></div>
      </header>

      <main className="flex-1 flex flex-col w-full max-w-md mx-auto px-4 pb-8 space-y-6">
        <div className="bg-white rounded-3xl p-6 shadow-md border border-white/60 flex flex-col items-center text-center mt-4">
          
          <div className="relative w-36 h-36 mb-4 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-blue-100 scale-105 animate-pulse"></div>
            <div className="relative w-32 h-32 rounded-full overflow-hidden bg-blue-50 border-4 border-white shadow-md flex items-center justify-center">
              <span className="material-symbols-outlined text-6xl text-blue-400">person</span>
            </div>
            <div className="absolute bottom-0 right-2 bg-yellow-400 text-yellow-900 rounded-full p-1.5 shadow-md flex items-center justify-center border-2 border-white">
              <span className="material-symbols-outlined text-[18px] icon-filled">verified</span>
            </div>
          </div>

          <h1 className="text-[24px] font-extrabold text-primary mb-1.5">Halo, Bapak/Ibu Guru!</h1>
          <p className="text-[16px] text-gray-500 max-w-xs mb-6">Masukkan 6 digit Kode Akses yang diberikan oleh admin</p>

          <div className="w-full mb-6 text-left">
            <div className="flex items-center gap-1.5 mb-3 font-bold text-[14px] text-gray-800 ml-1">
              <span className="material-symbols-outlined text-primary text-[18px]">pin</span>
              Kode Akses Guru
            </div>
            <div className="flex justify-between items-center gap-2 max-w-[320px] mx-auto">
              {pin.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => { inputRefs.current[index] = el; }}
                  type="text" inputMode="numeric" maxLength={1} value={digit}
                  onChange={(e) => handlePinChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-11 h-14 sm:w-12 sm:h-14 rounded-2xl bg-surface-container-low border border-gray-200 text-center text-[26px] font-extrabold text-primary focus:bg-white focus:border-primary focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all shadow-sm"
                />
              ))}
            </div>
            
            <div className="h-6 mt-3 flex items-center justify-center text-[13px] font-semibold text-gray-500 text-center">
              {isPinComplete ? (
                <span className="text-green-500 flex items-center gap-1 font-bold">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span> Kode lengkap, silakan masuk
                </span>
              ) : (
                <span>Ketik 6 digit PIN sekolah yang diberikan admin</span>
              )}
            </div>
          </div>

          <button onClick={handleLogin} disabled={!isPinComplete || isLoading} className={`w-full min-h-[52px] rounded-2xl font-bold text-[17px] flex items-center justify-center gap-2 transition-all duration-200 ${isPinComplete ? 'bg-primary text-white shadow-md hover:bg-blue-700 active:scale-[0.98]' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}>
            {isLoading ? <span className="material-symbols-outlined animate-spin text-[20px]">progress_activity</span> : <><span>Masuk</span><span className="material-symbols-outlined text-[20px] icon-filled">vpn_key</span></>}
          </button>

          <div className="mt-5 flex flex-col items-center space-y-1">
            <span className="text-[13px] font-semibold text-gray-500">Belum menerima kode akses?</span>
            <button onClick={() => setIsHelpOpen(true)} className="text-[14px] font-bold text-primary flex items-center gap-1 hover:underline active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-[18px]">support_agent</span>
              Hubungi Admin Sekolah
            </button>
          </div>
        </div>

        <div className="mx-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-gray-100 border border-gray-200 shadow-sm text-center max-w-sm">
          <span className="material-symbols-outlined text-primary text-[18px] icon-filled">verified_user</span>
          <span className="text-[13px] font-semibold text-gray-600">Ruang aman & terenkripsi khusus pendamping & guru</span>
        </div>
      </main>

      {isHelpOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 w-full max-w-sm text-center shadow-xl space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-blue-50 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[32px]">contact_support</span>
            </div>
            <h2 className="text-[20px] font-extrabold text-gray-900">Bantuan Kode Guru</h2>
            <p className="text-[16px] text-gray-500">Silakan hubungi Penanggung Jawab IT atau Koordinator BK sekolah untuk mendapatkan 6 digit kode akses portal guru.</p>
            <div className="bg-gray-50 rounded-xl p-3 text-left text-[13px] font-semibold text-gray-700 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">call</span>
              Hotline IT: 0812-3456-7890
            </div>
            <button onClick={() => setIsHelpOpen(false)} className="w-full py-3 rounded-full bg-primary text-white font-bold text-[17px] shadow-sm active:translate-y-0.5 transition-all">Mengerti</button>
          </div>
        </div>
      )}
    </div>
  );
}