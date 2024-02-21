import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const ScoreCard = ({ scoreCard }) => {
  const { tournament, format, team1, team2, status, matchId, matchSlug } = scoreCard;

  return (
    <Link href={`/${matchId}/${matchSlug}`}>
      <Card className='h-50 w-72'>
        <CardContent className="flex aspect-square items-center justify-center">
          <div>
            <p className="text-red-500 text-xs">{tournament || "N/A"}</p>
            <p className="text-xs text-gray-600 mb-2">{format || "N/A"}</p>
            <div className="mb-2">
              <span className="font-semibold">{team1?.name || "N/A"} :</span>
              <span className="ml-2 text-red-600 font-bold">{team1?.score || "N/A"}</span>
            </div>
            <div className="mb-2">
              <span className="font-semibold">{team2?.name || "N/A"} :</span>
              <span className="ml-2 text-red-600 font-bold">{team2?.score || "N/A"}</span>
            </div>
            <div className="text-sm text-red-500">{status || "N/A"}</div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ScoreCard;
