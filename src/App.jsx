import { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState([]);
  const [handicap, setHandicap] = useState(0);

  const addScore = (newScore) => {
    setScore([...score, newScore]);
    calculateHandicap([...score, newScore]);
  };

  const calculateHandicap = (scores) => {
    // Simple handicap calculation (Placeholder for your actual logic)
    const averageScore = scores.reduce((a, b) => a + b, 0) / scores.length;
    const newHandicap = Math.max(0, 72 - averageScore); // Simplified example
    setHandicap(newHandicap);
  };

  return (
    <>
      <header className="app-header">
        <h1>Golf Score Tracker</h1>
      </header>
      <main className="score-interface">
        <div className="score-input">
          <input
            type="number"
            placeholder="Enter your latest score"
            onKeyDown={(e) =>
              e.key === "Enter" && addScore(Number(e.target.value))
            }
          />
          <button onClick={() => addScore(Number(prompt("Enter new score:")))}>
            Add Score
          </button>
        </div>
        <div className="scores-list">
          <h2>Recent Scores:</h2>
          <ul>
            {score.map((s, index) => (
              <li key={index}>Score: {s}</li>
            ))}
          </ul>
        </div>
        <div className="handicap-display">
          <h2>Current Handicap: {handicap.toFixed(2)}</h2>
        </div>
      </main>
      <footer className="app-footer">
        <p>Track your progress and improve your game!</p>
      </footer>
    </>
  );
}

export default App;
