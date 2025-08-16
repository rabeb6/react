import description from "./players.js";
function Description({ description }) {
  return (
    <div className="player-description">
      <p>{description}</p>
    </div>
  );
}

export default Description;