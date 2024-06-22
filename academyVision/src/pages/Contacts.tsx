import { FC } from "react"
import styles from "./styles/Contacts.module.css"
import img from "../assets/pagesImage/contacts.png"

const Contacts: FC = () => {
  return (
    <div>
    <div className={styles.imageContainer}>
      <img src={img} alt="Image" className={styles.backgroundImage} />
      <div className={styles.overlay}></div>
    </div>
  </div>
  )
}

export default Contacts