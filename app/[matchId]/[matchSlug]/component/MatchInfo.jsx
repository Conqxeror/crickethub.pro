'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { usePathname } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';

export default function MatchInfo() {
    const pathname = usePathname();
    const matchSlug = pathname.split('/')[2];
    const matchId = pathname.split('/')[1];
    const [info, setInfo] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:3001/live-cricket-match-info/${matchId}/${matchSlug}`)
            .then((response) => {
                setInfo(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [matchId, matchSlug]);

    return (
        <div className="container mx-auto flex flex-col items-center">
            <div className="py-5 font-bold text-2xl text-center">Match Info</div>
            {!info ? <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-96 md:w-full'>
                <Skeleton className="border p-4 rounded-lg h-20 w-full"/>
                <Skeleton className="border p-4 rounded-lg h-20 w-full"/>
                <Skeleton className="border p-4 rounded-lg h-20 w-full"/>
                <Skeleton className="border p-4 rounded-lg h-20 w-full"/>
                <Skeleton className="border p-4 rounded-lg h-20 w-full"/>
                <Skeleton className="border p-4 rounded-lg h-20 w-full"/>
                <Skeleton className="border p-4 rounded-lg h-20 w-full"/>
            </div> :
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-96 md:w-full">
                    {Object.entries(info.matchInfo).map(([key, value]) => (
                        <div key={key} className="border p-4 rounded-lg">
                            <div className="font-bold">{key}</div>
                            <div className='text-white' >{value}</div>
                        </div>
                    ))}
                </div>
            }
        </div>
    );
}
