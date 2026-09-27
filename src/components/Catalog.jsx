import { useState, useMemo } from "react";
import { products, categories } from "../data/products";
import ProductCard from "./ProductCard";
import { waLink } from "../data/store";

export default function Catalog() {
  const [active, setActive] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 8; // Menampilkan 8 produk per halaman

  // Logika filter mendukung multi-kategori (Array) maupun kategori tunggal (String)
  const filtered = useMemo(
    () =>
      active === "all"
        ? products
        : products.filter((p) =>
          Array.isArray(p.category)
            ? p.category.includes(active)
            : p.category === active
        ),
    [active]
  );

  // Hitung total halaman berdasarkan jumlah produk yang terfilter
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  // Potong array produk untuk menampilkan hanya 8 produk di halaman aktif
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filtered, currentPage]);

  // Reset ke Halaman 1 jika kategori diganti
  const handleCategoryChange = (catId) => {
    setActive(catId);
    setCurrentPage(1);
  };

  // Navigasi halaman + smooth scroll ke bagian atas katalog
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    const catalogElement = document.getElementById("katalog-eksklusif");
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="katalog-eksklusif" className="w-full py-space-xl">
      <div className="max-w-[1380px] mx-auto px-margin-mobile lg:px-margin space-y-space-lg">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-space-xs max-w-2xl mx-auto">
          <div className="flex items-center gap-space-xs text-primary">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" fill="currentColor" r="3" />
              <path
                d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"
                opacity="0.4"
              />
              <path d="M12 5v2m0 10v2M5 12H3m18 0h-2" />
            </svg>
            <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] font-semibold">
              Koleksi Buket Eksklusif
            </span>
          </div>
          <h2 className="font-display text-headline-lg-mobile lg:text-headline-lg text-on-surface tracking-tight">
            Kreasi Unik untuk Setiap Momen Spesial
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Pilihan buket kawat bulu yang menggemaskan, buket bunga kertas
            penuh warna, susunan buket snack jajanan favorit, hingga buket
            dengan karakter boneka kecil yang imut. Dirancang cantik dan
            terjangkau untuk momen wisuda, ulang tahun, anniversary, hingga
            kejutan manis penuh makna.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-space-xs pt-space-xs">
          {categories.map((c) => {
            const isActive = active === c.id;
            return (
              <button
                key={c.id}
                onClick={() => handleCategoryChange(c.id)}
                className={`px-space-md py-1.5 rounded-full font-label-md text-label-md transition-all ${isActive
                    ? "bg-primary-container text-on-primary-container shadow-sm"
                    : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
                  }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Grid (Max 8 Produk Per Halaman) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-space-md lg:gap-gutter pt-space-sm">
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Tombol Paginasi (Slide / Navigasi Halaman) */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 pt-space-md">
            {/* Tombol Prev */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center"
              aria-label="Halaman Sebelumnya"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Nomor Halaman */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full font-label-lg font-semibold text-sm transition-all ${currentPage === pageNum
                    ? "bg-primary-container text-on-primary-container shadow-sm scale-105"
                    : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
                  }`}
              >
                {pageNum}
              </button>
            ))}

            {/* Tombol Next */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center"
              aria-label="Halaman Selanjutnya"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {/* Custom inquiry banner */}
        <div className="p-space-lg rounded-DEFAULT bg-surface-container-low shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-headline-sm text-headline-sm text-on-surface">
              Ingin Paduan Bunga Spesifik atau Anggaran Khusus?
            </h4>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Kami melayani buket kustom dengan pemilihan warna kawat bulu, jenis
              kertas wrapping, dan aksen pita sesuai selera Anda.
            </p>
          </div>
          <a
            href={waLink("Halo kak Cynthia, mau custom buket bunga sesuai budget")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-space-lg py-space-sm rounded-full bg-surface text-primary hover:bg-surface-container font-label-lg text-label-lg shadow-sm transition-all whitespace-nowrap"
          >
            Konsultasi Custom Gratis
          </a>
        </div>
      </div>
    </section>
  );
}