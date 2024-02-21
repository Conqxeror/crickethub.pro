'use client'

import React, { useEffect, useState } from "react";
import ScoreCard from "./ScoreCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";

export default function ScoreCardList() {
  const [scoreCards, setScoreCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScoreCards = async () => {
      try {
        const response = await fetch('/api/get-matches');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setScoreCards(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchScoreCards();
  }, []); 

  return (
    <div className="flex justify-center items-center p-6">
      {loading ? (
        <Skeleton className="h-80 w-full" />
      ) : (
        scoreCards.length > 0 && (
          <Carousel className="w-full">
            <CarouselPrevious />
            <CarouselContent className="-ml-1">
              {scoreCards.map((scoreCard, index) => (
                <CarouselItem key={index} className="pb-5 md:basis-1/2 lg:basis-1/4">
                  <div>
                    <span className="text-2xl font-semibold">
                      <ScoreCard scoreCard={scoreCard} />
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
          </Carousel>
        )
      )}
    </div>
  );
}
