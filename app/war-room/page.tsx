import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function WarRoom() {
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("importance_score", { ascending: false })
    .limit(50);

  return (
    <main
      style={{
        background: "#0f172a",
        color: "#ffffff",
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <Navbar />

      <h1>🛰 AI War Room</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {(articles || []).map((article: any) => (
          <div
            key={article.id}
            style={{
              background: "#1e293b",
              borderRadius: "12px",
              padding: "20px",
              borderLeft:
                article.importance_score >= 90
                  ? "6px solid #ef4444"
                  : article.importance_score >= 75
                  ? "6px solid #f59e0b"
                  : "6px solid #22c55e",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
                color: "#94a3b8",
                fontSize: "13px",
              }}
            >
              <span>{article.source}</span>
              <span>{article.importance_score}</span>
            </div>

            <h2
              style={{
                fontSize: "20px",
              }}
            >
              {article.title}
            </h2>

            <p
              style={{
                color: "#cbd5e1",
              }}
            >
              {article.summary}
            </p>

            <div
              style={{
                marginTop: "20px",
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              <a
                href={`/alert/${article.id}`}
                style={{
                  background: "#2563eb",
                  color: "#fff",
                  padding: "10px 16px",
                  borderRadius: "8px",
                  textDecoration: "none",
                }}
              >
                Report
              </a>

              <a
                href={`/explain/${article.id}`}
                style={{
                  background: "#16a34a",
                  color: "#fff",
                  padding: "10px 16px",
                  borderRadius: "8px",
                  textDecoration: "none",
                }}
              >
                AI Explain
              </a>

              <a
                href={`/timeline`}
                style={{
                  background: "#7c3aed",
                  color: "#fff",
                  padding: "10px 16px",
                  borderRadius: "8px",
                  textDecoration: "none",
                }}
              >
                Timeline
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
