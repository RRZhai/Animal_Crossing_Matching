function HighScore({ scoreList, playerScore }) {
  const sortedScore = [...scoreList].sort((a, b) => b.score - a.score);
  return (
    <div className="high-score">
      <h2 id="notification">Top 100 Highest Score</h2>
      <div id="score-container">
        {sortedScore.map((score) => (
          <div className="score" key={score.id}>
            <div className="basic-score">
              <h3>{sortedScore.indexOf(score) + 1}</h3>
              <h3>{score.username}</h3>
              <h3>{score.score}</h3>
            </div>
            {score.id === playerScore?.id ? (
              <>
                <h3 id="notification">Your Score Detail</h3>
                <div className="detail-score">
                  <div className="score">
                    <div className="category">
                      <img src="/RecipeCard.png" />
                      <h3>Turn</h3>
                    </div>
                    <h3>{score.turns}</h3>
                  </div>
                  <div className="score">
                    <div className="category">
                      <img src="/Moneybag.png" />
                      <h3>Coin</h3>
                    </div>
                    <h3>{score.coinScore}</h3>
                  </div>
                  <div className="score">
                    <div className="category">
                      <img src="/Timer_NH_Inv_Icon.png" />
                      <h3>Time</h3>
                    </div>
                    <h3>{score.timeScore}</h3>
                  </div>
                  <div className="score">
                    <div className="category">
                      <img src="/Leaf.png" />
                      <h3>Difficulty</h3>
                    </div>
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
