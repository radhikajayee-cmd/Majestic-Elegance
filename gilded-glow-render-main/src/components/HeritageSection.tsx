import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heritageImg from "@/assets/heritage.jpg";

const HeritageSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="relative py-0 overflow-hidden">
      {/* Full-width heritage image with parallax */}
      <div className="relative h-[70vh] overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0 -top-16 -bottom-16">
          <img
            src={heritageImg}
            alt="Heritage perfumery laboratory"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute bottom-0 left-0 right-0 px-6 pb-16"
        >
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-body text-xs tracking-luxury uppercase text-primary/60 mb-4">
              Since 1923
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-light text-cream leading-tight mb-6">
              A Century of Excellence
            </h2>
          </div>
        </motion.div>
      </div>

      {/* Heritage content */}
      <div className="bg-background py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                year: "1923",
                title: "The Beginning",
                text: "Founded in the heart of Grasse, France, by master perfumer Émile Beaumont, Élégance began as a small atelier dedicated to the art of scent.",
              },
              {
                year: "1967",
                title: "Global Recognition",
                text: "Our signature fragrance 'Lumière Dorée' captivated the world, becoming the choice of royalty, artists, and visionaries across five continents.",
              },
              {
                year: "2024",
                title: "Modern Legacy",
                text: "Today, Élégance continues to push the boundaries of perfumery, blending century-old techniques with innovative ingredients from around the globe.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="text-center"
              >
                <span className="font-display text-5xl font-light text-gold-gradient">
                  {item.year}
                </span>
                <h3 className="font-display text-xl text-cream mt-4 mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-sm font-light text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritageSection;
