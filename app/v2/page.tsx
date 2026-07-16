import Navbar from "./components/Navbar";
import BreakingTicker from "./components/BreakingTicker";
import EditionHeader from "./components/EditionHeader";
import MarketStrip from "./components/MarketStrip";
import HeroStory from "./components/HeroStory";
import TopStories from "./components/TopStories";
import AIBrief from "./components/AIBrief";
import WeatherWidget from "./components/WeatherWidget";
import LiveTV from "./components/LiveTV";
import QuoteOfDay from "./components/QuoteOfDay";
import JokeOfDay from "./components/JokeOfDay";
import CartoonOfDay from "./components/CartoonOfDay";
import SportsSection from "./components/SportsSection";
import JobsSection from "./components/JobsSection";
import Footer from "./components/Footer";

export default function V2Home() {
  return (
    <main>

      <Navbar />
      <BreakingTicker />
      <EditionHeader />
      <MarketStrip />

      <section className="hero container">
        <HeroStory />

        <div className="hero-right">

          <div className="card mini">
            Markets
          </div>

          <WeatherWidget />

          <AIBrief />

          <LiveTV />

        </div>

      </section>

      <section className="container">
        <TopStories />
      </section>
      <section className="container fun-section">
        <QuoteOfDay />
        <JokeOfDay />
      </section>
      <section className="container">
        <CartoonOfDay />
      </section>
      <section className="container">
        <SportsSection />
      </section>
      <section className="container">
        <JobsSection />
      </section>
    <Footer />
    </main>
  );
}
