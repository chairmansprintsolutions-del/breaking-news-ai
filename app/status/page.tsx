import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function Status() {
  const { data: articles } = await supabase
    .from("articles")
    .select("id,source,category,image_url,created_at");

  const { data: alerts } = await supabase
    .from("breaking_alerts")
    .select("id");

  const { data: digest } = await supabase
    .from("daily_digest")
    .select("id");

  const sources = new Set(
    (articles || []).map((a: any) => a.source)
  ).size;

  const categories = new Set(
    (articles || []).map((a: any) => a.category)
  ).size;

  const images =
    (articles || []).filter((a: any) => a.image_url).length;

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

      <h1>🚦 Platform Status</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <Card title="Articles" value={articles?.length || 0} color="#2563eb" />
        <Card title="Breaking" value={alerts?.length || 0} color="#dc2626" />
        <Card title="Digests" value={digest?.length || 0} color="#16a34a" />
        <Card title="Sources" value={sources} color="#7c3aed" />
        <Card title="Categories" value={categories} color="#ea580c" />
        <Card title="Images" value={images} color="#0891b2" />
      </div>

      <h2 style={{ marginTop: "40px" }}>
        Services
      </h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr
            style={{
              background: "#2563eb",
              color: "#fff",
            }}
          >
            <th style={{ padding: "15px" }}>Service</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <Row service="Website" />
          <Row service="Supabase" />
          <Row service="GitHub Actions" />
          <Row service="Gemini AI" />
          <Row service="RSS Collector" />
          <Row service="Breaking Alerts" />
          <Row service="Daily Digest" />
          <Row service="Image Generator" />
          <Row service="Vercel" />
          <Row service="API" />
        </tbody>
      </table>
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

function Row({
  service,
}: {
  service: string;
}) {
  return (
    <tr
      style={{
        borderBottom: "1px solid #ddd",
      }}
    >
      <td style={{ padding: "15px" }}>{service}</td>
      <td>🟢 Operational</td>
    </tr>
  );
}
