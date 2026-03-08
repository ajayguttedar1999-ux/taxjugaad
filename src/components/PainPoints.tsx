import ScrollReveal from "./ScrollReveal";

const pains = [
  "Got a tax notice and have no idea why",
  "Earning from Stripe but clueless about GST",
  "Your CA has never heard of YouTube income",
  "Confused about advance tax every quarter",
  "Getting paid in USD — what do you even file?",
  "Built a course — is GST applicable or not?",
];

const PainPoints = () => (
  <section className="py-20 md:py-28">
    <div className="container max-w-[1200px] mx-auto">
      <ScrollReveal className="text-center mb-14">
        <h2 className="font-display font-bold text-[28px] md:text-[44px] text-primary mb-3" style={{ letterSpacing: "-0.02em" }}>
          Sound Familiar?
        </h2>
        <p className="font-body text-muted text-base md:text-lg">You're not alone. We hear this every single day.</p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {pains.map((p, i) => (
          <ScrollReveal key={i} delay={i * 0.08}>
            <div className="bg-card border border-border rounded-2xl p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
              <span className="text-primary font-bold text-lg">✓</span>
              <p className="font-body text-foreground mt-2 text-[15px] md:text-base leading-relaxed">{p}</p>
              <p className="font-body text-primary text-sm font-medium mt-3">We sort this.</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default PainPoints;
