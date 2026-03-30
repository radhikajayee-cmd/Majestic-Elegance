import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import notesTop from "@/assets/notes-top.jpg";
import notesMiddle from "@/assets/notes-middle.jpg";
import notesBase from "@/assets/notes-base.jpg";

const notes = [
  {
    title: "Top Notes",
    description: "Bright citrus bergamot and delicate jasmine open with an ethereal freshness.",
    image: notesTop,
  },
  {
    title: "Middle Notes",
    description: "Warm amber and vanilla create a rich, enveloping heart of golden warmth.",
    image: notesMiddle,
  },
  {
    title: "Base Notes",
    description: "Deep oud wood and exotic spices leave a lasting trail of mysterious depth.",
    image: notesBase,
  },
];

const FragranceNotes = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="fragrances" className="py-32 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs tracking-luxury uppercase text-primary/60 mb-4">
            The Composition
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-cream">
            Layers of Elegance
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {notes.map((note, i) => (
            <motion.div
              key={note.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.8 }}
              className="group text-center"
            >
              <div className="relative overflow-hidden mb-8 aspect-square">
                <img
                  src={note.image}
                  alt={note.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-colors duration-500" />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-light text-primary mb-3">
                {note.title}
              </h3>
              <p className="font-body text-sm font-light text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {note.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FragranceNotes;
