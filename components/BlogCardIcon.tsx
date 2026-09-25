export default function BlogCardIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a4 4 0 0 1-5.3 5.3L4 17v3h3l5.4-5.4a4 4 0 0 1 5.3-5.3l-2.65 2.65a1 1 0 0 1-1.4 0l-1.35-1.35a1 1 0 0 1 0-1.4Z" />
    </svg>
  );
}
