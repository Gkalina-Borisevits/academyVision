import styles from "./MyContainer.module.css";

interface MyContainerProps {
  children: React.ReactNode;
}

const MyContainer: React.FC<MyContainerProps> = ({ children }) => {
  return <div className={styles.myContainer}>{children}</div>;
};

export default MyContainer;
