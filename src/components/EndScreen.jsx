import { useEffect, useRef } from "react";
import GreatJob from "../assets/greatjob1.webp";

function EndScreen({ stars }) {

  const winSound = useRef(null);

  useEffect(() => {
    if (winSound.current) {
      winSound.current.currentTime = 0;

      winSound.current
        .play()
        .catch(() => {});
    }
  }, []);

  return (
    <div className="screen">

      <audio
        ref={winSound}
        src="/audio/winner.mp3"
        preload="auto"
      />

      <div className="end-box">
        <img
          src={GreatJob}
          alt="Great Job!"
          className="end-image"
        />
      </div>

    </div>
  );
}

export default EndScreen;