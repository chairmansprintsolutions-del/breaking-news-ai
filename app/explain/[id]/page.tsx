import Navbar from "../../components/Navbar";
import { supabase } from "../../../lib/supabase";
import { notFound } from "next/navigation";

export default async function Explain({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: article } = await supabase
    .from("articles")
    .select("*")
    .eq("id", id)
    .single();

  if (!article) notFound();

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <Navbar />

      <h1>🧠 AI Explain</h1>

      <div
        style={{
          background: "#fff",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2>{article.title}</h2>

        <p>{article.summary}</p>

        <hr />

        <h3>Why it matters</h3>

        <p>{article.summary}</p>

        <hr />

        <h3>Key Takeaways</h3>

        <ul>
          <li>Major global development</li>
          <li>Potential economic and political impact</li>
          <li>Follow future updates</li>
        </ul>

        <a
          href={article.url}
          target="_blank"
          style={{
            color: "#0b5ed7",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Read Original Source →
        </a>
      </div>
    </main>
  );
}
