import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function Watch() {
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

      <h1>📺 Breaking News AI TV</h1>

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
          <div
            style={{
              width: "100%",
              height: "420px",
              background: "#111",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "10px",
              fontSize: "32px",
            }}
          >
              🎥 AI Video Coming Soon
          </div>

          <h2 style={{ marginTop: "20px" }}>
            {article.title}
          </h2>

          <p>{article.summary}</p>

          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "20px",
            }}
          >
            <button
              style={{
                background: "#dc3545",
                color: "#fff",
                border: "none",
                padding: "10px 18px",
                borderRadius: "8px",
              }}
            >
              ▶ Play
            </button>

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
              Read Article
            </a>
          </div>
        </div>
      ))}
    </main>
  );
}
