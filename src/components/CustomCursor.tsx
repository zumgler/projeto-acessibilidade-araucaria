import { useEffect, useState } from "react";

type Point = { x: number; y: number };

const TRAIL_SIZE = 7;

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [pointer, setPointer] = useState<Point>({ x: 0, y: 0 });
  const [trail, setTrail] = useState<Point[]>(
    Array.from({ length: TRAIL_SIZE }, () => ({ x: 0, y: 0 })),
  );
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const syncEnabled = () => {
      const desktop = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      const cursorAllowed = !document.documentElement.classList.contains("no-custom-cursor");
      setEnabled(desktop && cursorAllowed);
    };

    syncEnabled();
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    media.addEventListener("change", syncEnabled);

    const observer = new MutationObserver(syncEnabled);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      media.removeEventListener("change", syncEnabled);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (event: MouseEvent) => {
      const next = { x: event.clientX, y: event.clientY };
      setPointer(next);
      setTrail((prev) => [next, ...prev.slice(0, TRAIL_SIZE - 1)]);
      const target = event.target as Element | null;
      setHovering(!!target?.closest("a, button, [role='button'], input, textarea, select, label"));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        className={`custom-cursor ${hovering ? "is-hovering" : ""}`}
        style={{ left: pointer.x, top: pointer.y }}
      />
      {trail.map((dot, index) => (
        <span
          key={`${index}-${dot.x}-${dot.y}`}
          className="custom-cursor-trail"
          style={{
            left: dot.x,
            top: dot.y,
            opacity: (TRAIL_SIZE - index) / (TRAIL_SIZE * 1.35),
            transform: `translate(-50%, -50%) scale(${1 - index * 0.08})`,
          }}
        />
      ))}
    </>
  );
}
