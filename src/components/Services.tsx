import ScrollReveal from "./ScrollReveal";

const WA_BASE = "https://wa.me/919980591014?text=";
const RZP_CLARITY = "https://rzp.io/rzp/vZ3U9Af";
const RZP_ITR = "https://rzp.io/rzp/TpGJotxZ";
const RZP_CLUB = "https://rzp.io/rzp/SHMdymKm";

const Services = () => (
  <section className="py-20 md:py-28 bg-secondary">
    <div className="container max-w-[1200px] mx-auto">
      <ScrollReveal className="text-center mb-14">
        <h2 className="font-display font-bold text-[28px] md:text-[44px] text-primary mb-3" style={{ letterSpacing: "-0.02em" }}>
          Three Ways We Help
        </h2>
        <p className="font-body text-muted text-base md:text-lg">Pick what fits. No hidden fees. No jargon.</p>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {/* Creator Club — first on mobile via order */}
        <ScrollReveal delay={0.1} className="order-first lg:order-last">
          <div className="relative bg-card border-2 border-primary rounded-2xl p-8 h-full flex flex-col shadow-xl">
            <span className="absolute -top-3 left-8 bg-accent text-foreground text-xs font-body font-semibold px-3 py-1 rounded-full">
              MOST POPULAR
            </span>
            <p className="font-display font-bold text-2xl text-accent">₹1,999<span className="text-base font-body text-muted font-normal">/month</span></p>
            <h3 className="font-display font-bold text-xl text-primary mt-2">Creator Club</h3>
            <p className="font-body text-muted text-[15px] mt-3 leading-relaxed">
              Your CA on WhatsApp. Monthly video call. Tax deadline alerts. Advance tax done. Community access.
            </p>
            <ul className="mt-5 space-y-2 flex-1">
              {[
                "Monthly 30-min CA call",
                "WhatsApp CA access (4hr replies)",
                "All tax deadlines handled",
                "Quarterly advance tax included",
                "200+ creator community access",
                "20% off all one-time services",
              ].map((item) => (
                <li key={item} className="font-body text-sm text-foreground flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span> {item}
                </li>
              ))}
            </ul>
            <a
              href={`${WA_BASE}Hi%20TaxJugaad%2C%20I%20want%20to%20join%20the%20Creator%20Club`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block text-center bg-accent text-foreground font-body font-semibold py-3.5 rounded-xl transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Join the Club →
            </a>
            <p className="text-center text-xs text-muted mt-2 font-body">Cancel anytime. No lock-in.</p>
          </div>
        </ScrollReveal>

        {/* Clarity Call */}
        <ScrollReveal delay={0.2} className="order-2 lg:order-first">
          <div className="bg-card border border-border rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <p className="font-display font-bold text-2xl text-accent">₹999</p>
            <h3 className="font-display font-bold text-xl text-primary mt-2">Clarity Call</h3>
            <p className="font-body text-sm text-muted mt-1">30-minute video call</p>
            <p className="font-body text-muted text-[15px] mt-3 leading-relaxed flex-1">
              Ask your CA anything. Get a written summary after. Follow-up on WhatsApp included.
            </p>
            <p className="font-body text-xs text-muted mt-4">Best for: First-timers, confused about where to start</p>
            <a
              href={`${WA_BASE}Hi%20TaxJugaad%2C%20I%20want%20to%20book%20a%20Clarity%20Call`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block text-center border-2 border-primary text-primary font-body font-semibold py-3.5 rounded-xl transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Book on WhatsApp →
            </a>
          </div>
        </ScrollReveal>

        {/* ITR Filing */}
        <ScrollReveal delay={0.3} className="order-3 lg:order-2">
          <div className="bg-card border border-border rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <p className="font-display font-bold text-2xl text-accent">₹1,999</p>
            <h3 className="font-display font-bold text-xl text-primary mt-2">ITR Filing</h3>
            <p className="font-body text-sm text-muted mt-1">Done in 48 hours</p>
            <p className="font-body text-muted text-[15px] mt-3 leading-relaxed flex-1">
              YouTube, Stripe, freelance, course income — all reconciled and filed correctly.
            </p>
            <p className="font-body text-xs text-muted mt-4">Best for: Creators with multiple income sources</p>
            <a
              href={`${WA_BASE}Hi%20TaxJugaad%2C%20I%20want%20to%20book%20ITR%20Filing`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block text-center border-2 border-primary text-primary font-body font-semibold py-3.5 rounded-xl transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Book on WhatsApp →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default Services;
