import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function Newsroom() {
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(100);

  const grouped: Record<string, any[]> = {};

  (articles || []).forEach((article: any) => {
    const category = article.category || "General";

    if (!grouped[category]) grouped[category] = [];

    grouped[category].push(article);
  });

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

      <h1>📰 AI Newsroom</h1>

      {Object.entries(grouped).map(([category, items]) => (
        <div key={category} style={{ marginTop: "40px" }}>
          <h2>{category}</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
              gap: "20px",
            }}
          >
            {(items as any[]).map((article: any) => (
              <div
                key={article.id}
                style={{
                  background: "#fff",
                  padding: "20px",
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0,0,0,.1)",
                }}
              >
                <h3>{article.title}</h3>

                <p>{article.summary}</p>

                <a
                  href={`/alert/${article.id}`}
                  style={{
                    color: "#0b5ed7",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Read →
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
