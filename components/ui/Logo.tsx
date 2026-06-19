type Props = {
  className?: string;
};

export default function Logo({ className }: Props) {
  return (
    <svg
      className={className}
      viewBox="76 34 163 152"
      role="img"
      aria-labelledby="cs-logo-title"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="cs-logo-title">CineSurf logo</title>
      <path d="M186 59 A62 62 0 1 0 186 161" stroke="currentColor" strokeWidth="24" strokeLinecap="round" fill="none" />
      <path
        d="M128 110 C140 78 164 78 176 110 C188 142 212 142 224 110"
        stroke="currentColor"
        strokeWidth="24"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
