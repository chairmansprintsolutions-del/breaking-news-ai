export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        marginTop: "60px",
        background: "#111827",
        color: "#fff",
        padding: "50px 30px",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "40px",
        }}
      >
        <div>
          <h2>🚨 Breaking News AI</h2>

          <p>
            AI-powered global news platform delivering breaking news,
            summaries, explainers, forecasts and live updates.
          </p>
        </div>

        <div>
          <h3>News</h3>

          <p><a href="/breaking">Breaking News</a></p>
          <p><a href="/live">Live Updates</a></p>
          <p><a href="/trending">Trending</a></p>
          <p><a href="/headlines">Headlines</a></p>
          <p><a href="/discover">Discover</a></p>
        </div>

        <div>
          <h3>AI</h3>

          <p><a href="/ai-assistant">AI Assistant</a></p>
          <p><a href="/chat">AI Chat</a></p>
          <p><a href="/forecast">Forecast</a></p>
          <p><a href="/insights">Insights</a></p>
          <p><a href="/podcast">Podcast</a></p>
        </div>

        <div>
          <h3>Platform</h3>

          <p><a href="/about">About</a></p>
          <p><a href="/contact">Contact</a></p>
          <p><a href="/api">Developer API</a></p>
          <p><a href="/status">System Status</a></p>
          <p><a href="/health">Health</a></p>
        </div>
      </div>

      <hr
        style={{
          margin: "40px 0",
          borderColor: "#374151",
        }}
      />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <span>
          © {year} Breaking News AI
        </span>

        <span>
          Co-powered by Sprint Solutions
        </span>
      </div>
    </footer>
  );
}
