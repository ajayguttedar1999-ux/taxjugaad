import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: "340+", label: "Creators Served" },
  { value: "4.9★", label: "Average Rating" },
  { value: "50+", label: "Tax Notices Resolved" },
  { value: "< 2hrs", label: "Response Time" },
];

const TrustBar = () => (
  <section className="py-12 md:py-16 bg-secondary">
    <div className="container max-w-[1200px] mx-auto">
      <ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-border">
          {stats.map((s) => (
            <div key={s.label} className="text-center px-4">
              <p className="font-display font-bold text-2xl md:text-3xl text-primary">{s.value}</p>
              <p className="font-body text-sm text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default TrustBar;
