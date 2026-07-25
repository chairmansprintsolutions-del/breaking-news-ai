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
import EntertainmentSection from "./components/EntertainmentSection";
import Footer from "./components/Footer";

export default function V2Home() {
  return (
    <main className="newspaper">

      <Navbar />

      <BreakingTicker />

      <EditionHeader />

      <MarketStrip />

      {/* ===========================
          FRONT PAGE
      ============================ */}

      <section className="container front-page">

        {/* LEFT - LEAD STORY */}
        <div className="lead-column">

          <HeroStory />

        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="sidebar-column">

          <WeatherWidget />

          <AIBrief />

          <LiveTV />

        </aside>

      </section>

      {/* ===========================
          TOP STORIES
      ============================ */}

      <section className="container newspaper-block">

        <div className="section-title">
          <span>TOP STORIES</span>
        </div>

        <TopStories />

      </section>

      {/* ===========================
          QUICK READS
      ============================ */}

      <section className="container quick-grid">

        <div className="quick-card">
          <QuoteOfDay />
        </div>

        <div className="quick-card">
          <JokeOfDay />
        </div>

        <div className="quick-card full">
          <CartoonOfDay />
        </div>

      </section>

      {/* ===========================
          NEWS GRID
      ============================ */}

      <section className="container news-grid">

        <div className="news-card">

          <div className="section-title">
            <span>SPORTS</span>
          </div>

          <SportsSection />

        </div>

        <div className="news-card">

          <div className="section-title">
            <span>ENTERTAINMENT</span>
          </div>

          <EntertainmentSection />

        </div>

      </section>

      {/* ===========================
          JOBS
      ============================ */}

      <section className="container newspaper-block">

        <div className="section-title">
          <span>CAREERS & JOBS</span>
        </div>

        <JobsSection />

      </section>

      <Footer />

    </main>
  );
}
