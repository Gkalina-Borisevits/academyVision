import {FC} from "react";
import styles from "./styles/Price.module.css";
import img from "../assets/pagesImage/price.webp";
import ImageContainer from "../components/imageContainer/ImageContainer";
import MyContainer from "../components/myContainer/MyContainer";
import AboutProjects from "../components/about-projects/AboutProjects";
import StagesWork from "../components/stages-of-work/StagesOfWork.tsx";
import HomeCards from "../components/home-cards/HomeCards.tsx";
import StageOfWorkAccordion from "../components/stages-of-work/stages-of-work-accordion/StageOfWorkAccordion.tsx";
import AdvantageCards from "../components/advantage-cards/AdvantageCards.tsx";

const Price: FC = () => {
    return (
        <div className={styles.priceContainer}>
            <ImageContainer imgSrc={img} imgAlt="Image">

            </ImageContainer>
            <MyContainer>

                <HomeCards/>
                <AboutProjects/>
                {/* <StagesWork/> */}
                <StageOfWorkAccordion/>
            </MyContainer>
        </div>
    );
};

export default Price;
