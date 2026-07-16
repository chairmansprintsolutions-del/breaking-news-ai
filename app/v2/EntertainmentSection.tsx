import Link from "next/link";
import { supabase } from "../../lib/supabase";

export default async function EntertainmentSection() {

  const since = new Date(
    Date.now() - 7 * 24 * 60 * 60 * 1000
  ).toISOString();

  const { data } = await supabase
    .from("articles")
    .select("*")
    .or(
      "category.eq.Entertainment,title.ilike.%movie%,title.ilike.%film%,title.ilike.%actor%,title.ilike.%actress%,title.ilike.%netflix%,title.ilike.%amazon%,title.ilike.%ott%,title.ilike.%music%"
    )
    .gte("published", since)
    .order("published", {
      ascending: false,
    })
    .limit(6);

  return (

    <section className="entertainment-section">

      <div className="section-header">

        <h2 className="section-title">
          🎬 Entertainment
        </h2>

        <Link href="/v2/entertainment">
          View All →
        </Link>

      </div>

      <div className="ent-grid">

        {(data || []).map((article:any)=>(

          <article
            key={article.id}
            className="ent-card card"
          >

            {article.image_url && (

              <img
                src={article.image_url}
                className="ent-image"
                alt={article.title}
              />

            )}

            <div className="ent-content">

              <span>
                {article.category}
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
