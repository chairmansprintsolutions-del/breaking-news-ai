import Navbar from "../components/Navbar";

export default function About() {
  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <Navbar />

      <h1>About Breaking News AI</h1>

      <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
        Breaking News AI is an AI-powered global news platform that monitors
        trusted news sources around the world, identifies important events,
        summarizes developments using Artificial Intelligence and presents them
        in a fast, easy-to-read format.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        <div style={card}>
          <h2>🚨 Breaking News</h2>
          <p>
            AI continuously monitors trusted sources to detect important
            developments in real time.
          </p>
        </div>

        <div style={card}>
          <h2>🧠 AI Analysis</h2>
          <p>
            Every article is summarized, ranked and explained using modern AI
            models.
          </p>
        </div>

        <div style={card}>
          <h2>🌍 Global Coverage</h2>
          <p>
            World, India, Technology, Business, Science, Markets, Sports and
            more.
          </p>
        </div>

        <div style={card}>
          <h2>⚡ Fast Updates</h2>
          <p>
            Automated pipelines ensure the latest stories appear within minutes.
          </p>
        </div>

        <div style={card}>
          <h2>📊 AI Insights</h2>
          <p>
            Understand why a story matters, possible impacts and emerging
            trends.
          </p>
        </div>

        <div style={card}>
          <h2>🔒 Trusted Sources</h2>
          <p>
            News is collected from reputable publishers before AI processing and
            presentation.
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: "50px",
          padding: "30px",
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,.08)",
        }}
      >
        <h2>Our Mission</h2>

        <p style={{ lineHeight: "1.8" }}>
          Our mission is to make global news easier to understand using AI,
          allowing readers to quickly grasp important events without information
          overload.
        </p>
      </div>

      <div
        style={{
          marginTop: "40px",
          textAlign: "center",
        }}
      >
        <h2>Co-powered by Sprint Solutions</h2>

        <p>
          Building AI products for news, automation and intelligent decision
          support.
        </p>
      </div>
    </main>
  );
}

const card = {
  background: "#fff",
  padding: "25px",
  borderRadius: "12px",
  boxShadow: "0 2px 8px rgba(0,0,0,.08)",
};
