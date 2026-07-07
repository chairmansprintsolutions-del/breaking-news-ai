import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function Discover() {
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("importance_score", { ascending: false })
    .limit(100);

  const sections = [
    "World",
    "India",
    "Technology",
    "Business",
    "Markets",
    "Politics",
    "Science",
    "Sports",
  ];

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

      <h1>🌎 Discover</h1>

      {sections.map((section) => {
        const news =
          articles?.filter(
            (a: any) =>
              (a.category || "World")
                .toLowerCase() === section.toLowerCase()
          ) || [];

        if (!news.length) return null;

        return (
          <section
            key={section}
            style={{
              marginTop: "45px",
            }}
          >
            <h2>{section}</h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit,minmax(320px,1fr))",
                gap: "20px",
              }}
            >
              {news.slice(0, 6).map((article: any) => (
                <div
                  key={article.id}
                  style={{
                    background: "#fff",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow:
                      "0 2px 10px rgba(0,0,0,.08)",
                  }}
                >
                  {article.image_url && (
                    <img
                      src={article.image_url}
                      alt={article.title}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                  )}

                  <div
                    style={{
                      padding: "18px",
                    }}
                  >
                    <h3>{article.title}</h3>

                    <p>{article.summary}</p>

                    <a
                      href={`/alert/${article.id}`}
                      style={{
                        color: "#0b5ed7",
                        textDecoration: "none",
                        fontWeight: "bold",
                      }}
                    >
                      Read →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}
