import { useState } from "react";
import { formatRupiah } from "../data/products";
import { useCart } from "../context/CartContext";

const BADGE_STYLES = {
  gold: "bg-primary-container text-on-primary-container",
  sage: "bg-secondary-container text-on-secondary-container",
  tertiary: "bg-tertiary-container text-on-tertiary-container",
  muted: "bg-surface-container-high text-on-surface-variant",
  primary: "bg-primary text-on-primary",
};

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Normalisasi gambar: jika berupa array gunakan langsung, jika string jadikan array 1 elemen
  const imageList = Array.isArray(product.image)
    ? product.image
    : [product.image];

  const badgeClass = BADGE_STYLES[product.badgeVariant] || BADGE_STYLES.muted;

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const nextSlide = (e) => {
    e.stopPropagation(); // Mencegah modal terbuka saat tombol slide diklik
    setCurrentSlide((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e) => {
    e.stopPropagation(); // Mencegah modal terbuka saat tombol slide diklik
    setCurrentSlide((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  };

  return (
    <>
      <article className="p-2 sm:p-space-sm rounded-DEFAULT bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
        <div className="space-y-2 sm:space-y-space-sm">
          {/* Image & Slider pada Kartu Luar */}
          <div
            onClick={handleOpenModal}
            className="relative w-full aspect-[4/5] rounded-[0.6rem] sm:rounded-[0.85rem] overflow-hidden bg-surface-container cursor-pointer group/img"
          >
            <img
              src={imageList[currentSlide]}
              alt={product.name}
              loading="lazy"
              className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
            />

            {/* Tombol Panah Slide di Luar (Hanya tampil jika gambar > 1) */}
            {imageList.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-1.5 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors flex items-center justify-center backdrop-blur z-10 text-xs"
                  aria-label="Foto Sebelumnya"
                >
                  ❮
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors flex items-center justify-center backdrop-blur z-10 text-xs"
                  aria-label="Foto Selanjutnya"
                >
                  ❯
                </button>

                {/* Dots Indikator di Kartu Luar */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 z-10">
                  {imageList.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentSlide(idx);
                      }}
                      className={`h-1.5 rounded-full transition-all ${idx === currentSlide
                        ? "w-4 bg-white"
                        : "w-1.5 bg-white/50"
                        }`}
                    />
                  ))}
                </div>
              </>
            )}

            <div
              className={`absolute top-1.5 left-1.5 sm:top-3 sm:left-3 px-2 py-0.5 sm:px-space-sm rounded-full font-label-sm text-[8px] sm:text-label-sm shadow-sm ${badgeClass}`}
            >
              {product.badge}
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation(); // Mencegah modal terbuka saat klik favorit
              }}
              aria-label="Simpan favorit"
              className="absolute top-1.5 right-1.5 sm:top-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-surface/80 backdrop-blur flex items-center justify-center text-on-surface hover:text-primary transition-colors z-10"
            >
              <span className="material-symbols-outlined text-[14px] sm:text-[18px]">
                favorite
              </span>
            </button>
          </div>

          {/* Info */}
          <div className="space-y-1 px-0.5 sm:px-1">
            <span className="block font-label-sm text-[9px] sm:text-label-sm text-primary uppercase tracking-wider truncate">
              {product.categoryLabel}
            </span>
            <h3
              onClick={handleOpenModal}
              className="font-headline-sm text-[14px] sm:text-headline-sm text-on-surface group-hover:text-primary transition-colors leading-tight line-clamp-2 cursor-pointer"
            >
              {product.name}
            </h3>
            <p className="hidden sm:block font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
              {product.description}
            </p>
            <p className="font-title-md text-[14px] sm:text-title-lg text-on-surface font-bold pt-0.5">
              {formatRupiah(product.price)}
            </p>
          </div>
        </div>

        {/* Actions (Kartu Utama) */}
        <div className="pt-2 sm:pt-space-md px-0.5 sm:px-1 flex flex-col gap-2">
          {/* Info Estimasi & Ongkir (Muncul di semua ukuran layar) */}
          <div className="flex flex-col gap-0.5 text-on-surface-variant font-body-sm text-[9px] sm:text-[11px] leading-tight">
            {/* Baris 1: Jam (Pre-Order) */}
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[12px] sm:text-[15px] text-primary">
                schedule
              </span>
              <span className="truncate">{product.prepTime}</span>
            </div>

            {/* Baris 2: Info (Ongkir) */}
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[12px] sm:text-[15px] text-primary">
                info
              </span>
              <span className="truncate">{product.prepTime2}</span>
            </div>
          </div>

          {/* Tombol Keranjang */}
          <button
            onClick={() => addToCart(product.id)}
            className="w-full inline-flex items-center justify-center gap-1 px-2 py-1.5 sm:px-space-md rounded-full bg-primary-container text-on-primary-container font-label-md text-[10px] sm:text-label-md hover:bg-primary hover:text-on-primary transition-colors"
          >
            <span className="material-symbols-outlined text-[14px]">
              add_shopping_cart
            </span>
            <span>+ Keranjang</span>
          </button>
        </div>
      </article>

      {/* MODAL FOTO FULL + SLIDER + DESKRIPSI */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-surface-container-lowest rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol Tutup (X) */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-surface-container-high/80 text-on-surface hover:bg-surface-container-highest flex items-center justify-center font-bold text-sm transition-colors backdrop-blur"
            >
              ✕
            </button>

            {/* Container Gambar / Slide Modal */}
            <div className="relative w-full bg-black/5 flex items-center justify-center p-2 overflow-hidden max-h-[60vh]">
              <img
                src={imageList[currentSlide]}
                alt={`${product.name} - foto ${currentSlide + 1}`}
                className="w-auto h-auto max-w-full max-h-[58vh] object-contain rounded-lg transition-all duration-300"
              />

              {/* Tampilkan Tombol Panah Kiri & Kanan jika gambar lebih dari 1 */}
              {imageList.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors flex items-center justify-center backdrop-blur z-10"
                    aria-label="Foto Sebelumnya"
                  >
                    ❮
                  </button>

                  <button
                    onClick={nextSlide}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors flex items-center justify-center backdrop-blur z-10"
                    aria-label="Foto Selanjutnya"
                  >
                    ❯
                  </button>

                  {/* Indicator Dots Modal */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
                    {imageList.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentSlide(idx);
                        }}
                        className={`h-2 rounded-full transition-all ${idx === currentSlide
                          ? "w-5 bg-white"
                          : "w-2 bg-white/50"
                          }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Area Deskripsi */}
            <div className="p-4 sm:p-5 overflow-y-auto border-t border-surface-container-high">
              <h3 className="font-bold text-base sm:text-lg text-on-surface mb-2">
                {product.name}
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}