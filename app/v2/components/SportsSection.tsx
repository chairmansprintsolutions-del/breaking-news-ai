import Link from "next/link";
import { supabase } from "../../lib/supabase";

export default async function SportsSection() {
  const since = new Date(
    Date.now() - 7 * 24 * 60 * 60 * 1000
  ).toISOString();

  const { data } = await supabase
    .from("articles")
    .select("*")
    .or(
      "category.eq.Sports,title.ilike.%cricket%,title.ilike.%football%,title.ilike.%tennis%,title.ilike.%f1%,title.ilike.%formula%"
    )
    .gte("published", since)
    .order("published", {
      ascending: false,
    })
    .limit(6);

  return (
    <section className="sports-section">

      <div className="section-header">

        <h2 className="section-title">
          🏆 Sports
        </h2>

        <Link href="/sports">
          View All →
        </Link>

      </div>

      <div className="sports-grid">

        {(data || []).map((article: any) => (

          <article
            key={article.id}
            className="sports-card card"
          >

            {article.image_url && (

              <img
                src={article.image_url}
                className="sports-image"
                alt={article.title}
              />

            )}

            <div className="sports-content">

              <span>
                {article.category || "Sports"}
              </span>

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
                Read →
              </Link>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}
