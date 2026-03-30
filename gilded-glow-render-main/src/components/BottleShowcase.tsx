import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import bottleImg from "@/assets/bottle-showcase.jpg";

const BottleShowcase = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 md:py-48 overflow-hidden bg-background">
      <div className="max-w-5xl mx-auto flex flex-col items-center px-6">
        {/* Floating bottle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative mb-16"
        >
          <div className="animate-float light-sweep">
            <img
              src={bottleImg}
              alt="Élégance signature perfume bottle"
              className="w-64 md:w-80 h-auto"
            />
          </div>
          {/* Glow beneath bottle */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-6 bg-primary/15 rounded-full blur-2xl" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 1 }}
          className="font-body text-xs tracking-luxury uppercase text-primary/60 mb-4"
        >
          Signature Collection
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 1 }}
          className="font-display text-3xl md:text-5xl font-light text-cream text-center leading-tight"
        >
          Crafted With Precision
          <br />
          <span className="text-gold-gradient">and Passion</span>
        </motion.h2>
      </div>
    </section>
  );
};

export default BottleShowcase;
