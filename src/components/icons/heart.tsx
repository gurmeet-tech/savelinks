export function HeartIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        transform="translate(2 3)"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 18C11 18 20 12.98 20 5.94C20 0.51 13.16 -2.34 10 2.43C6.83 -2.35 0 0.5 0 5.94C0 12.98 9 18 10 18Z"
      />
    </svg>
  );
}
