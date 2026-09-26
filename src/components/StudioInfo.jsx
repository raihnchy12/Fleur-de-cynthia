import { STORE, waLink } from "../data/store";

export default function StudioInfo() {
  return (
    <section id="lokasi-studio" className="w-full py-space-xl">
      <div className="max-w-[1380px] mx-auto px-margin-mobile lg:px-margin">
        {/* ====== CONTAINER: INFO (LEBAR) + MAP (KOTAK KECIL) ====== */}
        <div className="rounded-DEFAULT bg-surface-container-low shadow-sm overflow-hidden grid grid-cols-5 lg:grid-cols-12">

          {/* ---------- KIRI: INFO RUMAH BUNGA ---------- */}
          <div className="col-span-3 lg:col-span-8 p-space-sm sm:p-space-md lg:p-space-lg flex flex-col gap-space-sm sm:gap-space-md lg:gap-space-lg border-r border-outline-variant/30">

            {/* Header */}
            <div className="space-y-1 sm:space-y-2">
              <span className="font-label-sm text-[9px] sm:text-label-sm text-primary uppercase tracking-[0.14em] sm:tracking-[0.2em]">
                Studio &amp; Workshop
              </span>
              <h2 className="font-display text-[15px] sm:text-headline-sm lg:text-headline-lg text-on-surface leading-tight">
                Informasi Rumah Bunga
              </h2>
              <p className="hidden sm:block font-body-sm lg:font-body-md text-on-surface-variant leading-snug lg:leading-relaxed">
                Kunjungi atelier kami untuk konsultasi langsung atau pemesanan buket spesial.
              </p>
            </div>

            {/* Detail items */}
            <div className="flex flex-col gap-space-sm sm:gap-space-md lg:grid lg:grid-cols-3 lg:gap-space-lg pt-space-xs">
              {[
                { icon: "location_on", title: "Alamat Atelier", body: STORE.address },
                {
                  icon: "schedule",
                  title: "Jam Buka Workshop",
                  body: (
                    <>
                      {STORE.hoursWeekday}
                      <br />
                      <em className="not-italic opacity-80">{STORE.hoursWeekend}</em>
                    </>
                  ),
                },
                {
                  icon: "call",
                  title: "Hubungi Langsung",
                  body: (
                    <>
                      WhatsApp: {STORE.whatsappDisplay}
                      <br />
                      Instagram: @{STORE.instagram}
                    </>
                  ),
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-2 lg:gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-[16px] sm:text-[20px] lg:text-[22px] mt-0.5 flex-shrink-0">
                    {item.icon}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-title-md text-[11px] sm:text-title-md text-on-surface font-semibold mb-0.5 lg:mb-1 leading-tight">
                      {item.title}
                    </h3>
                    <p className="font-body-sm text-[10px] sm:text-body-sm text-on-surface-variant leading-snug lg:leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA konsultasi */}
            <div className="p-2 sm:p-space-md lg:p-space-lg rounded-DEFAULT bg-surface shadow-sm space-y-1 lg:space-y-space-xs mt-auto">
              <div className="flex items-center gap-1 text-primary font-label-sm text-[8px] sm:text-label-sm uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                <span className="truncate">Konsultasi Cepat</span>
              </div>
              <h3 className="font-title-md text-[11px] sm:text-title-lg text-on-surface font-semibold leading-tight">
                Ingin Rangkaian Custom?
              </h3>
              <p className="hidden sm:block font-body-sm lg:font-body-md text-on-surface-variant leading-relaxed">
                Konsultasikan buket impian Anda langsung dengan florist utama kami Cynthia melalui WhatsApp.
              </p>
              <div className="pt-1 lg:pt-space-sm">
                <a
                  href={waLink("Halo Cynthia, saya ingin konsultasi rangkaian custom")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full lg:w-auto inline-flex items-center justify-center gap-1 px-2 sm:px-space-md lg:px-space-lg py-1.5 sm:py-2.5 rounded-full bg-primary text-on-primary font-label-md text-[9px] sm:text-label-md shadow-sm hover:opacity-95 transition-all"
                >
                  <span className="material-symbols-outlined text-[12px] sm:text-[16px]">chat</span>
                  <span className="truncate">Chat Cynthia</span>
                </a>
              </div>
            </div>
          </div>

          {/* ---------- KANAN: MAP KOTAK (ASPECT SQUARE) ---------- */}
          <div className="col-span-2 lg:col-span-4 p-space-sm sm:p-space-md lg:p-space-lg flex items-center justify-center bg-surface-container-low">

            {/* Wrapper kotak — tinggi = lebar */}
            <div className="relative w-full aspect-square rounded-DEFAULT overflow-hidden shadow-sm bg-surface-container">

              <iframe
                title="Lokasi Fleur De Cynthia"
                src={STORE.mapsEmbedUrl}
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />

              {/* Badge lokasi */}
              <div className="absolute top-1.5 left-1.5 lg:top-3 lg:left-3 p-1 lg:p-2 rounded-md lg:rounded-lg bg-surface-bright/95 backdrop-blur-md shadow-md max-w-[90%] pointer-events-none">
                <div className="flex items-center gap-0.5 lg:gap-1 text-primary">
                  <span className="material-symbols-outlined text-[10px] lg:text-[14px]">pin_drop</span>
                  <span className="font-label-sm text-[7px] lg:text-label-sm uppercase font-bold tracking-wider truncate">
                    {STORE.name}
                  </span>
                </div>
                <p className="hidden lg:block font-body-sm text-body-sm text-on-surface-variant">
                  Pusat Seni Buket Karanganyar
                </p>
              </div>

              {/* Tombol arah */}
              <div className="absolute bottom-1.5 right-1.5 lg:bottom-3 lg:right-3">
                <a
                  href={STORE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-0.5 lg:gap-1 p-1.5 lg:px-space-sm lg:py-1.5 rounded-full bg-surface-bright text-on-surface hover:text-primary font-label-md text-[9px] lg:text-label-md shadow-md transition-colors"
                  title="Buka di Google Maps"
                >
                  <span className="material-symbols-outlined text-[12px] lg:text-[14px]">directions</span>
                  <span className="hidden lg:inline">Petunjuk Arah</span>
                </a>
              </div>

            </div>
          </div>

        </div>
        {/* ====== END CONTAINER ====== */}
      </div>
    </section>
  );
}