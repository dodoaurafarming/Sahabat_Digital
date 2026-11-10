import { useState } from 'react';
import BottomNavGuru from '../../components/layout/BottomNavGuru';

// Tipe data untuk Pengaduan
interface PengaduanItem {
  id: number;
  name: string;
  initials: string;
  kelas: string;
  time: string;
  message: string;
  status: 'unread' | 'resolved';
  priority: boolean;
  color: string;
}

export default function Pengaduan() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedStudent, setSelectedStudent] = useState<PengaduanItem | null>(null);
  const [replyText, setReplyText] = useState('');

  // Data Dummy untuk Demo
  const pengaduanData: PengaduanItem[] = [
    { id: 1, name: 'Dimas Arya Pratama', initials: 'DA', kelas: '5B', time: '10:15 WIB', message: 'Bu Rahma, di grup game online ada yang sebar kata-kata kasar tentang aku dan ngancem nggak diajak main lagi...', status: 'unread', priority: true, color: 'bg-blue-100 text-blue-600' },
    { id: 2, name: 'Siti Aisyah', initials: 'SA', kelas: '4A', time: '08:40 WIB', message: 'Ibu guru, fotoku diedit jadi jelek terus di-share di status WA sama teman-teman. Aku malu masuk sekolah besok...', status: 'unread', priority: true, color: 'bg-green-100 text-green-600' },
    { id: 3, name: 'Rizky Ramadhan', initials: 'RR', kelas: '6C', time: 'Kemarin', message: 'Tolong Bu, akun belajar saya dilaporkan ramai-ramai tanpa alasan sampai terkunci, padahal ada tugas...', status: 'unread', priority: false, color: 'bg-yellow-100 text-yellow-600' },
    { id: 4, name: 'Nabila Putri', initials: 'NP', kelas: '5B', time: '12 Feb', message: 'Terima kasih banyak Bu Rahma, sekarang mereka sudah minta maaf dan keluarin postingan itu...', status: 'resolved', priority: false, color: 'bg-purple-100 text-purple-600' },
    { id: 5, name: 'Kevin Maulana', initials: 'KM', kelas: '4B', time: '11 Feb', message: 'Baik bu, nanti siang jam istirahat saya temui Ibu di ruang konseling seperti yang dijadwalkan...', status: 'resolved', priority: false, color: 'bg-gray-200 text-gray-600' }
  ];

  const filteredData = pengaduanData.filter(item => {
    const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.kelas.toLowerCase().includes(searchQuery.toLowerCase());
    const matchFilter = activeFilter === 'all' || item.status === activeFilter;
    return matchSearch && matchFilter;
  });

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim() || !selectedStudent) return;
    alert(`Balasan terkirim ke ${selectedStudent.name}: "${replyText}"`);
    setReplyText('');
    // Di aplikasi nyata, ini akan memanggil API POST /api/chat/message
  };

  return (
    <div className="min-h-screen bg-surface-container-low flex flex-col pb-28">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-xl shadow-sm">
        <div className="h-16 px-4 flex items-center justify-between max-w-md mx-auto w-full">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[20px]">school</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-bold text-primary leading-tight">Sahabat Digital</span>
              <h1 className="text-[20px] font-extrabold text-gray-800 leading-none">Pengaduan</h1>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center ring-2 ring-blue-200">
            <span className="material-symbols-outlined text-blue-500 text-[18px]">person</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-md mx-auto px-4 pt-20 flex flex-col gap-4">
        
        {/* Banner Pencarian & Filter */}
        <div className="flex flex-col bg-white rounded-2xl p-4 shadow-sm gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[24px] icon-filled">forum</span>
              </div>
              <div className="flex flex-col">
                <h2 className="text-[20px] font-extrabold text-gray-800 leading-tight">Kotak Pengaduan</h2>
                <span className="text-[13px] font-semibold text-gray-500">Layanan Pendampingan Ramah Anak</span>
              </div>
            </div>
            <div className="flex items-center bg-red-50 text-red-600 px-2 py-1 rounded-full gap-1">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-[13px] font-bold">3 Perlu Solusi</span>
            </div>
          </div>

          <div className="relative w-full mt-1">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">search</span>
            <input 
              type="text" 
              placeholder="Cari nama murid atau kelas..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 pl-11 pr-4 bg-gray-50 text-gray-800 rounded-full text-[16px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-gray-400"
            />
          </div>

          <div className="flex items-center gap-2 p-1 bg-gray-50 rounded-full overflow-x-auto no-scrollbar">
            <button onClick={() => setActiveFilter('all')} className={`flex-1 min-h-[38px] px-3.5 py-1.5 rounded-full text-[14px] font-bold transition-all ${activeFilter === 'all' ? 'bg-primary text-white shadow-sm' : 'text-gray-500 hover:text-primary'}`}>
              Semua <span className="bg-white/25 px-1.5 py-0.5 rounded-full text-[13px]">5</span>
            </button>
            <button onClick={() => setActiveFilter('unread')} className={`flex-1 min-h-[38px] px-3.5 py-1.5 rounded-full text-[14px] font-bold transition-all ${activeFilter === 'unread' ? 'bg-primary text-white shadow-sm' : 'text-gray-500 hover:text-primary'}`}>
              Belum Dibalas <span className="bg-red-400 text-white px-1.5 py-0.5 rounded-full text-[13px]">3</span>
            </button>
            <button onClick={() => setActiveFilter('resolved')} className={`flex-1 min-h-[38px] px-3.5 py-1.5 rounded-full text-[14px] font-bold transition-all ${activeFilter === 'resolved' ? 'bg-primary text-white shadow-sm' : 'text-gray-500 hover:text-primary'}`}>
              Selesai <span className="bg-gray-200 text-gray-600 px-1.5 py-0.5 rounded-full text-[13px]">2</span>
            </button>
          </div>
        </div>

        {/* List Pengaduan */}
        <div className="flex flex-col gap-3">
          {filteredData.length === 0 && (
            <div className="bg-white rounded-2xl p-8 text-center flex flex-col items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-4xl text-gray-300 mb-2">search_off</span>
              <h4 className="text-[18px] font-bold text-gray-800">Tidak Menemukan Siswa</h4>
              <p className="text-[16px] text-gray-500">Coba periksa kembali ejaan nama atau kelas.</p>
            </div>
          )}

          {filteredData.map((item) => (
            <button key={item.id} onClick={() => setSelectedStudent(item)} className={`w-full text-left bg-white hover:bg-gray-50 p-4 rounded-2xl shadow-sm active:scale-[0.99] transition-all flex items-start gap-3 border-l-4 ${item.priority ? 'border-l-red-400' : item.status === 'unread' ? 'border-l-red-300' : 'border-l-transparent'}`}>
              <div className="relative shrink-0">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-[18px] ${item.color}`}>
                  {item.initials}
                </div>
                {item.status === 'unread' && <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-red-500 rounded-full ring-2 ring-white"></span>}
                {item.status === 'resolved' && <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full ring-2 ring-white"></span>}
              </div>
              
              <div className="flex flex-col flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1 mb-0.5">
                  <div className="flex items-center gap-1.5 truncate">
                    <h3 className="text-[18px] font-extrabold text-gray-800 truncate">{item.name}</h3>
                    <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full text-[13px] font-bold shrink-0">{item.kelas}</span>
                  </div>
                  <span className={`text-[13px] font-bold shrink-0 ${item.status === 'unread' && item.priority ? 'text-red-500' : 'text-gray-400'}`}>{item.time}</span>
                </div>
                <p className="text-[16px] text-gray-700 font-bold line-clamp-2 leading-snug">"{item.message}"</p>
                <div className="flex items-center justify-between mt-2 pt-1">
                  {item.status === 'unread' ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-50 text-red-600 text-[13px] font-extrabold">
                      <span className="material-symbols-outlined text-[14px]">priority_high</span> Belum Dibalas
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600 text-[13px] font-bold">
                      <span className="material-symbols-outlined text-[14px] icon-filled">done_all</span> Sudah Dijawab
                    </span>
                  )}
                  <span className="material-symbols-outlined text-gray-400 text-[20px]">chevron_right</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Footer Info */}
        <div className="flex items-center gap-3 p-4 bg-blue-50/50 rounded-2xl mt-2">
          <span className="material-symbols-outlined text-blue-500 text-[24px] shrink-0 icon-filled">verified_user</span>
          <div className="flex flex-col">
            <span className="text-[14px] font-bold text-blue-900">Panduan Respons Konseling</span>
            <p className="text-[13px] font-semibold text-blue-700 leading-relaxed">Gunakan kalimat ramah & validasi emosi anak terlebih dahulu sebelum memberikan saran tindakan.</p>
          </div>
        </div>

      </main>

      <BottomNavGuru />

      {/* Modal Chat Detail (Bottom Sheet) */}
      {selectedStudent && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end bg-black/40 backdrop-blur-sm">
          <div className="w-full max-w-lg mx-auto bg-white rounded-t-3xl h-[90vh] flex flex-col overflow-hidden shadow-2xl animate-slide-up">
            
            {/* Modal Header */}
            <div className="p-4 bg-white border-b border-gray-100 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <button onClick={() => setSelectedStudent(null)} className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 active:scale-95 transition-all">
                  <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <div className="relative">
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-[18px] ${selectedStudent.color}`}>
                    {selectedStudent.initials}
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full ring-2 ring-white"></span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-[18px] font-extrabold text-gray-800 leading-tight">{selectedStudent.name}</h3>
                    <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full text-[13px] font-bold">{selectedStudent.kelas}</span>
                  </div>
                  <span className="text-[13px] font-bold text-green-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Ruang Konseling Terjaga
                  </span>
                </div>
              </div>
              <button className="w-9 h-9 rounded-full bg-gray-50 text-gray-500 flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">call</span>
              </button>
            </div>

            {/* Modal Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-gray-50/50">
              <div className="flex justify-center my-1">
                <span className="bg-gray-200 text-gray-600 text-[13px] font-semibold px-3 py-1 rounded-full">Hari ini, {selectedStudent.time}</span>
              </div>
              
              {/* Pesan Siswa */}
              <div className="flex flex-col items-start max-w-[85%] self-start">
                <div className="bg-white text-gray-800 p-4 rounded-2xl rounded-tl-sm shadow-sm">
                  <p className="text-[16px] leading-relaxed">{selectedStudent.message}</p>
                </div>
                <span className="text-[13px] font-semibold text-gray-400 mt-1 pl-1">{selectedStudent.time} • {selectedStudent.name.split(' ')[0]}</span>
              </div>

              {/* Balasan Guru (Contoh) */}
              <div className="flex flex-col items-end max-w-[85%] self-end">
                <div className="bg-primary text-white p-4 rounded-2xl rounded-tr-sm shadow-md">
                  <p className="text-[16px] leading-relaxed">Halo {selectedStudent.name.split(' ')[0]}, terima kasih banyak ya sudah berani curhat ke Ibu. Kamu tidak salah, dan perlakuan teman-temanmu itu sama sekali tidak dibenarkan. Kamu sangat aman bersama Ibu.</p>
                </div>
                <div className="flex items-center gap-1 mt-1 pr-1 text-gray-400">
                  <span className="text-[13px] font-semibold">10:20 WIB</span>
                  <span className="material-symbols-outlined text-[14px] text-primary icon-filled">done_all</span>
                </div>
              </div>
            </div>

            {/* Modal Input Area */}
            <div className="p-4 bg-white border-t border-gray-100 flex flex-col gap-3 pb-8">
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                <button onClick={() => setReplyText('Ibu catat ya bukti screenshot-nya. Nanti siang kita ngobrol santai di ruang konseling.')} className="whitespace-nowrap px-3 py-1.5 bg-blue-50 text-blue-600 text-[13px] font-bold rounded-full hover:bg-blue-100 active:scale-95 transition-all">
                  + Ajak Ngobrol Tatap Muka
                </button>
                <button onClick={() => setReplyText('Jangan dihapus dulu pesannya ya, simpan bukti tangkapan layarnya untuk Ibu bantu tindak lanjuti.')} className="whitespace-nowrap px-3 py-1.5 bg-blue-50 text-blue-600 text-[13px] font-bold rounded-full hover:bg-blue-100 active:scale-95 transition-all">
                  + Minta Simpan Bukti
                </button>
              </div>

              <form onSubmit={handleSendReply} className="flex items-center gap-2">
                <div className="flex-1 relative flex items-center">
                  <input type="text" value={replyText} onChange={(e) => setReplyText(e.target.value)} placeholder="Ketik pesan dukungan atau solusi..." className="w-full h-12 pl-4 pr-10 bg-gray-50 text-gray-800 rounded-full text-[16px] focus:bg-gray-100 focus:outline-none transition-all placeholder:text-gray-400" />
                  <button type="button" className="absolute right-3 text-gray-400 hover:text-primary">
                    <span className="material-symbols-outlined text-[24px]">sentiment_satisfied</span>
                  </button>
                </div>
                <button type="submit" className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_4px_0_#004395] active:translate-y-1 active:shadow-none transition-all shrink-0">
                  <span className="material-symbols-outlined text-[20px]">send</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}