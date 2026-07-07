import { supabase } from "../../../lib/supabase";
import { notFound } from "next/navigation";

export default async function AlertPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: alert } = await supabase
    .from("breaking_alerts")
    .select("*")
    .eq("id", id)
    .single();

  if (!alert) {
    notFound();
  }

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {alert.image_url && (
        <img
          src={alert.image_url}
          alt={alert.title}
          style={{
            width: "100%",
            maxHeight: "500px",
            objectFit: "cover",
            borderRadius: "12px",
            marginBottom: "20px",
          }}
        />
      )}

      <div
        style={{
          color: "#666",
          marginBottom: "10px",
          fontSize: "14px",
        }}
      >
        {alert.category || "World"} •{" "}
        {new Date(alert.created_at).toLocaleString()}
      </div>

      <h1>{alert.title}</h1>

      <p
        style={{
          fontSize: "20px",
          color: "#444",
          lineHeight: "1.6",
        }}
      >
        {alert.summary}
      </p>

      <hr />

      <h2>Why it matters</h2>

      <p
        style={{
          lineHeight: "1.8",
        }}
      >
        {alert.why_it_matters}
      </p>

      <hr />

      <p
        style={{
          color: "#666",
          fontSize: "14px",
        }}
      >
        Source: {alert.source}
      </p>

      <br />

      <a
        href="/"
        style={{
          textDecoration: "none",
          color: "#0066cc",
          fontWeight: "bold",
        }}
      >
        ← Back to Home
      </a>
    </main>
  );
}
