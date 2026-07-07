export default function Navbar() {
  return (
    <nav
      style={{
        background: "#111827",
        padding: "18px 30px",
        marginBottom: "30px",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        gap: "25px",
        flexWrap: "wrap",
      }}
    >
      <a
        href="/"
        style={{
          color: "#ffffff",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        🚨 Breaking News AI
      </a>

      <a
        href="/"
        style={{
          color: "#ffffff",
          textDecoration: "none",
        }}
      >
        🏠 Home
      </a>

      <a
        href="/latest"
        style={{
          color: "#ffffff",
          textDecoration: "none",
        }}
      >
        🌍 Latest
      </a>

      <a
        href="/world"
        style={{
          color: "#ffffff",
          textDecoration: "none",
        }}
      >
        🌎 World
      </a>

      <a
        href="/india"
        style={{
          color: "#ffffff",
          textDecoration: "none",
        }}
      >
        🇮🇳 India
      </a>

      <a
        href="/technology"
        style={{
          color: "#ffffff",
          textDecoration: "none",
        }}
      >
        💻 Technology
      </a>

      <a
        href="/markets"
        style={{
          color: "#ffffff",
          textDecoration: "none",
        }}
      >
        📈 Markets
      </a>

      <a
        href="/business"
        style={{
          color: "#ffffff",
          textDecoration: "none",
        }}
      >
        💼 Business
      </a>

      <a
        href="/search"
        style={{
          color: "#ffffff",
          textDecoration: "none",
        }}
      >
        🔍 Search
      </a>

      <a
        href="/about"
        style={{
          color: "#ffffff",
          textDecoration: "none",
        }}
      >
        ℹ️ About
      </a>
    </nav>
  );
}
