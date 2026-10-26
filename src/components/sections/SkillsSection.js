import { skillGroups } from "@/data/portfolio";
import SectionLabel from "@/components/ui/SectionLabel";

export default function SkillsSection() {
  return (
    <section className="skills-section page-wrap" id="skills">
      <div className="section-heading">
        <SectionLabel number="04">Technical skills</SectionLabel>
        <p>A practical toolkit for building across the stack.</p>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.number}>
            <span className="skill-group__number">{group.number}</span>
            <h3>{group.title}</h3>
            <ul className="skill-list">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="skills-note">
        List only skills and concepts you can confidently demonstrate and
        explain in a technical interview.
      </p>
    </section>
  );
}
