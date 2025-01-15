import React, { useState, useEffect } from 'react';
import '../styles/News.css';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 4; // Număr maxim de articole pe pagină

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);

        // Citim cheia API din fișier
        const apiKeyResponse = await fetch('/api-key-news.txt');
        const apiKey = await apiKeyResponse.text();

        // Cerere pentru sursa ESPN
        const espnResponse = await fetch(
          `https://newsapi.org/v2/everything?q=liverpool&sources=espn&apiKey=${apiKey.trim()}`
        );
        const espnData = await espnResponse.json();

        // Cerere pentru sursa BBC-News
        const bbcResponse = await fetch(
          `https://newsapi.org/v2/top-headlines?q=liverpool&sources=bbc-sport&apiKey=${apiKey.trim()}`
        );
        const bbcData = await bbcResponse.json();

        // Limităm rezultatele la primele 10 din fiecare sursă
        const espnArticles = espnData.articles.slice(0, 10);
        const bbcArticles = bbcData.articles.slice(0, 10);

        // Amestecăm articolele
        const combinedArticles = [...espnArticles, ...bbcArticles];
        const shuffledArticles = combinedArticles.sort(() => Math.random() - 0.5);

        setArticles(shuffledArticles);
      } catch (err) {
        setError('Failed to fetch news data');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <p>Loading news...</p>;
  }

  if (error) {
    return <p>Error fetching news: {error}</p>;
  }

  return (
    <main>
      <h2>Latest News on Liverpool</h2>
      <div className="news-grid">
        {currentArticles.map((article, index) => (
          <div key={index} className="news-card">
            <img
              src={article.urlToImage || '/placeholder.jpg'}
              alt={article.title}
              className="news-thumbnail"
            />
            <h3>{article.title}</h3>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
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

export default News;
