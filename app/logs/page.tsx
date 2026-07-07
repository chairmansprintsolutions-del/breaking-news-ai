import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function Logs() {
  const { data: articles } = await supabase
    .from("articles")
    .select("title,source,category,importance_score,created_at")
    .order("created_at", { ascending: false })
    .limit(100);

  return (
    <main
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "30px",
        fontFamily: "Consolas, monospace",
        background: "#0f172a",
        color: "#e5e7eb",
        minHeight: "100vh",
      }}
    >
      <Navbar />

      <h1>📜 System Logs</h1>

      <div
        style={{
          marginTop: "30px",
          background: "#111827",
          borderRadius: "12px",
          padding: "20px",
        }}
      >
        {(articles || []).map((article: any) => (
          <div
            key={article.created_at + article.title}
            style={{
              borderBottom: "1px solid #374151",
              padding: "12px 0",
            }}
          >
            <span style={{ color: "#22c55e" }}>
              [{new Date(article.created_at).toLocaleString()}]
            </span>{" "}
            <span style={{ color: "#38bdf8" }}>
              [{article.source}]
            </span>{" "}
            <span style={{ color: "#facc15" }}>
              [{article.category}]
            </span>{" "}
            <span style={{ color: "#f87171" }}>
              [{article.importance_score}]
            </span>

            <div
              style={{
                marginTop: "5px",
              }}
            >
              {article.title}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
