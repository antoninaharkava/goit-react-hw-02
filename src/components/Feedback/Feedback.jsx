import styles from "./Feedback.module.css";

export default function Feedback({
  values: { bad, good, neutral },
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <div className={styles.feedback}>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>Total {totalFeedback}</p>
      <p>Positive {positiveFeedback} %</p>
    </div>
  );
}
