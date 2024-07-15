import type { FC } from "react";
import { Outlet } from "react-router-dom";
import styles from "./Layouts.module.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import SocialLink from "../components/socialLink/SocialLink";
import CookieConsent from "../components/cookieConsent/CookieConsent";

const Layout: FC = () => {
  return (
    <div className={styles.bigContainer}>
      <Header />
      <div className={styles.socialLinkContainer}>
        <SocialLink />
      </div>
      <main className={styles.outletContainer}>
        <Outlet />
      </main>
      <Footer />
      <CookieConsent/>
    </div>
  );
};

export default Layout;
