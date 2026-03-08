const WA_LINK = "https://wa.me/919980591014?text=Hi%20TaxJugaad%2C%20I%20want%20to%20book%20a%20%E2%82%B9999%20Clarity%20Call";

const MobileStickyBar = () => (
  <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-card shadow-[0_-2px_10px_rgba(0,0,0,0.08)] px-5 py-3">
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full text-center bg-accent text-foreground font-body font-semibold py-3.5 rounded-xl transition-transform duration-300 active:scale-[0.98]"
    >
      Book ₹999 Call →
    </a>
  </div>
);

export default MobileStickyBar;
