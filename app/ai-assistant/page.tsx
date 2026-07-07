import Navbar from "../components/Navbar";

export default function AIAssistant() {
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

      <h1>🤖 AI News Assistant</h1>

      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          padding: "25px",
          boxShadow: "0 2px 10px rgba(0,0,0,.08)",
        }}
      >
        <h2>Ask Anything</h2>

        <input
          type="text"
          placeholder="Ask about today's news..."
          style={{
            width: "100%",
            padding: "15px",
            fontSize: "18px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            marginTop: "20px",
          }}
        />

        <button
          style={{
            marginTop: "20px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            padding: "12px 24px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Ask AI
        </button>

        <div
          style={{
            marginTop: "40px",
            background: "#f8fafc",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h3>Example Questions</h3>

          <ul>
            <li>What happened today?</li>
            <li>Summarize world news.</li>
            <li>What are the biggest market stories?</li>
            <li>Explain the latest AI news.</li>
            <li>What happened in India today?</li>
            <li>Which stories are trending?</li>
            <li>What should investors know today?</li>
            <li>Explain this like I'm 10 years old.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
