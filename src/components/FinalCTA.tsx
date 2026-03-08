import ScrollReveal from "./ScrollReveal";

const WA_LINK = "https://wa.me/919980591014?text=Hi%20TaxJugaad%2C%20I%20want%20to%20book%20a%20%E2%82%B9999%20Clarity%20Call";

const FinalCTA = () => (
  <section className="py-20 md:py-28 bg-primary">
    <div className="container max-w-[720px] mx-auto text-center">
      <ScrollReveal>
        <h2
          className="font-display font-bold text-[28px] md:text-[44px] text-primary-foreground mb-4"
          style={{ letterSpacing: "-0.02em" }}
        >
          Stop Guessing. Get Sorted.
        </h2>
        <p className="font-body text-primary-foreground/70 text-base md:text-lg mb-10">
          One ₹999 call. That's all it takes to know exactly where you stand.
        </p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-accent text-foreground font-body font-semibold text-base md:text-lg px-12 py-4 rounded-xl transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
        >
          Book My Clarity Call →
        </a>
        <p className="font-body text-primary-foreground/50 text-sm mt-4">340+ creators already sorted</p>
      </ScrollReveal>
    </div>
  </section>
);

export default FinalCTA;
