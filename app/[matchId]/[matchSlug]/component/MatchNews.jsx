'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from '@/app/component/NewsCard';
import { usePathname } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';

export default function MatchNews() {
  const pathname = usePathname();
  const matchSlug = pathname.split('/')[2];
  const [news, setNews] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/fetch-news/${matchSlug}`, { cache: 'force-cache' })
      .then((response) => {
        setNews(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [matchSlug]); // Add matchSlug as a dependency

  return (
    <div>
      <h1 className="text-2xl font-bold text-center pt-5">Related News Articles:</h1>
      {!news ? <>
        <Skeleton className="h-32 w-full rounded-sm mt-5" />
        <Skeleton className="h-32 w-full rounded-sm mt-5" />
        <Skeleton className="h-32 w-full rounded-sm mt-5" />
      </> : news.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
}
