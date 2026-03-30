import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const processes = [
  {
    step: "01",
    title: "Ingredient Selection",
    description: "Our master perfumers travel the globe to source the finest raw materials, selecting only the top 1% of each harvest.",
  },
  {
    step: "02",
    title: "Composition",
    description: "Each fragrance undergoes hundreds of iterations. Our perfumers blend art with science to create the perfect harmony of notes.",
  },
  {
    step: "03",
    title: "Maturation",
    description: "Like fine wine, our fragrances are aged for months in temperature-controlled vaults, allowing the notes to marry and evolve.",
  },
  {
    step: "04",
    title: "Bottling",
    description: "Each bottle is hand-finished by artisans in our Grasse atelier, with crystal-cut glass and hand-applied gold leaf accents.",
  },
];

const ProcessSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-32 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs tracking-luxury uppercase text-primary/60 mb-4">
            Our Process
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-cream">
            From Vision to Bottle
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border/40 -translate-x-1/2" />

          <div className="space-y-16 md:space-y-24">
            {processes.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.8 }}
                className={`md:flex items-center gap-16 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <span className="font-display text-4xl font-light text-primary/20">
                    {p.step}
                  </span>
                  <h3 className="font-display text-2xl text-cream mt-2 mb-3">
                    {p.title}
                  </h3>
                  <p className="font-body text-sm font-light text-muted-foreground leading-relaxed max-w-sm inline-block">
                    {p.description}
                  </p>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex items-center justify-center w-0">
                  <div className="w-3 h-3 rounded-full border-2 border-primary/40 bg-background relative z-10" />
                </div>

                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
