import { useRef, useEffect, useState, useCallback } from "react";

const REVIEWS = [
  {
    text: "Gak nyangka dapet buket secantik ini! Saya pesan 'Graduation Teddy Bear Bouquet' buat pacar yang wisuda, hasilnya rapi banget dan boneka teddy bear-nya gemes sekali. Wrapping-nya kokoh dan gak gampang lecek saat dibawa-bawa. Bikin foto lulusan jadi makin aesthetic!",
    name: "Nafiatur",
    meta: "@nafi.aturs_23",
  },
  {
    text: "Hasil kraf kawat bulunya bener-bener rapi dan detail! Warnanya cantik banget persis sama yang di foto katalog. Yang paling suka tuh buketnya abadi dan tahan lama, gak perlu takut layu. Worth it banget buat kado spesial!",
    name: "Kiky",
    meta: "@rzky.rizz",
  },
  {
    text: "Awalnya ragu mau order buket kustom, tapi adminnya ramah banget diajak konsultasi. Pengerjaannya presisi, lipatan kertas wrapping-nya simetris dan kombinasi pitanya mewah. Pengemasan aman sampai tujuan tanpa ada yang rusak.",
    name: "Defi",
    meta: "@cahya_aya96",
  },
  {
    text: "Beli 'Velvet Crimson Paper Bloom' buat kado anniversary dan hasilnya memuaskan banget. Ukuran buketnya lumayan gede, bunganya padat, dan warnanya terkesan mahal. Nilai plusnya bunga kraf begini abadi gak bakal layu.",
    name: "Salma",
    meta: "@hwdas26",
  },
  {
    text: "Jujur puas banget sama kualitas pengerjaannya. Buket kawat bulu dan jajanan snack-nya disusun kokoh, gak gampang goyang atau lepas. Pita dan wrapping vellum-nya bikin kelihatan premium walau harganya ramah di kantong.",
    name: "Adel",
    meta: "@dellats_",
  },
  {
    text: "Respon admin sangat cepat dan pengerjaan pre-order tepat waktu sesuai estimasi. Buket sampai dalam kondisi sangat rapi dan mulus. Pasti bakal balik re-order lagi untuk acara wisuda dan ulang tahun berikutnya!",
    name: "April",
    meta: "@apriliadevita_",
  }
];

/* ---------- Konfigurasi Animasi ---------- */
const AUTOPLAY_INTERVAL = 5000;   // jeda antar slide (ms)
const RESUME_DELAY = 3000;        // tunggu sebelum autoplay lanjut setelah user interaksi
const SCROLL_DURATION = 900;      // durasi animasi geser (ms) — makin besar makin lambat/halus

/* ---------- Easing: ease-in-out cubic (halus di awal & akhir) ---------- */
const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export default function Reviews() {
  const scrollerRef = useRef(null);
  const rafRef = useRef(null);              // requestAnimationFrame id
  const resumeTimerRef = useRef(null);      // setTimeout id untuk resume
  const [paused, setPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  /* ---------- Batalkan animasi yang sedang berjalan ---------- */
  const cancelAnimation = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    setIsAnimating(false);
  }, []);

  /* ---------- Custom smooth scroll dengan easing ---------- */
  const smoothScrollTo = useCallback(
    (el, targetLeft, duration = SCROLL_DURATION) => {
      cancelAnimation();
      const start = el.scrollLeft;
      const change = targetLeft - start;
      if (Math.abs(change) < 1) return;

      setIsAnimating(true);
      const startTime = performance.now();

      const step = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        el.scrollLeft = start + change * easeInOutCubic(progress);
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(step);
        } else {
          rafRef.current = null;
          setIsAnimating(false);
        }
      };
      rafRef.current = requestAnimationFrame(step);
    },
    [cancelAnimation]
  );

  /* ---------- Hitung posisi & geser 1 kartu ---------- */
  const scrollByCard = useCallback(
    (direction) => {
      const el = scrollerRef.current;
      if (!el) return;
      const card = el.querySelector("[data-review-card]");
      if (!card) return;

      const gap =
        parseFloat(getComputedStyle(el).columnGap || getComputedStyle(el).gap) || 16;
      const cardWidth = card.offsetWidth + gap;

      const maxScroll = el.scrollWidth - el.clientWidth;
      const maxIndex = Math.round(maxScroll / cardWidth);
      const currentIndex = Math.round(el.scrollLeft / cardWidth);

      let nextIndex = currentIndex + direction;
      if (nextIndex < 0) nextIndex = maxIndex;
      if (nextIndex > maxIndex) nextIndex = 0;

      const targetLeft = Math.min(nextIndex * cardWidth, maxScroll);
      smoothScrollTo(el, targetLeft);
    },
    [smoothScrollTo]
  );

  /* ---------- Autoplay ---------- */
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => scrollByCard(1), AUTOPLAY_INTERVAL);
    return () => clearInterval(id);
  }, [paused, scrollByCard]);

  /* ---------- Pause / Resume ---------- */
  const pauseAutoplay = useCallback(() => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    setPaused(true);
  }, []);

  const scheduleResume = useCallback(() => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => setPaused(false), RESUME_DELAY);
  }, []);

  /* ---------- Bersihkan semua timer / raf saat unmount ---------- */
  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  /* ---------- Handle manual nav button ---------- */
  const handleManualNav = (direction) => {
    pauseAutoplay();
    scrollByCard(direction);
    scheduleResume();
  };

  /* ---------- Saat user menyentuh / scroll manual ---------- */
  const handleUserInteract = () => {
    cancelAnimation();      // stop animasi yang sedang jalan agar tidak "fight"
    pauseAutoplay();
  };

  return (
    <section className="w-full py-space-xl bg-surface-bright border-t border-b border-outline-variant/30">
      <div className="max-w-[1380px] mx-auto px-margin-mobile lg:px-margin space-y-space-lg">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-space-sm">
          <div className="text-center sm:text-left space-y-space-xs">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em]">
              Kesan Pelanggan
            </span>
            <h2 className="font-display text-headline-md text-headline-md text-on-surface">
              Momen Berharga yang Terabadikan
            </h2>
          </div>

          {/* Nav buttons — desktop only */}
          <div className="hidden sm:flex items-center gap-2 self-center sm:self-end">
            <button
              onClick={() => handleManualNav(-1)}
              aria-label="Ulasan sebelumnya"
              className="w-10 h-10 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors shadow-sm active:scale-95"
            >
              <span className="material-symbols-outlined text-[20px]">chevron_left</span>
            </button>
            <button
              onClick={() => handleManualNav(1)}
              aria-label="Ulasan berikutnya"
              className="w-10 h-10 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors shadow-sm active:scale-95"
            >
              <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Horizontal scroller */}
        <div
          ref={scrollerRef}
          onMouseEnter={pauseAutoplay}
          onMouseLeave={scheduleResume}
          onTouchStart={handleUserInteract}
          onTouchEnd={scheduleResume}
          onWheel={handleUserInteract}
          onFocus={pauseAutoplay}
          onBlur={scheduleResume}
          className={`flex gap-3 sm:gap-space-md overflow-x-auto pb-2
            [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
            ${isAnimating ? "" : "snap-x snap-mandatory"}`}
        >
          {REVIEWS.map((r) => (
            <article
              key={r.name}
              data-review-card
              className="snap-start flex-shrink-0
                         w-[calc((100%-1.5rem)/3)] sm:w-[calc((100%-2rem)/3)] lg:w-[calc((100%-3rem)/3)]
                         min-w-[150px]
                         p-3 sm:p-space-md rounded-DEFAULT
                         bg-surface-container-lowest border border-outline-variant/20 shadow-sm
                         flex flex-col gap-2 sm:gap-space-sm"
            >
              <div className="flex text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-[12px] sm:text-[16px] lg:text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>

              <p className="font-body-sm text-[10px] sm:text-body-sm text-on-surface italic leading-snug lg:leading-relaxed flex-1">
                "{r.text}"
              </p>

              <div className="pt-2 sm:pt-space-xs border-t border-outline-variant/10">
                <p className="font-title-md text-[11px] sm:text-title-md text-on-surface font-semibold leading-tight">
                  {r.name}
                </p>
                <p className="font-body-sm text-[9px] sm:text-body-sm text-on-surface-variant truncate">
                  {r.meta}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Hint mobile */}
        <p className="sm:hidden text-center font-body-sm text-[10px] text-on-surface-variant">
          ← Geser untuk melihat ulasan lainnya →
        </p>

      </div>
    </section>
  );
}