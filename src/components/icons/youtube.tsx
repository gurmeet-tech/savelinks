export function YoutubeIcon({ className = "" }: { className?: string }) {
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
        transform="translate(2 4)"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M0 8C0 5.2 0 3.8 0.54 2.73C1.02 1.79 1.79 1.02 2.73 0.54C3.8 0 5.2 0 8 0L12 0C14.8 0 16.2 0 17.27 0.54C18.21 1.02 18.98 1.79 19.46 2.73C20 3.8 20 5.2 20 8C20 10.8 20 12.2 19.46 13.27C18.98 14.21 18.21 14.98 17.27 15.46C16.2 16 14.8 16 12 16L8 16C5.2 16 3.8 16 2.73 15.46C1.79 14.98 1.02 14.21 0.54 13.27C0 12.2 0 10.8 0 8Z"
      />
      <path
        transform="translate(2 4)"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.98 7.13C13.65 7.52 13.65 8.48 12.98 8.87L9 11.15C8.33 11.53 7.5 11.04 7.5 10.28L7.5 5.72C7.5 4.96 8.33 4.47 9 4.85L12.98 7.13Z"
      />
    </svg>
  );
}
