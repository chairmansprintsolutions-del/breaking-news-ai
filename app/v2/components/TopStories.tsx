import Link from "next/link";
import { supabase } from "../../../lib/supabase";

export default async function TopStories() {
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
    .range(1, 5);

  return (
    <section className="top-stories">

      <h2 className="section-title">
        Top Stories
      </h2>

      <div className="stories-grid">

        {(data || []).map((article, index) => (
          <article
            key={article.id}
            className="story-card card fade"
          >
            <div className="story-number">
              {index + 2}
            </div>

            {article.image_url && (
              <img
                src={article.image_url}
                alt={article.title}
                className="story-image"
              />
            )}

            <div className="story-content">

              <div className="story-category">
                {article.category}
              </div>

              <h3>
                {article.title}
              </h3>

              <p>
                {article.summary}
              </p>

              <Link
                href={`/article/${article.id}`}
                className="story-read"
              >
                Read Article →
              </Link>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}
