'use client'

import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
import axios from 'axios';

export default function NewArticles() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1); // Initial page number

  useEffect(() => {
    loadNews();
  }, []); // Load news on initial render

  const loadNews = () => {
    setIsLoading(true);
    axios
      .get(`http://localhost:3001/fetch-news-all?page=${page}`)
      .then((response) => {
        setNews([...news, ...response.data]); // Append new data to existing news
        setIsLoading(false);
        setPage(page + 1); // Increment page number for next request
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  };

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">News Articles:</h1>
        {news.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
      <div className='flex items-center justify-center flex-col'>
        {isLoading && <p>Loading...</p>}
        {!isLoading && (
          <button onClick={loadNews} disabled={isLoading} className='text-white rounded-md font-bold p-3 bg-red-500 m-5'>
            Load More
          </button>
        )}
      </div>
    </>
    
  );
}