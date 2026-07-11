type ScreenshotSlotProps = {
  label: string;
  aspect?: "wide" | "square";
};

/** Marked placeholder until a real product capture is available. Never invents data. */
export function ScreenshotSlot({ label, aspect = "wide" }: ScreenshotSlotProps) {
  return (
    <figure className={`screenshot-slot screenshot-${aspect}`}>
      <div className="screenshot-slot-inner" role="img" aria-label={`${label} — replace with real screenshot`}>
        <span className="screenshot-todo">Replace with real screenshot</span>
        <span className="screenshot-label">{label}</span>
      </div>
      <figcaption>TODO: drop a real product capture here. Do not invent metrics or client data.</figcaption>
    </figure>
  );
}
