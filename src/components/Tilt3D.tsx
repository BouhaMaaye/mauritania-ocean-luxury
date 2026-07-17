import { useEffect, useRef, useState, type PointerEvent, type ReactNode } from "react";

const MAX_TILT_DEG = 8;
const NEUTRAL_TRANSFORM = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";

export function Tilt3D({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [transform, setTransform] = useState(NEUTRAL_TRANSFORM);
  const [settling, setSettling] = useState(true);
  const [sheen, setSheen] = useState({ x: 50, y: 50, opacity: 0 });

  useEffect(() => {
    setEnabled(
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  if (!enabled) {
    return <div className={className}>{children}</div>;
  }

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * MAX_TILT_DEG * 2;
    const rotateX = (0.5 - py) * MAX_TILT_DEG * 2;
    setSettling(false);
    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
    );
    setSheen({ x: px * 100, y: py * 100, opacity: 1 });
  };

  const handlePointerLeave = () => {
    setSettling(true);
    setTransform(NEUTRAL_TRANSFORM);
    setSheen((s) => ({ ...s, opacity: 0 }));
  };

  return (
    <div
      ref={ref}
      className={className}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        transform,
        transition: settling
          ? "transform 450ms cubic-bezier(0.22, 1, 0.36, 1)"
          : "transform 120ms ease-out",
        willChange: "transform",
      }}
    >
      {children}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${sheen.x}% ${sheen.y}%, color-mix(in oklab, var(--gold) 35%, transparent), transparent 60%)`,
          opacity: sheen.opacity,
          transition: "opacity 300ms ease-out",
        }}
      />
    </div>
  );
}
