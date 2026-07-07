import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function Compare() {
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("importance_score", { ascending: false })
    .limit(20);

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

      <h1>⚖️ AI News Comparison</h1>

      {(articles || []).map((article: any) => (
        <div
          key={article.id}
          style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "12px",
            marginBottom: "25px",
            boxShadow: "0 2px 10px rgba(0,0,0,.1)",
          }}
        >
          <h2>{article.title}</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <div>
              <h3>📰 AI Summary</h3>
              <p>{article.summary}</p>
            </div>

            <div>
              <h3>📊 Metadata</h3>

              <p>
                <strong>Source:</strong> {article.source}
              </p>

              <p>
                <strong>Category:</strong> {article.category}
              </p>

              <p>
                <strong>Importance:</strong> {article.importance_score}
              </p>

              <p>
                <strong>Published:</strong>{" "}
                {new Date(article.created_at).toLocaleString()}
              </p>
            </div>
          </div>

          <a
            href={`/alert/${article.id}`}
            style={{
              display: "inline-block",
              marginTop: "20px",
              background: "#0b5ed7",
              color: "#fff",
              padding: "10px 18px",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            Read Full Story
          </a>
        </div>
      ))}
    </main>
  );
}
