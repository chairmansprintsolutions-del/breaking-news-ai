export default function MarketStrip() {
  const items = [
    {
      name: "NIFTY",
      value: "--",
      change: "+0.00%",
      up: true,
    },
    {
      name: "SENSEX",
      value: "--",
      change: "+0.00%",
      up: true,
    },
    {
      name: "GOLD",
      value: "--",
      change: "-0.00%",
      up: false,
    },
    {
      name: "USD/INR",
      value: "--",
      change: "+0.00%",
      up: true,
    },
    {
      name: "BITCOIN",
      value: "--",
      change: "+0.00%",
      up: true,
    },
    {
      name: "CRUDE",
      value: "--",
      change: "-0.00%",
      up: false,
    },
  ];

  return (
    <section className="market-strip fade">

      <div className="container market-grid">

        {items.map((item) => (

          <div
            key={item.name}
            className="market-card"
          >

            <div className="market-name">
              {item.name}
            </div>

            <div className="market-value">
              {item.value}
            </div>

            <div
              className={
                item.up
                  ? "market-change up"
                  : "market-change down"
              }
            >
              {item.change}
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}
