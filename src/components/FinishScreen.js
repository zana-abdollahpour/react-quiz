export default function FinishScreen({
  points,
  maxPossiblePoints,
  highscore,
  dispatch,
}) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage >= 90) emoji = "🥇";
  if (percentage >= 80 && percentage < 90) emoji = "🥈";
  if (percentage >= 65 && percentage < 80) emoji = "🥉";
  if (percentage >= 40 && percentage < 65) emoji = "🎉";
  if (percentage < 40) emoji = "🤦🏻‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        <strong>{maxPossiblePoints}</strong>. ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}
