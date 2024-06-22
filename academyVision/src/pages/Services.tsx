import { FC } from "react"
import styles from "./styles/Services.module.css"
import img from "../assets/pagesImage/portfolio.png"


const Services: FC = () => {
  return (
    <div>
    <div className={styles.imageContainer}>
      <img src={img} alt="Image" className={styles.backgroundImage} />
      <div className={styles.overlay}></div>
    </div>
  </div>
  )
}

export default Services