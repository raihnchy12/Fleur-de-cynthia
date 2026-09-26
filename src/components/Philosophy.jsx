const PILLARS = [
  {
    icon: "filter_vintage",
    title: "High-Quality Materials & Built to Last Forever",
    body: "Menggunakan kawat bulu premium, kertas kraf tebal, serta jaminan snack dan boneka bersih berstandar tinggi. Indah dipajang tanpa pernah layu.",
  },
  {
    icon: "stylus_note",
    title: "Fully Customizable Colors & Fillings",
    body: "Pilih sendiri kombinasi warna kawat bulu, variasi snack jajanan favorit, hingga jenis boneka kecil yang ingin dirangkai sesuai selera.",
  },
  {
    icon: "redeem",
    title: "Artisanal Wrapping",
    body: "Kertas wrapping premium bertekstur sutra dan matte ivory, dipadukan aksen pita satin double-face bernuansa hangat.",
  },
];

const STATS = [
  { value: "1,200+", label: "Buket Tersampaikan" },
  { value: "100%", label: "Ulasan Paten Puas" },
  { value: "100% Awet", label: "Tahan Selamanya Tanpa Layu" },
];

export default function Philosophy() {
  return (
    <section id="filosofi" className="w-full py-space-xl bg-surface-container-low/50 relative overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-margin-mobile lg:px-margin space-y-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
          {/* Left: copy + stats */}
          <div className="lg:col-span-5 space-y-space-sm">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em]">
              Filosofi Pengerjaan
            </span>
            <h2 className="font-display text-headline-lg-mobile lg:text-headline-lg text-on-surface leading-tight">
              Sentuhan Rumahan dengan{" "}
              <span className="italic text-primary">Standar Butik</span>
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Berawal dari kecintaan tulus terhadap seni merangkai tangkai bunga, Fleur De Cynthia menghadirkan
              setiap karya bagai sebuah puisi visual. Kami tidak memproduksi secara massal—tiap buket dirangkai
              satu per satu dengan ketelitian estetika tinggi, memastikan pesan emosional Anda tersampaikan
              secara anggun dan tak terlupakan.
            </p>

            <div className="pt-space-xs flex flex-wrap items-center gap-space-md text-on-surface">
              {STATS.map((s, i) => (
                <div key={s.label} className="flex items-center gap-space-md">
                  <div>
                    <p className="font-headline-md text-headline-md text-primary font-bold">{s.value}</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{s.label}</p>
                  </div>
                  {i < STATS.length - 1 && <div className="w-px h-10 bg-outline-variant/30" />}
                </div>
              ))}
            </div>
          </div>

          {/* Right: 3 pillars — SELALU 3 KOLOM horizontal */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-3 gap-2 sm:gap-space-sm lg:gap-space-md">
              {PILLARS.map((p) => (
                <div
                  key={p.title}
                  className="p-2 sm:p-space-sm lg:p-space-md rounded-DEFAULT bg-surface shadow-sm flex flex-col gap-2 lg:gap-space-sm"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-primary-container/20 flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined text-[16px] sm:text-[20px] lg:text-[24px]">
                      {p.icon}
                    </span>
                  </div>
                  <div className="space-y-0.5 lg:space-y-1">
                    <h3 className="font-title-md text-[11px] sm:text-title-md lg:text-title-lg text-on-surface font-semibold leading-tight">
                      {p.title}
                    </h3>
                    <p className="hidden sm:block font-body-sm text-[10px] sm:text-body-sm text-on-surface-variant leading-snug lg:leading-relaxed">
                      {p.body}
                    </p>
                    {/* Versi pendek untuk mobile — biar tetap terbaca */}
                    <p className="sm:hidden font-body-sm text-[9px] text-on-surface-variant leading-tight">
                      {p.body.split(".")[0]}.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}