export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 animated-gradient-bg" />
      <div className="particle particle-one" />
      <div className="particle particle-two" />
      <div className="particle particle-three" />
      <div className="particle particle-four" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/50 to-transparent" />
    </div>
  );
}
