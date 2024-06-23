import { FC } from "react"
import styles from "./styles/Contacts.module.css"
import img from "../assets/pagesImage/contacts.png"
import ImageContainer from "../components/imageContainer/ImageContainer"

const Contacts: FC = () => {
  return (
    <div className={styles.contactsContainer}>
    <ImageContainer imgSrc={img} imgAlt="Image" />
  </div>
  )
}

export default Contacts