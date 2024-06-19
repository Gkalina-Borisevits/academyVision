import type { FC } from "react";
import { Outlet } from "react-router-dom";
import styles from "./Layouts.module.css";
import Header from "../components/header/Header";

const Layout: FC = () => {
  return (
    <div>
      <Header/>
      <main className={styles.outletContainer}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
