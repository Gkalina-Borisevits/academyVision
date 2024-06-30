import { FC } from "react";
import styles from "./styles/Contacts.module.css";
import img from "../assets/pagesImage/contacts.png";
import ImageContainer from "../components/imageContainer/ImageContainer";
import ContactUs from "../components/contactUs/ContactUs";
import MyContainer from "../components/myContainer/MyContainer";

const Contacts: FC = () => {
  return (
    <div className={styles.contactsContainer}>
      <ImageContainer imgSrc={img} imgAlt="Image" />
      <MyContainer>
        <ContactUs />
      </MyContainer>
    </div>
  );
};

export default Contacts;
