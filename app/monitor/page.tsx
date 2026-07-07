import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function Monitor() {
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

      <h1>📡 Global News Monitor</h1>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "30px",
        }}
      >
        <thead>
          <tr
            style={{
              background: "#111827",
              color: "#fff",
            }}
          >
            <th style={{ padding: "14px" }}>Time</th>
            <th>Headline</th>
            <th>Category</th>
            <th>Source</th>
            <th>Score</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {(articles || []).map((article: any) => (
            <tr
              key={article.id}
              style={{
                borderBottom: "1px solid #ddd",
              }}
            >
              <td style={{ padding: "14px" }}>
                {new Date(article.created_at).toLocaleTimeString()}
              </td>

              <td>
                <a
                  href={`/alert/${article.id}`}
                  style={{
                    textDecoration: "none",
                    color: "#111",
                    fontWeight: "bold",
                  }}
                >
                  {article.title}
                </a>
              </td>

              <td>{article.category}</td>

              <td>{article.source}</td>

              <td>{article.importance_score}</td>

              <td>
                {article.importance_score >= 90
                  ? "🔴 Critical"
                  : article.importance_score >= 75
                  ? "🟠 High"
                  : "🟢 Normal"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
