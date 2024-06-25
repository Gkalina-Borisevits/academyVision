import { FC } from "react"
import styles from "./styles/Contacts.module.css"
import img from "../assets/pagesImage/contacts.png"
import ImageContainer from "../components/imageContainer/ImageContainer"
import MyButton from "../components/myButton/MyButton"

const Contacts: FC = () => {
  return (
    <div className={styles.contactsContainer}>
    <ImageContainer imgSrc={img} imgAlt="Image" />

    <MyButton text="click" />
  </div>
  )
}

export default Contacts