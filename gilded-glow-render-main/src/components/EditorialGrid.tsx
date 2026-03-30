import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ed1 from "@/assets/editorial-1.jpg";
import ed2 from "@/assets/editorial-2.jpg";
import ed3 from "@/assets/editorial-3.jpg";
import ed4 from "@/assets/editorial-4.jpg";

const images = [
  { src: ed1, alt: "Woman applying luxury perfume", span: "md:col-span-2 md:row-span-2" },
  { src: ed2, alt: "Perfume on vanity table", span: "" },
  { src: ed3, alt: "Golden perfume mist spray", span: "" },
  { src: ed4, alt: "Perfume flatlay with accessories", span: "md:col-span-2" },
];

const EditorialGrid = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-luxury uppercase text-primary/60 mb-4">
            The World of Élégance
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-cream">
            Editorial
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.8 }}
              className={`relative overflow-hidden group cursor-pointer ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover min-h-[250px] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/20 group-hover:bg-background/5 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorialGrid;
