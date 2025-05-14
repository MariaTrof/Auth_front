import type { AppRoute } from "./routes.const";
import { lazy, Suspense } from "react";
import styles from "./routes.module.scss";

const Main = lazy(() => import("@pages/Main"));
const Auth = lazy(() => import("@pages/Auth"));
const Personal = lazy(() => import("@pages/Personal"));

export const ROUTES: AppRoute[] = [
  {
    path: "/",
    element: (
      <Suspense fallback={<div className={styles.text}>Загрузка...</div>}>
        <Main />
      </Suspense>
    ),
    isIndex: true,
  },
  {
    path: "/auth",
    element: (
      <Suspense fallback={<div className={styles.text}>Загрузка...</div>}>
        <Auth />
      </Suspense>
    ),
  },
  {
    path: "/personal",
    element: (
      <Suspense fallback={<div className={styles.text}>Загрузка...</div>}>
        <Personal />
      </Suspense>
    ),
    isPrivate: true,
  },
] as const;

export const PATHS = {
  ROOT: "/",
  AUTH: "/auth",
  PERSONAL: "/personal",
} as const;
