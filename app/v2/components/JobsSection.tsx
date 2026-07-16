import Link from "next/link";
import { supabase } from "../../../lib/supabase";

export default async function JobsSection() {
  const { data } = await supabase
    .from("jobs")
    .select("*")
    .order("created_at", {
      ascending: false,
    })
    .limit(6);

  return (
    <section className="jobs-section">

      <div className="section-header">

        <h2 className="section-title">
          💼 Jobs Today
        </h2>

        <Link href="/v2/jobs">
          View All →
        </Link>

      </div>

      <div className="jobs-grid">

        {(data || []).map((job: any) => (

          <article
            key={job.id}
            className="job-card card"
          >

            <div className="job-type">
              {job.category || "Job"}
            </div>

            <h3>
              {job.title}
            </h3>

            <p className="company">
              {job.company}
            </p>

            <p>
              📍 {job.location}
            </p>

            <p>
              💰 {job.salary || "Salary Not Disclosed"}
            </p>

            <a
              href={job.apply_url}
              target="_blank"
              className="story-read"
            >
              Apply →
            </a>

          </article>

        ))}

      </div>

    </section>
  );
}
