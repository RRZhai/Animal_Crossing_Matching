function HighScore({ scoreList }) {
  return (
    <div className="high-score">
      <h2>Top 20 Highest Score</h2>
      <div>
        {scoreList.map((score) => (
          <div className="score" key={score.id}>
            <h3>{score.id}</h3>
            <h3>{score.username}</h3>
            <h3>{score.score}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HighScore;
