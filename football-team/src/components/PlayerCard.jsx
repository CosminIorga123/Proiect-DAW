import React from 'react';

const PlayerCard = ({ player }) => {
  return (
    <div className="player-card">
      <img src={player.image} alt={player.name} className="player-image" />
      <h3>{player.name}</h3>
      <p>Position: {player.position}</p>
      <p>Number: {player.number}</p>
    </div>
  );
};

export default PlayerCard;
