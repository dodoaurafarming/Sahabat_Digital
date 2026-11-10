export type UserRole = 'siswa' | 'guru' | 'admin';

export interface User {
  id: string;
  name: string;
  role: UserRole;
  kelas?: number; // 1-6 untuk siswa
  avatarUrl?: string;
}

export interface Progress {
  level: number;
  materiSelesai: number;
  totalMateri: number;
  latihanSelesai: number;
}