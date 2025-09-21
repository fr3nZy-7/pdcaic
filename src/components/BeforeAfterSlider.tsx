import React, { useRef, useState, useEffect } from "react";

interface BeforeAfterSliderProps {
  before: string; // left image URL (Before)
  after: string;  // right image URL (After)
  beforeAlt?: string;
  afterAlt?: string;
  initialPosition?: number; // 0-100 (default 50)
  className?: string;
}

/**
 * Lightweight, dependency-free before/after image slider.
 * - Drag the handle or use keyboard (via range input) to compare.
 * - Uses absolute-positioned images and a clipped overlay for the "after" image.
 */
const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  before,
  after,
  beforeAlt = "Before",
  afterAlt = "After",
  initialPosition = 50,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState<number>(Math.max(0, Math.min(100, initialPosition)));
  const draggingRef = useRef(false);

  useEffect(() => {
    const onPointerMove = (ev: PointerEvent) => {
      if (!draggingRef.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ev.clientX - rect.left;
      const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setPos(pct);
    };
    const onPointerUp = () => {
      draggingRef.current = false;
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
    if (draggingRef.current) {
      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", onPointerUp);
    }
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, []);

  function startDrag(e: React.PointerEvent) {
    e.currentTarget.setPointerCapture?.(e.pointerId);
    draggingRef.current = true;
  }

  function onBarPointerDown(e: React.PointerEvent) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPos(pct);
    startDrag(e);
  }

  // keyboard / accessibility: update from range input
  const onRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPos(Number(e.target.value));
  };

  return (
    <div className={`w-full ${className}`}>
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-lg shadow-sm select-none"
        onPointerDown={onBarPointerDown}
        style={{ touchAction: "none" }}
      >
        {/* Container height: use responsive height; adjust classes if you want different aspect */}
        <div className="w-full h-64 md:h-96 bg-gray-100 relative">
          {/* BEFORE image (full) */}
          <img
            src={before}
            alt={beforeAlt}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            draggable={false}
          />

          {/* AFTER overlay: its width is pos% */}
          <div
            className="absolute inset-y-0 left-0 overflow-hidden"
            style={{ width: `${pos}%` }}
            aria-hidden={false}
          >
            <img
              src={after}
              alt={afterAlt}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              draggable={false}
            />
          </div>

          {/* Divider / handle */}
          <div
            className="absolute top-0 bottom-0 z-20"
            style={{
              left: `${pos}%`,
              transform: "translateX(-50%)",
              pointerEvents: "none",
            }}
          >
            <div className="relative h-full flex items-center">
              {/* Vertical line */}
              <div className="w-[2px] h-full bg-white/90 shadow-sm pointer-events-none" />
              {/* Handle button (visible) */}
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 pointer-events-auto"
                style={{ transform: "translate(-50%, -50%)" }}
              >
                <button
                  onPointerDown={startDrag}
                  type="button"
                  aria-label="Before / After slider handle"
                  className="w-10 h-10 rounded-full bg-white/95 border border-gray-200 shadow-md flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  style={{ touchAction: "none" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M9 12H3" stroke="#111827" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 12H15" stroke="#111827" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="3.2" stroke="#111827" strokeWidth="1.6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Accessible range control (visible but styled) */}
        <div className="mt-3 px-2">
          <input
            type="range"
            min={0}
            max={100}
            value={Math.round(pos)}
            onChange={onRangeChange}
            aria-label="Compare before and after"
            className="w-full h-2 bg-transparent accent-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
