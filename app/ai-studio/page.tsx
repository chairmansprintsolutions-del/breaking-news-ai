import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function AIStudio() {
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("importance_score", { ascending: false })
    .limit(12);

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

      <h1>🤖 AI Studio</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
          gap: "25px",
        }}
      >
        {(articles || []).map((article: any) => (
          <div
            key={article.id}
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "25px",
              boxShadow: "0 2px 10px rgba(0,0,0,.1)",
            }}
          >
            <h2>{article.title}</h2>

            <p>{article.summary}</p>

            <div
              style={{
                marginTop: "20px",
                display: "grid",
                gap: "10px",
              }}
            >
              <button
                style={{
                  background: "#0b5ed7",
                  color: "#fff",
                  border: "none",
                  padding: "12px",
                  borderRadius: "8px",
                }}
              >
                🧠 AI Explain
              </button>

              <button
                style={{
                  background: "#198754",
                  color: "#fff",
                  border: "none",
                  padding: "12px",
                  borderRadius: "8px",
                }}
              >
                🎙 Generate Podcast
              </button>

              <button
                style={{
                  background: "#dc3545",
                  color: "#fff",
                  border: "none",
                  padding: "12px",
                  borderRadius: "8px",
                }}
              >
                🎥 Generate Video
              </button>

              <button
                style={{
                  background: "#6f42c1",
                  color: "#fff",
                  border: "none",
                  padding: "12px",
                  borderRadius: "8px",
                }}
              >
                🌐 Translate
              </button>

              <button
                style={{
                  background: "#fd7e14",
                  color: "#fff",
                  border: "none",
                  padding: "12px",
                  borderRadius: "8px",
                }}
              >
                📱 Social Media Post
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
