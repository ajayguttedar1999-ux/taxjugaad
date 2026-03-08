const WA_LINK = "https://wa.me/919980591014?text=Hi%20TaxJugaad%2C%20I%20want%20to%20book%20a%20%E2%82%B9999%20Clarity%20Call";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 80% 20%, hsl(138 76% 97%) 0%, transparent 70%)",
        }}
      />
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(153 42% 18%) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-[720px] mx-auto text-center px-5">
        <span
          className="inline-block px-4 py-1.5 rounded-full text-sm font-body font-medium bg-primary text-primary-foreground mb-8 animate-fade-up"
        >
          For India's Online Earners
        </span>

        <h1
          className="font-display font-bold text-[32px] md:text-[56px] leading-[1.15] text-primary mb-6 animate-fade-up stagger-1"
          style={{ letterSpacing: "-0.02em" }}
        >
          Your CA Finally Gets What You Do
        </h1>

        <p className="font-body text-[15px] md:text-lg text-muted max-w-[560px] mx-auto mb-10 leading-relaxed animate-fade-up stagger-2">
          Stripe income. YouTube AdSense. GST on digital courses. Advance tax. We've sorted it for 340+ creators.
        </p>

        <div className="animate-fade-up stagger-3">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-foreground font-body font-semibold text-base md:text-lg px-12 py-4 rounded-xl transition-transform duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]"
          >
            Book ₹999 Clarity Call →
          </a>
          <p className="mt-4 text-sm text-muted font-body">
            30-min call · Pay after booking · WhatsApp delivery
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
