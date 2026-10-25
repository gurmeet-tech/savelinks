export function DeleteIcon({ className = "" }: { className?: string }) {
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
        d="M2 4L14 4L14 13C14 14.86 14 15.8 13.7 16.53C13.29 17.51 12.51 18.29 11.53 18.7C10.8 19 9.86 19 8 19C6.14 19 5.2 19 4.47 18.7C3.49 18.29 2.71 17.51 2.3 16.53C2 15.8 2 14.86 2 13L2 4Z"
      />
      <path
        transform="translate(4 2)"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4L10.89 1.79C10.35 0.69 9.23 0 8 0C6.77 0 5.65 0.69 5.11 1.79L4 4M0 4L16 4"
      />
    </svg>
  );
}
