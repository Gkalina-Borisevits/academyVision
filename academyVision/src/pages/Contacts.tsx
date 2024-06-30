import { FC } from "react"
import styles from "./styles/Contacts.module.css"
import img from "../assets/pagesImage/contacts.png"
import ImageContainer from "../components/imageContainer/ImageContainer"

import ContactUs from "../components/contactUs/ContactUs"

const Contacts: FC = () => {
  return (
    <div className={styles.contactsContainer}>
    <ImageContainer imgSrc={img} imgAlt="Image" />

  <ContactUs/>
  </div>
  )
}

export default Contacts