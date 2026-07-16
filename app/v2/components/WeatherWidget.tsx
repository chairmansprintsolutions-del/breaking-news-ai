export default function WeatherWidget() {
  const cities = [
    {
      city: "Hyderabad",
      temp: "29°",
      emoji: "☀️",
      desc: "Sunny",
    },
    {
      city: "Delhi",
      temp: "34°",
      emoji: "🌤️",
      desc: "Hot",
    },
    {
      city: "Mumbai",
      temp: "28°",
      emoji: "🌧️",
      desc: "Rain",
    },
    {
      city: "Chennai",
      temp: "31°",
      emoji: "⛅",
      desc: "Cloudy",
    },
  ];

  return (
    <section className="weather-widget card fade">

      <div className="weather-header">

        <h3>🌦 Weather</h3>

        <span>Live</span>

      </div>

      <div className="weather-list">

        {cities.map((item) => (

          <div
            className="weather-row"
            key={item.city}
          >

            <div>

              <strong>
                {item.city}
              </strong>

              <div className="weather-desc">
                {item.desc}
              </div>

            </div>

            <div className="weather-right">

              <div className="weather-icon">
                {item.emoji}
              </div>

              <div className="weather-temp">
                {item.temp}
              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}
