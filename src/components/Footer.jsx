import LogoEmblem from "./LogoEmblem";
import { STORE, waLink } from "../data/store";

export default function Footer() {
  return (
    <footer id="kontak" className="w-full bg-surface-container-lowest border-t border-outline-variant/40 pt-space-xl pb-space-lg">
      <div className="max-w-[1380px] mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-lg lg:gap-gutter pb-space-xl border-b border-outline-variant/20">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-space-md">
            <div className="flex items-center gap-space-sm">
              <LogoEmblem className="h-7 w-auto" />
              <span className="font-headline-sm text-headline-sm text-on-surface">{STORE.name}</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm leading-relaxed">
              Atelier kerajinan tangan yang menghadirkan kreasi buket kawat bulu (pipe cleaner) artisanal dan kado unik tahan lama, dirangkai dengan teliti untuk mengabadikan setiap momen berharga Anda.
            </p>
            <div className="flex items-center gap-space-md pt-space-xs">
              {/* Logo Instagram */}
              <a
                aria-label="Instagram"
                href={`https://instagram.com/${STORE.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-surface-container-high text-on-surface hover:text-[#E4405F] hover:bg-surface-container-highest transition-colors flex items-center justify-center"
              >
                <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Logo WhatsApp */}
              <a
                aria-label="WhatsApp"
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-surface-container-high text-on-surface hover:text-[#25D366] hover:bg-surface-container-highest transition-colors flex items-center justify-center"
              >
                <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>

              {/* Logo Email / Gmail */}
              {/* <a
                aria-label="Email"
                href={`mailto:${STORE.email}`}
                className="p-2.5 rounded-full bg-surface-container-high text-on-surface hover:text-[#EA4335] hover:bg-surface-container-highest transition-colors flex items-center justify-center"
              >
                <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a> */}
            </div>
          </div>

          {/* Nav */}
          <div className="lg:col-span-2 space-y-space-sm">
            <h3 className="font-title-md text-title-md text-on-surface">Atelier Navigasi</h3>
            <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <a className="hover:text-primary transition-colors" href="#katalog-eksklusif">
                  Koleksi Craft Musim Ini
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#katalog-eksklusif">
                  Buket Wisuda & Momen Spesial
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#filosofi">
                  Artisanal Pipe Cleaner
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#lokasi-studio">
                  Panduan Perawatan Buket Abadi
                </a>
              </li>
            </ul>
          </div>

          {/* Studio */}
          <div className="lg:col-span-3 space-y-space-sm">
            <h3 className="font-title-md text-title-md text-on-surface">Studio Karanganyar</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Dsn. Derman, rt.05, rw.09, Karangmojo, Tasikmadu, Karanganyar, Jawa Tengah
              <br />
              Indonesia
            </p>
            <div className="pt-space-xs">
              <span className="font-label-sm text-label-sm text-primary uppercase">
                Jam Pemesanan Atelier
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {STORE.hoursWeekday}
                <br />

              </p>
            </div>
          </div>

          {/* Inquiry card */}
          <div className="lg:col-span-3 space-y-space-md">
            <div className="p-space-md rounded-DEFAULT bg-surface border border-outline-variant/40 space-y-space-xs">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.14em]">
                Bespoke Inquiry
              </span>
              <h4 className="font-title-md text-title-md text-on-surface">Private Floral Consultation</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Merancang instalasi floral untuk perayaan agung atau hadiah personal dengan kurasi kurator
                kami.
              </p>
              <a
                href={waLink("Halo, saya ingin private floral consultation")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-space-xs font-label-lg text-label-lg text-primary hover:text-on-primary-fixed-variant transition-colors pt-space-xs"
              >
                <span>Mulai Konsultasi</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-sm text-on-surface-variant font-body-sm text-body-sm">
          <p>© 2025 {STORE.name} Artisanal Florist. Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-space-md">
            <a className="hover:text-primary transition-colors" href="#">Privasi Konsumen</a>
            <span className="text-outline-variant">•</span>
            <a className="hover:text-primary transition-colors" href="#">Ketentuan Pemesanan</a>
            <span className="text-outline-variant">•</span>
            <a className="hover:text-primary transition-colors" href="#">Jaminan Presisi & Rapi</a>
          </div>
        </div>
      </div>
    </footer>
  );
}