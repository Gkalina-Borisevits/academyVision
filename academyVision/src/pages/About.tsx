import  { FC } from 'react'
import styles from "./styles/About.module.css"
import img from "../assets/about.png"


const About: FC = () => {
  return (
    <div>
      <div className={styles.imageContainer}>
        <img src={img} alt="Image" className={styles.backgroundImage} />
        <div className={styles.overlay}></div>
      </div>
    </div>
  )
}

export default About