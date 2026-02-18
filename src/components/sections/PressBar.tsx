export default function PressBar() {
  const outlets = [
    "Il Sole 24 Ore",
    "Forbes Italia",
    "Wired Italia",
    "StartupItalia",
    "Corriere della Sera",
    "Milano Finanza",
  ];

  return (
    <section className="py-12 border-t border-border">
      <div className="max-w-site mx-auto px-6">
        <p className="text-center text-[11px] font-semibold text-secondary/40 uppercase tracking-[0.2em] mb-8">
          Ne hanno parlato
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {outlets.map((name) => (
            <span
              key={name}
              className="text-[17px] md:text-[19px] font-bold text-dark/15 tracking-tight select-none"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
