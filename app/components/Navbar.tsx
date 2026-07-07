export default function Navbar() {
  return (
    <nav
      style={{
        background: "#111827",
        padding: "16px 30px",
        marginBottom: "30px",
        borderRadius: "12px",
        display: "flex",
        gap: "25px",
        flexWrap: "wrap",
      }}
    >
      <a href="/" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>
        🏠 Home
      </a>

      <a href="/latest" style={{ color: "#fff", textDecoration: "none" }}>
        🌍 Latest
      </a>

      <a href="/world" style={{ color: "#fff", textDecoration: "none" }}>
        🌎 World
      </a>

      <a href="/india" style={{ color: "#fff", textDecoration: "none" }}>
        🇮🇳 India
      </a>

      <a href="/technology" style={{ color: "#fff", textDecoration: "none" }}>
        💻 Technology
      </a>

      <a href="/markets" style={{ color: "#fff", textDecoration: "none" }}>
        📈 Markets
      </a>

      <a href="/business" style={{ color: "#fff", textDecoration: "none" }}>
        💼 Business
      </a>
    </nav>
  );
}
