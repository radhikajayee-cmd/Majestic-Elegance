const footerLinks = {
  "The House": ["Our Story", "Heritage", "Craftsmanship", "Master Perfumers"],
  "Collections": ["Lumière Dorée", "Rose Éternelle", "Nuit Mystère", "Cristal Royal"],
  "Services": ["Gift Wrapping", "Engraving", "Fragrance Consultation", "Corporate Gifts"],
  "Information": ["Shipping & Returns", "Privacy Policy", "Terms of Service", "Careers"],
};

const Footer = () => (
  <footer id="contact" className="pt-24 pb-12 border-t border-border bg-background">
    <div className="max-w-6xl mx-auto px-6">
      {/* Top section */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-20">
        {/* Brand column */}
        <div className="md:col-span-1">
          <a href="#" className="font-display text-2xl font-light tracking-luxury text-gold-gradient block mb-4">
            ÉLÉGANCE
          </a>
          <p className="font-body text-xs text-muted-foreground leading-relaxed mb-6">
            Crafting timeless fragrances since 1923. Each scent tells a story of elegance, passion, and uncompromising quality.
          </p>
          <div className="flex gap-4">
            {["Instagram", "Pinterest", "Facebook"].map((social) => (
              <a
                key={social}
                href="#"
                className="font-body text-[10px] tracking-elegant uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-display text-sm text-cream mb-5">{title}</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-body text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Contact bar */}
      <div className="border-t border-border/50 pt-8 mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="text-center sm:text-left">
              <p className="font-body text-[10px] tracking-luxury uppercase text-muted-foreground/60 mb-1">Contact</p>
              <p className="font-body text-xs text-muted-foreground">Radhika</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-body text-[10px] tracking-luxury uppercase text-muted-foreground/60 mb-1">Email</p>
              <a
                href="mailto:radhikajayee@gmail.com"
                className="font-body text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                radhikajayee@gmail.com
              </a>
            </div>
          </div>
          <div className="text-center sm:text-left">
            <p className="font-body text-[10px] tracking-luxury uppercase text-muted-foreground/60 mb-1">Flagship Store</p>
            <p className="font-body text-xs text-muted-foreground">
              12 Rue de la Paix, 75002 Paris, France
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-[10px] text-muted-foreground/50 tracking-elegant">
          © 2026 ÉLÉGANCE PARFUMS. ALL RIGHTS RESERVED.
        </p>
        <p className="font-body text-[10px] text-muted-foreground/40 tracking-elegant italic">
          A fragrance is the ultimate accessory of elegance.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
