import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function NewsMap() {
  const { data: articles } = await supabase
    .from("articles")
    .select("*")
    .order("importance_score", { ascending: false })
    .limit(50);

  const countries = [
    "India",
    "USA",
    "China",
    "Russia",
    "Ukraine",
    "Israel",
    "Iran",
    "UK",
    "France",
    "Germany",
    "Japan",
    "South Korea",
  ];

  return (
    <main
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <Navbar />

      <h1>🌍 AI World News Map</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "30px",
        }}
      >
        <div
          style={{
            height: "700px",
            background: "#eef5ff",
            borderRadius: "12px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "36px",
            fontWeight: "bold",
          }}
        >
          🗺 Interactive World Map (Coming Soon)
        </div>

        <div>
          {countries.map((country) => {
            const count =
              articles?.filter((a: any) =>
                (a.title + " " + a.summary)
                  .toLowerCase()
                  .includes(country.toLowerCase())
              ).length || 0;

            return (
              <div
                key={country}
                style={{
                  background: "#fff",
                  padding: "18px",
                  marginBottom: "15px",
                  borderRadius: "10px",
                  boxShadow: "0 2px 8px rgba(0,0,0,.08)",
                }}
              >
                <h3>{country}</h3>
                <p>{count} related articles</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
