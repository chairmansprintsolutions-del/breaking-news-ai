import { supabase } from "../../../lib/supabase";

export default async function AIBrief() {
  const since = new Date(
    Date.now() - 24 * 60 * 60 * 1000
  ).toISOString();

  const { data } = await supabase
    .from("articles")
    .select("title,category")
    .gte("published", since)
    .order("importance_score", {
      ascending: false,
    })
    .limit(5);

  return (
    <section className="ai-brief card fade">

      <div className="ai-head">

        <div>
          🤖 AI MORNING BRIEF
        </div>

        <span>
          Last 24 Hours
        </span>

      </div>

      <p className="ai-intro">
        Here's everything important that happened today.
      </p>

      <ol className="ai-list">

        {(data || []).map((item, index) => (
          <li key={index}>

            <strong>
              {item.category}
            </strong>

            <span>
              {item.title}
            </span>

          </li>
        ))}

      </ol>

    </section>
  );
}
