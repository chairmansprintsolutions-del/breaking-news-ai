import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function WorldPage() {
  const { data: articles, error } = await supabase
    .from("articles")
    .select("*")
    .eq("category", "World")
    .order("published", { ascending: false })
    .limit(100);

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Navbar />

      <header
        style={{
          borderBottom: "4px solid #111",
          marginBottom: "30px",
        }}
      >
        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "48px",
            marginBottom: "10px",
          }}
        >
          🌍 World
        </h1>

        <p>
          Latest global news, international affairs and major world developments
        </p>
      </header>

      {error && (
        <p>
          Unable to load World news: {error.message}
        </p>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "28px",
        }}
      >
        {(articles || []).map((article: any) => (
          <article
            key={article.id}
            style={{
              borderBottom: "2px solid #111",
              paddingBottom: "24px",
            }}
          >
            {article.image_url && (
              <img
                src={article.image_url}
                alt={article.title}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />
            )}

            <p
              style={{
                color: "#777",
                fontSize: "13px",
                marginTop: "14px",
              }}
            >
              {article.source}
              {article.published &&
                ` • ${new Date(
                  article.published
                ).toLocaleString("en-IN")}`}
            </p>

            <h2
              style={{
                fontFamily: "Georgia, serif",
                lineHeight: "1.15",
              }}
            >
              {article.title}
            </h2>

            <p
              style={{
                lineHeight: "1.6",
                color: "#444",
              }}
            >
              {article.summary}
            </p>

            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontWeight: "bold",
                color: "#a40000",
              }}
            >
              Read Full Story →
            </a>
          </article>
        ))}
      </div>

      {!error && (!articles || articles.length === 0) && (
        <p>No World news available yet.</p>
      )}
    </main>
  );
}
