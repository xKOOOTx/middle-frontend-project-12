import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
      persist(
            (set) => ({
                  token: null,
                  username: null,
                  logIn: (token, username) => set({ token, username }),
                  logOut: () => set({ token: null, username: null }),
            }),
            { name: 'auth' } // ключ в localStorage
      )
);