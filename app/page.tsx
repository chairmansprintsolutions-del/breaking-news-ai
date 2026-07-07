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

  const { data: latest } = await supabase
    .from("articles")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(20);

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "30px",
        fontFamily: "Arial, Helvetica, sans-serif",
        background: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          marginBottom: "5px",
        }}
      >
        🚨 Breaking News AI
      </h1>

      <p
        style={{
          color: "#666",
          fontSize: "18px",
          marginBottom: "35px",
        }}
      >
        AI Powered • Co-powered by Sprint Solutions
      </p>

      <h2>🔥 Breaking Alerts</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(360px,1fr))",
          gap: "25px",
        }}
      >
        {(alerts || []).map((alert: any) => (
          <div
            key={alert.id}
            style={{
              background: "#fff",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 4px 15px rgba(0,0,0,0.12)",
            }}
          >
            {alert.image_url && (
              <img
                src={alert.image_url}
                alt={alert.title}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />
            )}

            <div style={{ padding: "20px" }}>
              <div
                style={{
                  color: "#888",
                  fontSize: "13px",
                  marginBottom: "10px",
                }}
              >
                🌍 {alert.category || "World"} •{" "}
                {new Date(alert.created_at).toLocaleString()}
              </div>

              <h3>{alert.title}</h3>

              <p>{alert.summary}</p>

              <p
                style={{
                  color: "#666",
                  lineHeight: "1.6",
                }}
              >
                {alert.why_it_matters}
              </p>

              <a
                href={`/alert/${alert.id}`}
                style={{
                  display: "inline-block",
                  marginTop: "15px",
                  padding: "10px 18px",
                  background: "#0b5ed7",
                  color: "#fff",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>

      <h2
        style={{
          marginTop: "60px",
        }}
      >
        📰 Daily Digest
      </h2>

      {(digest || []).map((d: any) => (
        <div
          key={d.id}
          style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.12)",
            marginBottom: "40px",
          }}
        >
          <h3>{d.title}</h3>

          <div
            style={{
              whiteSpace: "pre-wrap",
              lineHeight: "1.8",
            }}
          >
            {d.digest_text}
          </div>
        </div>
      ))}

      <h2
        style={{
          marginTop: "40px",
          marginBottom: "20px",
        }}
      >
        🌍 Latest News
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "20px",
        }}
      >
        {(latest || []).map((article: any) => (
          <div
            key={article.id}
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                color: "#888",
                fontSize: "13px",
                marginBottom: "10px",
              }}
            >
              {article.source} • {article.category}
            </div>

            <h3>{article.title}</h3>

            <p>{article.summary}</p>
          </div>
        ))}
      </div>

      <footer
        style={{
          marginTop: "60px",
          textAlign: "center",
          color: "#888",
          fontSize: "14px",
        }}
      >
        © 2026 Breaking News AI • Co-powered by Sprint Solutions
      </footer>
    </main>
  );
}
