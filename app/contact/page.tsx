import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "30px",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <Navbar />

      <h1>Contact Us</h1>

      <p>
        We'd love to hear your feedback, suggestions, or partnership enquiries.
      </p>

      <div
        style={{
          background: "#fff",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          marginTop: "30px",
        }}
      >
        <h2>Email</h2>

        <p>
          📧 support.sprintsolutions@gmail.com
        </p>

        <h2>Website</h2>

        <p>
          🌐 Breaking News AI
        </p>

        <h2>Business</h2>

        <p>
          Sprint Solutions
        </p>

        <h2>Support</h2>

        <p>
          We usually respond within 24 hours.
        </p>
      </div>

      <p
        style={{
          marginTop: "40px",
          color: "#666",
        }}
      >
        © 2026 Breaking News AI • Co-powered by Sprint Solutions
      </p>
    </main>
  );
}
