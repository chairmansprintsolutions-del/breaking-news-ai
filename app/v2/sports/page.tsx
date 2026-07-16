import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export const dynamic = "force-dynamic";

export default async function SportsPage() {

  const since = new Date(
    Date.now() - 7 * 24 * 60 * 60 * 1000
  ).toISOString();

  const { data } = await supabase
    .from("articles")
    .select("*")
    .or(
      "category.eq.Sports,title.ilike.%cricket%,title.ilike.%football%,title.ilike.%tennis%,title.ilike.%olympics%,title.ilike.%f1%"
    )
    .gte("published", since)
    .order("published", {
      ascending: false,
    });

  return (

    <main className="container">

      <Navbar />

      <h1 className="section-title">
        🏆 Sports
      </h1>

      <div className="stories-grid">

        {(data || []).map((article: any)=>(

          <article
            key={article.id}
            className="story-card card"
          >

            {article.image_url && (

              <img
                src={article.image_url}
                className="story-image"
              />

            )}

            <div className="story-content">

              <h3>
                {article.title}
              </h3>

              <p>
                {article.summary}
              </p>

              <a
                href={`/article/${article.id}`}
                className="story-read"
              >
                Read Article →
              </a>

            </div>

          </article>

        ))}

      </div>

    </main>

  );

}
