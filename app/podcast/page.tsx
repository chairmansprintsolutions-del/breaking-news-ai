import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function Podcast() {
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("importance_score", { ascending: false })
    .limit(10);

  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <Navbar />

      <h1>🎧 AI News Podcast</h1>

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
              background: "#eef7ff",
              padding: "20px",
              borderRadius: "10px",
              lineHeight: "1.8",
            }}
          >
            <strong>🎙 Podcast Script</strong>

            <p>
              Welcome to Breaking News AI.
            </p>

            <p>{article.summary}</p>

            <p>
              Stay with us for more verified updates from trusted news
              organizations around the world.
            </p>
          </div>

          <div style={{ marginTop: "20px" }}>
            <button
              style={{
                background: "#198754",
                color: "#fff",
                border: "none",
                padding: "10px 18px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              ▶ Listen (Coming Soon)
            </button>
          </div>
        </div>
      ))}
    </main>
  );
}
