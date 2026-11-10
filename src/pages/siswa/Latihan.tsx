import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Latihan() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Jawaban yang benar adalah 'B'
  const correctAnswer = 'B';

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Jika benar, lanjut ke halaman selanjutnya
    if (selectedOption === correctAnswer) {
      navigate('/hasil-kuis');
    }
  };

  const isCorrect = selectedOption === correctAnswer;

  return (
    <div className="min-h-screen bg-surface-container-low flex flex-col">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-surface-container-low/90 backdrop-blur-xl shadow-sm">
        <div className="h-16 px-4 flex items-center justify-between gap-2 max-w-md mx-auto w-full">
          <button 
            onClick={() => navigate('/materi')}
            className="w-11 h-11 rounded-full bg-white text-primary flex items-center justify-center shadow-sm active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
          <div className="flex-1 text-center font-bold text-primary text-[18px] truncate">Latihan Soal</div>
          <div className="w-11"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-md mx-auto px-4 pt-20 flex flex-col gap-4 pb-10">
        
        {/* Tracker & Progress */}
        <div className="flex items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm">
            <span className="material-symbols-outlined text-primary text-[18px]">quiz</span>
            <span className="text-[14px] font-bold text-primary">Soal 1 dari 5</span>
          </div>
          <div className="flex-1 max-w-[140px] bg-blue-100 h-3.5 rounded-full p-0.5 overflow-hidden">
            <div className="bg-primary h-full rounded-full transition-all duration-500 ease-out" style={{ width: '20%' }}></div>
          </div>
          <div className="flex items-center gap-1.5 bg-yellow-100 px-3 py-1.5 rounded-full shadow-sm">
            <span className="material-symbols-outlined text-yellow-600 text-[18px] icon-filled">star</span>
            <span className="text-[14px] font-bold text-yellow-900">+10 XP</span>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl p-5 shadow-sm relative overflow-hidden mb-4">
          <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-gray-50 rounded-full pointer-events-none"></div>
          
          <div className="flex items-center justify-between gap-2 mb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-primary text-[13px] font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">menu_book</span>
              <span>Studi Kasus • Level 1</span>
            </div>
            <div className="flex items-center gap-1 text-gray-500 text-[13px] font-bold">
              <span className="material-symbols-outlined text-[16px] text-primary">groups</span>
              <span>Etika Chat Game</span>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center text-primary mt-0.5">
              <span className="material-symbols-outlined text-[28px]">sports_esports</span>
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-[20px] font-extrabold text-gray-800 leading-snug">
                Di grup game online, ada teman yang membuat stiker mengejek foto teman sekelas hingga ia sedih dan keluar dari grup.
              </h2>
              <p className="text-[18px] font-bold text-primary mt-2">
                Apa yang sebaiknya kamu lakukan?
              </p>
            </div>
          </div>
        </div>

        {/* Options */}
        <div className="flex flex-col gap-3 mb-6">
          {['A', 'B', 'C'].map((opt) => {
            const optionText = 
              opt === 'A' ? 'Ikut menertawakan dan membagikan stiker ke grup lain.' :
              opt === 'B' ? 'Menegur dengan sopan di grup dan menyemangati teman yang sedih secara pribadi.' :
              'Pura-pura tidak tahu dan membiarkannya saja.';

            const isSelected = selectedOption === opt;
            const showCorrect = isSelected && opt === correctAnswer;
            const showWrong = isSelected && opt !== correctAnswer;

            return (
              <button 
                key={opt}
                onClick={() => handleSelect(opt)}
                disabled={isModalOpen}
                className={`w-full text-left p-4 rounded-2xl bg-white shadow-[0_4px_0_#c2c6d6] transition-all flex items-start gap-3.5 group
                  ${showCorrect ? 'shadow-[0_4px_0_#10B981] bg-green-50' : ''}
                  ${showWrong ? 'shadow-[0_4px_0_#ba1a1a] bg-red-50' : ''}
                  ${!isSelected ? 'active:translate-y-1 active:shadow-[0_1px_0_#c2c6d6] hover:bg-gray-50' : ''}
                `}
              >
                <div className={`w-10 h-10 rounded-full text-[20px] font-extrabold flex items-center justify-center flex-shrink-0 transition-colors
                  ${showCorrect ? 'bg-green-500 text-white' : ''}
                  ${showWrong ? 'bg-red-500 text-white' : ''}
                  ${!isSelected ? 'bg-gray-100 text-gray-600 group-hover:bg-primary group-hover:text-white' : ''}
                `}>
                  {opt}
                </div>
                <div className="flex-1 min-w-0 pt-1.5">
                  <p className="text-[18px] font-semibold text-gray-800 leading-relaxed">{optionText}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Tips Card */}
        <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 flex-shrink-0">
            <span className="material-symbols-outlined text-[22px]">lightbulb</span>
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-[13px] font-bold text-yellow-600 block">Tips Sahabat Digital</span>
            <p className="text-[16px] text-gray-500">Jadilah teman pelindung saat kawanmu merasa tidak nyaman di media sosial.</p>
          </div>
        </div>

      </main>

      {/* Feedback Modal (Bottom Sheet) */}
      <div 
        className={`fixed inset-0 bg-[#1e3a8a]/45 z-50 transition-opacity duration-300 flex flex-col justify-end ${isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
      >
        <div className={`w-full max-w-md mx-auto bg-white rounded-t-3xl p-6 shadow-2xl flex flex-col gap-4 pb-8 transform transition-transform duration-300 ease-out ${isModalOpen ? 'translate-y-0' : 'translate-y-full'}`}>
          <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-2"></div>
          
          <div className={`flex items-center gap-3 p-3 rounded-xl ${isCorrect ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
            <div className={`w-8 h-8 rounded-full text-white flex items-center justify-center shadow-sm ${isCorrect ? 'bg-green-500' : 'bg-red-500'}`}>
              <span className="material-symbols-outlined text-[20px] icon-filled">{isCorrect ? 'check' : 'close'}</span>
            </div>
            <div className="flex-1">
              <h3 className="text-[20px] font-extrabold leading-tight">
                {isCorrect ? 'Hebat Sekali! Jawabanmu Tepat! 🎉' : 'Kurang Tepat, Yuk Coba Pahami Lagi! 🌱'}
              </h3>
            </div>
          </div>

          {isCorrect && (
            <div className="inline-flex items-center self-start gap-1.5 bg-yellow-100 px-3 py-1 rounded-full shadow-sm">
              <span className="material-symbols-outlined text-yellow-600 text-[18px] icon-filled">military_tech</span>
              <span className="text-[14px] font-bold text-yellow-900">+10 Poin Sahabat Baik ⭐</span>
            </div>
          )}

          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-[16px] text-gray-700 leading-relaxed">
              {isCorrect 
                ? 'Keren! Menolak ikut mengejek dan memberikan semangat langsung kepada teman adalah sikap Pahlawan Kebaikan di dunia digital.'
                : selectedOption === 'A' 
                  ? 'Ikut menertawakan atau menyebarkan stiker bisa membuat teman kita semakin sedih dan terluka perasaannya. Kita harus saling melindungi ya!'
                  : 'Mendiamkan saja belum cukup. Teman kita yang sedih membutuhkan dukungan kita agar tidak merasa sendirian!'}
            </p>
          </div>

          <div className="mt-2 flex flex-col gap-2">
            {isCorrect ? (
              <button onClick={closeModal} className="w-full h-[52px] bg-primary text-white font-bold text-[17px] rounded-full shadow-[0_4px_0_#004395] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2">
                <span>Lanjut ke Soal Berikutnya</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
            ) : (
              <button onClick={() => setIsModalOpen(false)} className="w-full h-[52px] bg-gray-100 text-primary font-bold text-[17px] rounded-full active:scale-95 transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[20px]">refresh</span>
                <span>Pilih Jawaban Lain</span>
              </button>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}