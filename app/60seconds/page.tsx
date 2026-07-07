import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function SixtySeconds() {
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("importance_score", { ascending: false })
    .limit(15);

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "30px",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <Navbar />

      <h1>⚡ 60 Second News</h1>

      <p>Top stories you can read in under one minute.</p>

      {(articles || []).map((article: any, index: number) => (
        <div
          key={article.id}
          style={{
            background: "#fff",
            padding: "25px",
            marginTop: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{
              color: "#666",
              fontSize: "14px",
            }}
          >
            #{index + 1} • {article.source} • {article.category}
          </div>

          <h2>{article.title}</h2>

          <p>{article.summary}</p>

          <a
            href={`/alert/${article.id}`}
            style={{
              display: "inline-block",
              marginTop: "10px",
              textDecoration: "none",
              background: "#0b5ed7",
              color: "#fff",
              padding: "10px 18px",
              borderRadius: "8px",
            }}
          >
            Read Full Story →
          </a>
        </div>
      ))}
    </main>
  );
}
