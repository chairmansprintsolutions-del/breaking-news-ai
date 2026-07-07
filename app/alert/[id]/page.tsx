import { supabase } from "../../../lib/supabase";
import Navbar from "../../components/Navbar";

export default async function AlertPage({
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
      <main style={{ padding: 40 }}>
        <Navbar />
        <h1>Article not found</h1>
      </main>
    );
  }

  const { data: related } = await supabase
    .from("articles")
    .select("*")
    .eq("category", article.category)
    .neq("id", article.id)
    .limit(6);

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

      <div
        style={{
          display: "inline-block",
          background: "#dc2626",
          color: "#fff",
          padding: "8px 15px",
          borderRadius: "8px",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        🚨 BREAKING NEWS
      </div>

      <h1
        style={{
          fontSize: "42px",
          marginBottom: "20px",
        }}
      >
        {article.title}
      </h1>

      {article.image_url && (
        <img
          src={article.image_url}
          alt={article.title}
          style={{
            width: "100%",
            maxHeight: "550px",
            objectFit: "cover",
            borderRadius: "12px",
            marginBottom: "30px",
          }}
        />
      )}

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "30px",
        }}
      >
        <Badge text={article.source} color="#2563eb" />
        <Badge text={article.category} color="#16a34a" />
        <Badge
          text={`Importance ${article.importance_score}/100`}
          color="#ea580c"
        />
        <Badge
          text={new Date(article.created_at).toLocaleString()}
          color="#6b7280"
        />
      </div>

      <Section title="⚡ 30 Second Summary">
        {article.summary}
      </Section>

      <Section title="🌍 Why This Matters">
        {article.why_it_matters}
      </Section>

      <Section title="📌 Key Takeaways">
        <ul>
          <li>{article.summary}</li>
          <li>{article.why_it_matters}</li>
          <li>AI classified this as {article.category} news.</li>
          <li>Importance Score: {article.importance_score}/100.</li>
        </ul>
      </Section>

      <Section title="📊 AI Assessment">
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <tbody>
            <Row label="Category" value={article.category} />
            <Row label="Source" value={article.source} />
            <Row
              label="Importance"
              value={`${article.importance_score}/100`}
            />
            <Row
              label="Published"
              value={new Date(article.created_at).toLocaleString()}
            />
          </tbody>
        </table>
      </Section>

      <Section title="🔮 AI Prediction">
        AI expects additional updates as more official information becomes
        available. Continue monitoring this developing story.
      </Section>

      <Section title="🌐 Original Source">
        <a
          href={article.url}
          target="_blank"
          style={{
            color: "#2563eb",
            fontWeight: "bold",
          }}
        >
          Read Original Article
        </a>
      </Section>

      <Section title="📰 Related Stories">
        {(related || []).map((r: any) => (
          <div
            key={r.id}
            style={{
              marginBottom: "15px",
              paddingBottom: "15px",
              borderBottom: "1px solid #ddd",
            }}
          >
            <a
              href={`/alert/${r.id}`}
              style={{
                textDecoration: "none",
                color: "#111",
                fontWeight: "bold",
              }}
            >
              {r.title}
            </a>

            <p>{r.summary}</p>
          </div>
        ))}
      </Section>

      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          marginTop: "40px",
        }}
      >
        <Button href={`/explain/${article.id}`} text="🧠 AI Explain" />

        <Button href="/timeline" text="🕒 Timeline" />

        <Button href="/forecast" text="🔮 Forecast" />

        <Button href="/compare" text="⚖ Compare" />

        <Button href="/chat" text="💬 Ask AI" />

        <Button href="/podcast" text="🎧 Listen" />

        <Button href="/watch" text="📺 Watch" />
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        marginTop: "40px",
      }}
    >
      <h2>{title}</h2>

      <div
        style={{
          background: "#fff",
          padding: "22px",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,.08)",
          lineHeight: "1.8",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function Badge({
  text,
  color,
}: {
  text: string;
  color: string;
}) {
  return (
    <span
      style={{
        background: color,
        color: "#fff",
        padding: "8px 14px",
        borderRadius: "20px",
        fontSize: "14px",
      }}
    >
      {text}
    </span>
  );
}

function Row({
  label,
  value,
}: {
  label: string;
  value: any;
}) {
  return (
    <tr>
      <td
        style={{
          padding: "10px",
          fontWeight: "bold",
          width: "220px",
        }}
      >
        {label}
      </td>

      <td style={{ padding: "10px" }}>{value}</td>
    </tr>
  );
}

function Button({
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
        padding: "12px 18px",
        borderRadius: "8px",
        textDecoration: "none",
      }}
    >
      {text}
    </a>
  );
}
