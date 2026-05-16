import { useState } from "react";
import { objects } from "../data/objects";
import ObjectButton from "./ObjectButton";
import InstructionsPopup from "../assets/instructions-popup.webp";

const TOTAL_LIVING = 8;

function GameScreen({ stars, setStars, endGame }) {
  const [clickedObjects, setClickedObjects] = useState([]);
  const [showInstructions, setShowInstructions] = useState(true);

  const correctSound = new Audio("/audio/correct.mp3");
  const wrongSound = new Audio("/audio/wrong.mp3");

  // How many living things found so far
  const livingFound = clickedObjects.filter(id => {
    const obj = objects.find(item => item.id === id);
    return obj?.type === "living";
  }).length;

  const progressPercent = Math.min(
    (livingFound / TOTAL_LIVING) * 100,
    100
  );

  function handleObjectClick(object) {
    if (clickedObjects.includes(object.id)) return;

    setClickedObjects(prev => [...prev, object.id]);

    if (object.type === "living") {
      correctSound.currentTime = 0;
      correctSound.play();
      setStars(prev => prev + 1);
    } else {
      wrongSound.currentTime = 0;
      wrongSound.play();
    }

    const newLivingCount =
      livingFound + (object.type === "living" ? 1 : 0);

    if (newLivingCount >= TOTAL_LIVING) {
      setTimeout(() => endGame(), 600);
    }
  }

  return (
    <div className="game-screen">
      {showInstructions && (
        <div className="instruction-overlay">
          <img src={InstructionsPopup} alt="Instructions" />
          <button
            className="instruction-button"
            onClick={() => setShowInstructions(false)}
          >
            Start Hunt
          </button>
        </div>
      )}

      {!showInstructions && (
        <>
          {/* ── PROGRESS BAR ── */}
          <div className="top-bar">
            <div className="progress-bar-wrapper">
              <span className="progress-label">🌿 Living Things</span>
              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${progressPercent}%` }}
                />
                {/* milestone dots */}
                {Array.from({ length: TOTAL_LIVING }).map((_, i) => (
                  <div
                    key={i}
                    className={`progress-dot ${
                      i < livingFound ? "reached" : ""
                    }`}
                    style={{ left: `${((i + 1) / TOTAL_LIVING) * 100}%` }}
                  />
                ))}
              </div>
              <span className="progress-count">
                {livingFound} / {TOTAL_LIVING}
              </span>
            </div>
          </div>

          {objects.map(object => (
            <ObjectButton
              key={object.id}
              object={object}
              discovered={clickedObjects.includes(object.id)}
              onClick={() => handleObjectClick(object)}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default GameScreen;