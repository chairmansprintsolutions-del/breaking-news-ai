import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function AIRadar() {
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("importance_score", { ascending: false })
    .limit(100);

  const categories = [
    "World",
    "India",
    "Technology",
    "Business",
    "Markets",
    "Politics",
    "Science",
    "Sports",
  ];

  return (
    <main
      style={{
        maxWidth: "1300px",
        margin: "0 auto",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <Navbar />

      <h1>📡 AI News Radar</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {categories.map((category) => {
          const news =
            articles?.filter(
              (a: any) =>
                (a.category || "World")
                  .toLowerCase()
                  .includes(category.toLowerCase())
            ) || [];

          return (
            <div
              key={category}
              style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 2px 10px rgba(0,0,0,.1)",
              }}
            >
              <h2>{category}</h2>

              <h1>{news.length}</h1>

              <p>Articles detected</p>

              {news.slice(0, 5).map((article: any) => (
                <div
                  key={article.id}
                  style={{
                    marginTop: "15px",
                    borderTop: "1px solid #eee",
                    paddingTop: "10px",
                  }}
                >
                  <strong>{article.title}</strong>

                  <br />

                  <small>
                    Score: {article.importance_score}
                  </small>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </main>
  );
}
