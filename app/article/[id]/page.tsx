import Navbar from "../../components/Navbar";
import { supabase } from "../../../lib/supabase";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: article, error } = await supabase
    .from("articles")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !article) {
    notFound();
  }

  return (
    <main
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        minHeight: "100vh",
        background: "#fff",
      }}
    >
      <Navbar />

      <article
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "50px 24px 80px",
        }}
      >
        <div
          style={{
            color: "#a40000",
            fontWeight: "900",
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          {article.category || "News"}
        </div>

        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(40px, 7vw, 70px)",
            lineHeight: "1.03",
            margin: "15px 0 20px",
          }}
        >
          {article.title}
        </h1>

        <div
          style={{
            color: "#777",
            borderBottom: "1px solid #ccc",
            paddingBottom: "20px",
          }}
        >
          {article.source}

          {article.published &&
            ` • ${new Date(
              article.published
            ).toLocaleString("en-IN")}`}
        </div>

        {article.image_url && (
          <img
            src={article.image_url}
            alt={article.title}
            style={{
              width: "100%",
              maxHeight: "550px",
              objectFit: "cover",
              margin: "32px 0",
            }}
          />
        )}

        <p
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "23px",
            lineHeight: "1.6",
            color: "#333",
          }}
        >
          {article.summary}
        </p>

        {article.ai_explanation && (
          <section
            style={{
              marginTop: "35px",
              padding: "25px",
              background: "#f3f0e8",
              borderLeft: "5px solid #a40000",
            }}
          >
            <h2>AI Analysis</h2>
            <p style={{ lineHeight: "1.8" }}>
              {article.ai_explanation}
            </p>
          </section>
        )}

        {article.key_takeaways &&
          Array.isArray(article.key_takeaways) && (
            <section style={{ marginTop: "35px" }}>
              <h2>Key Takeaways</h2>

              <ul>
                {article.key_takeaways.map(
                  (item: string, index: number) => (
                    <li
                      key={index}
                      style={{
                        marginBottom: "12px",
                        lineHeight: "1.6",
                      }}
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            </section>
          )}

        <div
          style={{
            marginTop: "45px",
            paddingTop: "25px",
            borderTop: "2px solid #111",
          }}
        >
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "#a40000",
              color: "#fff",
              padding: "14px 22px",
              textDecoration: "none",
              fontWeight: "900",
            }}
          >
            Read Original Source →
          </a>
        </div>
      </article>
    </main>
  );
}
