export default function Feedback({
    values: { bad, good, neutral },
    totalFeedback,
    positiveFeedback,
  }) {
    return (
      <div>
        <p>Goog {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
        <p>Total {totalFeedback}</p>
        <p>Positive {positiveFeedback} %</p>
      </div>
    );
  }