import { useState } from "react";
import "./App.css";

import WelcomeScreen from "./components/WelcomeScreen";
import GameScreen from "./components/GameScreen";
import EndScreen from "./components/EndScreen";

function App() {
  const [screen, setScreen] = useState("welcome");

  const [stars, setStars] = useState(0);

  function startGame() {
    setScreen("game");
  }

  function endGame() {
    setScreen("end");
  }

  function restartGame() {
    setStars(0);
    setScreen("welcome");
  }

  return (
    <div className="app">

      {screen === "welcome" && (
        <WelcomeScreen startGame={startGame} />
      )}

      {screen === "game" && (
        <GameScreen
          stars={stars}
          setStars={setStars}
          endGame={endGame}
        />
      )}

      {screen === "end" && (
        <EndScreen
          stars={stars}
          restartGame={restartGame}
        />
      )}

    </div>
  );
}

export default App;