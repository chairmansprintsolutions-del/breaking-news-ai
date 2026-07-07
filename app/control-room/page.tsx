import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function ControlRoom() {
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("importance_score", { ascending: false })
    .limit(100);

  return (
    <main
      style={{
        maxWidth: "1500px",
        margin: "0 auto",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <Navbar />

      <h1>🚀 AI Control Room</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5,1fr)",
          gap: "20px",
          marginBottom: "35px",
        }}
      >
        <Card title="Articles" value={articles?.length || 0} color="#2563eb" />

        <Card
          title="Critical"
          value={
            (articles || []).filter(
              (a: any) => a.importance_score >= 90
            ).length
          }
          color="#dc2626"
        />

        <Card
          title="High"
          value={
            (articles || []).filter(
              (a: any) =>
                a.importance_score >= 75 &&
                a.importance_score < 90
            ).length
          }
          color="#ea580c"
        />

        <Card
          title="Normal"
          value={
            (articles || []).filter(
              (a: any) => a.importance_score < 75
            ).length
          }
          color="#16a34a"
        />

        <Card
          title="Sources"
          value={
            new Set(
              (articles || []).map((a: any) => a.source)
            ).size
          }
          color="#7c3aed"
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "25px",
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,.08)",
          }}
        >
          <h2>📰 Live Feed</h2>

          {(articles || []).slice(0, 25).map((article: any) => (
            <div
              key={article.id}
              style={{
                padding: "15px 0",
                borderBottom: "1px solid #eee",
              }}
            >
              <strong>{article.title}</strong>

              <br />

              <small>
                {article.source} • {article.category} • Score {article.importance_score}
              </small>
            </div>
          ))}
        </div>

        <div
          style={{
            background: "#fff",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,.08)",
          }}
        >
          <h2>⚡ AI Status</h2>

          <Status title="RSS Collector" status="🟢 Online" />
          <Status title="Gemini AI" status="🟢 Online" />
          <Status title="Breaking Alerts" status="🟢 Online" />
          <Status title="Daily Digest" status="🟢 Online" />
          <Status title="Image Generator" status="🟢 Online" />
          <Status title="Website" status="🟢 Live" />
        </div>
      </div>
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
        borderRadius: "12px",
        padding: "22px",
        textAlign: "center",
      }}
    >
      <h3>{title}</h3>
      <h1>{value}</h1>
    </div>
  );
}

function Status({
  title,
  status,
}: {
  title: string;
  status: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "12px 0",
        borderBottom: "1px solid #eee",
      }}
    >
      <span>{title}</span>
      <strong>{status}</strong>
    </div>
  );
}
