'use client'

import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
import axios from 'axios';
import {Skeleton} from '@/components/ui/skeleton';

export default function NewArticles() {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false); // Add isLoading state

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = () => {
    setIsLoading(true); // Set loading state to true before making the request
    axios
      .get(`http://localhost:3001/fetch-news-all?page=${page}`)
      .then((response) => {
        setNews([...news, ...response.data]);
        setPage(page + 1);
        setIsLoading(false); // Set loading state to false after receiving the response
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Make sure to set loading state to false in case of error too
      });
  };

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">News Articles:</h1>
        {news.length === 0 && isLoading ? (
          <>
            <Skeleton key={1} className="h-32 w-full rounded-lg mt-5" />
            <Skeleton key={2} className="h-32 w-full rounded-lg mt-5" />
            <Skeleton key={3} className="h-32 w-full rounded-lg mt-5" />
          </>
        ) : (
          news.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))
        )}
      </div>
    </>
  );
}
