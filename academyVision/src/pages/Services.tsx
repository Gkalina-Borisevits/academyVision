import { FC } from "react"
import styles from "./styles/Services.module.css"
import img from "../assets/pagesImage/services.png"
import ImageContainer from "../components/imageContainer/ImageContainer"
import AdvantageCards from "../components/advantage-cards/AdvantageCards"


const Services: FC = () => {
  return (
    <div className={styles.servicesContainer}>
    <ImageContainer imgSrc={img} imgAlt="Image" />
    <AdvantageCards/>
  </div>
  )
}

export default Services