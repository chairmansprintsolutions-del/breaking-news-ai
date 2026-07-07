import { supabase } from "../../../lib/supabase";
import Navbar from "../../components/Navbar";

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

  if (!article) {
    return (
      <main style={{ padding: "40px" }}>
        <Navbar />
        <h1>Article not found</h1>
      </main>
    );
  }

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "auto",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <Navbar />

      <h1>🧠 AI Explanation</h1>

      <h2>{article.title}</h2>

      {article.image_url && (
        <img
          src={article.image_url}
          alt={article.title}
          style={{
            width: "100%",
            borderRadius: "12px",
            marginBottom: "25px",
            maxHeight: "500px",
            objectFit: "cover",
          }}
        />
      )}

      <Card title="📄 Original Summary">
        {article.summary}
      </Card>

      <Card title="🧠 AI Explanation">
        {article.why_it_matters}
      </Card>

      <Card title="👶 Explain Like I'm 10">
        Imagine your teacher is explaining this news in a classroom. This event
        is important because it could affect many people, governments,
        businesses or countries. Instead of reading a long article, the key idea
        is that something significant has happened and experts are watching what
        happens next.
      </Card>

      <Card title="💼 Business Impact">
        Businesses, investors and governments may monitor this event closely as
        future developments could influence markets, regulations or public
        policy.
      </Card>

      <Card title="🌍 Global Impact">
        Depending on future developments, this story could influence
        international relations, trade, security or technology.
      </Card>

      <Card title="📈 AI Confidence">
        <div
          style={{
            background: "#eee",
            height: "20px",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${Math.min(article.importance_score, 100)}%`,
              height: "100%",
              background: "#2563eb",
            }}
          />
        </div>

        <p>{article.importance_score}% Confidence</p>
      </Card>

      <Card title="⚡ Quick Facts">
        <ul>
          <li>Category: {article.category}</li>
          <li>Source: {article.source}</li>
          <li>Importance: {article.importance_score}/100</li>
          <li>
            Published:{" "}
            {new Date(article.created_at).toLocaleString()}
          </li>
        </ul>
      </Card>

      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          marginTop: "40px",
        }}
      >
        <LinkButton href={`/alert/${article.id}`} text="📰 Full Story" />
        <LinkButton href="/chat" text="💬 Ask AI" />
        <LinkButton href="/forecast" text="🔮 Forecast" />
        <LinkButton href="/compare" text="⚖ Compare" />
        <LinkButton href="/podcast" text="🎧 Listen" />
      </div>
    </main>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "25px",
        borderRadius: "12px",
        marginTop: "25px",
        boxShadow: "0 2px 8px rgba(0,0,0,.08)",
      }}
    >
      <h2>{title}</h2>
      <div style={{ lineHeight: "1.8" }}>{children}</div>
    </div>
  );
}

function LinkButton({
  href,
  text,
}: {
  href: string;
  text: string;
}) {
  return (
    <a
      href={href}
      style={{
        background: "#2563eb",
        color: "#fff",
        padding: "12px 20px",
        borderRadius: "8px",
        textDecoration: "none",
      }}
    >
      {text}
    </a>
  );
}
