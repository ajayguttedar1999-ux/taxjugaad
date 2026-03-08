import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote: "I was filing my Stripe income wrong for 2 years. TaxJugaad caught it and saved me ₹80,000 in penalties.",
    name: "Arjun R.",
    role: "Business Coach, Bangalore",
  },
  {
    quote: "Finally a CA who knew what Gumroad was without me explaining for 20 minutes.",
    name: "Priya S.",
    role: "Course Creator, Mumbai",
  },
  {
    quote: "Got a GST notice. Resolved in 4 days. These guys are insane.",
    name: "Karan M.",
    role: "Freelance Designer, Delhi",
  },
  {
    quote: "The Creator Club is worth every rupee. My CA replies on WhatsApp same day.",
    name: "Sneha T.",
    role: "Life Coach, Pune",
  },
];

const Testimonials = () => (
  <section className="py-20 md:py-28 bg-secondary">
    <div className="container max-w-[1200px] mx-auto">
      <ScrollReveal className="text-center mb-14">
        <h2 className="font-display font-bold text-[28px] md:text-[44px] text-primary" style={{ letterSpacing: "-0.02em" }}>
          Creators Who Got Sorted
        </h2>
      </ScrollReveal>

      {/* Desktop grid */}
      <div className="hidden md:grid md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <TestimonialCard {...t} />
          </ScrollReveal>
        ))}
      </div>

      {/* Mobile horizontal scroll */}
      <div className="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-5 px-5 scrollbar-hide">
        {testimonials.map((t, i) => (
          <div key={i} className="snap-center shrink-0 w-[85vw]">
            <TestimonialCard {...t} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TestimonialCard = ({ quote, name, role }: { quote: string; name: string; role: string }) => (
  <div className="bg-background border-l-4 border-accent rounded-xl p-6 md:p-8 h-full">
    <p className="font-body text-accent text-sm mb-3">★★★★★</p>
    <p className="font-body text-foreground text-[15px] md:text-base italic leading-relaxed">"{quote}"</p>
    <p className="font-body text-muted text-sm mt-4">— {name}, {role}</p>
  </div>
);

export default Testimonials;
