export default function LiveTV() {
  const channels = [
    {
      name: "BBC News",
      url: "https://www.youtube.com/@BBCNews/live",
      color: "#c30010",
    },
    {
      name: "Reuters",
      url: "https://www.youtube.com/@Reuters/live",
      color: "#111",
    },
    {
      name: "DW News",
      url: "https://www.youtube.com/@dwnews/live",
      color: "#005BBB",
    },
    {
      name: "France 24",
      url: "https://www.youtube.com/@FRANCE24English/live",
      color: "#0055ff",
    },
  ];

  return (
    <section className="livetv card fade">

      <div className="livetv-header">

        <h3>📺 Live TV</h3>

        <span>LIVE</span>

      </div>

      <div className="livetv-list">

        {channels.map((item) => (

          <a
            key={item.name}
            href={item.url}
            target="_blank"
            className="tv-row"
          >

            <div
              className="tv-dot"
              style={{
                background: item.color,
              }}
            />

            <strong>
              {item.name}
            </strong>

            <span>
              Watch →
            </span>

          </a>

        ))}

      </div>

    </section>
  );
}
