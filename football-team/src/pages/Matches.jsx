import React, { useState, useEffect } from "react";
import '../styles/Matches.css';

const Matches = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        setLoading(true);

        // Citirea cheii API din fișier
        const apiKeyResponse = await fetch("/api-key-matches.txt");
        const apiKey = await apiKeyResponse.text();

        const response = await fetch(
          `https://serpapi.com/search.json?engine=google&q=liverpool+matches&location=Austin%2C+Texas%2C+United+States&google_domain=google.com&gl=us&hl=en&api_key=${apiKey.trim()}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch matches");
        }

        const data = await response.json();

        // Extragem meciurile recente din `sports_results`
        const recentMatches = data.sports_results?.game_spotlight?.teams
          ? [
              {
                team1: data.sports_results.game_spotlight.teams[0].name,
                team2: data.sports_results.game_spotlight.teams[1].name,
                date: data.sports_results.game_spotlight.date || "Unknown Date",
                score: `${data.sports_results.game_spotlight.teams[0].score} - ${data.sports_results.game_spotlight.teams[1].score}`,
                competition: data.sports_results.game_spotlight.league,
                thumbnail1:
                  data.sports_results.game_spotlight.teams[0].thumbnail,
                thumbnail2:
                  data.sports_results.game_spotlight.teams[1].thumbnail,
              },
            ]
          : [];

        // Extragem meciurile viitoare din `games`
        const futureMatches = data.sports_results?.games?.map((game) => ({
          team1: game.teams[0].name,
          team2: game.teams[1].name,
          date: `${game.date} at ${game.time}`,
          score: "Upcoming",
          competition: game.tournament,
          thumbnail1: game.teams[0].thumbnail,
          thumbnail2: game.teams[1].thumbnail,
        })) || [];

        // Combinăm meciurile recente și viitoare
        setMatches([...recentMatches, ...futureMatches]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  if (loading) {
    return <p>Loading matches...</p>;
  }

  if (error) {
    return <p>Error fetching matches: {error}</p>;
  }

  return (
    <main>
      <h2>Liverpool Matches</h2>
      <div className="matches-grid">
        {matches.map((match, index) => (
          <div key={index} className="match-card">
            <div className="match-thumbnails">
              <img src={match.thumbnail1} alt={match.team1} />
              <img src={match.thumbnail2} alt={match.team2} />
            </div>
            <h3>
              {match.team1} vs {match.team2}
            </h3>
            <p>Date: {match.date}</p>
            <p>Score: {match.score}</p>
            <p>Competition: {match.competition}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Matches;
