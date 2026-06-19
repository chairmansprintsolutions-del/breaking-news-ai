import { supabase } from "../lib/supabase";

export default async function Home() {

  const { data: alerts } = await supabase
    .from("breaking_alerts")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(10);

  const { data: digest } = await supabase
    .from("daily_digest")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(1);

  return (
    <main style={{maxWidth: "900px", margin: "auto", padding: "20px"}}>
      <h1>Breaking News AI</h1>

      <p>Co-powered by Sprint Solutions</p>

      <h2>🔥 Breaking Alerts</h2>

      {alerts?.map((alert) => (
        <div
          key={alert.id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "15px"
          }}
        >
          <h3>{alert.title}</h3>
          <p>{alert.summary}</p>
          <p>{alert.why_it_matters}</p>
        </div>
      ))}

      <h2>📰 Daily Digest</h2>

      {digest?.map((d) => (
        <div key={d.id}>
          <h3>{d.title}</h3>
          <p>{d.digest_text}</p>
        </div>
      ))}
    </main>
  );
}
