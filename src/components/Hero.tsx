import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

const TOTAL_FRAMES = 94;

// Build image path — folder name with space is URL-encoded safely
function framePath(i: number): string {
  const frameNum = String(i + 1).padStart(3, '0');
  return `/Logo%20animation/ezgif-frame-${frameNum}.png`;
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [ready, setReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  /* ---------- Scroll-based transforms ---------- */
  const canvasOpacity = useTransform(scrollYProgress, [0.85, 0.95], [1, 0]);
  const canvasScale = useTransform(scrollYProgress, [0.85, 0.98], [1, 0.95]);
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [0.6, 0]);

  /* ---------- Preload images ---------- */
  useEffect(() => {
    const loaded: HTMLImageElement[] = [];
    let count = 0;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = framePath(i);
      img.onload = () => {
        count++;
        if (count >= TOTAL_FRAMES) {
          setImages(loaded);
          setReady(true);
        }
      };
      img.onerror = () => {
        // If one fails still try to continue
        count++;
        if (count >= TOTAL_FRAMES) {
          setImages(loaded);
          setReady(true);
        }
      };
      loaded.push(img);
    }
  }, []);

  /* ---------- Draw a single frame ---------- */
  const drawFrame = (progress: number) => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    const animProgress = Math.min(1, progress / 0.9);
    const frameIndex = Math.min(
      TOTAL_FRAMES - 1,
      Math.max(0, Math.floor(animProgress * (TOTAL_FRAMES - 1))),
    );

    const img = images[frameIndex];
    if (!img || !img.complete) return;

    const dpr = window.devicePixelRatio || 1;
    const w = canvas.width / dpr;
    const h = canvas.height / dpr;

    ctx.clearRect(0, 0, w, h);

    // Always use cover — fills the screen on both mobile & desktop
    const scale = Math.max(w / img.width, h / img.height);
    const dw = img.width * scale;
    const dh = img.height * scale;
    const dx = (w - dw) / 2;
    const dy = (h - dh) / 2;

    ctx.drawImage(img, dx, dy, dw, dh);
  };

  /* ---------- Resize handler ---------- */
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const parent = canvas.parentElement;
      const width = parent?.clientWidth || window.innerWidth;
      const height = parent?.clientHeight || window.innerHeight;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.resetTransform();
        ctx.scale(dpr, dpr);
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
      }

      requestAnimationFrame(() => drawFrame(scrollYProgress.get()));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [images]);

  /* ---------- Redraw on scroll ---------- */
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    drawFrame(latest);
  });

  /* ---------- Loading fallback ---------- */
  if (!ready) {
    return (
      <div ref={containerRef} className="relative h-[300vh] md:h-[500vh] w-full bg-black">
        <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex items-center justify-center bg-black z-10">
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 border-2 border-amber/30 border-t-amber rounded-full animate-spin" />
            <span className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-light">
              Loading experience…
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative h-[300vh] md:h-[500vh] w-full bg-black">
      {/* Sticky Canvas Container */}
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex items-center justify-center bg-black z-10">
        <motion.div
          style={{ opacity: canvasOpacity, scale: canvasScale }}
          className="w-full h-full flex items-center justify-center"
        >
          <canvas ref={canvasRef} className="block pointer-events-none w-full h-full" />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          style={{ opacity: scrollIndicatorOpacity }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-[8px] uppercase tracking-[0.5em] text-white">Scroll to Animate</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-amber to-transparent" />
        </motion.div>
      </div>
    </div>
  );
}
