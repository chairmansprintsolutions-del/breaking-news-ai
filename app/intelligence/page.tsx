import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function Intelligence() {
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("importance_score", { ascending: false })
    .limit(25);

  const high = (articles || []).filter((a: any) => a.importance_score >= 90);
  const medium = (articles || []).filter(
    (a: any) => a.importance_score >= 70 && a.importance_score < 90
  );
  const low = (articles || []).filter((a: any) => a.importance_score < 70);

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

      <h1>🛰 AI Intelligence Center</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        <Card title="🔴 Critical" count={high.length} color="#dc3545" />
        <Card title="🟠 Important" count={medium.length} color="#fd7e14" />
        <Card title="🟢 Routine" count={low.length} color="#198754" />
      </div>

      {(articles || []).map((article: any) => (
        <div
          key={article.id}
          style={{
            background: "#fff",
            padding: "22px",
            marginBottom: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 10px rgba(0,0,0,.1)",
          }}
        >
          <h2>{article.title}</h2>

          <p>{article.summary}</p>

          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "15px",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                background: "#0b5ed7",
                color: "#fff",
                padding: "6px 12px",
                borderRadius: "6px",
              }}
            >
              {article.category}
            </span>

            <span
              style={{
                background: "#212529",
                color: "#fff",
                padding: "6px 12px",
                borderRadius: "6px",
              }}
            >
              Score {article.importance_score}
            </span>

            <span
              style={{
                background: "#198754",
                color: "#fff",
                padding: "6px 12px",
                borderRadius: "6px",
              }}
            >
              {article.source}
            </span>
          </div>

          <div style={{ marginTop: "20px" }}>
            <a
              href={`/alert/${article.id}`}
              style={{
                textDecoration: "none",
                background: "#0b5ed7",
                color: "#fff",
                padding: "10px 18px",
                borderRadius: "8px",
              }}
            >
              Intelligence Report →
            </a>
          </div>
        </div>
      ))}
    </main>
  );
}

function Card({
  title,
  count,
  color,
}: {
  title: string;
  count: number;
  color: string;
}) {
  return (
    <div
      style={{
        background: color,
        color: "#fff",
        borderRadius: "12px",
        padding: "25px",
        textAlign: "center",
      }}
    >
      <h2>{title}</h2>
      <h1>{count}</h1>
    </div>
  );
}
