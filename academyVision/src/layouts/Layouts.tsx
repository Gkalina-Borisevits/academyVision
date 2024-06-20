import type { FC } from "react";
import { Outlet } from "react-router-dom";
import styles from "./Layouts.module.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Layout: FC = () => {
  return (
    <div>
      <Header/>
      <main className={styles.outletContainer}>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
