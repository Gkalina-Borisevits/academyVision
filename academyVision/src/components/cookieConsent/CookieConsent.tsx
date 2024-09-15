import React, { useState, useEffect } from 'react';
import styles from "./CookieConsent.module.css";
import { useTranslation } from 'react-i18next';

const CookieConsent: React.FC = () => {
  const [showConsent, setShowConsent] = useState(false);
  const { t } = useTranslation();

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
        {t('cookies.text')} 
        <a href="/terms-of-service" target="_blank" className={styles.link}>
          {t('cookies.policyLink')}
        </a>.
      </p>
      <button onClick={handleAccept} className={styles.acceptButton}>
        {t('cookies.acceptButton')}
      </button>
      </div>
    )
  );
};
export default CookieConsent;