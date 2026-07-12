import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function NewsTerminal() {
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(100);

  return (
    <main
      style={{
        background: "#000",
        color: "#00ff66",
        minHeight: "100vh",
        fontFamily: "Consolas, monospace",
        padding: "25px",
      }}
    >
      <Navbar />

      <h1>🖥 BREAKING NEWS AI TERMINAL</h1>

      <div
        style={{
          background: "#111",
          border: "1px solid #00ff66",
          borderRadius: "8px",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        {(articles || []).map((article: any) => (
          <div
            key={article.id}
            style={{
              borderBottom: "1px solid #222",
              padding: "15px 0",
            }}
          >
            <div>
              [{new Date(article.created_at).toLocaleTimeString()}]
            </div>

            <div>
              [{article.source}]
            </div>

            <div>
              [{article.category}]
            </div>

            <div>
              [Importance: {article.importance_score}]
            </div>

            <div
              style={{
                fontWeight: "bold",
                marginTop: "8px",
              }}
            >
              {article.title}
            </div>

            <div
              style={{
                marginTop: "10px",
                color: "#9aff9a",
              }}
            >
              {article.summary}
            </div>

            <div style={{ marginTop: "10px" }}>
              <a
                href={`/alert/${article.id}`}
                style={{
                  color: "#00ffff",
                  textDecoration: "none",
                }}
              >
                OPEN REPORT &gt;&gt;
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
