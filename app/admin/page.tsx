import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function Admin() {
  const { data: articles } = await supabase
    .from("articles")
    .select("*");

  const { data: alerts } = await supabase
    .from("breaking_alerts")
    .select("*");

  const { data: digest } = await supabase
    .from("daily_digest")
    .select("*");

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

      <h1>⚙️ Admin Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        <Card title="Articles" value={articles?.length || 0} color="#2563eb" />
        <Card title="Breaking Alerts" value={alerts?.length || 0} color="#dc2626" />
        <Card title="Daily Digests" value={digest?.length || 0} color="#16a34a" />
        <Card
          title="Sources"
          value={
            new Set((articles || []).map((a: any) => a.source)).size
          }
          color="#7c3aed"
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "20px",
        }}
      >
        <Menu title="📰 Articles" href="/latest" />

        <Menu title="🚨 Breaking News" href="/breaking" />

        <Menu title="📈 Trending" href="/trending" />

        <Menu title="📡 Live Feed" href="/live" />

        <Menu title="🤖 AI Studio" href="/ai-studio" />

        <Menu title="🎧 Podcast" href="/podcast" />

        <Menu title="📺 News TV" href="/watch" />

        <Menu title="🛰 Mission Control" href="/mission-control" />

        <Menu title="📊 Analytics" href="/analytics" />

        <Menu title="⚙️ Settings" href="/settings" />
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
        padding: "25px",
        textAlign: "center",
      }}
    >
      <h3>{title}</h3>

      <h1>{value}</h1>
    </div>
  );
}

function Menu({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <a
      href={href}
      style={{
        textDecoration: "none",
        background: "#fff",
        color: "#111",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,.08)",
        fontSize: "22px",
        fontWeight: "bold",
        display: "block",
      }}
    >
      {title}
    </a>
  );
}
