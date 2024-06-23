import  { FC } from 'react'
import styles from "./styles/About.module.css"
import img from "../assets/pagesImage/about.png"
import ImageContainer from '../components/imageContainer/ImageContainer'


const About: FC = () => {
  return (
    <div className={styles.aboutContainer}>
      <ImageContainer imgSrc={img} imgAlt="Image" />
      
    </div>
  )
}

export default About