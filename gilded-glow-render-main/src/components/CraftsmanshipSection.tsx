import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import craftsmanshipImg from "@/assets/craftsmanship.jpg";

const CraftsmanshipSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="craftsmanship" className="py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative overflow-hidden light-sweep"
        >
          <img
            src={craftsmanshipImg}
            alt="Close-up detail of luxury perfume craftsmanship"
            className="w-full h-auto"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <p className="font-body text-xs tracking-luxury uppercase text-primary/60 mb-4">
            Our Heritage
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-cream leading-tight mb-8">
            The Art of
            <br />
            <span className="text-gold-gradient">Perfume Making</span>
          </h2>
          <p className="font-body text-sm font-light text-muted-foreground leading-relaxed mb-6">
            Each Élégance fragrance is a masterpiece born from centuries of perfumery tradition.
            Our master perfumers source the rarest ingredients from around the world — Bulgarian rose,
            Indian oud, Tahitian vanilla — blending them with meticulous precision.
          </p>
          <p className="font-body text-sm font-light text-muted-foreground leading-relaxed">
            Every bottle undergoes a twelve-month maturation process, allowing the notes to harmonize
            into a symphony of scent that evolves beautifully throughout the day.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;
