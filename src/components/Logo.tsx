export function LogoMark({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="48" cy="64" r="30" stroke="#1A2332" strokeWidth="3.5" />
      <circle cx="80" cy="64" r="30" stroke="#B58E45" strokeWidth="3.5" />
      <circle cx="18" cy="64" r="3.2" fill="#1A2332" />
      <circle cx="48" cy="34" r="3.2" fill="#1A2332" />
      <circle cx="48" cy="94" r="3.2" fill="#1A2332" />
      <circle cx="110" cy="64" r="3.2" fill="#B58E45" />
      <circle cx="80" cy="34" r="3.2" fill="#B58E45" />
      <circle cx="80" cy="94" r="3.2" fill="#B58E45" />
    </svg>
  );
}

export function LogoWord({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const fontSize = size === "lg" ? "1.55rem" : size === "sm" ? "1.05rem" : "1.25rem";
  return (
    <span
      style={{
        fontFamily: "var(--font-display)",
        fontSize,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        fontWeight: 600,
      }}
    >
      <span style={{ color: "var(--navy)" }}>Khald</span>
      <span style={{ color: "var(--gold)" }}>oo</span>
      <span style={{ color: "var(--navy)" }}>n</span>
    </span>
  );
}

export function HeroOrbit() {
  return (
    <svg className="hero-orbit" viewBox="0 0 640 640" fill="none" aria-hidden="true">
      <circle cx="250" cy="320" r="170" stroke="#1A2332" strokeWidth="2.5" opacity="0.55" />
      <circle cx="390" cy="320" r="170" stroke="#B58E45" strokeWidth="2.5" opacity="0.8" />
      <circle cx="80" cy="320" r="7" fill="#1A2332" />
      <circle cx="250" cy="150" r="7" fill="#1A2332" />
      <circle cx="250" cy="490" r="7" fill="#1A2332" />
      <circle cx="560" cy="320" r="7" fill="#B58E45" />
      <circle cx="390" cy="150" r="7" fill="#B58E45" />
      <circle cx="390" cy="490" r="7" fill="#B58E45" />
      <path d="M250 150 L80 320 L250 490" stroke="#1A2332" strokeWidth="1.2" opacity="0.35" />
      <path d="M390 150 L560 320 L390 490" stroke="#B58E45" strokeWidth="1.2" opacity="0.45" />
    </svg>
  );
}
