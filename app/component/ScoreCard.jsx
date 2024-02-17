// app\component\ScoreCard.jsx

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const ScoreCard = ({ scoreCard }) => {
  return (
    <Link href={`/${scoreCard.matchId}/${scoreCard.matchSlug}`} target="_blank">
      <Card className='h-50 w-72'>
        <CardContent className="flex aspect-square items-center justify-center">
          <span>
            <div>
              <p className="text-red-500 text-xs">
                {scoreCard?.tournament ?? "N/A"}

              </p>
              <p className="text-xs text-gray-600 mb-2">
                {scoreCard?.format ?? "N/A"}
              </p>
              <div className="mb-2">
                <span className="font-semibold">
                  {scoreCard.team1?.name + ` :` ?? "N/A"}
                </span>
                <span className="ml-2 text-red-600 font-bold">
                  {scoreCard.team1?.score ?? "N/A"}
                </span>
              </div>
              <div className="mb-2">
                <span className="font-semibold">
                  {scoreCard.team2?.name + ` :` ?? "N/A"}
                </span>
                <span className="ml-2 text-red-600 font-bold">
                  {scoreCard.team2?.score ?? "N/A"}
                </span>
              </div>
              <div className="text-sm text-red-500">
                {scoreCard?.status ?? "N/A"}
              </div>
            </div>
          </span>
        </CardContent>
      </Card>
    </Link>

  );
};

export default ScoreCard;
