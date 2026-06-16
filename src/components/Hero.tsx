import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Fade out and scale down the canvas as we approach the end of the scroll container
  const canvasOpacity = useTransform(scrollYProgress, [0.85, 0.95], [1, 0]);
  const canvasScale = useTransform(scrollYProgress, [0.85, 0.98], [1, 0.95]);
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [0.6, 0]);

  // Preload all 94 images
  useEffect(() => {
    const totalFrames = 94;
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, '0');
      img.src = `/Logo animation/ezgif-frame-${frameNum}.png`;
      img.onload = () => {
        loadedCount++;
        setLoadingProgress(Math.round((loadedCount / totalFrames) * 100));
        if (loadedCount === totalFrames) {
          setIsLoaded(true);
        }
      };
      img.onerror = () => {
        // Fallback for load errors
        loadedCount++;
        setLoadingProgress(Math.round((loadedCount / totalFrames) * 100));
        if (loadedCount === totalFrames) {
          setIsLoaded(true);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const drawFrame = (progress: number) => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const totalFrames = images.length;
    // Map progress [0, 0.9] to frames so it reaches the final frame slightly before the absolute end
    const animationProgress = Math.min(1, progress / 0.9);
    const frameIndex = Math.min(
      totalFrames - 1,
      Math.max(0, Math.floor(animationProgress * (totalFrames - 1)))
    );

    const img = images[frameIndex];
    if (img && img.complete) {
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;
      
      ctx.clearRect(0, 0, width, height);

      // Draw image in contain mode to avoid cropping the logo (100% scale)
      let scale = Math.min(width / img.width, height / img.height);
      
      // On mobile screens, scale the logo to occupy 95% of the screen width so it is perfectly readable and prominent
      if (width < 768) {
        scale = (width * 0.95) / img.width;
      }

      const w = img.width * scale;
      const h = img.height * scale;
      const x = (width - w) / 2;
      const y = (height - h) / 2;

      ctx.drawImage(img, x, y, w, h);
    }
  };

  // Handle canvas resize
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
      }
      
      drawFrame(scrollYProgress.get());
    };

    window.addEventListener('resize', handleResize);
    
    // Draw initial frame once images are loaded or resize is triggered
    if (isLoaded) {
      handleResize();
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [isLoaded, images]);

  // Redraw when scroll progress updates
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    drawFrame(latest);
  });

  return (
    <div ref={containerRef} className="relative h-[200vh] md:h-[300vh] w-full bg-black">
      {/* Sticky Canvas Container */}
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex items-center justify-center bg-black z-10">
        {!isLoaded ? (
          // Premium Minimalist Loader
          <div className="flex flex-col items-center justify-center gap-4 text-white z-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 border-2 border-gold/20 border-t-gold rounded-full"
            />
            <span className="font-display text-sm tracking-[0.3em] text-gold/80 uppercase">
              Loading {loadingProgress}%
            </span>
          </div>
        ) : (
          <motion.div
            style={{ opacity: canvasOpacity, scale: canvasScale }}
            className="w-full h-full flex items-center justify-center"
          >
            <canvas ref={canvasRef} className="block pointer-events-none" />
          </motion.div>
        )}

        {/* Scroll Indicator */}
        {isLoaded && (
          <motion.div
            style={{ opacity: scrollIndicatorOpacity }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
          >
            <span className="text-[8px] uppercase tracking-[0.5em] text-white">Scroll to Animate</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
          </motion.div>
        )}
      </div>
    </div>
  );
}

