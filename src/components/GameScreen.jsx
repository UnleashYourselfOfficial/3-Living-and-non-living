import { useState } from "react";
import { objects } from "../data/objects";
import ObjectButton from "./ObjectButton";

function GameScreen({
  stars,
  setStars,
  endGame
}) {

  const [clickedObjects, setClickedObjects] = useState([]);
  const [showInstructions,setShowInstructions] = useState(true);
  const correctSound =
  new Audio(
    "/audio/correct.mp3"
  );

const wrongSound =
  new Audio(
    "/audio/wrong.mp3"
  );

  function handleObjectClick(object) {

  if (
    clickedObjects.includes(object.id)
  ) return;

  setClickedObjects(prev => [
    ...prev,
    object.id
  ]);

  if (object.type === "living") {

    correctSound.currentTime = 0;
    correctSound.play();

    setStars(prev => prev + 1);

  } else {

    wrongSound.currentTime = 0;
    wrongSound.play();
  }

  const livingClicked =
    clickedObjects.filter(id => {
      const obj =
        objects.find(
          item => item.id === id
        );

      return obj?.type === "living";
    }).length +
    (object.type === "living"
      ? 1
      : 0);

  if (livingClicked >= 5) {

    setTimeout(() => {
      endGame();
    }, 600);
  }

}
  return (
    <div className="game-screen">
      {showInstructions && (
        <div className="instruction-overlay">

          <div className="instruction-modal">

            <h2 className="instruction-title">
              How To Play
            </h2>
            <p>
              Find and choose the
              <strong>
                {" "}5 living things
              </strong>
              {" "}on your screen.
            </p>
            <p>
             Do not choose non-living things.
            </p>
            <button
              className="instruction-button"
              onClick={() =>
                setShowInstructions(false)
              }
            >
              🚀 Start Hunt
            </button>

          </div>
        </div>
      )}
      {!showInstructions && (
        <>
          <div className="top-bar">
            <div className="stars">
              ⭐ {stars}
            </div>
          </div>

          {objects.map(object => (
  <ObjectButton
    key={object.id}
    object={object}
    discovered={clickedObjects.includes(object.id)}  // ✅ add this
    onClick={() => handleObjectClick(object)}
  />
))}
        </>
      )}

    </div>
  );
}

export default GameScreen;