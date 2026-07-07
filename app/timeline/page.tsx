import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function Timeline() {
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(30);

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "30px",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <Navbar />

      <h1>🕒 News Timeline</h1>

      {(articles || []).map((article: any) => (
        <div
          key={article.id}
          style={{
            borderLeft: "4px solid #0b5ed7",
            paddingLeft: "20px",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              color: "#666",
              fontSize: "13px",
            }}
          >
            {new Date(article.created_at).toLocaleString()}
          </div>

          <h3>{article.title}</h3>

          <p>{article.summary}</p>

          <a
            href={`/alert/${article.id}`}
            style={{
              textDecoration: "none",
              color: "#0b5ed7",
              fontWeight: "bold",
            }}
          >
            Read Story →
          </a>
        </div>
      ))}
    </main>
  );
}
