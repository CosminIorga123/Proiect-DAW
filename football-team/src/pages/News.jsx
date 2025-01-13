import React, { useEffect, useState } from 'react';

const News = () => {
  const [articles, setArticles] = useState([]);
  const teamName = 'Manchester United'; // Înlocuiește cu echipa dorită

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`https://api.premierleague.com/news?team=${teamName}`);
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Eroare la preluarea știrilor:', error);
      }
    };

    fetchNews();
  }, [teamName]);

  return (
    <main>
      <h2>Știri despre {teamName}</h2>
      <div className="news-grid">
        {articles.map((article, index) => (
          <div key={index} className="news-card">
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Citește mai mult</a>
          </div>
        ))}
      </div>
    </main>
  );
};

export default News;
