import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function MissionControl() {
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(100);

  const categories = [...new Set((articles || []).map((a: any) => a.category || "General"))];
  const sources = [...new Set((articles || []).map((a: any) => a.source))];

  return (
    <main
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "30px",
        fontFamily: "Arial",
        background: "#f4f7fb",
        minHeight: "100vh",
      }}
    >
      <Navbar />

      <h1>🛰 Mission Control</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginBottom: "35px",
        }}
      >
        <Stat title="Articles" value={articles?.length || 0} />
        <Stat title="Sources" value={sources.length} />
        <Stat title="Categories" value={categories.length} />
        <Stat
          title="Critical"
          value={
            (articles || []).filter(
              (a: any) => a.importance_score >= 90
            ).length
          }
        />
      </div>

      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 2px 10px rgba(0,0,0,.1)",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr
              style={{
                background: "#0b5ed7",
                color: "#fff",
              }}
            >
              <th style={{ padding: "15px" }}>Headline</th>
              <th>Source</th>
              <th>Category</th>
              <th>Score</th>
              <th>Time</th>
            </tr>
          </thead>

          <tbody>
            {(articles || []).map((article: any) => (
              <tr
                key={article.id}
                style={{
                  borderBottom: "1px solid #eee",
                }}
              >
                <td style={{ padding: "15px" }}>
                  <a
                    href={`/alert/${article.id}`}
                    style={{
                      textDecoration: "none",
                      color: "#000",
                    }}
                  >
                    {article.title}
                  </a>
                </td>

                <td>{article.source}</td>

                <td>{article.category}</td>

                <td>{article.importance_score}</td>

                <td>
                  {new Date(article.created_at).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

function Stat({
  title,
  value,
}: {
  title: string;
  value: any;
}) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "12px",
        padding: "25px",
        textAlign: "center",
        boxShadow: "0 2px 10px rgba(0,0,0,.1)",
      }}
    >
      <h3>{title}</h3>
      <h1>{value}</h1>
    </div>
  );
}
