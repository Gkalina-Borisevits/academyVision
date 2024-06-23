import styles from "./ImageContainer.module.css";
import PropTypes from "prop-types";

interface ImageContainerProps {
  imgSrc: string;
  imgAlt: string;
  children?: React.ReactNode;
}

const ImageContainer:  React.FC<ImageContainerProps> = ({ imgSrc, imgAlt, children }) => {
  return (
    <div className={styles.imageContainer}>
      <img src={imgSrc} alt={imgAlt} className={styles.backgroundImage} />
      <div className={styles.overlay}></div>
      {children && <div className={styles.childrenContainer}>{children}</div>}
    </div>
  );
};

ImageContainer.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default ImageContainer;
