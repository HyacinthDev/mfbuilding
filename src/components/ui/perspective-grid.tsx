import { useEffect, useMemo, useState } from "react";
import { cn } from "../../lib/utils";

interface PerspectiveGridProps {
  className?: string;
  gridSize?: number;
  showOverlay?: boolean;
  fadeRadius?: number;
}

export function PerspectiveGrid({
  className,
  gridSize = 34,
  showOverlay = true,
  fadeRadius = 78,
}: PerspectiveGridProps) {
  const [mounted, setMounted] = useState(false);
  const tiles = useMemo(() => Array.from({ length: gridSize * gridSize }), [gridSize]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={cn(
        "pointer-events-auto absolute inset-0 z-10 overflow-hidden bg-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100",
        className,
      )}
      style={{
        perspective: "2000px",
        transformStyle: "preserve-3d",
      }}
      aria-hidden="true"
    >
      <div
        className="absolute aspect-square w-[82rem] origin-center grid"
        style={{
          left: "50%",
          top: "55%",
          transform:
            "translate(-50%, -50%) rotateX(30deg) rotateY(-5deg) rotateZ(20deg) scale(1.85)",
          transformStyle: "preserve-3d",
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize}, 1fr)`,
        }}
      >
        {mounted &&
          tiles.map((_, i) => (
            <div
              key={i}
              className="perspective-tile min-h-px min-w-px border border-white/10 bg-transparent transition-colors duration-[1200ms] hover:duration-0"
            />
          ))}
      </div>

      {showOverlay && (
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background: `radial-gradient(circle, transparent 22%, var(--color-charcoal) ${fadeRadius}%)`,
          }}
        />
      )}
    </div>
  );
}

export default PerspectiveGrid;
