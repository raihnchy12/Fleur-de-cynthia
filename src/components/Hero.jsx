import { STORE, waLink } from "../data/store";
import heroBouquetImage from "../assets/photo-buket-boneka-wisuda.jpeg";

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden pb-space-xl pt-space-md lg:pt-space-lg">
      {/* Ambient glows */}
      <div className="absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-primary-fixed/20 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-secondary-fixed/30 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1380px] mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-gutter items-center">
          {/* Left Copy */}
          <div className="lg:col-span-6 space-y-space-md lg:space-y-space-lg">

            <div className="space-y-space-xs">
              <h1 className="font-display text-display-lg-mobile lg:text-display-lg text-on-surface tracking-tight leading-[1.08]">
                Rangkaian Bunga{" "}
                <span className="italic font-normal text-primary">Autentik</span>{" "}
                &amp; Menawan untuk Momen Berharga
              </h1>
              <p className="font-body-md lg:font-body-lg text-on-surface-variant max-w-xl pt-space-xs leading-relaxed">
                Setiap buket dirangkai penuh dedikasi menggunakan kawat bulu (pipe cleaner) berkualitas tinggi, memadukan keunikan seni kraf tangan yang rapi dengan sentuhan warna nan abadi tanpa pernah layu.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-full bg-gradient-to-r from-primary-container via-primary to-on-primary-fixed-variant text-on-primary font-label-lg text-label-lg shadow-md hover:shadow-lg hover:opacity-95 active:scale-[0.98] transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Pesan via WhatsApp</span>
              </a>
              <a
                href="#katalog-eksklusif"
                className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-full bg-surface-container-low text-on-surface hover:bg-surface-container font-label-lg text-label-lg shadow-sm transition-all"
              >
                <span>Lihat Katalog Koleksi</span>
                <span className="material-symbols-outlined text-[16px]">south</span>
              </a>
            </div>

            {/* Trust badges */}
            <div className="pt-space-md grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
              {[
                { icon: "nest_eco_leaf", title: "100% Buatan Tangan", sub: "Detail presisi & rapi" },
                { icon: "auto_awesome", title: "Bespoke Wrapping", sub: "Satin & ivory vellum" },
                { icon: "local_shipping", title: "Area Karanganyar & Sekitarnya", sub: "Same-day delivery aman" },
              ].map((b) => (
                <div
                  key={b.title}
                  className="p-space-sm rounded-DEFAULT bg-surface-container-low shadow-sm flex items-center gap-space-xs"
                >
                  <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined text-[18px]">{b.icon}</span>
                  </span>
                  <div className="min-w-0">
                    <p className="font-label-md text-label-md text-on-surface font-semibold truncate">{b.title}</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant truncate">{b.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-[3rem] p-space-sm bg-surface-container-lowest shadow-xl overflow-hidden group">
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative">
                <img
                  src={heroBouquetImage}
                  alt="Graduation Teddy Bear Bouquet"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 via-transparent to-transparent" />

                {/* Floating Overlay - Dibuat Lebih Ringkas & Minimalis */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 sm:p-3 rounded-2xl bg-surface-bright/90 backdrop-blur-md shadow-md flex items-center justify-between gap-2">
                  <div className="space-y-0.5 min-w-0">
                    <div className="flex items-center gap-1 text-primary">
                      <span
                        className="material-symbols-outlined text-[13px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        hotel_class
                      </span>
                      <span className="font-label-sm text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold truncate">
                        Buket Terfavorit
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-[13px] sm:text-headline-sm text-on-surface leading-tight truncate">
                      Graduation Teddy Bear
                    </h3>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="block font-label-sm text-[8px] sm:text-[9px] text-on-surface-variant uppercase">
                      Mulai Dari
                    </span>
                    <p className="font-title-lg text-[13px] sm:text-title-lg text-primary font-bold">
                      Rp 75.000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}