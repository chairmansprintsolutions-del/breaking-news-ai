import Navbar from "../components/Navbar";

export default function Workflows() {
  const workflows = [
    {
      name: "RSS Collector",
      status: "🟢 Running",
      schedule: "Every 10 minutes",
    },
    {
      name: "AI Summarizer",
      status: "🟢 Running",
      schedule: "After Collection",
    },
    {
      name: "Breaking Alerts",
      status: "🟢 Running",
      schedule: "Hourly",
    },
    {
      name: "Daily Digest",
      status: "🟢 Running",
      schedule: "08:00 Daily",
    },
    {
      name: "Image Generator",
      status: "🟢 Running",
      schedule: "After Alerts",
    },
    {
      name: "Website Deploy",
      status: "🟢 Active",
      schedule: "On Push",
    },
    {
      name: "GitHub Actions",
      status: "🟢 Active",
      schedule: "Cron",
    },
    {
      name: "Supabase",
      status: "🟢 Online",
      schedule: "24/7",
    },
    {
      name: "Vercel",
      status: "🟢 Online",
      schedule: "24/7",
    },
    {
      name: "Gemini AI",
      status: "🟢 Connected",
      schedule: "On Demand",
    },
  ];

  return (
    <main
      style={{
        maxWidth: "1300px",
        margin: "0 auto",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <Navbar />

      <h1>⚙️ Workflow Monitor</h1>

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
            <th style={{ padding: "15px" }}>Workflow</th>
            <th>Status</th>
            <th>Schedule</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {workflows.map((workflow) => (
            <tr
              key={workflow.name}
              style={{
                borderBottom: "1px solid #ddd",
              }}
            >
              <td style={{ padding: "15px" }}>{workflow.name}</td>

              <td>{workflow.status}</td>

              <td>{workflow.schedule}</td>

              <td>
                <button
                  style={{
                    background: "#2563eb",
                    color: "#fff",
                    border: "none",
                    padding: "8px 16px",
                    borderRadius: "6px",
                  }}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
