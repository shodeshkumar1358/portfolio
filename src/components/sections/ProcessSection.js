import { projectDetails } from "@/data/portfolio";
import SectionLabel from "@/components/ui/SectionLabel";

export default function ProcessSection() {
  return (
    <section className="process-section page-wrap" id="process">
      <div className="section-heading">
        <SectionLabel number="06">How I build</SectionLabel>
        <p>A practical process, from understanding the problem to polishing the result.</p>
      </div>
      <p className="process-intro">{projectDetails.overview}</p>
      <div className="process-grid">
        {projectDetails.developmentProcess.map((step, index) => (
          <article className="process-card" key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{step}</p>
          </article>
        ))}
      </div>
      <p className="process-note">{projectDetails.note}</p>
    </section>
  );
}
