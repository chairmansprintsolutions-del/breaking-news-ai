export default function Navbar() {
  const links = [
    { name: "🏠 Home", href: "/" },
    { name: "🚨 Breaking", href: "/breaking" },
    { name: "🔴 Live", href: "/live" },
    { name: "📰 Headlines", href: "/headlines" },
    { name: "🔥 Trending", href: "/trending" },
    { name: "📈 Trends", href: "/trends" },
    { name: "🌍 Discover", href: "/discover" },
    { name: "🕒 Timeline", href: "/timeline" },
    { name: "📡 Pulse", href: "/pulse" },
    { name: "🌎 Earth", href: "/earth" },
    { name: "🗺 News Map", href: "/news-map" },
    { name: "📡 Radar", href: "/ai-radar" },
    { name: "📊 Dashboard", href: "/dashboard" },
    { name: "📊 Analytics", href: "/analytics" },
    { name: "📺 News TV", href: "/newsroom-tv" },
    { name: "📺 Watch", href: "/watch" },
    { name: "🎙 AI Anchor", href: "/ai-anchor" },
    { name: "🎤 AI Reporter", href: "/ai-reporter" },
    { name: "🎧 Podcast", href: "/podcast" },
    { name: "🤖 AI Studio", href: "/ai-studio" },
    { name: "🤖 AI Assistant", href: "/ai-assistant" },
    { name: "💬 AI Chat", href: "/chat" },
    { name: "🚀 Copilot", href: "/copilot" },
    { name: "🧠 Insights", href: "/insights" },
    { name: "📝 Executive Brief", href: "/ai-briefing" },
    { name: "🔮 Forecast", href: "/forecast" },
    { name: "⚖ Compare", href: "/compare" },
    { name: "✅ Fact Check", href: "/fact-check" },
    { name: "🧪 News Lab", href: "/news-lab" },
    { name: "📰 Newsroom", href: "/newsroom" },
    { name: "🛰 Intelligence", href: "/intelligence" },
    { name: "🌐 Situation Room", href: "/situation-room" },
    { name: "🛰 Mission Control", href: "/mission-control" },
    { name: "🚀 Command Center", href: "/command-center" },
    { name: "🎯 Control Room", href: "/control-room" },
    { name: "⚔ War Room", href: "/war-room" },
    { name: "📡 Monitor", href: "/monitor" },
    { name: "🖥 Terminal", href: "/news-terminal" },
    { name: "⚙ Admin", href: "/admin" },
    { name: "📜 Logs", href: "/logs" },
    { name: "⚙ Workflows", href: "/workflows" },
    { name: "❤️ Health", href: "/health" },
    { name: "🚦 Status", href: "/status" },
    { name: "⚙ Settings", href: "/settings" },
    { name: "🔌 API", href: "/api" },
    { name: "🔍 Search", href: "/search" },
    { name: "ℹ About", href: "/about" },
    { name: "✉ Contact", href: "/contact" },
  ];

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "#111827",
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        gap: "18px",
        overflowX: "auto",
        whiteSpace: "nowrap",
        boxShadow: "0 2px 10px rgba(0,0,0,.15)",
      }}
    >
      <a
        href="/"
        style={{
          color: "#fff",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "22px",
          marginRight: "25px",
          flexShrink: 0,
        }}
      >
        🚨 Breaking News AI
      </a>

      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          style={{
            color: "#e5e7eb",
            textDecoration: "none",
            padding: "8px 12px",
            borderRadius: "8px",
            background: "#1f2937",
            fontSize: "14px",
            flexShrink: 0,
          }}
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
}
