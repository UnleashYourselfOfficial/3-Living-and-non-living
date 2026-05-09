import { useState } from "react";
import { objects } from "../data/objects";
import ObjectButton from "./ObjectButton";

function GameScreen({ stars, setStars, endGame }) {

  const [clickedObjects, setClickedObjects] = useState([]);

  function handleObjectClick(object) {

    if (clickedObjects.includes(object.id)) return;

    setClickedObjects([...clickedObjects, object.id]);

    setStars(prev => prev + 1);

    setTimeout(() => {

      if (clickedObjects.length >= 3) {
        endGame();
      }

    }, 500);
  }

  return (
    <div className="game-screen">

      <div className="top-bar">

        <div className="stars">
          ⭐ {stars}
        </div>

      </div>

      <img
        src="/mascot.png"
        className="mascot"
      />

      {objects.map(object => (
        <ObjectButton
          key={object.id}
          object={object}
          onClick={() => handleObjectClick(object)}
        />
      ))}

    </div>
  );
}

export default GameScreen;