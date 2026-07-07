export default function SearchPage() {
  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <h1>🔍 Search News</h1>

      <input
        type="text"
        placeholder="Search Breaking News AI..."
        style={{
          width: "100%",
          padding: "15px",
          fontSize: "18px",
          borderRadius: "10px",
          border: "1px solid #ccc",
          marginTop: "20px",
        }}
      />

      <p style={{ marginTop: "30px", color: "#666" }}>
        Search functionality coming next.
      </p>
    </main>
  );
}
