import { FC } from "react";
import styles from "./styles/Contacts.module.css";
import img from "../assets/pagesImage/contact.jpg";
import ImageContainer from "../components/imageContainer/ImageContainer";
import ContactUs from "../components/contactUs/ContactUs";
import MyContainer from "../components/myContainer/MyContainer";
import { useTranslation } from "react-i18next";
import ContactCard from "../components/contactCard/ContactCard";
import AboutHomePage from "../components/aboutHomePage/AboutHomePage";
import ContactForm from "../components/contactForm/ContactForm";
import computerImage from "../assets/computer/computerContacts.jpg"

const Contacts: FC = () => {
  const { t } = useTranslation("translation");

  const splitTextIntoSpans = (text: string): React.ReactNodeArray => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        className={styles.letter}
        style={{
          animationDelay: `${index * 0.05}s`,
          display: char === ' ' ? 'inline-block' : 'inline', 
          whiteSpace: char === ' ' ? 'pre' : 'normal'
        }}
      >
        {char}
      </span>
    ));
  };
  

  return (
    <>
      <ImageContainer imgSrc={img} imgAlt="Image">
        <MyContainer>
          <div className={styles.textInImage}>
            <h1>{splitTextIntoSpans(t("contacts.title"))}</h1>
            <h3>{t("contacts.textHeader")}</h3>
          </div>
        </MyContainer>
      </ImageContainer>
      <ContactCard />
      <div className={styles.computerImageContainer}>
          <img src={computerImage} alt="computer"></img>
        </div>
      <div className={styles.portfolioContainer}>
        <ContactUs />
        <div className={styles.contactAboutContainer}>
        <MyContainer>
          
          <AboutHomePage />
          </MyContainer>
          </div>
          <ContactForm />
       
      </div>
    </>
  );
};

export default Contacts;
