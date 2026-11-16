import { useState, useEffect } from 'react'; // <-- Tambahkan useEffect
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/layout/BottomNav';
import EmojiPicker from 'emoji-picker-react';
import { api } from '../../lib/api';

interface Message {
  id: number;
  senderId: number;
  content: string | null;
  imageUrl?: string | null;
  createdAt: string;
}

export default function CurhatSiswa() {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false); // <-- State untuk emoji
  const chatRoomId = 1; // Hardcode untuk demo

  // Ambil riwayat chat
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await api.get(`/chat/messages/${chatRoomId}`);
        setMessages(response.data.data);
      } catch (error) {
        console.error("Gagal mengambil pesan:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMessages();
  }, []);

  // Handler untuk memilih emoji
  const onEmojiClick = (emojiObject: any) => {
    setMessage((prev) => prev + emojiObject.emoji);
  };

  // Handler kirim pesan teks
  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const textToSend = message;
    setMessage('');
    setShowEmojiPicker(false); // Tutup picker setelah kirim

    try {
      const response = await api.post('/chat/message', {
        chatRoomId,
        content: textToSend
      });
      setMessages(prev => [...prev, response.data.data]);
    } catch (error) {
      alert('Gagal mengirim pesan. Pastikan backend menyala.');
    }
  };

  // Handler upload gambar ke Cloudinary (via backend)
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);
    formData.append('chatRoomId', chatRoomId.toString());

    try {
      const response = await api.post('/chat/message-image', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setMessages(prev => [...prev, response.data.data]);
    } catch (error) {
      alert('Gagal mengunggah gambar.');
    }
  };

  return (
    <div className="min-h-screen bg-surface-container-low flex flex-col pb-36">
      <header className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-xl shadow-sm">
        <div className="h-16 px-4 flex items-center justify-between gap-2 max-w-md mx-auto w-full">
          <div className="flex items-center gap-2">
            <button onClick={() => navigate('/dashboard-siswa')} className="w-11 h-11 rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-100 active:scale-95 transition-all">
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
                  <span className="text-[13px] font-semibold text-gray-500">Aktif • Ibu Rahma</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-md mx-auto px-4 pt-20 flex flex-col gap-3">
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
        </div>

        <div className="flex flex-col gap-4 mt-2">
          <div className="flex items-center justify-center my-1">
            <span className="px-3.5 py-1 bg-gray-200/80 rounded-full text-[13px] font-bold text-gray-500 shadow-sm">Hari Ini</span>
          </div>

          {isLoading ? (
            <div className="text-center text-gray-500 py-4">Memuat pesan...</div>
          ) : (
            messages.map((msg) => {
              const isSiswa = msg.senderId === 1; // Asumsi ID Siswa = 1
              return (
                <div key={msg.id} className={`flex items-end gap-2 max-w-[88%] ${isSiswa ? 'ml-auto justify-end mt-2' : 'mr-auto'}`}>
                  {!isSiswa && (
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-primary shrink-0 shadow-sm">
                      <span className="material-symbols-outlined text-[18px]">school</span>
                    </div>
                  )}
                  <div className={`flex flex-col gap-1 ${isSiswa ? 'items-end' : 'items-start'}`}>
                    
                    {/* Bubble Chat */}
                    <div className={`rounded-3xl shadow-sm overflow-hidden ${isSiswa ? 'bg-primary text-white rounded-br-sm' : 'bg-white text-gray-800 rounded-bl-sm'}`}>
                      
                      {/* Jika ada teks */}
                      {msg.content && (
                        <div className="p-3.5">
                          <p className="text-[16px] leading-relaxed">{msg.content}</p>
                        </div>
                      )}

                      {/* Jika ada gambar */}
                      {msg.imageUrl && (
                        <div className="p-2">
                          <img src={msg.imageUrl} alt="Lampiran" className="max-w-[200px] rounded-2xl object-cover" />
                        </div>
                      )}

                    </div>

                    <span className="text-[13px] font-semibold text-gray-400 px-1.5">
                      {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </main>

      <div className="fixed bottom-20 left-0 right-0 z-40 px-4 max-w-md mx-auto w-full">
        {/* Tampilkan Emoji Picker di atas input */}
        {showEmojiPicker && (
          <div className="absolute bottom-16 right-4 z-50">
            <EmojiPicker onEmojiClick={onEmojiClick} />
          </div>
        )}

        <form onSubmit={handleSend} className="bg-white/95 backdrop-blur-xl p-2 rounded-full shadow-lg flex items-center gap-1.5 relative">
          
          {/* Tombol Lampiran Gambar */}
          <label className="w-11 h-11 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 active:scale-90 transition-all shrink-0 cursor-pointer">
            <span className="material-symbols-outlined text-[22px]">attach_file</span>
            <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
          </label>

          {/* Tombol Emoji */}
          <button 
            type="button" 
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className="w-11 h-11 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 active:scale-90 transition-all shrink-0"
          >
            <span className="material-symbols-outlined text-[22px]">mood</span>
          </button>

          <input 
            type="text" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tulis ceritamu di sini..." 
            className="flex-1 bg-gray-50 px-4 py-2.5 rounded-full text-gray-800 placeholder:text-gray-400 text-[16px] outline-none focus:bg-gray-100 transition-all"
          />
          
          <button type="submit" className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_4px_0_#004395] active:translate-y-1 active:shadow-none transition-all shrink-0">
            <span className="material-symbols-outlined text-[20px] ml-0.5">send</span>
          </button>
        </form>
      </div>

      <BottomNav />
    </div>
  );
}