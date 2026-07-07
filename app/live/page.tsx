import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function LiveUpdates() {
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(50);

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "30px",
        fontFamily: "Arial, Helvetica, sans-serif",
        background: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <Navbar />

      <h1>🔴 AI Live Updates</h1>

      <p
        style={{
          color: "#666",
          marginBottom: "30px",
        }}
      >
        Continuously updated by AI from trusted global news sources.
      </p>

      {(articles || []).map((article: any) => (
        <div
          key={article.id}
          style={{
            background: "#fff",
            borderRadius: "12px",
            padding: "22px",
            marginBottom: "20px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
            borderLeft: "6px solid #d90429",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
              color: "#666",
              fontSize: "13px",
              flexWrap: "wrap",
            }}
          >
            <span>
              🔴 LIVE • {article.source}
            </span>

            <span>
              {new Date(article.created_at).toLocaleString()}
            </span>
          </div>

          <h2
            style={{
              marginTop: "0",
            }}
          >
            {article.title}
          </h2>

          <p>{article.summary}</p>

          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "18px",
              flexWrap: "wrap",
            }}
          >
            <a
              href={`/alert/${article.id}`}
              style={{
                background: "#0b5ed7",
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
                background: "#198754",
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
                background: "#6c757d",
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
      ))}
    </main>
  );
}
