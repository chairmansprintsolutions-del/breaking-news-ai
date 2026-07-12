import Navbar from "../../components/Navbar";
import { supabase } from "../../../lib/supabase";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function AlertPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: alert, error } = await supabase
    .from("breaking_alerts")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !alert) {
    notFound();
  }

  return (
    <>
      <style>{`
        .article-page {
          max-width: 1400px;
          margin: 0 auto;
          background: #fff;
          min-height: 100vh;
        }

        .article-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 50px 24px 80px;
        }

        .breaking-label {
          color: #a40000;
          font-weight: 900;
          letter-spacing: 2px;
          font-size: 13px;
        }

        .article-title {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(42px, 7vw, 72px);
          line-height: 1.02;
          letter-spacing: -2px;
          margin: 16px 0 20px;
        }

        .article-meta {
          color: #777;
          padding-bottom: 22px;
          border-bottom: 1px solid #bbb;
        }

        .article-image {
          width: 100%;
          max-height: 550px;
          object-fit: cover;
          margin: 32px 0;
        }

        .article-summary {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 24px;
          line-height: 1.5;
          color: #333;
        }

        .analysis-box {
          margin: 35px 0;
          padding: 25px;
          background: #f3f0e8;
          border-left: 5px solid #a40000;
        }

        .analysis-box h2 {
          margin-top: 0;
          font-family: Georgia, serif;
        }

        .article-text {
          font-size: 18px;
          line-height: 1.8;
          color: #333;
        }

        .back-link {
          display: inline-block;
          margin-top: 40px;
          color: #a40000;
          font-weight: 900;
          text-decoration: none;
        }
      `}</style>

      <main className="article-page">
        <Navbar />

        <article className="article-container">
          <div className="breaking-label">
            ● BREAKING • {alert.category || "NEWS"}
          </div>

          <h1 className="article-title">
            {alert.title}
          </h1>

          <div className="article-meta">
            Breaking News AI •{" "}
            {new Date(alert.created_at).toLocaleString("en-IN")}
          </div>

          {alert.image_url && (
            <img
              className="article-image"
              src={alert.image_url}
              alt={alert.title}
            />
          )}

          {alert.summary && (
            <p className="article-summary">
              {alert.summary}
            </p>
          )}

          {alert.why_it_matters && (
            <section className="analysis-box">
              <h2>Why This Matters</h2>

              <div className="article-text">
                {alert.why_it_matters}
              </div>
            </section>
          )}

          {alert.analysis && (
            <section>
              <h2>Analysis</h2>

              <div
                className="article-text"
                style={{ whiteSpace: "pre-wrap" }}
              >
                {alert.analysis}
              </div>
            </section>
          )}

          <a
            href="/breaking"
            className="back-link"
          >
            ← Back to Breaking News
          </a>
        </article>
      </main>
    </>
  );
}
