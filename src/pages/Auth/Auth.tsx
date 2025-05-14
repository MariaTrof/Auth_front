import { lazy, Suspense } from "react";
import styles from "./Auth.module.scss";

const LazyForm = lazy(() => import("../../features/Auth/Form"));
const Auth = () => {
  return (
    <div className={styles.container} role="main">
      <h1 className={styles.title}>Форма Авторизации</h1>
      <Suspense fallback={<div className={styles.text}>Загрузка формы...</div>}>
        <LazyForm />
      </Suspense>
    </div>
  );
};

export default Auth;
