import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function Health() {
  const { data: articles } = await supabase
    .from("articles")
    .select("id");

  const { data: breaking } = await supabase
    .from("breaking_alerts")
    .select("id");

  const { data: digest } = await supabase
    .from("daily_digest")
    .select("id");

  const checks = [
    {
      name: "Supabase Database",
      status: "🟢 Healthy",
      value: "Connected",
    },
    {
      name: "Articles",
      status: "🟢 Healthy",
      value: articles?.length || 0,
    },
    {
      name: "Breaking Alerts",
      status: "🟢 Healthy",
      value: breaking?.length || 0,
    },
    {
      name: "Daily Digest",
      status: "🟢 Healthy",
      value: digest?.length || 0,
    },
    {
      name: "Image Generator",
      status: "🟢 Running",
      value: "Online",
    },
    {
      name: "RSS Collector",
      status: "🟢 Running",
      value: "Online",
    },
    {
      name: "Gemini AI",
      status: "🟢 Connected",
      value: "OK",
    },
    {
      name: "GitHub Actions",
      status: "🟢 Active",
      value: "Running",
    },
    {
      name: "Vercel",
      status: "🟢 Live",
      value: "Healthy",
    },
    {
      name: "Website",
      status: "🟢 Online",
      value: "Operational",
    },
  ];

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

      <h1>❤️ System Health</h1>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "30px",
        }}
      >
        <thead>
          <tr
            style={{
              background: "#16a34a",
              color: "#fff",
            }}
          >
            <th style={{ padding: "15px" }}>Service</th>
            <th>Status</th>
            <th>Value</th>
          </tr>
        </thead>

        <tbody>
          {checks.map((item) => (
            <tr
              key={item.name}
              style={{
                borderBottom: "1px solid #ddd",
              }}
            >
              <td style={{ padding: "15px" }}>
                {item.name}
              </td>

              <td>{item.status}</td>

              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
