import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function Forecast() {
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("importance_score", { ascending: false })
    .limit(30);

  return (
    <main
      style={{
        maxWidth: "1300px",
        margin: "0 auto",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <Navbar />

      <h1>🔮 AI Forecast</h1>

      {(articles || []).map((article: any) => (
        <div
          key={article.id}
          style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "12px",
            marginBottom: "25px",
            boxShadow: "0 2px 10px rgba(0,0,0,.08)",
          }}
        >
          <h2>{article.title}</h2>

          <table
            style={{
              width: "100%",
              marginTop: "20px",
              borderCollapse: "collapse",
            }}
          >
            <tbody>
              <tr>
                <td><strong>Category</strong></td>
                <td>{article.category}</td>
              </tr>

              <tr>
                <td><strong>Source</strong></td>
                <td>{article.source}</td>
              </tr>

              <tr>
                <td><strong>Importance</strong></td>
                <td>{article.importance_score}/100</td>
              </tr>

              <tr>
                <td><strong>Current Situation</strong></td>
                <td>{article.summary}</td>
              </tr>

              <tr>
                <td><strong>Likely Next Step</strong></td>
                <td>
                  AI predicts this story will continue evolving over the next
                  24–72 hours as additional official information becomes
                  available.
                </td>
              </tr>

              <tr>
                <td><strong>Risk Level</strong></td>
                <td>
                  {article.importance_score >= 90
                    ? "🔴 High"
                    : article.importance_score >= 75
                    ? "🟠 Medium"
                    : "🟢 Low"}
                </td>
              </tr>

              <tr>
                <td><strong>Confidence</strong></td>
                <td>{Math.min(article.importance_score, 95)}%</td>
              </tr>
            </tbody>
          </table>

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              gap: "10px",
            }}
          >
            <a
              href={`/alert/${article.id}`}
              style={{
                background: "#2563eb",
                color: "#fff",
                padding: "10px 18px",
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              Read Story
            </a>

            <a
              href={`/timeline`}
              style={{
                background: "#16a34a",
                color: "#fff",
                padding: "10px 18px",
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              Timeline
            </a>

            <a
              href={`/explain/${article.id}`}
              style={{
                background: "#7c3aed",
                color: "#fff",
                padding: "10px 18px",
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              AI Explain
            </a>
          </div>
        </div>
      ))}
    </main>
  );
}
