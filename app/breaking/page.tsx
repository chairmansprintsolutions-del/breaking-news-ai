import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function BreakingPage() {
  const last24Hours = new Date(
    Date.now() - 24 * 60 * 60 * 1000
  ).toISOString();

  const { data: alerts, error } = await supabase
    .from("breaking_alerts")
    .select("*")
    .gte("created_at", last24Hours)
    .order("created_at", { ascending: false })
    .limit(100);

  return (
    <main
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Navbar />

      <header
        style={{
          borderBottom: "5px solid #a40000",
          marginBottom: "30px",
          paddingBottom: "20px",
        }}
      >
        <div
          style={{
            color: "#a40000",
            fontWeight: "900",
            letterSpacing: "2px",
          }}
        >
          LIVE • LAST 24 HOURS
        </div>

        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(42px, 7vw, 72px)",
            margin: "10px 0",
          }}
        >
          🚨 Breaking News
        </h1>

        <p>
          Major developing stories and urgent news alerts from
          the last 24 hours.
        </p>
      </header>

      {error && (
        <p>
          Unable to load breaking alerts: {error.message}
        </p>
      )}

      <section
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "30px",
        }}
      >
        {(alerts || []).map((alert: any) => (
          <article
            key={alert.id}
            style={{
              borderBottom: "3px solid #111",
              paddingBottom: "25px",
            }}
          >
            {alert.image_url && (
              <img
                src={alert.image_url}
                alt={alert.title}
                style={{
                  width: "100%",
                  height: "240px",
                  objectFit: "cover",
                }}
              />
            )}

            <div
              style={{
                color: "#a40000",
                fontWeight: "900",
                fontSize: "12px",
                letterSpacing: "1px",
                marginTop: "15px",
              }}
            >
              ● BREAKING • {alert.source || "NEWS"}
            </div>

            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "28px",
                lineHeight: "1.1",
              }}
            >
              {alert.title}
            </h2>

            <small style={{ color: "#777" }}>
              {new Date(alert.created_at).toLocaleString(
                "en-IN"
              )}
            </small>

            <p
              style={{
                lineHeight: "1.7",
                color: "#444",
              }}
            >
              {alert.summary}
            </p>

            {alert.why_it_matters && (
              <p>
                <strong>Why it matters:</strong>{" "}
                {alert.why_it_matters}
              </p>
            )}

            <a
              href={`/alert/${alert.id}`}
              style={{
                display: "inline-block",
                marginTop: "10px",
                color: "#a40000",
                fontWeight: "900",
                textDecoration: "none",
                borderBottom: "2px solid #a40000",
              }}
            >
              Full Analysis →
            </a>
          </article>
        ))}
      </section>

      {!error && (!alerts || alerts.length === 0) && (
        <div
          style={{
            padding: "60px 20px",
            textAlign: "center",
            background: "#f5f5f5",
          }}
        >
          <h2>No breaking alerts in the last 24 hours</h2>
          <p>
            The live news collector continues to monitor current
            developments.
          </p>
        </div>
      )}
    </main>
  );
}
