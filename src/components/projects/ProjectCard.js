import ArrowIcon from "@/components/ui/ArrowIcon";
import ProjectArtwork from "@/components/projects/ProjectArtwork";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <ProjectArtwork project={project} />
      <div className="project-info">
        <div className="project-info__main">
          <span className="project-meta">
            {project.category} <span>·</span> {project.status}
          </span>
          <h3>{project.fullName}</h3>
          <p>{project.description}</p>
          <p className="project-note">
            {project.contribution ||
              "Personal contribution details to be added."}
          </p>
          <ul className="tag-list" aria-label="Project services">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          {project.features?.length > 0 && (
            <ul
              className="project-features"
              aria-label={project.featureLabel || "Project features"}
            >
              <li className="project-features__label">
                {project.featureLabel || "Project features"}
              </li>
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          )}
          <div className="project-actions">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                Live demo <ArrowIcon diagonal />
              </a>
            )}
            {project.repositoryUrl && (
              <a href={project.repositoryUrl} target="_blank" rel="noreferrer">
                GitHub <ArrowIcon diagonal />
              </a>
            )}
          </div>
        </div>
        <a className="project-link" href="#contact" aria-label={`Ask about ${project.name}`}>
          <ArrowIcon diagonal />
        </a>
      </div>
    </article>
  );
}
