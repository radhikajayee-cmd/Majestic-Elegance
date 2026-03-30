import { motion } from "framer-motion";

const CTASection = () => (
  <section className="py-32 md:py-48 bg-background">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="max-w-3xl mx-auto text-center px-6"
    >
      <p className="font-body text-xs tracking-luxury uppercase text-primary/60 mb-6">
        Begin Your Journey
      </p>
      <h2 className="font-display text-4xl md:text-6xl font-light text-cream mb-10">
        Experience the Fragrance
      </h2>
      <a
        href="#collection"
        className="inline-block px-12 py-4 border border-primary/60 text-primary font-body text-xs tracking-luxury uppercase
          hover:bg-primary/10 hover:shadow-[0_0_40px_hsl(40_60%_55%/0.2)] hover:-translate-y-0.5
          transition-all duration-500"
      >
        Shop the Collection
      </a>
    </motion.div>
  </section>
);

export default CTASection;
