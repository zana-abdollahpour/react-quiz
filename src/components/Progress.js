export default function Progress({
  index,
  numQuestions,
  points,
  maxPossiblePoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <p>
        Question{" "}
        <strong>
          {index + 1} / {numQuestions}
        </strong>
        <p>
          <strong>
            {points} / {maxPossiblePoints}
          </strong>
        </p>
      </p>
    </header>
  );
}
