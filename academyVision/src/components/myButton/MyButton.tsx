import styles from "./MyButton.module.css";

const MyButton: React.FC<{ text: string }> = ({ text }) => {

  return (
    <div>
      <button className={styles.animatedButton}>
        <span className={styles.buttonText}>{text}</span>
      </button>
    </div>
  );
};

export default MyButton;
