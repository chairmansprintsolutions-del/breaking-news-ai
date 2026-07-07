import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function AIReporter() {
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("created_at", { ascending: false })
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

      <h1>🎤 AI Reporter</h1>

      {(articles || []).map((article: any) => (
        <div
          key={article.id}
          style={{
            background: "#fff",
            borderRadius: "12px",
            padding: "25px",
            marginBottom: "25px",
            boxShadow: "0 2px 10px rgba(0,0,0,.1)",
          }}
        >
          <h2>{article.title}</h2>

          <div
            style={{
              marginTop: "20px",
              padding: "20px",
              background: "#f3f8ff",
              borderRadius: "10px",
              lineHeight: "1.8",
            }}
          >
            <strong>🎤 Live Report</strong>

            <p>
              We are following this developing story.
            </p>

            <p>{article.summary}</p>

            <p>
              Our AI systems continue monitoring trusted international sources.
              Updates will appear automatically as new information becomes available.
            </p>
          </div>

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
              Read Full Report
            </a>
          </div>
        </div>
      ))}
    </main>
  );
}
