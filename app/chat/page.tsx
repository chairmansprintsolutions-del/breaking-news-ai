import Navbar from "../components/Navbar";

export default function Chat() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <Navbar />

      <h1>💬 AI News Chat</h1>

      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          padding: "25px",
          boxShadow: "0 2px 10px rgba(0,0,0,.08)",
        }}
      >
        <div
          style={{
            height: "500px",
            overflowY: "auto",
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
            marginBottom: "20px",
            background: "#fafafa",
          }}
        >
          <div
            style={{
              background: "#e8f0fe",
              padding: "15px",
              borderRadius: "10px",
              marginBottom: "15px",
              maxWidth: "80%",
            }}
          >
            👋 Hello! I'm your AI News Assistant.
            <br />
            Ask me anything about today's news.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <input
            type="text"
            placeholder="Type your question..."
            style={{
              flex: 1,
              padding: "15px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />

          <button
            style={{
              background: "#2563eb",
              color: "#fff",
              border: "none",
              padding: "15px 25px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Send
          </button>
        </div>

        <div
          style={{
            marginTop: "25px",
          }}
        >
          <h3>Suggested Questions</h3>

          <button style={btn}>World News</button>
          <button style={btn}>India News</button>
          <button style={btn}>Markets</button>
          <button style={btn}>Technology</button>
          <button style={btn}>AI</button>
          <button style={btn}>Top Headlines</button>
          <button style={btn}>Trending</button>
          <button style={btn}>Explain Today's Biggest Story</button>
        </div>
      </div>
    </main>
  );
}

const btn = {
  margin: "6px",
  padding: "10px 16px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  background: "#fff",
  cursor: "pointer",
};
