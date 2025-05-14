import { Link } from "react-router-dom";
import styles from "./Main.module.scss";
import { Button } from "../../shared/ui/Button";
import { ButtonTheme } from "../../shared/ui/Button/Button.const";
import { useAuthStore } from "../../features/Auth/store";
import { useAuth } from "../../features/Auth/hooks/useAuth";
import { PATHS } from "../../shared/config/routes";

const Main = () => {
  const { isAuth, logout } = useAuthStore();
  const { username } = useAuth();
  return (
    <div className={styles.container} role="main">
      {!isAuth ? (
        <div>
          <h1 className={styles.title}>
            Авторизируйтесь, чтобы войти в личный кабинет
          </h1>
          <Link
            to={PATHS.AUTH}
            className={styles.link}
            aria-label="Авторизироваться"
          >
            Авторизоваться
          </Link>
        </div>
      ) : (
        <div>
          <h1 className={styles.title}>Вы авторизованы как {username}</h1>
          <Button
            onClick={() => {
              logout();
            }}
            theme={ButtonTheme.PAGE}
            className={styles.link_btn}
            aria-label="Выйти"
          >
            Выйти
          </Button>
        </div>
      )}
    </div>
  );
};

export default Main;
