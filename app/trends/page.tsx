import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function Trends() {
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("importance_score", { ascending: false })
    .limit(100);

  const categories = [...new Set((articles || []).map((a: any) => a.category || "General"))];

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

      <h1>📈 AI Trends</h1>

      {categories.map((category) => {
        const news =
          articles?.filter(
            (a: any) => (a.category || "General") === category
          ) || [];

        if (!news.length) return null;

        return (
          <div
            key={category}
            style={{
              marginBottom: "45px",
            }}
          >
            <h2>{category}</h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit,minmax(320px,1fr))",
                gap: "20px",
              }}
            >
              {news.slice(0, 8).map((article: any) => (
                <div
                  key={article.id}
                  style={{
                    background: "#fff",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 2px 10px rgba(0,0,0,.08)",
                  }}
                >
                  {article.image_url && (
                    <img
                      src={article.image_url}
                      alt={article.title}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                  )}

                  <div
                    style={{
                      padding: "18px",
                    }}
                  >
                    <div
                      style={{
                        color: "#666",
                        fontSize: "13px",
                        marginBottom: "10px",
                      }}
                    >
                      {article.source} • ⭐ {article.importance_score}
                    </div>

                    <h3>{article.title}</h3>

                    <p>{article.summary}</p>

                    <a
                      href={`/alert/${article.id}`}
                      style={{
                        display: "inline-block",
                        marginTop: "10px",
                        background: "#2563eb",
                        color: "#fff",
                        padding: "10px 16px",
                        borderRadius: "8px",
                        textDecoration: "none",
                      }}
                    >
                      Read →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </main>
  );
}
