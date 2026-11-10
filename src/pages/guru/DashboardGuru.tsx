import { useNavigate } from 'react-router-dom';
import BottomNavGuru from '../../components/layout/BottomNavGuru';

export default function DashboardGuru() {
  const navigate = useNavigate();

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
              <h1 className="text-[20px] font-extrabold text-gray-800 leading-none">Beranda</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 active:scale-95 transition-all">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center ring-2 ring-blue-200">
              <span className="material-symbols-outlined text-blue-500 text-[18px]">person</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-md mx-auto px-4 pt-20 flex flex-col gap-4">
        
        {/* Banner Guru */}
        <div className="flex flex-col bg-white rounded-2xl p-5 shadow-sm relative overflow-hidden">
          <div className="flex items-start justify-between gap-3 z-10">
            <div className="flex flex-col min-w-0">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-blue-900 w-fit mb-1.5">
                <span className="material-symbols-outlined text-[13px] icon-filled">verified</span>
                <span className="text-[13px] font-bold">Fasilitator Utama</span>
              </div>
              <h2 className="text-[20px] font-extrabold text-primary tracking-tight">Selamat Datang, Ibu Rahma, S.Pd.</h2>
              <p className="text-[14px] font-semibold text-gray-500 mt-0.5 line-clamp-1">Fasilitator & Konselor Siswa • SDN Harapan Bangsa</p>
            </div>
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 ring-2 ring-blue-50">
               <span className="material-symbols-outlined text-3xl text-blue-500">face</span>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-2 mt-4 z-10">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-50 text-gray-800">
              <span className="material-symbols-outlined text-[16px] text-blue-500">calendar_today</span>
              <span className="text-[13px] font-bold">Senin, 24 Mei 2026</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-50 text-gray-800">
              <span className="material-symbols-outlined text-[16px] text-blue-500">groups</span>
              <span className="text-[13px] font-bold">Kelas 5 • 24 Siswa</span>
            </div>
          </div>
        </div>

        {/* Kartu Peringatan Mendesak */}
        <div className="relative bg-white rounded-2xl p-4 shadow-sm overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-red-400"></div>
          <div className="flex flex-col pl-2 gap-2">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 text-red-600">
                <span className="material-symbols-outlined text-[13px] animate-pulse icon-filled">priority_high</span>
                <span className="text-[13px] font-bold">Mendesak • 3 Baru</span>
              </div>
              <span className="text-[13px] font-semibold text-gray-500 flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">schedule</span> Pagi Ini
              </span>
            </div>
            <h3 className="text-[18px] font-extrabold text-gray-800 mt-1 leading-snug">
              Perhatian: 3 Pengaduan Baru Memerlukan Tindakan
            </h3>
            <p className="text-[16px] text-gray-500 leading-relaxed">
              Terdapat 3 curhat baru dari murid yang belum dibaca sejak pagi ini, termasuk 1 laporan terindikasi membutuhkan respons konseling segera.
            </p>
            <div className="pt-2 mt-1">
              <button onClick={() => navigate('/pengaduan')} className="w-full h-12 flex items-center justify-between px-4 rounded-full bg-red-400 text-white font-bold text-[17px] shadow-[0_4px_0_#dc2626] active:translate-y-1 active:shadow-none transition-all">
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">mark_chat_unread</span>
                  Tinjau Pesan Sekarang
                </span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Ringkasan Aktivitas */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between px-1">
            <h4 className="text-[14px] font-bold text-gray-800 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px] text-primary">insights</span>
              Ringkasan Aktivitas Kelas
            </h4>
            <span className="text-[13px] font-semibold text-gray-500">Update: 10m lalu</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col p-3 rounded-2xl bg-white shadow-sm">
              <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-primary mb-2">
                <span className="material-symbols-outlined text-[16px]">bolt</span>
              </div>
              <span className="text-[20px] font-extrabold text-primary leading-none">94%</span>
              <span className="text-[13px] font-semibold text-gray-500 mt-1 line-clamp-1">Respon Cepat</span>
            </div>
            <div className="flex flex-col p-3 rounded-2xl bg-white shadow-sm">
              <div className="w-7 h-7 rounded-lg bg-yellow-100 flex items-center justify-center text-yellow-600 mb-2">
                <span className="material-symbols-outlined text-[16px]">menu_book</span>
              </div>
              <span className="text-[20px] font-extrabold text-gray-800 leading-none">86%</span>
              <span className="text-[13px] font-semibold text-gray-500 mt-1 line-clamp-1">Modul Tuntas</span>
            </div>
            <div className="flex flex-col p-3 rounded-2xl bg-white shadow-sm">
              <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500 mb-2">
                <span className="material-symbols-outlined text-[16px]">health_and_safety</span>
              </div>
              <span className="text-[20px] font-extrabold text-gray-800 leading-none">9.2</span>
              <span className="text-[13px] font-semibold text-gray-500 mt-1 line-clamp-1">Skor Aman</span>
            </div>
          </div>
        </div>

        {/* Kartu Pantau Progres */}
        <div className="flex flex-col bg-white rounded-2xl p-5 shadow-sm mt-2">
          <div className="flex items-start justify-between gap-2 mb-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                <span className="material-symbols-outlined text-[28px] icon-filled">analytics</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-gray-500">Evaluasi & Literasi Digital</span>
                <h3 className="text-[20px] font-extrabold text-gray-800">Pantau Progres Siswa</h3>
              </div>
            </div>
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 text-primary">
              <span className="material-symbols-outlined text-[18px]">trending_up</span>
            </div>
          </div>
          
          <p className="text-[16px] text-gray-500 leading-relaxed mb-4">
            Pantau ketuntasan modul baca dan hasil evaluasi kuis pemahaman anti-cyberbullying siswa kelas 5 secara komprehensif.
          </p>
          
          <div className="flex flex-col gap-1.5 mb-4">
            <div className="flex items-center justify-between text-[14px] font-bold">
              <span className="text-gray-500">Ketuntasan Belajar Kelas 5</span>
              <span className="text-primary text-[18px]">87.5%</span>
            </div>
            <div className="w-full h-3 rounded-full bg-gray-100 overflow-hidden">
              <div className="h-full rounded-full bg-primary" style={{ width: '87.5%' }}></div>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-50 text-gray-800">
              <span className="material-symbols-outlined text-[16px] text-yellow-600">star</span>
              <span className="text-[14px] font-bold">Rata-rata Kelas: 88</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-50 text-gray-800">
              <span className="material-symbols-outlined text-[16px] text-green-500">verified</span>
              <span className="text-[14px] font-bold">21/24 Siswa Tuntas</span>
            </div>
          </div>

          <button onClick={() => navigate('/progres-siswa')} className="w-full py-3 px-4 rounded-full bg-indigo-500 text-white font-bold text-[17px] shadow-[0_4px_0_#4338ca] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[20px]">bar_chart</span>
            <span>Lihat Rekap Nilai & Analisis →</span>
          </button>
        </div>

      </main>

      <BottomNavGuru />
    </div>
  );
}