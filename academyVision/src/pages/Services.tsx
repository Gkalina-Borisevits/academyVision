import { FC } from "react"
import styles from "./styles/Services.module.css"
import img from "../assets/pagesImage/services.png"
import ImageContainer from "../components/imageContainer/ImageContainer"


const Services: FC = () => {
  return (
    <div className={styles.servicesContainer}>
    <ImageContainer imgSrc={img} imgAlt="Image" />
  </div>
  )
}

export default Services