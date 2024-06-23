import React from 'react'
import { useTranslation } from 'react-i18next';
import { AboutHome } from '../../types/AboutHome';

const AboutHomePage: React.FC = () => {
    const { t } = useTranslation("translation");
    const aboutHomePage: AboutHome[] = t("aboutHomePage", { returnObjects: true });
    
  return (
    <div>
      {aboutHomePage.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default AboutHomePage
