import Navbar from "../components/Navbar";

export default function Settings() {
  const settings = [
    "Auto Refresh",
    "Breaking Notifications",
    "AI Images",
    "AI Explain",
    "Daily Digest",
    "Dark Mode",
    "Compact View",
    "Infinite Scroll",
    "Trending Alerts",
    "Email Newsletter",
    "Desktop Notifications",
    "Sound Alerts",
    "Live Updates",
    "AI Podcast",
    "AI Video",
    "Weather Widget",
    "Stock Widget",
    "Crypto Widget",
    "Sports Widget",
    "Translate Articles",
  ];

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <Navbar />

      <h1>⚙️ Settings</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {settings.map((setting) => (
          <div
            key={setting}
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,.08)",
            }}
          >
            <strong>{setting}</strong>

            <label
              style={{
                position: "relative",
                display: "inline-block",
                width: "50px",
                height: "26px",
              }}
            >
              <input
                type="checkbox"
                defaultChecked
                style={{
                  width: "20px",
                  height: "20px",
                }}
              />
            </label>
          </div>
        ))}
      </div>
    </main>
  );
}
