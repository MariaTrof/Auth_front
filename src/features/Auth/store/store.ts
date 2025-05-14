import { create } from "zustand";
import type { AuthStoreProps } from "./store.const";
import { createJSONStorage, persist } from "zustand/middleware";

export const useAuthStore = create<AuthStoreProps>()(
  persist(
    (set) => ({
      isAuth: false,
      user: null,
      accessToken: null,
      accessTime: null,

      login: (user, accessToken, accessTime) =>
        set({
          isAuth: true,
          user,
          accessToken,
          accessTime,
        }),

      logout: () => {
        document.cookie = "refreshToken=; Max-Age=0; Path=/;";
        set({
          isAuth: false,
          user: null,
          accessToken: null,
          accessTime: null,
        });
      },
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
