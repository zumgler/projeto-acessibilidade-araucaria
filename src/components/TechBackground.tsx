export function TechBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-50" />
      <div className="absolute -top-28 left-0 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute -right-10 bottom-8 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute inset-x-8 top-16 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
      {Array.from({ length: 18 }).map((_, i) => (
        <span
          key={i}
          className="absolute block h-1 w-1 rounded-full bg-primary/30 animate-float"
          style={{
            top: `${(i * 47) % 100}%`,
            left: `${(i * 29) % 100}%`,
            animationDelay: `${(i % 6) * 0.7}s`,
            animationDuration: `${5 + (i % 5)}s`,
          }}
        />
      ))}
    </div>
  );
}
