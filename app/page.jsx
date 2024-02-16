
import Navigation from "../components/Navigation";
import NewsArticles from "./component/NewsArticles";
import ScoreCardList from "./component/ScoreCardList";

export default function Home() {
  return (
    <main className="container flex justify-center align-cente flex-col">
      <Navigation/>
      <ScoreCardList />
      <NewsArticles/>
    </main>
  );
}
