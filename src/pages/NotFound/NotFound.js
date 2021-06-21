import styles from "./NotFound.module.css";
export const NotFound = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <h1>404</h1>
        <h3>The requested resource was not found.</h3>
      </div>
    </div>
  );
};

export default NotFound;
