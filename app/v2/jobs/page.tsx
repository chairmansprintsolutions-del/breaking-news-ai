import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function JobsPage() {

  const { data } = await supabase
    .from("jobs")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  return (

    <main className="container">

      <Navbar />

      <h1 className="section-title">
        💼 Jobs Today
      </h1>

      <div className="jobs-grid">

        {(data || []).map((job: any)=>(

          <article
            key={job.id}
            className="job-card card"
          >

            <div className="job-type">
              {job.category}
            </div>

            <h2>
              {job.title}
            </h2>

            <p>
              {job.company}
            </p>

            <p>
              📍 {job.location}
            </p>

            <p>
              💰 {job.salary}
            </p>

            <a
              href={job.apply_url}
              target="_blank"
              className="story-read"
            >
              Apply Now →
            </a>

          </article>

        ))}

      </div>

    </main>

  );

}
