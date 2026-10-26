import { portfolio } from "@/data/portfolio";
import ArrowIcon from "@/components/ui/ArrowIcon";

export default function HeroSection() {
  return (
    <section className="hero page-wrap" id="home">
      <div className="hero__topline">
        <span className="availability">
          <i /> <span className="availability__sparkle">✦</span>{" "}
          {portfolio.availability}
        </span>
        <span className="hero__location">{portfolio.location}</span>
      </div>
      <p className="hero__specialty">{portfolio.specialty}</p>
      <h1 className="hero__name">
        Hi, I&apos;m
        <br />
        <span>{portfolio.name}.</span>
      </h1>
      <div className="hero__bottom">
        <div>
          <p className="hero__role">{portfolio.role}</p>
          <p>{portfolio.intro}</p>
          <p className="hero__supporting-copy">
            I&apos;m continuously improving by building practical projects,
            learning new technologies, and solving real-world problems.
          </p>
          <div className="hero__actions">
            <a className="contact-button hero__primary" href="#work">
              Projects <ArrowIcon diagonal />
            </a>
            <a
              className="contact-button hero__secondary"
              href="/Shodesh-Kumar-Resume.pdf"
              download
            >
              Download resume <ArrowIcon diagonal />
            </a>
            <a className="contact-button hero__secondary" href="#contact">
              Contact <ArrowIcon diagonal />
            </a>
          </div>
        </div>
      </div>
      <div className="hero__index" aria-hidden="true">
        <span>IDEAS</span>
        <span>+</span>
        <span>CODE</span>
      </div>
    </section>
  );
}
