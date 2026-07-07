import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function AIBriefing() {
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("importance_score", { ascending: false })
    .limit(15);

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

      <h1>🧠 AI Executive Briefing</h1>

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

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "20px",
            }}
          >
            <tbody>
              <tr>
                <td><strong>Source</strong></td>
                <td>{article.source}</td>
              </tr>

              <tr>
                <td><strong>Category</strong></td>
                <td>{article.category}</td>
              </tr>

              <tr>
                <td><strong>Importance</strong></td>
                <td>{article.importance_score}/100</td>
              </tr>

              <tr>
                <td><strong>Executive Summary</strong></td>
                <td>{article.summary}</td>
              </tr>

              <tr>
                <td><strong>Business Impact</strong></td>
                <td>{article.why_it_matters}</td>
              </tr>

              <tr>
                <td><strong>Recommended Action</strong></td>
                <td>
                  Continue monitoring this story for further developments.
                </td>
              </tr>
            </tbody>
          </table>

          <div style={{ marginTop: "20px" }}>
            <a
              href={`/alert/${article.id}`}
              style={{
                background: "#0b5ed7",
                color: "#fff",
                padding: "10px 18px",
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              Open Brief
            </a>
          </div>
        </div>
      ))}
    </main>
  );
}
