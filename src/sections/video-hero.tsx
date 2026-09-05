import { useEffect, useRef, useState, type ReactNode } from "react";
import { Play, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import videoSrc from "../assets/Landing Page Video — MFBuild - Horizontal (webm).webm";
import poster from "../assets/heroSectionImage.webp";

export function VideoHero({ children }: { children: ReactNode }) {
  const root = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const halo = useRef<HTMLDivElement>(null);
  const haloRing = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const playButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const [watching, setWatching] = useState(false);
  const [revealKey, setRevealKey] = useState(0);
  const [error, setError] = useState(false);

  function hideHalo() {
    if (halo.current) halo.current.style.opacity = "0";
    if (haloRing.current) haloRing.current.style.transform = "scale(0)";
  }
  function restore() {
    if (video.current) video.current.muted = true;
    setWatching(false);
    setRevealKey((key) => key + 1);
    hideHalo();
    requestAnimationFrame(() => {
      if (window.matchMedia("(min-width: 768px)").matches) root.current?.focus({ preventScroll: true });
      else playButton.current?.focus({ preventScroll: true });
    });
  }
  function close() {
    if (document.fullscreenElement === root.current) void document.exitFullscreen().catch(() => {});
    restore();
  }
  function open() {
    if (!video.current || error) return;
    hideHalo();
    if (video.current.ended) video.current.currentTime = 0;
    video.current.muted = false;
    setWatching(true);
    // A fixed viewport fallback also supports browsers without element fullscreen.
    if (root.current?.requestFullscreen) void root.current.requestFullscreen().catch(() => {});
    void video.current.play().catch(() => { setError(true); restore(); });
  }

  useEffect(() => {
    const move = (event: PointerEvent) => {
      const target = document.elementFromPoint(event.clientX, event.clientY);
      if (watching || error || event.pointerType !== "mouse" || !target || !root.current?.contains(target) || target.closest("a, button, nav, header, input")) {
        hideHalo();
        return;
      }
      if (halo.current) {
        halo.current.style.transform = `translate3d(${event.clientX - 55}px, ${event.clientY - 55}px, 0)`;
        halo.current.style.opacity = "1";
        if (haloRing.current) haloRing.current.style.transform = "scale(1)";
      }
    };
    document.addEventListener("pointermove", move);
    window.addEventListener("scroll", hideHalo, true);
    window.addEventListener("blur", hideHalo);
    return () => {
      document.removeEventListener("pointermove", move);
      window.removeEventListener("scroll", hideHalo, true);
      window.removeEventListener("blur", hideHalo);
    };
  }, [watching, error]);

  useEffect(() => {
    if (!watching) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    const fullscreen = () => { if (!document.fullscreenElement) restore(); };
    const keyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "Tab") { event.preventDefault(); closeButton.current?.focus(); }
    };
    document.addEventListener("fullscreenchange", fullscreen);
    document.addEventListener("keydown", keyboard);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("fullscreenchange", fullscreen);
      document.removeEventListener("keydown", keyboard);
    };
  }, [watching]);

  return (
    <>
      {watching && <div className="min-h-screen" aria-hidden="true" />}
      <section
        ref={root}
        tabIndex={-1}
        onKeyDown={(event) => {
          if (!watching && event.target === event.currentTarget && (event.key === "Enter" || event.key === " ")) {
            event.preventDefault();
            open();
          }
        }}
        className={`${watching ? "fixed inset-0 z-[100] h-[100dvh]" : "relative min-h-screen"} overflow-hidden bg-black text-white`}
        role={watching ? "dialog" : undefined}
        aria-modal={watching || undefined}
        aria-label={watching ? "M&F film. Click or press Escape to close." : "M&F introduction"}
        onPointerLeave={hideHalo}
        onClick={(event) => {
          if ((event.target as Element).closest("a, button")) return;
          if (watching) close();
          else if (halo.current?.style.opacity === "1") open();
        }}
      >
        <motion.video ref={video} src={videoSrc} poster={poster} autoPlay muted loop playsInline
          initial={false}
          animate={{ scale: watching ? 1 : 1.035 }}
          transition={{ duration: reduceMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
          className={`absolute inset-0 h-full w-full ${watching ? "object-contain" : "object-cover"}`}
          onError={() => { setError(true); if (watching) restore(); }}
        />
        <AnimatePresence initial={false}>
        {!watching && (
          <motion.div key={revealKey} className="relative"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, filter: reduceMotion ? "none" : "blur(6px)", pointerEvents: "none" }}
            transition={{ duration: reduceMotion ? 0 : 0.45, ease: "easeOut" }}>
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.78),rgba(0,0,0,.58)_42%,rgba(0,0,0,.22)_72%,rgba(0,0,0,.08))]" />
            <div className="relative">{children}</div>
            <button ref={playButton} onClick={open} disabled={error}
              className="absolute bottom-24 left-1/2 flex min-h-11 -translate-x-1/2 items-center gap-2 rounded-xl border border-white/60 bg-black/30 px-5 py-3 text-white hover:bg-black/60 disabled:opacity-60 md:sr-only md:focus:not-sr-only">
              <Play size={18} aria-hidden="true" /> {error ? "Video unavailable" : "Play Video"}
            </button>
          </motion.div>
        )}
        </AnimatePresence>
        {watching && <button ref={closeButton} onClick={close} aria-label="Close video"
          className="absolute right-5 top-5 grid size-12 place-items-center rounded-full bg-black/50 text-white hover:bg-black/80"><X aria-hidden="true" /></button>}
        <div ref={halo} aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-[110] h-[110px] w-[110px] opacity-0 transition-opacity duration-300 motion-reduce:transition-none">
          <div ref={haloRing} className="h-full w-full origin-center transition-transform duration-300 ease-out motion-reduce:transition-none" style={{ transform: "scale(0)" }}>
          <svg viewBox="0 0 110 110" className="h-full w-full animate-[spin_12s_linear_infinite] motion-reduce:animate-none">
            <defs><path id="hero-play-circle" d="M55,55 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0" /></defs>
            <text fill="white" fontSize="11" fontWeight="900" letterSpacing="2">
              <textPath href="#hero-play-circle" startOffset="0%" textLength="120" lengthAdjust="spacing">PLAY VIDEO •</textPath>
              <textPath href="#hero-play-circle" startOffset="50%" textLength="120" lengthAdjust="spacing">PLAY VIDEO •</textPath>
            </text>
          </svg>
          </div>
        </div>
      </section>
    </>
  );
}
