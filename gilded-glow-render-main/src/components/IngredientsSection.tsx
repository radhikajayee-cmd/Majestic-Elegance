import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ingredientsImg from "@/assets/ingredients.jpg";

const ingredients = [
  { name: "Bulgarian Rose", origin: "Valley of Roses, Bulgaria", detail: "Hand-picked at dawn for maximum potency" },
  { name: "Indian Oud", origin: "Assam, India", detail: "Aged 25 years for extraordinary depth" },
  { name: "Tahitian Vanilla", origin: "Taha'a, French Polynesia", detail: "Sun-cured for 9 months for rich sweetness" },
  { name: "Italian Bergamot", origin: "Calabria, Italy", detail: "Cold-pressed from organic groves" },
  { name: "Persian Saffron", origin: "Khorasan, Iran", detail: "The world's most precious spice" },
  { name: "Mysore Sandalwood", origin: "Karnataka, India", detail: "Sustainably harvested heartwood" },
];

const IngredientsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
            className="relative"
          >
            <img
              src={ingredientsImg}
              alt="Rare perfume ingredients"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
          </motion.div>

          {/* Ingredients list */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="font-body text-xs tracking-luxury uppercase text-primary/60 mb-4"
            >
              Rare Ingredients
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="font-display text-3xl md:text-4xl font-light text-cream mb-10"
            >
              Sourced From the
              <br />
              <span className="text-gold-gradient">Finest Origins</span>
            </motion.h2>

            <div className="space-y-6">
              {ingredients.map((ing, i) => (
                <motion.div
                  key={ing.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                  className="group flex items-start gap-4 py-4 border-b border-border/50 hover:border-primary/30 transition-colors duration-300"
                >
                  <span className="font-display text-2xl text-primary/30 group-hover:text-primary/60 transition-colors duration-300 leading-none mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="font-display text-lg text-cream group-hover:text-primary transition-colors duration-300">
                      {ing.name}
                    </h4>
                    <p className="font-body text-xs text-muted-foreground mt-1">
                      {ing.origin} — {ing.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
