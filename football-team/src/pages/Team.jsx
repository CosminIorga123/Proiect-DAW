import React, { useState } from 'react';
import PlayerCard from '../components/PlayerCard';
import becker from '../images/team/becker.png';
import gakpo from '../images/team/gakpo.png';
import jones from '../images/team/jones.png';
import kelleher from '../images/team/kelleher.png';
import konate from '../images/team/konate.png';
import macallister from '../images/team/macallister.png';
import nunez from '../images/team/nunez.png';
import robertson from '../images/team/robertson.png';
import salah from '../images/team/salah.png';
import szoboszlai from '../images/team/szoboszlai.png';
import trent from '../images/team/trent.png';
import virgil from '../images/team/virgil.png';

const players = [
  { id: 1, name: 'Alisson Becker', position: 'Goalkeeper', number: 1, image: becker },
  { id: 5, name: 'Caoimhín Kelleher', position: 'Goalkeeper', number: 62, image: kelleher },
  { id: 9, name: 'Andrew Robertson', position: 'Defender', number: 26, image: robertson },
  { id: 6, name: 'Ibrahima Konaté', position: 'Defender', number: 5, image: konate },
  { id: 12, name: 'Trent Alexander-Arnold', position: 'Defender', number: 66, image: trent },
  { id: 13, name: 'Virgil van Dijk', position: 'Defender', number: 4, image: virgil },
  { id: 4, name: 'Curtis Jones', position: 'Midfielder', number: 17, image: jones },
  { id: 7, name: 'Alexis Mac Allister', position: 'Midfielder', number: 10, image: macallister },
  { id: 11, name: 'Dominik Szoboszlai', position: 'Midfielder', number: 8, image: szoboszlai },
  { id: 3, name: 'Cody Gakpo', position: 'Forward', number: 18, image: gakpo },
  { id: 8, name: 'Darwin Núñez', position: 'Forward', number: 9, image: nunez },
  { id: 10, name: 'Mohamed Salah', position: 'Forward', number: 11, image: salah },
];


const Team = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const playersPerPage = 3;

  // Calculare index de început și sfârșit
  const indexOfLastPlayer = currentPage * playersPerPage;
  const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage;
  const currentPlayers = players.slice(indexOfFirstPlayer, indexOfLastPlayer);

  // Calculare număr total de pagini
  const totalPages = Math.ceil(players.length / playersPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <main>
      <h2>Our Team</h2>
      <div className="player-grid">
        {currentPlayers.map(player => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>

      <div className="pagination">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </main>
  );
};

export default Team;
