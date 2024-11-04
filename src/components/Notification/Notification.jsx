import styles from "./Notification.module.css";

export default function Notification() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>No feedback yet</p>
    </div>
  );
}
