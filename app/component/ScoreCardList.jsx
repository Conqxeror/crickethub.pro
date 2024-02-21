'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
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

  useEffect(() => {
    axios
      .get("https://cric-api-nine.vercel.app/matches")
      .then((response) => {
        setScoreCards(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="flex justify-center items-center p-6">
      {scoreCards.length > 0 && (
        <Carousel className="w-full">
          <CarouselPrevious />
          <CarouselContent className="-ml-1">
            {scoreCards.map((scoreCard, index) => (
              <CarouselItem key={index} className="pb-5 md:basis-1/2 lg:basis-1/4">
                <div>
                  <span className="text-2xl font-semibold"><ScoreCard scoreCard={scoreCard} /></span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      )
      }
      {scoreCards.length === 0 && <Skeleton className="h-80 w-full" />}

    </div>
  );
}
