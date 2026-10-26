import { portfolio } from "@/data/portfolio";
import ArrowIcon from "@/components/ui/ArrowIcon";
import SectionLabel from "@/components/ui/SectionLabel";

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="page-wrap about-grid">
        <div className="about-aside">
          <SectionLabel number="02">About me</SectionLabel>
          <div className="about-illustration" aria-hidden="true">
            <div className="about-illustration__orbit">
              <span className="about-illustration__spark">✦</span>
              <div className="about-illustration__window">
                <div className="about-illustration__top">
                  <i />
                  <i />
                  <i />
                  <span>developer.js</span>
                </div>
                <div className="about-illustration__body">
                  <span className="about-illustration__avatar">SK</span>
                  <span className="about-illustration__line about-illustration__line--long" />
                  <span className="about-illustration__line" />
                  <span className="about-illustration__code">
                    &lt;build /&gt;
                  </span>
                </div>
              </div>
              <span className="about-illustration__badge">LEARN · BUILD · GROW</span>
            </div>
          </div>
        </div>
        <div className="about-content">
          <div className="about-copy">
            <h2>
              Building modern
              <br />
              <span>web experiences.</span>
            </h2>
            <p>
              I&apos;m {portfolio.name}, a web developer based in{" "}
              {portfolio.location}, focused on building modern web
              applications with JavaScript technologies.
            </p>
            <p>
              I work with React.js and Next.js to create responsive interfaces,
              and use Node.js, Express.js, and MongoDB to develop full-stack
              applications. My development journey centers on practical
              projects, organized code, API integration, and applications that
              are easy to use and maintain.
            </p>
            <p>
              I&apos;m looking for an opportunity to contribute to a
              development team, strengthen my technical skills, and grow as a
              professional web developer.
            </p>
          </div>
          <div className="principle-grid">
            {portfolio.aboutHighlights.map((highlight, index) => (
              <article className="principle-card" key={highlight}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{highlight}</h3>
              </article>
            ))}
          </div>
          <a className="text-link about-link" href="#contact">
            Let&apos;s work together <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
