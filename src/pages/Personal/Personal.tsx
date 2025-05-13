import { Link } from "react-router-dom";
import styles from "./Personal.module.scss";
import { useAuth } from "../../features/hooks/useAuth";

export const Personal = () => {
  const { username } = useAuth();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Личный кабинет</h1>
      <h2 className={styles.text}>Вы авторизованы как {username}</h2>
      <Link to="/" className={styles.link}>
        Перейти на главную
      </Link>
    </div>
  );
};
