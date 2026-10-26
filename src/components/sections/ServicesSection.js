import { services } from "@/data/portfolio";
import SectionLabel from "@/components/ui/SectionLabel";

export default function ServicesSection() {
  return (
    <section className="services-section page-wrap" id="services">
      <div className="section-heading">
        <SectionLabel number="03">What I do</SectionLabel>
        <p>Web development across the frontend, backend, and database.</p>
      </div>
      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <span>{service.number}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
