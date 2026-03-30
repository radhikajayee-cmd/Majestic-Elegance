import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const NewsletterSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section ref={ref} className="py-32 bg-secondary/10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="max-w-2xl mx-auto text-center px-6"
      >
        <p className="font-body text-xs tracking-luxury uppercase text-primary/60 mb-4">
          Stay Connected
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-light text-cream mb-4">
          Join the Élégance Circle
        </h2>
        <p className="font-body text-sm font-light text-muted-foreground mb-10 max-w-md mx-auto">
          Be the first to discover new fragrances, exclusive events, and the stories behind our craft.
        </p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-6"
          >
            <p className="font-display text-xl text-primary">Welcome to the Circle</p>
            <p className="font-body text-xs text-muted-foreground mt-2">
              You'll hear from us soon with exclusive news.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3 bg-transparent border border-border/60 text-foreground font-body text-sm
                placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60
                transition-colors duration-300"
            />
            <button
              type="submit"
              className="px-8 py-3 border border-primary/60 text-primary font-body text-xs tracking-luxury uppercase
                hover:bg-primary/10 hover:shadow-[0_0_30px_hsl(40_60%_55%/0.15)] hover:-translate-y-0.5
                transition-all duration-500"
            >
              Subscribe
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default NewsletterSection;
