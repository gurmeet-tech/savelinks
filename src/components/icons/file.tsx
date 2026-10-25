export function FileIcon({ className = "" }: { className?: string }) {
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
        transform="translate(4 2)"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M0 16C0 18.21 1.79 20 4 20L12 20C14.21 20 16 18.21 16 16L16 8C16 3.58 12.42 0 8 0L4 0C1.79 0 0 1.79 0 4L0 16Z"
      />
      <path
        transform="translate(4 2)"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 9C16 7.34 14.66 6 13 6L12.4 6C12.03 6 11.84 6 11.69 5.98C10.83 5.84 10.16 5.17 10.02 4.31C10 4.16 10 3.97 10 3.6L10 3C10 1.34 8.66 0 7 0"
      />
    </svg>
  );
}
