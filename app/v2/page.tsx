import Navbar from "./components/Navbar";
import BreakingTicker from "./components/BreakingTicker";
import EditionHeader from "./components/EditionHeader";
import HeroStory from "./components/HeroStory";

export default function V2Home() {
  return (
    <main>

      <Navbar />
      <BreakingTicker />
      <EditionHeader />

      <section className="hero container">
        <HeroStory />

        <div className="hero-right">

          <div className="card mini">
            Markets
          </div>

          <div className="card mini">
            Weather
          </div>

          <div className="card mini">
            AI Brief
          </div>

          <div className="card mini">
            Live TV
          </div>

        </div>

      </section>

      <section className="container">

        <h2 className="section-title">
          Top Stories
        </h2>

        <div className="stories">

          {[1,2,3,4,5].map((item)=>(
            <div
              className="story card"
              key={item}
            >
              <div className="image"/>

              <h3>
                Story {item}
              </h3>

              <p>
                News summary will appear here.
              </p>

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}
