import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { BsEnvelope, BsGeoAlt, BsTelephone } from "react-icons/bs";
import type { ContactCard } from "../../types/ContactCard";
import styles from "./ContactCard.module.css";

const ContactCard: React.FC = () => {
  const { t } = useTranslation("translation");
  const contactCards: ContactCard[] = t("contactCard", { returnObjects: true });

  return (
    <div className={styles.homeCardContainer}>
      {contactCards.map((card) => (
        <Card key={card.id} className={`${styles.cardContainer} mb-2 border-2`}>
          <Card.Header className={styles.cardHeader}>
            <Card.Text className={styles.headerText}> {card.title}</Card.Text>
          </Card.Header>
          <Card.Body>
            <Card.Text className={styles.aboutText}>
              <BsGeoAlt className={styles.icon}/> {card.address}
            </Card.Text>
            <Card.Text className={styles.aboutText}>
              <BsGeoAlt className={styles.icon}/> {card.address2}
            </Card.Text>
            <Card.Text className={styles.aboutText}>
              <BsTelephone className={styles.icon}/> {card.phone}
            </Card.Text>
            <Card.Text className={styles.aboutText}>
              <BsEnvelope className={styles.icon}/> {card.email}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ContactCard;
