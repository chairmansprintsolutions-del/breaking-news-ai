import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function NewsroomTV() {
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("importance_score", { ascending: false })
    .limit(20);

  return (
    <main
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "Arial",
        color: "#fff",
      }}
    >
      <Navbar />

      <h1>📺 Breaking News AI Live</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "25px",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            background: "#000",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "500px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "48px",
            }}
          >
            🎥 LIVE NEWS
          </div>

          <div
            style={{
              background: "#dc2626",
              padding: "15px",
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            🔴 LIVE BREAKING COVERAGE
          </div>
        </div>

        <div>
          {(articles || []).map((article: any) => (
            <div
              key={article.id}
              style={{
                background: "#1e293b",
                padding: "18px",
                borderRadius: "10px",
                marginBottom: "15px",
              }}
            >
              <div
                style={{
                  color: "#94a3b8",
                  fontSize: "13px",
                }}
              >
                {article.source}
              </div>

              <h3>{article.title}</h3>

              <p>{article.summary}</p>

              <a
                href={`/alert/${article.id}`}
                style={{
                  color: "#38bdf8",
                  textDecoration: "none",
                }}
              >
                Watch Story →
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
