export default function EditionHeader() {
  const today = new Date();

  const date = today.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const edition =
    Math.floor(
      (today.getTime() - new Date("2026-01-01").getTime()) /
        86400000
    ) + 1;

  return (
    <section className="edition-header">

      <div className="container edition-grid">

        <div>

          <div className="edition-no">
            EDITION #{edition}
          </div>

          <h1 className="paper-title">
            BREAKING NEWS AI
          </h1>

          <p className="paper-tag">
            The World's First AI Newspaper
          </p>

        </div>

        <div className="edition-right">

          <div className="edition-date">
            {date}
          </div>

          <div className="edition-read">
            Estimated Reading Time
            <strong> 12 Minutes</strong>
          </div>

        </div>

      </div>

    </section>
  );
}
