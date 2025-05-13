import { Route, Routes } from "react-router";
import styles from "./App.module.scss";
import { Layout } from "../shared/Layout/Layout";
import { Auth } from "../pages/Auth/Auth";
import { Main } from "../pages/Main/Main";
import { Personal } from "../pages/Personal/Personal";
import { PrivateRoute } from "../features/components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className={styles.container}>
      <Layout>
        <Routes>
          <Route index element={<Main />} path="/" />
          <Route element={<Auth />} path="/auth" />
          <Route element={<PrivateRoute />}>
            <Route element={<Personal />} path="/personal" />
          </Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
