import { portfolio } from "@/data/portfolio";
import ArrowIcon from "@/components/ui/ArrowIcon";

export default function SiteFooter() {
  return (
    <footer className="site-footer page-wrap">
      <a className="wordmark" href="#home" aria-label="Back to top">
        <span className="wordmark__mark">
          <span>{portfolio.initials}</span>
          <i aria-hidden="true">✦</i>
        </span>
        <span>{portfolio.name}</span>
      </a>
      <span className="footer-note">
        Building modern web applications through practice and continuous learning.
      </span>
      <div className="footer-links">
        {portfolio.socialLinks.map((link) => (
          <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
            {link.label} <ArrowIcon diagonal />
          </a>
        ))}
      </div>
      <span className="copyright">
        © {new Date().getFullYear()} {portfolio.name}
      </span>
    </footer>
  );
}
