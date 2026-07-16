import Link from "next/link";
import { supabase } from "../../lib/supabase";

export default async function HeroStory() {
  const since = new Date(
    Date.now() - 24 * 60 * 60 * 1000
  ).toISOString();

  const { data } = await supabase
    .from("articles")
    .select("*")
    .gte("published", since)
    .order("importance_score", {
      ascending: false,
    })
    .order("published", {
      ascending: false,
    })
    .limit(1);

  const article = data?.[0];

  if (!article) {
    return (
      <div className="hero-card card">
        <h2>No major story available</h2>
      </div>
    );
  }

  return (
    <section className="hero-card card fade">

      {article.image_url && (
        <img
          className="hero-image"
          src={article.image_url}
          alt={article.title}
        />
      )}

      <div className="hero-content">

        <span className="hero-category">
          {article.category}
        </span>

        <h2>
          {article.title}
        </h2>

        <p>
          {article.summary}
        </p>

        <div className="hero-actions">

          <Link
            href={`/article/${article.id}`}
            className="hero-btn"
          >
            Read Story →
          </Link>

          <a
            href={article.url}
            target="_blank"
            className="hero-link"
          >
            Original Source
          </a>

        </div>

      </div>

    </section>
  );
}
