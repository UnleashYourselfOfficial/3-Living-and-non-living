function WelcomeScreen({ startGame }) {
  return (
    <div className="screen welcome-screen">

      <div className="logo-container">
        <img
          src="/heading.png"
          alt="The Great Living Hunt"
          className="game-logo"
        />
      </div>
      <button className="main-button" onClick={startGame}>
        Start Adventure
      </button>

      <div className="scroll-hint">▼</div>

    </div>
  );
}

export default WelcomeScreen;