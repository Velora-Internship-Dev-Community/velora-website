interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-7 w-[23px]" }: LogoProps) {
  return (
    <svg viewBox="0 0 1540 1853" fill="none" className={className} aria-hidden="true">
      <rect y="520.519" width="482.659" height="1169.59" fill="currentColor" />
      <path
        d="M1055.81 161.475L1540 161.475L953.765 1691.13L471.417 1691.13L1055.81 161.475Z"
        fill="currentColor"
      />
    </svg>
  );
}
