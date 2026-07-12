import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const params = await searchParams;
  const query = (params.q || "").trim();

  let articles: any[] = [];
  let errorMessage = "";

  if (query) {
    const safeQuery = query
      .replace(/[%_]/g, "")
      .replace(/,/g, " ")
      .trim();

    if (safeQuery) {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .or(
          `title.ilike.%${safeQuery}%,summary.ilike.%${safeQuery}%,category.ilike.%${safeQuery}%,source.ilike.%${safeQuery}%`
        )
        .order("published", { ascending: false })
        .limit(100);

      articles = data || [];

      if (error) {
        errorMessage = error.message;
      }
    }
  }

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

      <h1>Search News Archive</h1>

      <form
        action="/search"
        method="GET"
        style={{
          display: "flex",
          gap: "10px",
          margin: "30px 0",
        }}
      >
        <input
          type="search"
          name="q"
          defaultValue={query}
          placeholder="Search India, AI, markets, company, event..."
          required
          style={{
            flex: 1,
            padding: "14px",
            fontSize: "16px",
            border: "1px solid #aaa",
            borderRadius: "6px",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "14px 24px",
            background: "#111",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </form>

      {errorMessage && (
        <p>Search error: {errorMessage}</p>
      )}

      {query && (
        <h2>
          {articles.length} result{articles.length === 1 ? "" : "s"} for
          {" “"}
          {query}
          {"”"}
        </h2>
      )}

      <div>
        {articles.map((article: any) => (
          <article
            key={article.id}
            style={{
              display: "grid",
              gridTemplateColumns: article.image_url
                ? "220px 1fr"
                : "1fr",
              gap: "22px",
              padding: "24px 0",
              borderBottom: "1px solid #ccc",
            }}
          >
            {article.image_url && (
              <img
                src={article.image_url}
                alt={article.title}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                }}
              />
            )}

            <div>
              <small>
                {article.source} • {article.category}
                {article.published &&
                  ` • ${new Date(
                    article.published
                  ).toLocaleString("en-IN")}`}
              </small>

              <h2>{article.title}</h2>

              <p>{article.summary}</p>

              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontWeight: "bold",
                }}
              >
                Read Full Story →
              </a>
            </div>
          </article>
        ))}
      </div>

      {query && articles.length === 0 && !errorMessage && (
        <p>No matching articles found in the archive.</p>
      )}
    </main>
  );
}
