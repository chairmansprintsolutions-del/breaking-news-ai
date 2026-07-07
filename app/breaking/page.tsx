import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function Breaking() {
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .gte("importance_score", 85)
    .order("importance_score", { ascending: false })
    .order("created_at", { ascending: false });

  return (
    <main
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "30px",
        fontFamily: "Arial",
        background: "#fafafa",
        minHeight: "100vh",
      }}
    >
      <Navbar />

      <h1>🚨 Breaking News Center</h1>

      <p
        style={{
          color: "#666",
          marginBottom: "30px",
        }}
      >
        Highest priority stories detected by AI.
      </p>

      {(articles || []).map((article: any) => (
        <div
          key={article.id}
          style={{
            background: "#fff",
            borderRadius: "15px",
            marginBottom: "25px",
            overflow: "hidden",
            boxShadow: "0 3px 10px rgba(0,0,0,.08)",
          }}
        >
          {article.image_url && (
            <img
              src={article.image_url}
              alt={article.title}
              style={{
                width: "100%",
                height: "320px",
                objectFit: "cover",
              }}
            />
          )}

          <div
            style={{
              padding: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                marginBottom: "15px",
              }}
            >
              <span
                style={{
                  background: "#dc2626",
                  color: "#fff",
                  padding: "6px 12px",
                  borderRadius: "6px",
                }}
              >
                🚨 BREAKING
              </span>

              <span>
                {article.source} • {article.importance_score}/100
              </span>
            </div>

            <h2>{article.title}</h2>

            <p>{article.summary}</p>

            <p>
              <strong>Why it matters:</strong>{" "}
              {article.why_it_matters}
            </p>

            <div
              style={{
                display: "flex",
                gap: "12px",
                marginTop: "20px",
                flexWrap: "wrap",
              }}
            >
              <a
                href={`/alert/${article.id}`}
                style={{
                  background: "#2563eb",
                  color: "#fff",
                  padding: "10px 18px",
                  borderRadius: "8px",
                  textDecoration: "none",
                }}
              >
                Read Full Story
              </a>

              <a
                href={`/explain/${article.id}`}
                style={{
                  background: "#16a34a",
                  color: "#fff",
                  padding: "10px 18px",
                  borderRadius: "8px",
                  textDecoration: "none",
                }}
              >
                AI Explain
              </a>

              <a
                href={article.url}
                target="_blank"
                style={{
                  background: "#6b7280",
                  color: "#fff",
                  padding: "10px 18px",
                  borderRadius: "8px",
                  textDecoration: "none",
                }}
              >
                Original Source
              </a>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
