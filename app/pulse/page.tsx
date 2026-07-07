import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function Pulse() {
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("importance_score", { ascending: false })
    .limit(50);

  return (
    <main
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <Navbar />

      <h1>📡 Global Pulse</h1>

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
              borderRadius: "14px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,.08)",
            }}
          >
            {article.image_url && (
              <img
                src={article.image_url}
                alt={article.title}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />
            )}

            <div style={{ padding: "20px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "12px",
                  fontSize: "13px",
                  color: "#666",
                }}
              >
                <span>{article.source}</span>
                <span>⭐ {article.importance_score}</span>
              </div>

              <h2>{article.title}</h2>

              <p>{article.summary}</p>

              <div
                style={{
                  marginTop: "18px",
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
                  Read
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
                  Explain
                </a>

                <a
                  href={article.url}
                  target="_blank"
                  style={{
                    background: "#6b7280",
                    color: "#fff",
                    padding: "10px 16px",
                    borderRadius: "8px",
                    textDecoration: "none",
                  }}
                >
                  Source
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
