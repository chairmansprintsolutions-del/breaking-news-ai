import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function Dashboard() {
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("created_at", { ascending: false });

  const categories = [...new Set((articles || []).map((a: any) => a.category || "General"))];
  const sources = [...new Set((articles || []).map((a: any) => a.source || "Unknown"))];

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

      <h1>📊 AI News Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        <Card title="Articles" value={articles?.length || 0} color="#2563eb" />
        <Card title="Categories" value={categories.length} color="#16a34a" />
        <Card title="Sources" value={sources.length} color="#ea580c" />
        <Card
          title="Breaking"
          value={
            (articles || []).filter(
              (a: any) => a.importance_score >= 80
            ).length
          }
          color="#dc2626"
        />
      </div>

      <h2>📈 Category Distribution</h2>

      {categories.map((category) => {
        const count =
          articles?.filter(
            (a: any) =>
              (a.category || "General") === category
          ).length || 0;

        return (
          <div
            key={category}
            style={{
              marginBottom: "18px",
            }}
          >
            <strong>{category}</strong>

            <div
              style={{
                background: "#e5e7eb",
                height: "18px",
                borderRadius: "10px",
                marginTop: "8px",
              }}
            >
              <div
                style={{
                  width: `${Math.min(count * 10, 100)}%`,
                  height: "100%",
                  background: "#2563eb",
                  borderRadius: "10px",
                }}
              />
            </div>

            <small>{count} Articles</small>
          </div>
        );
      })}

      <h2 style={{ marginTop: "50px" }}>
        📰 Latest Headlines
      </h2>

      {(articles || []).slice(0, 15).map((article: any) => (
        <div
          key={article.id}
          style={{
            background: "#fff",
            padding: "20px",
            marginTop: "15px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,.08)",
          }}
        >
          <h3>{article.title}</h3>

          <p>{article.summary}</p>

          <a
            href={`/alert/${article.id}`}
            style={{
              color: "#2563eb",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Open →
          </a>
        </div>
      ))}
    </main>
  );
}

function Card({
  title,
  value,
  color,
}: {
  title: string;
  value: any;
  color: string;
}) {
  return (
    <div
      style={{
        background: color,
        color: "#fff",
        padding: "25px",
        borderRadius: "12px",
        textAlign: "center",
      }}
    >
      <h3>{title}</h3>
      <h1>{value}</h1>
    </div>
  );
}
