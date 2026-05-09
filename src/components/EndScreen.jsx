function EndScreen({ stars }) {
  return (
    <div className="screen">
      <h1>Great Job!</h1>
      <h2>Stars Earned: ⭐ {stars}</h2>
      <p>Thanks for playing!</p>
    </div>
  );
}

export default EndScreen;