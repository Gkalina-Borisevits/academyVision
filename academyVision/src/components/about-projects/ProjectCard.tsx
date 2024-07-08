import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./styles/ProjectCard.module.css";

interface ProjectCardProps {
  image: string;
  name: string;
  details: string[];
  link: string;
  imgStyle: string;
  blockStyle: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, name, details, link, imgStyle, blockStyle }) => {
  return (
    <div className={`${styles.block} ${blockStyle} card__article`} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.bgImg}>
        <div className={styles.header}>
          <img className={imgStyle} src={image} alt={name} />
          <p>{name}</p>
        </div>
        <ul>
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
      <div className={`card__data ${blockStyle}`}>
        <Link to={link} className="card__button">
          Details
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;