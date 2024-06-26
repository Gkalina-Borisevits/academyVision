import  { FC } from 'react'
import styles from "./styles/About.module.css"
import img from "../assets/pagesImage/about.png"
import ImageContainer from '../components/imageContainer/ImageContainer'
import AboutCards from '../components/about-cards/AboutCards'
import FotoCards from '../components/foto-cards/FotoCards'



const About: FC = () => {
  return (
    <div className={styles.aboutContainer}>
      <ImageContainer imgSrc={img} imgAlt="Image" />
      <AboutCards/>
      <FotoCards/>
    </div>
  )
}

export default About