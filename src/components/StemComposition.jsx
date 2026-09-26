export default function StemComposition() {
  const stems = [
    { label: "50% Premium Pipe Cleaner Flowers", width: "50%", color: "bg-primary-container" },
    { label: "25% Artistic Paper Flower Arrangements", width: "25%", color: "bg-primary-fixed-dim" },
    { label: "15% Off Selected Favorite Snacks & Treats", width: "15%", color: "bg-tertiary-container" },
    { label: "10% Cute Doll Accessories", width: "10%", color: "bg-secondary-container" },
  ];

  return (
    <section className="w-full bg-surface-container-low py-space-lg">
      <div className="max-w-[1380px] mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-space-md items-center">
          <div className="space-y-0.5">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.16em]">
              Komposisi Karakter
            </span>
            <p className="font-headline-sm text-headline-sm text-on-surface">Palet Elegan &amp; Ceria</p>
          </div>
          <div className="md:col-span-3 space-y-space-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 font-label-sm text-label-sm text-on-surface-variant">
              {stems.map((s) => (
                <span key={s.label}>{s.label}</span>
              ))}
            </div>
            <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden flex">
              {stems.map((s) => (
                <div key={s.label} className={`h-full ${s.color}`} style={{ width: s.width }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}