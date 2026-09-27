import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { STORE } from "../data/store";
import LogoEmblem from "./LogoEmblem";

const NAV_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#katalog-eksklusif", label: "Katalog Koleksi" },
  { href: "#filosofi", label: "Tentang Rangkaian" },
  { href: "#lokasi-studio", label: "Lokasi & Kontak" },
];

export default function Navbar() {
  const { totalItems, openCart } = useCart();
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      // simple active section detection
      const sections = NAV_ITEMS.map((n) => document.querySelector(n.href)).filter(Boolean);
      const y = window.scrollY + 120;
      let current = "#home";
      for (const s of sections) if (s.offsetTop <= y) current = `#${s.id}`;
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-surface-bright/90 backdrop-blur-md border-b border-outline-variant/30 transition-all duration-300 ${scrolled ? "shadow-sm" : ""
        }`}
    >
      <div className="h-20 max-w-[1380px] mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-4">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
          <div className="shrink-0 flex items-center justify-center">
            <LogoEmblem className="w-9 h-9 sm:w-10 sm:h-10" />
          </div>
          <div className="flex flex-col justify-center min-w-0">
            <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight leading-none group-hover:text-primary transition-colors truncate">
              {STORE.name}
            </span>
            <span className="font-label-sm text-[10px] sm:text-label-sm text-primary uppercase tracking-[0.15em] sm:tracking-[0.2em] mt-0.5 truncate">
              {STORE.tagline}
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-space-xs p-1 rounded-full bg-surface-container-low/60">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`px-space-md py-space-xs rounded-full font-label-lg text-label-lg transition-all ${isActive
                    ? "bg-primary-container text-on-primary-container font-semibold shadow-sm"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
                  }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-space-sm shrink-0">
          <button
            aria-label="Keranjang Belanja"
            onClick={openCart}
            className="relative p-space-sm rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 rounded-full bg-primary text-on-primary font-label-sm text-[9px] flex items-center justify-center font-bold shadow-sm">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}