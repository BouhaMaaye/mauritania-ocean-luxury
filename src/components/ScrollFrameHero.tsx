import { useLayoutEffect, useMemo, useRef, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useFrameSequence } from "@/hooks/use-frame-sequence";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FRAME_COUNT = 300;
const FRAME_WIDTH = 1920;
const FRAME_HEIGHT = 1080;

function frameUrl(index: number) {
  return `${import.meta.env.BASE_URL}frames/frame_${String(index).padStart(4, "0")}.jpg`;
}

// useLayoutEffect warns on the server; TanStack Start renders this
// component during SSR, so fall back to useEffect there.
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function ScrollFrameHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const playhead = useRef({ frame: 0 });

  const frameUrls = useMemo(
    () => Array.from({ length: FRAME_COUNT }, (_, i) => frameUrl(i + 1)),
    [],
  );
  const { images, progress, ready } = useFrameSequence(frameUrls);

  const draw = (frameIndex: number) => {
    const canvas = canvasRef.current;
    const img = images.current[frameIndex];
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx || !img || !img.complete || img.naturalWidth === 0) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imageRatio = FRAME_WIDTH / FRAME_HEIGHT;
    const canvasRatio = canvasWidth / canvasHeight;

    let drawWidth: number;
    let drawHeight: number;
    let offsetX: number;
    let offsetY: number;

    // object-fit: cover — fill the canvas, crop whichever axis overflows
    if (canvasRatio > imageRatio) {
      drawWidth = canvasWidth;
      drawHeight = canvasWidth / imageRatio;
      offsetX = 0;
      offsetY = (canvasHeight - drawHeight) / 2;
    } else {
      drawHeight = canvasHeight;
      drawWidth = canvasHeight * imageRatio;
      offsetX = (canvasWidth - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Keep the canvas full-viewport and redraw the current frame on resize.
  useIsomorphicLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      draw(Math.round(playhead.current.frame));
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [ready]);

  // Pin the section and scrub through the sequence once every frame is preloaded.
  useIsomorphicLayoutEffect(() => {
    if (!ready || !sectionRef.current || !pinRef.current) return;

    draw(0);

    const ctx = gsap.context(() => {
      gsap.to(playhead.current, {
        frame: FRAME_COUNT - 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
          pin: pinRef.current,
        },
        onUpdate: () => draw(Math.round(playhead.current.frame)),
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [ready]);

  return (
    <section ref={sectionRef} className="relative h-[450vh]">
      <div
        ref={pinRef}
        className="relative h-screen w-full overflow-hidden bg-[color:var(--ocean-deep)]"
      >
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

        <div
          className="absolute inset-0 z-[5]"
          style={{
            background:
              "linear-gradient(to right, color-mix(in oklab, var(--ocean-deep) 55%, transparent) 0%, color-mix(in oklab, var(--ocean-deep) 15%, transparent) 45%, transparent 100%)",
          }}
        />

        {ready && (
          <div className="pointer-events-none absolute inset-0 z-10 flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="mx-auto w-full max-w-7xl px-8"
            >
              <div className="max-w-3xl">
                <div className="mb-8 flex items-center gap-4">
                  <div className="h-px w-12 bg-gold" />
                  <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
                    Excellence halieutique
                  </span>
                </div>
                <h1 className="mb-8 font-display text-6xl font-bold leading-[1.1] text-white md:text-8xl">
                  Nationale Pêche
                  <br />
                  <span className="font-normal italic text-gold">SARL</span>
                </h1>
                <p className="mb-12 max-w-xl text-xl font-light leading-relaxed text-white/90 md:text-2xl">
                  Nous portons les richesses de l'Atlantique mauritanien vers
                  les tables les plus prestigieuses du monde.
                </p>
                <div className="pointer-events-auto flex flex-wrap gap-6">
                  <Link
                    to="/especes"
                    className="bg-gold px-10 py-5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:-translate-y-1 hover:brightness-95"
                  >
                    Catalogue des espèces
                  </Link>
                  <Link
                    to="/contact"
                    className="border border-white px-10 py-5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-[color:var(--ocean-deep)]"
                  >
                    Nous contacter
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {!ready && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-6 bg-[color:var(--ocean-deep)]">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Chargement de l'expérience
            </span>
            <div className="h-px w-48 overflow-hidden bg-white/15">
              <div
                className="h-full bg-gold transition-[width] duration-150 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="font-display text-3xl italic text-white">{progress}%</span>
          </div>
        )}
      </div>
    </section>
  );
}
