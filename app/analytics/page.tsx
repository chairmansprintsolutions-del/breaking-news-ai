import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function Analytics() {
  const { data: articles } = await supabase
    .from("articles")
    .select("*");

  const totalArticles = articles?.length || 0;

  const totalBreaking =
    articles?.filter((a: any) => a.importance_score >= 80).length || 0;

  const avgImportance =
    totalArticles > 0
      ? (
          articles.reduce(
            (sum: number, a: any) => sum + (a.importance_score || 0),
            0
          ) / totalArticles
        ).toFixed(1)
      : "0";

  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <Navbar />

      <h1>📊 AI News Analytics</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <Card
          title="Articles"
          value={totalArticles}
        />

        <Card
          title="Breaking Alerts"
          value={totalBreaking}
        />

        <Card
          title="Average Score"
          value={avgImportance}
        />

        <Card
          title="Sources"
          value={
            new Set(
              (articles || []).map((a: any) => a.source)
            ).size
          }
        />
      </div>
    </main>
  );
}

function Card({
  title,
  value,
}: {
  title: string;
  value: any;
}) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "25px",
        borderRadius: "12px",
        textAlign: "center",
        boxShadow: "0 2px 10px rgba(0,0,0,.1)",
      }}
    >
      <h3>{title}</h3>

      <h1>{value}</h1>
    </div>
  );
}
