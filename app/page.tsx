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
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
        background: "#f5f5f5",
        minHeight: "100vh"
      }}
    >
      <h1 style={{ marginBottom: 5 }}>🚨 Breaking News AI</h1>

      <p style={{ color: "#666", marginBottom: 30 }}>
        AI Powered • Co-powered by Sprint Solutions
      </p>

      <h2>🔥 Breaking Alerts</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "20px"
        }}
      >
        {(alerts || []).map((alert: any) => (
          <div
            key={alert.id}
            style={{
              background: "white",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}
          >
            {alert.image_url && (
              <img
                src={alert.image_url}
                alt={alert.title}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover"
                }}
              />
            )}

            <div style={{ padding: "18px" }}>
              <div
                style={{
                  fontSize: 13,
                  color: "#888",
                  marginBottom: 8
                }}
              >
                {alert.category || "World"} •{" "}
                {new Date(alert.created_at).toLocaleString()}
              </div>

              <h3 style={{ marginTop: 0 }}>{alert.title}</h3>

              <p>{alert.summary}</p>

              <p
                style={{
                  color: "#555",
                  fontSize: 14
                }}
              >
                {alert.why_it_matters}
              </p>

              <button
                style={{
                  marginTop: 10,
                  background: "#0070f3",
                  color: "white",
                  border: "none",
                  padding: "10px 16px",
                  borderRadius: "8px",
                  cursor: "pointer"
                }}
              >
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: 50 }}>📰 Daily Digest</h2>

      {(digest || []).map((d: any) => (
        <div
          key={d.id}
          style={{
            background: "white",
            padding: "24px",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
          }}
        >
          <h3>{d.title}</h3>

          <div
            style={{
              whiteSpace: "pre-wrap",
              lineHeight: 1.7
            }}
          >
            {d.digest_text}
          </div>
        </div>
      ))}
    </main>
  );
}
