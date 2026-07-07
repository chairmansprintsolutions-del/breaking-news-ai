import Navbar from "../components/Navbar";

const endpoints = [
  {
    method: "GET",
    endpoint: "/api/articles",
    description: "Latest articles",
  },
  {
    method: "GET",
    endpoint: "/api/breaking",
    description: "Breaking alerts",
  },
  {
    method: "GET",
    endpoint: "/api/trending",
    description: "Trending stories",
  },
  {
    method: "GET",
    endpoint: "/api/digest",
    description: "Daily digest",
  },
  {
    method: "GET",
    endpoint: "/api/categories",
    description: "Categories",
  },
  {
    method: "GET",
    endpoint: "/api/search?q=ai",
    description: "Search news",
  },
  {
    method: "GET",
    endpoint: "/api/article/{id}",
    description: "Single article",
  },
  {
    method: "GET",
    endpoint: "/api/status",
    description: "Platform status",
  },
];

export default function APIPage() {
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

      <h1>🔌 Developer API</h1>

      <p>
        Public API for Breaking News AI.
      </p>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "30px",
        }}
      >
        <thead>
          <tr
            style={{
              background: "#2563eb",
              color: "#fff",
            }}
          >
            <th style={{ padding: "15px" }}>Method</th>
            <th>Endpoint</th>
            <th>Description</th>
          </tr>
        </thead>

        <tbody>
          {endpoints.map((api) => (
            <tr
              key={api.endpoint}
              style={{
                borderBottom: "1px solid #ddd",
              }}
            >
              <td style={{ padding: "15px" }}>
                {api.method}
              </td>

              <td>
                <code>{api.endpoint}</code>
              </td>

              <td>{api.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{ marginTop: "50px" }}>
        Example
      </h2>

      <pre
        style={{
          background: "#111827",
          color: "#22c55e",
          padding: "20px",
          borderRadius: "10px",
          overflow: "auto",
        }}
      >{`GET /api/articles

Response

[
  {
    "id":1,
    "title":"...",
    "summary":"...",
    "source":"BBC"
  }
]`}</pre>
    </main>
  );
}
