import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import col1 from "@/assets/collection-1.jpg";
import col2 from "@/assets/collection-2.jpg";
import col3 from "@/assets/collection-3.jpg";
import col4 from "@/assets/collection-4.jpg";

const products = [
  { name: "Lumière Dorée", desc: "A radiant blend of golden amber and white flowers.", image: col1 },
  { name: "Rose Éternelle", desc: "Timeless Bulgarian rose with a modern twist.", image: col2 },
  { name: "Nuit Mystère", desc: "Dark oud and smoky incense for the bold spirit.", image: col3 },
  { name: "Cristal Royal", desc: "Crystal-clear aldehydes meet regal sandalwood.", image: col4 },
];

const CollectionShowcase = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="collection" className="py-32 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs tracking-luxury uppercase text-primary/60 mb-4">
            The Collection
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-cream">
            Our Signature Fragrances
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-6 aspect-[3/4] bg-card">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/10 group-hover:bg-background/0 transition-colors duration-500" />
              </div>
              <h3 className="font-display text-lg md:text-xl font-light text-cream mb-2 group-hover:text-primary transition-colors duration-300">
                {p.name}
              </h3>
              <p className="font-body text-xs font-light text-muted-foreground leading-relaxed mb-4">
                {p.desc}
              </p>
              <a
                href="#"
                className="inline-block font-body text-[10px] tracking-luxury uppercase text-primary/70 border-b border-primary/30
                  hover:text-primary hover:border-primary transition-all duration-300"
              >
                View Details
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionShowcase;
