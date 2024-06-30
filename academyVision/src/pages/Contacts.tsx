import { FC } from "react";
import styles from "./styles/Contacts.module.css";
import img from "../assets/pagesImage/contacts.png";
import ImageContainer from "../components/imageContainer/ImageContainer";
import ContactUs from "../components/contactUs/ContactUs";
import MyContainer from "../components/myContainer/MyContainer";
import { useTranslation } from "react-i18next";
import ContactCard from "../components/contactCard/ContactCard";
import AboutHomePage from "../components/aboutHomePage/AboutHomePage";
import ContactForm from "../components/contactForm/ContactForm";

const Contacts: FC = () => {
  const { t } = useTranslation("translation");
  
  return (
    <>
      <ImageContainer imgSrc={img} imgAlt="Image">
        <MyContainer>
          <div className={styles.textInImage}>
            <h1>{t("contacts.title")}</h1>
            <h3>{t("contacts.textHeader")}</h3>
          </div>
        </MyContainer>
      </ImageContainer>
      <ContactCard/>
   
      <div className={styles.portfolioContainer}>
       <ContactUs/>
       <MyContainer>
       <AboutHomePage/>
       <ContactForm/>
       </MyContainer>
      </div>
    </>
  );
};

export default Contacts;
