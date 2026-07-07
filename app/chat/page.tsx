"use client";

import { useState } from "react";

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<
    {
      role: "user" | "assistant";
      text: string;
    }[]
  >([
    {
      role: "assistant",
      text: "👋 Hello! I'm Breaking News AI. Ask me anything about current world news.",
    },
  ]);

  async function send() {
    if (!message.trim()) return;

    const userMessage = message;

    setMessages((m) => [
      ...m,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await res.json();

      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          text: data.answer,
        },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          text: "Unable to contact AI.",
        },
      ]);
    }

    setLoading(false);
  }

  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "40px auto",
        fontFamily: "Arial",
      }}
    >
      <h1>💬 Breaking News AI Chat</h1>

      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          height: "600px",
          overflowY: "auto",
          padding: "20px",
          boxShadow: "0 2px 10px rgba(0,0,0,.08)",
        }}
      >
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              marginBottom: "20px",
              display: "flex",
              justifyContent:
                m.role === "user"
                  ? "flex-end"
                  : "flex-start",
            }}
          >
            <div
              style={{
                background:
                  m.role === "user"
                    ? "#2563eb"
                    : "#f3f4f6",
                color:
                  m.role === "user"
                    ? "#fff"
                    : "#000",
                padding: "15px",
                borderRadius: "12px",
                maxWidth: "75%",
                whiteSpace: "pre-wrap",
              }}
            >
              {m.text}
            </div>
          </div>
        ))}

        {loading && (
          <p>🤖 Thinking...</p>
        )}
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <input
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") send();
          }}
          placeholder="Ask anything..."
          style={{
            flex: 1,
            padding: "15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />

        <button
          onClick={send}
          disabled={loading}
          style={{
            background: "#2563eb",
            color: "#fff",
            border: "none",
            padding: "15px 30px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>

      <div
        style={{
          marginTop: "30px",
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        {[
          "Top headlines today",
          "Explain today's biggest story",
          "Latest AI news",
          "India news",
          "Market update",
          "Technology news",
        ].map((q) => (
          <button
            key={q}
            onClick={() => setMessage(q)}
            style={{
              background: "#eee",
              border: "none",
              padding: "10px 15px",
              borderRadius: "20px",
              cursor: "pointer",
            }}
          >
            {q}
          </button>
        ))}
      </div>
    </main>
  );
}
