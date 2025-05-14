import { Link } from "react-router-dom";
import styles from "./Personal.module.scss";
import { useAuth } from "../../features/Auth/hooks/useAuth";
import { PATHS } from "../../shared/config/routes";

const Personal = () => {
  const { username } = useAuth();
  return (
    <div className={styles.container} role="main">
      <h1 className={styles.title}>Личный кабинет</h1>
      <h2 className={styles.text}>Вы авторизованы как {username}</h2>
      <Link
        to={PATHS.ROOT}
        className={styles.link}
        aria-label="Перейти на главную"
      >
        Перейти на главную
      </Link>
    </div>
  );
};

export default Personal;
