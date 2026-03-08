import ScrollReveal from "./ScrollReveal";

const steps = [
  { num: "01", title: "Pick your service", sub: "Choose what you need. 60 seconds." },
  { num: "02", title: "Pay securely", sub: "Razorpay powered. Instant confirmation." },
  { num: "03", title: "Your CA texts you", sub: "Within 2 hours on WhatsApp. Sorted." },
];

const HowItWorks = () => (
  <section className="py-20 md:py-28">
    <div className="container max-w-[1200px] mx-auto">
      <ScrollReveal className="text-center mb-16">
        <h2 className="font-display font-bold text-[28px] md:text-[44px] text-primary" style={{ letterSpacing: "-0.02em" }}>
          Up and Running in 3 Steps
        </h2>
      </ScrollReveal>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-12 md:gap-0">
        {steps.map((s, i) => (
          <ScrollReveal key={s.num} delay={i * 0.15} className="flex-1 relative text-center md:px-8">
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 right-0 w-full h-px bg-border -z-10" />
            )}
            <p className="font-display font-bold text-6xl md:text-7xl text-primary/10 leading-none">{s.num}</p>
            <h3 className="font-display font-bold text-lg md:text-xl text-primary mt-2">{s.title}</h3>
            <p className="font-body text-muted text-sm md:text-base mt-1">{s.sub}</p>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
