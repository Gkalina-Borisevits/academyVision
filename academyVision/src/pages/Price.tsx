import { FC } from 'react'
import styles from "./styles/Price.module.css"
import img from "../assets/price.webp"

const Price: FC = () => {
  return (
    <div>
    <div className={styles.imageContainer}>
      <img src={img} alt="Image" className={styles.backgroundImage} />
      <div className={styles.overlay}></div>
    </div>
  </div>
  )
}

export default Price