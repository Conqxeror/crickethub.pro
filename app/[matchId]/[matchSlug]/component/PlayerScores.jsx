'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { usePathname } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';

export default function PlayerScores() {
    const pathname = usePathname();
    const matchSlug = pathname.split('/')[2];
    const matchId = pathname.split('/')[1];
    const [scores, setScores] = useState(null);

    useEffect(() => {
        axios
          .get(`https://cric-api-nine.vercel.app/live-cricket-score/${matchId}/${matchSlug}`)
          .then((response) => {
            setScores(response.data);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
    }, [matchId, matchSlug]);

    if (!scores) {
        return <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
            <Skeleton className="bg-red-950 p-6 rounded-lg shadow-md h-80"/>
            <Skeleton className="bg-red-950 p-6 rounded-lg shadow-md h-80"/>
        </div>;
    }

    const { batting, bowling, batsmen, bowlers } = scores;

    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="bg-red-950 text-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4">{batting}</h2>
                <p className="text-lg mb-2">{bowling}</p>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Batsmen</h3>
                    {batsmen.map((batsman, index) => (
                        <div key={index} className="mb-4">
                            <p className="text-base">{batsman.name}: {batsman.runs} runs ({batsman.balls} balls)</p>
                            <p className="text-sm">Fours: {batsman.fours}, Sixes: {batsman.sixes}</p>
                            <p className="text-sm">Strike Rate: {batsman.strikeRate}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-red-950 text-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Bowlers</h3>
                {bowlers.map((bowler, index) => (
                    <div key={index} className="mb-4">
                        <p className="text-base">{bowler.name}: {bowler.overs} overs, {bowler.maidens} maidens, {bowler.runs} runs, {bowler.wickets} wickets</p>
                        <p className="text-sm">Economy: {bowler.economy}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
