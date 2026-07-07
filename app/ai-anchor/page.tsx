import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function AIAnchor() {
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("importance_score", { ascending: false })
    .limit(10);

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

      <h1>🎙 AI News Anchor</h1>

      {(articles || []).map((article: any) => (
        <div
          key={article.id}
          style={{
            background: "#fff",
            borderRadius: "12px",
            padding: "24px",
            marginBottom: "24px",
            boxShadow: "0 2px 10px rgba(0,0,0,.1)",
          }}
        >
          <h2>{article.title}</h2>

          <div
            style={{
              background: "#eef5ff",
              padding: "18px",
              borderRadius: "10px",
              marginTop: "15px",
              lineHeight: "1.8",
            }}
          >
            <strong>🎙 AI Anchor Script</strong>

            <p>
              Good day. Here's your latest update.
            </p>

            <p>{article.summary}</p>

            <p>
              This story is important because it may have significant global
              implications. Stay tuned to Breaking News AI for further verified
              updates.
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
              Read Full Story
            </a>
          </div>
        </div>
      ))}
    </main>
  );
}
