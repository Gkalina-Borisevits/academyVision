import React, { useState, useEffect } from 'react';
import styles from "./CookieConsent.module.css";

const CookieConsent: React.FC = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };

  return (
    showConsent && (
      <div className={styles.cookieConsent}>
        <p>
          Мы используем cookies для улучшения вашего опыта. Приняв, вы соглашаетесь с нашей{' '}
          <a href="/terms-of-service" target="_blank" className={styles.link}>
            Политикой использования cookies
          </a>.
        </p>
        <button onClick={handleAccept} className={styles.acceptButton}>Принять</button>
      </div>
    )
  );
};
export default CookieConsent;