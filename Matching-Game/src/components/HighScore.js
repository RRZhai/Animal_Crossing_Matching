function HighScore({ scoreList, playerScore }) {
  const sortedScore = [...scoreList].sort((a, b) => b.score - a.score);
  return (
    <div className="high-score">
      <h2 id="notification">Top 100 Highest Score</h2>
      <div id="score-container">
        {sortedScore.map((score) => (
          <div className="score">
            <div className="basic-score" key={score.id}>
              <h3>{sortedScore.indexOf(score) + 1}</h3>
              <h3>{score.username}</h3>
              <h3>{score.score}</h3>
            </div>
            {score.id === playerScore?.id ? (
              <>
                <h3 id="notification">Your Score Detail</h3>
                <div className="detail-score">
                  <div className="score">
                    <img src=".../public/Recipe Card.png" />
                    <h3>{score.turns}</h3>
                  </div>
                  <div className="score">
                    <img src="https://dodo.ac/np/images/thumb/4/49/99k_Bells_NH_Inv_Icon_cropped.png/30px-99k_Bells_NH_Inv_Icon_cropped.png" />
                    <h3>{score.coinScore}</h3>
                  </div>
                  <div className="score">
                    <img src="https://dodo.ac/np/images/2/2c/Timer_NH_Inv_Icon.png" />
                    <h3>{score.timeScore}</h3>
                  </div>
                  <div className="score">
                    <img src="https://dodo.ac/np/images/c/c2/Timer_NH_Icon.png" />
                    <h3>{score.difficultyScore}</h3>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HighScore;
