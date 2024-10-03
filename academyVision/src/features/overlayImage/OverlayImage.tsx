import { FC } from 'react';
import styles from './OverlayImage.module.css';

interface OverlayImageProps {
  imageUrl: string;
  altText?: string;
}

const OverlayImage: FC<OverlayImageProps> = ({ imageUrl}) => {
  return (
    <div className={styles.overlay}>
      <img src={imageUrl} alt={'Overlay image'} className={styles.image} />
    </div>
  );
};

export default OverlayImage;
