import { Link } from "react-router-dom";
import styles from "./Main.module.scss";
import { Button } from "../../shared/ui/Button/Button";
import { useAuthStore } from "../../store/store";
import { ButtonTheme } from "../../shared/ui/Button/Button.const";
import { useAuth } from "../../features/hooks/useAuth";

export const Main = () => {
  const { isAuth, logout } = useAuthStore();
  const { username } = useAuth();
  return (
    <div className={styles.container}>
      {!isAuth ? (
        <div>
          <h1 className={styles.title}>
            Авторизируйтесь, чтобы войти в личный кабинет
          </h1>
          <Link to="/auth" className={styles.link}>
            Авторизоваться
          </Link>
        </div>
      ) : (
        <div>
          <h1 className={styles.title}>Вы авторизованы как {username}</h1>
          <Button
            label={"Logout"}
            onClick={() => {
              logout();
            }}
            theme={ButtonTheme.PAGE}
            className={styles.link_btn}
          />
        </div>
      )}
    </div>
  );
};
