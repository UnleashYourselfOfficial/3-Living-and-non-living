import { useState, useRef, useEffect } from "react";
import "./App.css";
import WelcomeScreen from "./components/WelcomeScreen";
import GameScreen from "./components/GameScreen";
import EndScreen from "./components/EndScreen";

function App() {
  const [screen, setScreen] = useState("welcome");
  const [stars, setStars] = useState(0);
  const bgMusic = useRef(null);

  function startGame() {
    setStars(0);
    setScreen("game");
  }

  function endGame() {
    setScreen("end");
  }

  useEffect(() => {
    const music = bgMusic.current;
    if (!music) return;
    music.volume = 0.2;
    music.loop = true;
    const startMusic = () => {
      music.play().catch(() => { });
    };
    window.addEventListener("click", startMusic, { once: true });
    return () => {
      window.removeEventListener("click", startMusic);
    };
  }, []);

  return (
    <div className="app">
      <img
        src="/Infineo-logo.webp"
        alt="Infineo Logo"
        className="company-logo"
      />
      <audio ref={bgMusic} src="/audio/background.mp3" preload="auto" />
      {screen === "welcome" && <WelcomeScreen startGame={startGame} />}
      {screen === "game" && (
        <GameScreen stars={stars} setStars={setStars} endGame={endGame} />
      )}
      {/* End Screen */}
      {screen === "end" && <EndScreen stars={stars} />}
    </div>
  );
}

export default App;