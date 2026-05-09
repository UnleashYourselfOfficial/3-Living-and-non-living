function WelcomeScreen({ startGame }) {
  return (
    <div className="screen">

      <h1 className="title">
        A cry that reached mother's heart
      </h1>

      <button
        className="main-button"
        onClick={startGame}
      >
        Start Game
      </button>

    </div>
  );
}

export default WelcomeScreen;