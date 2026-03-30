import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={ref} id="home" className="relative h-screen overflow-hidden">
      {/* Background video with parallax zoom */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Smoke overlay */}
      <div className="absolute inset-0 smoke-overlay" />

      {/* Animated smoke particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-foreground/5 blur-3xl"
          style={{
            width: 200 + i * 60,
            height: 200 + i * 60,
            left: `${15 + i * 15}%`,
            bottom: "10%",
          }}
          animate={{
            y: [20, -60, 20],
            opacity: [0, 0.3, 0],
            scale: [0.9, 1.15, 0.9],
          }}
          transition={{
            duration: 6 + i * 1.5,
            repeat: Infinity,
            delay: i * 1.2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Content */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-body text-xs tracking-luxury uppercase text-primary/80 mb-6"
        >
          Élégance Parfums
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-cream leading-tight mb-6"
        >
          The Essence of Luxury
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="font-body text-sm md:text-base font-light tracking-elegant text-champagne/70 mb-12 max-w-lg"
        >
          A fragrance crafted for timeless elegance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#fragrances"
            className="px-8 py-3 border border-primary/60 text-primary font-body text-xs tracking-luxury uppercase
              hover:bg-primary/10 hover:shadow-[0_0_30px_hsl(40_60%_55%/0.15)] hover:-translate-y-0.5
              transition-all duration-500"
          >
            Discover the Fragrance
          </a>
          <a
            href="#collection"
            className="px-8 py-3 border border-foreground/20 text-foreground/70 font-body text-xs tracking-luxury uppercase
              hover:border-primary/40 hover:text-primary hover:-translate-y-0.5
              transition-all duration-500"
          >
            Explore Collection
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
