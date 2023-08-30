function HighScore({scoreList}) {
  return (
    <div>
      {scoreList.map((score) => {
        <div key={score.id}>
          <p> Name: {score.username}</p>
          <p> Score: {score.score}</p>
        </div>
      })}
    </div>
  );
}

export default HighScore;
