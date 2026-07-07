import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function Trending() {
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("importance_score", { ascending: false })
    .limit(20);

  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "30px",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <Navbar />

      <h1>🔥 Trending News</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "20px",
          marginTop: "25px",
        }}
      >
        {(articles || []).map((article: any) => (
          <div
            key={article.id}
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                color: "#888",
                fontSize: "13px",
                marginBottom: "10px",
              }}
            >
              ⭐ {article.importance_score} • {article.source}
            </div>

            <h3>{article.title}</h3>

            <p>{article.summary}</p>

            <a
              href={article.url}
              target="_blank"
              style={{
                color: "#0b5ed7",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Original Source →
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
