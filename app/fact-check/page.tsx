import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function FactCheck() {
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("importance_score", { ascending: false })
    .limit(30);

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

      <h1>✅ AI Fact Check</h1>

      {(articles || []).map((article: any) => (
        <div
          key={article.id}
          style={{
            background: "#fff",
            padding: "22px",
            marginBottom: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 10px rgba(0,0,0,.1)",
          }}
        >
          <h2>{article.title}</h2>

          <p>{article.summary}</p>

          <div
            style={{
              marginTop: "15px",
              display: "inline-block",
              background: "#198754",
              color: "#fff",
              padding: "8px 16px",
              borderRadius: "8px",
            }}
          >
            AI Confidence: {article.importance_score}%
          </div>

          <div style={{ marginTop: "20px" }}>
            <a
              href={`/alert/${article.id}`}
              style={{
                textDecoration: "none",
                color: "#0b5ed7",
                fontWeight: "bold",
              }}
            >
              Read Full Report →
            </a>
          </div>
        </div>
      ))}
    </main>
  );
}
