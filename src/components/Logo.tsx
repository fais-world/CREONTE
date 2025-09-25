// Simple typographic logo placeholder; will be replaced with designed SVG later.
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-baseline font-logo tracking-wide ${className}`}
    >
      <span className="text-xl md:text-2xl font-semibold">CREONTE</span>
    </span>
  );
}
