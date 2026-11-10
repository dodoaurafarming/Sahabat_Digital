export type UserRole = 'siswa' | 'guru' | 'admin';

export interface User {
  id: number; // Backend menggunakan integer auto-increment
  name: string;
  role: UserRole;
  kelas?: string; // Backend menyimpan kelas sebagai string (contoh: "5A")
  nip?: string; // Khusus untuk guru
  xp?: number; // Poin gamifikasi
  streak?: number; // Hari beruntun
  avatarUrl?: string;
}

export interface Progress {
  level: number;
  materiSelesai: number;
  totalMateri: number;
  latihanSelesai: number;
}