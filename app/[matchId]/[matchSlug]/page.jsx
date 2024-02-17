import Navigation from '@/components/Navigation'
import React from 'react'
import PlayerScores from './component/PlayerScores'
import MatchInfo from './component/MatchInfo'
import MatchNews from './component/MatchNews'


export default function page() {

  return (
    <main className="container flex justify-center align-cente flex-col">
        <Navigation/>
        <PlayerScores/>
        <MatchInfo />
        <MatchNews />
    </main>
  )
}
