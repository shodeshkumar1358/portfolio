export default function SectionLabel({ number, children }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span className="section-label__rule" />
      <span>{children}</span>
    </div>
  );
}
