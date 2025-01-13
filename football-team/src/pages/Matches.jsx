import React from 'react';

const Matches = () => {
  const matches = [
    { id: 1, teams: 'Liverpool vs Manchester United', date: 'January 20, 2025', time: '18:00' },
    { id: 2, teams: 'Liverpool vs Chelsea', date: 'January 25, 2025', time: '20:45' },
    { id: 3, teams: 'Liverpool vs Arsenal', date: 'February 1, 2025', time: '17:30' },
  ];

  return (
    <main>
      <h2>Upcoming Matches</h2>
      <div className="matches-grid">
        {matches.map((match) => (
          <div key={match.id} className="match-card">
            <h3>{match.teams}</h3>
            <p>Date: {match.date}</p>
            <p>Time: {match.time}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Matches;
