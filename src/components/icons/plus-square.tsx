export function PlusSquareIcon({ className = "" }: { className?: string }) {
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
        transform="translate(3 3)"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12L9 9M9 9L9 6M9 9L6 9M9 9L12 9M9 18C6.2 18 4.81 18 3.7 17.54C2.23 16.93 1.07 15.77 0.46 14.3C0 13.19 0 11.8 0 9C0 6.2 0 4.81 0.46 3.7C1.07 2.23 2.23 1.07 3.7 0.46C4.81 0 6.2 0 9 0C11.8 0 13.19 0 14.3 0.46C15.77 1.07 16.93 2.23 17.54 3.7C18 4.81 18 6.2 18 9C18 11.8 18 13.19 17.54 14.3C16.93 15.77 15.77 16.93 14.3 17.54C13.19 18 11.8 18 9 18Z"
      />
    </svg>
  );
}
