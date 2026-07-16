import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function EntertainmentPage() {

  const since = new Date(
    Date.now() - 7*24*60*60*1000
  ).toISOString();

  const { data } = await supabase
    .from("articles")
    .select("*")
    .or(
      "category.eq.Entertainment,title.ilike.%movie%,title.ilike.%film%,title.ilike.%actor%,title.ilike.%actress%,title.ilike.%ott%"
    )
    .gte("published", since)
    .order("published",{
      ascending:false
    });

  return (

    <main className="container">

      <Navbar/>

      <h1 className="section-title">
        🎬 Entertainment
      </h1>

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
              />

            )}

            <div className="ent-content">

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
                Read →
              </a>

            </div>

          </article>

        ))}

      </div>

    </main>

  );

}
