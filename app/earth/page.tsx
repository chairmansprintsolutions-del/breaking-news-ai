import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function Earth() {
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("importance_score", { ascending: false })
    .limit(100);

  const regions = [
    "North America",
    "South America",
    "Europe",
    "Asia",
    "Africa",
    "Middle East",
    "Oceania",
  ];

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

      <h1>🌍 Earth Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "30px",
        }}
      >
        <div
          style={{
            height: "750px",
            background: "#eef4ff",
            borderRadius: "15px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "42px",
            fontWeight: "bold",
          }}
        >
          🌎 Interactive Globe
          <br />
          (Coming Soon)
        </div>

        <div>
          {regions.map((region) => (
            <div
              key={region}
              style={{
                background: "#fff",
                padding: "20px",
                marginBottom: "18px",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,.08)",
              }}
            >
              <h2>{region}</h2>

              <p>
                {
                  (articles || []).filter((a: any) =>
                    `${a.title} ${a.summary}`
                      .toLowerCase()
                      .includes(region.toLowerCase())
                  ).length
                }{" "}
                Stories
              </p>
            </div>
          ))}
        </div>
      </div>

      <h2 style={{ marginTop: "50px" }}>
        🌐 Global Feed
      </h2>

      {(articles || []).slice(0, 20).map((article: any) => (
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
          <strong>{article.title}</strong>

          <p>{article.summary}</p>

          <a
            href={`/alert/${article.id}`}
            style={{
              color: "#2563eb",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            View Report →
          </a>
        </div>
      ))}
    </main>
  );
}
