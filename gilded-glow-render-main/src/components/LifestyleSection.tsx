import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const LifestyleSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} id="story" className="relative h-[80vh] overflow-hidden">
      {/* Parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-20 -bottom-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/lifestyle-video.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-background/50" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
      >
        <p className="font-body text-xs tracking-luxury uppercase text-primary/70 mb-6">
          A World of Elegance
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-light text-cream leading-tight max-w-3xl">
          Designed for
          <br />
          <span className="italic">Sophisticated Moments</span>
        </h2>
      </motion.div>
    </section>
  );
};

export default LifestyleSection;
