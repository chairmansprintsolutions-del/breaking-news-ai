import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function CommandCenter() {
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(100);

  const critical =
    articles?.filter((a: any) => a.importance_score >= 90) || [];

  const high =
    articles?.filter(
      (a: any) =>
        a.importance_score >= 75 &&
        a.importance_score < 90
    ) || [];

  const normal =
    articles?.filter((a: any) => a.importance_score < 75) || [];

  return (
    <main
      style={{
        background: "#111827",
        color: "#fff",
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <Navbar />

      <h1>🛰 AI Command Center</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <Section
          title="🔴 Critical"
          color="#dc2626"
          articles={critical}
        />

        <Section
          title="🟠 High"
          color="#ea580c"
          articles={high}
        />

        <Section
          title="🟢 Normal"
          color="#16a34a"
          articles={normal}
        />
      </div>
    </main>
  );
}

function Section({
  title,
  color,
  articles,
}: {
  title: string;
  color: string;
  articles: any[];
}) {
  return (
    <div
      style={{
        background: "#1f2937",
        borderRadius: "12px",
        padding: "20px",
      }}
    >
      <h2
        style={{
          color,
        }}
      >
        {title}
      </h2>

      {(articles || []).slice(0, 20).map((article: any) => (
        <div
          key={article.id}
          style={{
            borderBottom: "1px solid #374151",
            padding: "15px 0",
          }}
        >
          <strong>{article.title}</strong>

          <p
            style={{
              color: "#cbd5e1",
            }}
          >
            {article.summary}
          </p>

          <small>
            {article.source} • {article.category} • Score{" "}
            {article.importance_score}
          </small>

          <br />

          <a
            href={`/alert/${article.id}`}
            style={{
              color: "#60a5fa",
              textDecoration: "none",
            }}
          >
            Open →
          </a>
        </div>
      ))}
    </div>
  );
}
