import { Route, Routes } from "react-router";
import { ROUTES } from "@shared/config/routes";
import styles from "./App.module.scss";
import { Layout } from "@widgets/Layout";
import type { AppRoute } from "../shared/config/routes.const";
import { PATHS } from "../shared/config/routes";
import { AuthRoute } from "../features/Auth/routes/AuthRoute";
import { PrivateRoute } from "../features/Auth/routes/PrivateRoute";



function App() {
  return (
    <div className={styles.container}>
      <Layout>
        <Routes>
          {ROUTES.map((route: AppRoute) => {
            if (route.path === PATHS.AUTH) {
              return (
                <Route key={route.path} element={<AuthRoute />}>
                  <Route path={route.path} element={route.element} />
                </Route>
              );
            }

            if (route.isPrivate) {
              return (
                <Route key={route.path} element={<PrivateRoute />}>
                  <Route path={route.path} element={route.element} />
                </Route>
              );
            }

            return (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            );
          })}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

//тут алиасы работают на половину, а в остальных файлах нет
