import Navbar from "./components/Navbar";
import { supabase } from "../lib/supabase";

export const revalidate = 300;

function formatDate(date?: string) {
  if (!date) return "";

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}

function truncate(text?: string, length = 180) {
  if (!text) return "Read the latest developments on this story.";
  return text.length > length
    ? `${text.substring(0, length).trim()}...`
    : text;
}

function categoryIcon(category?: string) {
  const value = category?.toLowerCase() || "";

  if (value.includes("business") || value.includes("market")) return "📈";
  if (value.includes("tech")) return "💻";
  if (value.includes("india")) return "🇮🇳";
  if (value.includes("world")) return "🌍";
  if (value.includes("health")) return "🏥";
  if (value.includes("science")) return "🔬";
  if (value.includes("sport")) return "🏆";

  return "📰";
}

export default async function Home() {
  const [
    { data: alerts },
    { data: digest },
    { data: latest },
  ] = await Promise.all([
    supabase
      .from("breaking_alerts")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(8),

    supabase
      .from("daily_digest")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(1),

    supabase
      .from("articles")
      .select("*")
      .order("published", { ascending: false })
      .limit(30),
  ]);

  const articles = latest || [];
  const breakingAlerts = alerts || [];
  const hero = articles[0];
  const secondaryStories = articles.slice(1, 5);
  const moreStories = articles.slice(5);

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #f4f1eb;
          color: #171717;
        }

        a {
          color: inherit;
        }

        .page {
          max-width: 1400px;
          margin: 0 auto;
          background: #fff;
          min-height: 100vh;
          border-left: 1px solid #ddd;
          border-right: 1px solid #ddd;
        }

        .masthead {
          text-align: center;
          padding: 32px 20px 24px;
          border-bottom: 4px double #111;
        }

        .brand {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(42px, 7vw, 82px);
          font-weight: 900;
          letter-spacing: -4px;
          line-height: .95;
        }

        .tagline {
          margin: 14px 0 0;
          font-size: 14px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #666;
        }

        .datebar {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          padding: 10px 24px;
          border-bottom: 1px solid #bbb;
          font-size: 13px;
          font-weight: 700;
        }

        .breaking-strip {
          display: flex;
          align-items: center;
          background: #a40000;
          color: white;
          overflow: hidden;
        }

        .breaking-label {
          flex-shrink: 0;
          padding: 13px 18px;
          background: #750000;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .breaking-text {
          padding: 13px 20px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: 700;
        }

        .content {
          padding: 28px;
        }

        .top-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 30px;
          border-bottom: 3px solid #111;
          padding-bottom: 30px;
        }

        .hero {
          padding-right: 30px;
          border-right: 1px solid #bbb;
        }

        .hero-image,
        .alert-image {
          width: 100%;
          object-fit: cover;
          display: block;
          background: #ddd;
        }

        .hero-image {
          height: 430px;
        }

        .hero-placeholder {
          height: 330px;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            linear-gradient(135deg, #171717, #4a4a4a);
          color: white;
          font-size: 80px;
        }

        .category {
          display: inline-block;
          margin-top: 18px;
          color: #a40000;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .hero h2 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(34px, 4vw, 58px);
          line-height: 1.02;
          margin: 12px 0;
          letter-spacing: -1.5px;
        }

        .summary {
          color: #444;
          line-height: 1.7;
          font-size: 17px;
        }

        .meta {
          color: #777;
          font-size: 12px;
          margin: 12px 0;
        }

        .read-link {
          display: inline-block;
          margin-top: 10px;
          padding-bottom: 3px;
          border-bottom: 2px solid #a40000;
          color: #a40000;
          text-decoration: none;
          font-weight: 900;
        }

        .secondary-story {
          padding: 0 0 20px;
          margin-bottom: 20px;
          border-bottom: 1px solid #bbb;
        }

        .secondary-story:last-child {
          border-bottom: none;
        }

        .secondary-story h3 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 24px;
          line-height: 1.15;
          margin: 8px 0;
        }

        .section-title {
          margin: 42px 0 22px;
          padding: 10px 0;
          border-top: 4px solid #111;
          border-bottom: 1px solid #111;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 30px;
        }

        .alerts-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .alert-card {
          border-bottom: 2px solid #111;
          padding-bottom: 20px;
        }

        .alert-image {
          height: 210px;
        }

        .alert-card h3 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 25px;
          line-height: 1.15;
          margin: 12px 0;
        }

        .news-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          border-top: 1px solid #aaa;
        }

        .news-card {
          padding: 24px;
          border-right: 1px solid #bbb;
          border-bottom: 1px solid #bbb;
        }

        .news-card:nth-child(3n) {
          border-right: none;
        }

        .news-card h3 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 25px;
          line-height: 1.15;
          margin: 10px 0;
        }

        .digest {
          padding: 30px;
          background: #f3f0e8;
          border-top: 4px solid #111;
          border-bottom: 4px solid #111;
        }

        .digest h3 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 30px;
          margin-top: 0;
        }

        .footer {
          margin-top: 50px;
          padding: 35px 20px;
          background: #111;
          color: #ccc;
          text-align: center;
        }

        @media (max-width: 900px) {
          .top-grid {
            grid-template-columns: 1fr;
          }

          .hero {
            border-right: none;
            padding-right: 0;
          }

          .alerts-grid,
          .news-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .news-card:nth-child(3n) {
            border-right: 1px solid #bbb;
          }

          .datebar {
            flex-direction: column;
            gap: 4px;
          }
        }

        @media (max-width: 600px) {
          .content {
            padding: 16px;
          }

          .alerts-grid,
          .news-grid {
            grid-template-columns: 1fr;
          }

          .news-card {
            padding: 20px 0;
            border-right: none !important;
          }

          .hero-image {
            height: 260px;
          }

          .brand {
            letter-spacing: -2px;
          }
        }
      `}</style>

      <main className="page">
        <Navbar />

        <header className="masthead">
          <h1 className="brand">Breaking News AI</h1>

          <p className="tagline">
            Intelligence • News • Analysis • Powered by AI
          </p>
        </header>

        <div className="datebar">
          <span>
            {new Intl.DateTimeFormat("en-IN", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            }).format(new Date())}
          </span>

          <span>Co-powered by Sprint Solutions</span>
        </div>

        {breakingAlerts[0] && (
          <div className="breaking-strip">
            <div className="breaking-label">
              BREAKING
            </div>

            <div className="breaking-text">
              {breakingAlerts[0].title}
            </div>
          </div>
        )}

        <div className="content">
          {hero && (
            <section className="top-grid">
              <article className="hero">
                {hero.image_url ? (
                  <img
                    className="hero-image"
                    src={hero.image_url}
                    alt={hero.title}
                  />
                ) : (
                  <div className="hero-placeholder">
                    {categoryIcon(hero.category)}
                  </div>
                )}

                <span className="category">
                  {categoryIcon(hero.category)}{" "}
                  {hero.category || "Latest"}
                </span>

                <h2>{hero.title}</h2>

                <div className="meta">
                  By {hero.source || "Breaking News AI"}
                  {" • "}
                  {formatDate(hero.published || hero.created_at)}
                </div>

                <p className="summary">
                  {truncate(hero.summary, 400)}
                </p>

                <a
                  className="read-link"
                  href={hero.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Full Story at {hero.source || "Source"} →
                </a>
              </article>

              <aside>
                {secondaryStories.map((article: any) => (
                  <article
                    className="secondary-story"
                    key={article.id}
                  >
                    <span className="category">
                      {categoryIcon(article.category)}{" "}
                      {article.category || "News"}
                    </span>

                    <h3>{article.title}</h3>

                    <div className="meta">
                      {article.source} •{" "}
                      {formatDate(
                        article.published ||
                        article.created_at
                      )}
                    </div>

                    <p>
                      {truncate(article.summary, 120)}
                    </p>

                    <a
                      className="read-link"
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read Full Story →
                    </a>
                  </article>
                ))}
              </aside>
            </section>
          )}

          {breakingAlerts.length > 0 && (
            <>
              <h2 className="section-title">
                Breaking Alerts
              </h2>

              <section className="alerts-grid">
                {breakingAlerts.map((alert: any) => (
                  <article
                    className="alert-card"
                    key={alert.id}
                  >
                    {alert.image_url && (
                      <img
                        className="alert-image"
                        src={alert.image_url}
                        alt={alert.title}
                      />
                    )}

                    <span className="category">
                      {alert.category || "Breaking"}
                    </span>

                    <h3>{alert.title}</h3>

                    <div className="meta">
                      {formatDate(alert.created_at)}
                    </div>

                    <p className="summary">
                      {truncate(alert.summary, 170)}
                    </p>

                    <a
                      className="read-link"
                      href={`/alert/${alert.id}`}
                    >
                      Full Analysis →
                    </a>
                  </article>
                ))}
              </section>
            </>
          )}

          <h2 className="section-title">
            Latest News
          </h2>

          <section className="news-grid">
            {moreStories.map((article: any) => (
              <article
                className="news-card"
                key={article.id}
              >
                <span className="category">
                  {categoryIcon(article.category)}{" "}
                  {article.category || "News"}
                </span>

                <h3>{article.title}</h3>

                <div className="meta">
                  {article.source}
                  {" • "}
                  {formatDate(
                    article.published ||
                    article.created_at
                  )}
                </div>

                <p className="summary">
                  {truncate(article.summary, 190)}
                </p>

                <a
                  className="read-link"
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Full Story →
                </a>
              </article>
            ))}
          </section>

          {digest && digest.length > 0 && (
            <>
              <h2 className="section-title">
                AI Daily Briefing
              </h2>

              {digest.map((item: any) => (
                <section
                  className="digest"
                  key={item.id}
                >
                  <h3>
                    {item.title || "Today's Intelligence Brief"}
                  </h3>

                  <div
                    style={{
                      whiteSpace: "pre-wrap",
                      lineHeight: "1.8",
                    }}
                  >
                    {item.digest_text}
                  </div>
                </section>
              ))}
            </>
          )}
        </div>

        <footer className="footer">
          <strong>Breaking News AI</strong>

          <p>
            AI-powered global news intelligence
          </p>

          <small>
            © 2026 Breaking News AI • Co-powered by Sprint Solutions
          </small>
        </footer>
      </main>
    </>
  );
}
