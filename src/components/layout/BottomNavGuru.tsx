import { useLocation } from 'react-router-dom';

export default function BottomNavGuru() {
  const location = useLocation();

  const navItems = [
    { id: 'beranda', path: '/dashboard-guru', icon: 'home', label: 'Beranda' },
    { id: 'pengaduan', path: '/pengaduan', icon: 'forum', label: 'Pengaduan' },
    { id: 'profil', path: '/profil-guru', icon: 'account_circle', label: 'Profil' },
  ];

  return (
    <nav className="fixed bottom-0 w-full z-50 pb-safe bg-white/90 backdrop-blur-xl shadow-[0_-4px_20px_rgba(30,58,138,0.06)]">
      <div className="flex justify-around items-center h-20 px-4 max-w-md mx-auto w-full">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <a
              key={item.id}
              href={item.path}
              className={`flex flex-col items-center justify-center gap-1 min-w-[72px] h-14 px-3 rounded-full transition-all ${
                isActive
                  ? 'text-primary font-bold bg-blue-50'
                  : 'text-gray-500 hover:text-primary'
              }`}
            >
              <span className={`material-symbols-outlined text-[24px] ${isActive ? 'icon-filled' : ''}`}>
                {item.icon}
              </span>
              <span className="text-[13px] font-semibold">{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}