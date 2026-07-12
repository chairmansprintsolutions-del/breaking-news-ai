import { supabase } from "../../lib/supabase";
import Navbar from "../components/Navbar";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function ArchivePage({
  searchParams,
}: {
  searchParams: Promise<{ days?: string }>;
}) {
  const params = await searchParams;

  const requestedDays = Number(params.days || 7);
  const days =
    Number.isFinite(requestedDays) && requestedDays > 0
      ? Math.min(requestedDays, 3650)
      : 7;

  const fromDate = new Date(
    Date.now() - days * 24 * 60 * 60 * 1000
  ).toISOString();

  const { data: articles, error } = await supabase
    .from("articles")
    .select("*")
    .gte("published", fromDate)
    .order("published", { ascending: false })
    .limit(500);

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "24px",
      }}
    >
      <Navbar />

      <h1>News Archive</h1>

      <p>News from the last {days} days</p>

      <nav
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          marginBottom: "30px",
        }}
      >
        <a href="/archive?days=1">24 Hours</a>
        <a href="/archive?days=7">7 Days</a>
        <a href="/archive?days=30">30 Days</a>
        <a href="/archive?days=365">1 Year</a>
      </nav>

      {error && <p>Unable to load archive.</p>}

      <div
        style={{
          display: "grid",
          gap: "24px",
        }}
      >
        {(articles || []).map((article: any) => (
          <article
            key={article.id}
            style={{
              borderBottom: "1px solid #ccc",
              paddingBottom: "24px",
            }}
          >
            <small>
              {article.source} • {article.category} •{" "}
              {article.published
                ? new Date(article.published).toLocaleString("en-IN")
                : ""}
            </small>

            <h2>{article.title}</h2>

            <p>{article.summary}</p>

            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Full Story →
            </a>
          </article>
        ))}
      </div>
    </main>
  );
}
