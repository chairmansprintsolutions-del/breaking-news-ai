import Navbar from "../components/Navbar";

export default function Copilot() {
  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <Navbar />

      <h1>🚀 News Copilot</h1>

      <p>Your AI assistant for understanding global events.</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <Card
          title="📰 Summarize"
          text="Summarize today's news in 30 seconds."
        />

        <Card
          title="🧠 Explain"
          text="Explain any article in simple language."
        />

        <Card
          title="📈 Market Impact"
          text="See possible market implications."
        />

        <Card
          title="🌍 Global Impact"
          text="Understand worldwide consequences."
        />

        <Card
          title="⚠ Risk Analysis"
          text="AI estimates geopolitical and economic risks."
        />

        <Card
          title="📅 Timeline"
          text="Follow how a story evolved."
        />

        <Card
          title="🔍 Compare Sources"
          text="Compare coverage across publishers."
        />

        <Card
          title="💬 Ask AI"
          text="Ask follow-up questions about any story."
        />
      </div>
    </main>
  );
}

function Card({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,.08)",
      }}
    >
      <h2>{title}</h2>

      <p>{text}</p>

      <button
        style={{
          marginTop: "15px",
          background: "#2563eb",
          color: "#fff",
          border: "none",
          padding: "10px 18px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Open
      </button>
    </div>
  );
}
