import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "100+", label: "Years of Heritage" },
  { value: "47", label: "Countries Worldwide" },
  { value: "12", label: "Master Perfumers" },
  { value: "300+", label: "Rare Ingredients" },
];

const BrandStats = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-secondary/30 border-y border-border/30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="text-center"
            >
              <span className="font-display text-4xl md:text-5xl font-light text-gold-gradient">
                {stat.value}
              </span>
              <p className="font-body text-xs tracking-elegant uppercase text-muted-foreground mt-3">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandStats;
