const Footer = () => (
  <footer className="py-12 md:py-16">
    <div className="container max-w-[1200px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <p className="font-display font-bold text-xl text-primary">TaxJugaad</p>
          <p className="font-body text-muted text-sm mt-1 max-w-xs">
            We connect creators with CAs who get digital income.
          </p>
        </div>
        <div className="flex gap-6 font-body text-sm">
          <a
            href="https://wa.me/919980591014?text=Hi%20TaxJugaad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="https://instagram.com/taxjugaad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition-colors"
          >
            Instagram
          </a>
          <a
            href="mailto:hello@taxjugaad.in"
            className="text-muted hover:text-primary transition-colors"
          >
            Email
          </a>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-border">
        <p className="font-body text-xs text-muted leading-relaxed">
          TaxJugaad is not a CA firm. We connect you with verified freelance CAs specializing in creator income.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
