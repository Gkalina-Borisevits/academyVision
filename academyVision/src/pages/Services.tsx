import { FC } from "react"
import styles from "./styles/Services.module.css"
import img from "../assets/pagesImage/services.png"
import ImageContainer from "../components/imageContainer/ImageContainer"
import MoreHomeCards from "../components/home-card-more/MoreHomeCards"


const Services: FC = () => {
  return (
    <div className={styles.servicesContainer}>
    <ImageContainer imgSrc={img} imgAlt="Image" />
    <MoreHomeCards/>
  </div>
  )
}

export default Services