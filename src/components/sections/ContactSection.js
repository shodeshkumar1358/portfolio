import { portfolio } from "@/data/portfolio";
import ArrowIcon from "@/components/ui/ArrowIcon";
import SectionLabel from "@/components/ui/SectionLabel";

export default function ContactSection() {
  return (
    <section className="contact-section page-wrap" id="contact">
      <SectionLabel number="07">Contact me</SectionLabel>
      <div className="contact-main">
        <h2>
          Let&apos;s
          <br />
          <span>connect.</span>
        </h2>
        <div className="contact-action">
          <p>{portfolio.contactDescription}</p>
          {portfolio.email ? (
            <a className="contact-button" href={`mailto:${portfolio.email}`}>
              Get in touch <ArrowIcon diagonal />
            </a>
          ) : (
            <span className="contact-placeholder">
              Professional email to add
            </span>
          )}
          <div className="contact-socials">
            {portfolio.socialLinks.map((link) => (
              <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
                {link.label} <ArrowIcon diagonal />
              </a>
            ))}
            <span>LinkedIn profile URL to add</span>
          </div>
          <span className="contact-email">Based in {portfolio.location}</span>
        </div>
      </div>
      <div className="career-goal">
        <span>CAREER GOAL</span>
        <p>{portfolio.goal}</p>
      </div>
    </section>
  );
}
