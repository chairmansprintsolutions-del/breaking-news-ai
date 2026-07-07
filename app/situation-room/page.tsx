import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function SituationRoom() {
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("importance_score", { ascending: false })
    .limit(50);

  return (
    <main
      style={{
        background: "#0b1220",
        color: "#fff",
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <Navbar />

      <h1>🌐 AI Situation Room</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(380px,1fr))",
          gap: "25px",
          marginTop: "30px",
        }}
      >
        {(articles || []).map((article: any) => (
          <div
            key={article.id}
            style={{
              background: "#172033",
              borderRadius: "14px",
              overflow: "hidden",
              border:
                article.importance_score >= 90
                  ? "2px solid #ef4444"
                  : article.importance_score >= 75
                  ? "2px solid #f59e0b"
                  : "2px solid #22c55e",
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
                  marginBottom: "10px",
                  fontSize: "13px",
                  color: "#94a3b8",
                }}
              >
                <span>{article.source}</span>
                <span>⭐ {article.importance_score}</span>
              </div>

              <h2>{article.title}</h2>

              <p>{article.summary}</p>

              <div
                style={{
                  marginTop: "20px",
                  padding: "15px",
                  background: "#0f172a",
                  borderRadius: "10px",
                }}
              >
                <strong>AI Situation Assessment</strong>

                <p style={{ marginTop: "10px" }}>
                  {article.why_it_matters}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "20px",
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
                  href={`/forecast`}
                  style={{
                    background: "#7c3aed",
                    color: "#fff",
                    padding: "10px 16px",
                    borderRadius: "8px",
                    textDecoration: "none",
                  }}
                >
                  Forecast
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
