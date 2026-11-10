import { useNavigate, useLocation } from 'react-router-dom';

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'beranda', path: '/dashboard-siswa', icon: 'home', label: 'Beranda' },
    { id: 'curhat', path: '/curhat-siswa', icon: 'chat_bubble', label: 'Curhat' },
    { id: 'profil', path: '/profil-siswa', icon: 'account_circle', label: 'Profil' },
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 pb-safe bg-white/90 backdrop-blur-xl shadow-[0_-4px_20px_rgba(0,88,190,0.06)]">
      <div className="flex justify-around items-center h-20 px-4 max-w-md mx-auto w-full">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center gap-1 min-w-[72px] h-14 px-3 rounded-full transition-all ${
                isActive
                  ? 'bg-blue-50 text-primary font-bold'
                  : 'text-gray-500 hover:text-primary'
              }`}
            >
              <div className="relative flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                {isActive && item.id === 'beranda' && (
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-primary"></span>
                )}
                {isActive && item.id === 'curhat' && (
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-primary"></span>
                )}
              </div>
              <span className="text-[13px] font-semibold">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}