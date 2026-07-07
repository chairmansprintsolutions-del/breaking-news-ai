import Navbar from "../components/Navbar";

export default function About() {
  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "30px",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <Navbar />

      <h1>About Breaking News AI</h1>

      <p>
        Breaking News AI is an AI-powered global news platform that collects,
        analyzes, summarizes and publishes important news from trusted sources
        worldwide.
      </p>

      <h2>Features</h2>

      <ul>
        <li>🌍 Global News Coverage</li>
        <li>🤖 AI Generated Summaries</li>
        <li>⚡ Breaking News Alerts</li>
        <li>📰 Daily News Digest</li>
        <li>📈 Importance Scoring</li>
        <li>🧠 AI Powered Analysis</li>
        <li>🔍 Search</li>
        <li>📱 Mobile Friendly</li>
      </ul>

      <h2>Sources</h2>

      <ul>
        <li>BBC</li>
        <li>Reuters</li>
        <li>Wall Street Journal</li>
        <li>New York Times</li>
        <li>TechCrunch</li>
        <li>The Verge</li>
        <li>Al Jazeera</li>
        <li>Indian News Sources</li>
      </ul>

      <h2>Disclaimer</h2>

      <p>
        News summaries are generated using Artificial Intelligence. Original
        copyrights belong to their respective publishers.
      </p>

      <p style={{ marginTop: "50px", color: "#666" }}>
        © 2026 Breaking News AI • Co-powered by Sprint Solutions
      </p>
    </main>
  );
}
