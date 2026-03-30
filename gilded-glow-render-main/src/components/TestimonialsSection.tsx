import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "Élégance is not just a fragrance — it is a statement of who you are. Every time I wear Lumière Dorée, I feel invincible.",
    name: "Isabelle Laurent",
    title: "Fashion Editor, Vogue Paris",
  },
  {
    quote: "In thirty years of reviewing perfumes, nothing has moved me quite like Nuit Mystère. It is a masterpiece of modern perfumery.",
    name: "James Whitfield",
    title: "Senior Fragrance Critic, The Scent Journal",
  },
  {
    quote: "The craftsmanship is unparalleled. You can feel the heritage in every single note. This is what luxury truly means.",
    name: "Sofia Marchetti",
    title: "Creative Director, Maison Marchetti",
  },
];

const TestimonialsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-32 bg-secondary/20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs tracking-luxury uppercase text-primary/60 mb-4">
            Voices of Distinction
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-cream">
            What They Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.2, duration: 0.8 }}
              className="relative"
            >
              {/* Quote mark */}
              <span className="font-display text-6xl leading-none text-primary/15 absolute -top-4 -left-2">
                "
              </span>

              <blockquote className="relative z-10 pt-6">
                <p className="font-body text-sm font-light text-foreground/80 leading-relaxed italic mb-8">
                  "{t.quote}"
                </p>
                <footer>
                  <p className="font-display text-base text-cream">{t.name}</p>
                  <p className="font-body text-xs text-muted-foreground mt-1">{t.title}</p>
                </footer>
              </blockquote>

              {/* Subtle bottom line */}
              <div className="mt-8 w-12 h-px bg-primary/30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
