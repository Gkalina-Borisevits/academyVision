import type { FC } from "react";
import { Outlet } from "react-router-dom";
import styles from "./Layouts.module.css";

const Layout: FC = () => {
  return (
    <div>
      <main className={styles.outletContainer}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
