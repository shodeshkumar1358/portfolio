export default function ArrowIcon({ diagonal = false }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
      <path d="M4 12 12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
      <path
        d="M2.5 8h11m-4.5-4.5L13.5 8 9 12.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
