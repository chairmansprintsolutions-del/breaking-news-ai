import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function Headlines() {
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(100);

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

      <h1>📰 Today's Headlines</h1>

      {(articles || []).map((article: any, index: number) => (
        <div
          key={article.id}
          style={{
            display: "flex",
            gap: "25px",
            alignItems: "center",
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
            marginBottom: "18px",
            boxShadow: "0 2px 8px rgba(0,0,0,.08)",
          }}
        >
          <div
            style={{
              fontSize: "42px",
              fontWeight: "bold",
              width: "60px",
              color: "#2563eb",
            }}
          >
            {index + 1}
          </div>

          {article.image_url && (
            <img
              src={article.image_url}
              alt={article.title}
              style={{
                width: "180px",
                height: "120px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          )}

          <div style={{ flex: 1 }}>
            <div
              style={{
                color: "#666",
                marginBottom: "8px",
              }}
            >
              {article.category} • {article.source}
            </div>

            <h2>{article.title}</h2>

            <p>{article.summary}</p>

            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "15px",
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
                AI Explain
              </a>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
