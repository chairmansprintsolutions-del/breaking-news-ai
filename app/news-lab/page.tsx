import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function NewsLab() {
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("importance_score", { ascending: false })
    .limit(40);

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

      <h1>🧪 AI News Lab</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(380px,1fr))",
          gap: "25px",
        }}
      >
        {(articles || []).map((article: any) => (
          <div
            key={article.id}
            style={{
              background: "#fff",
              borderRadius: "14px",
              overflow: "hidden",
              boxShadow: "0 3px 12px rgba(0,0,0,.08)",
            }}
          >
            {article.image_url && (
              <img
                src={article.image_url}
                alt={article.title}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />
            )}

            <div style={{ padding: "20px" }}>
              <h2>{article.title}</h2>

              <p>{article.summary}</p>

              <div
                style={{
                  marginTop: "20px",
                  display: "grid",
                  gap: "10px",
                }}
              >
                <button style={btn("#2563eb")}>
                  📝 Rewrite
                </button>

                <button style={btn("#16a34a")}>
                  ✂ Short Summary
                </button>

                <button style={btn("#7c3aed")}>
                  👶 Explain to Kids
                </button>

                <button style={btn("#ea580c")}>
                  💼 Business Impact
                </button>

                <button style={btn("#dc2626")}>
                  🌍 Global Impact
                </button>

                <button style={btn("#0891b2")}>
                  📱 Social Post
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

function btn(color: string) {
  return {
    background: color,
    color: "#fff",
    border: "none",
    padding: "12px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "15px",
  };
}
