import { createContext, useContext, useState, useMemo, useCallback, useEffect } from "react";
import { products, formatRupiah } from "../data/products";
import { STORE } from "../data/store";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = useCallback((productId) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === productId);
      if (existing) {
        return prev.map((i) =>
          i.id === productId ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      const product = products.find((p) => p.id === productId);
      return product ? [...prev, { ...product, quantity: 1 }] : prev;
    });
    setIsOpen(true);
  }, []);

  const changeQuantity = useCallback((productId, delta) => {
    setItems((prev) =>
      prev
        .map((i) => (i.id === productId ? { ...i, quantity: i.quantity + delta } : i))
        .filter((i) => i.quantity > 0)
    );
  }, []);

  const removeFromCart = useCallback(
    (productId) => setItems((prev) => prev.filter((i) => i.id !== productId)),
    []
  );

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  );
  const totalPrice = useMemo(
    () => items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [items]
  );

  const checkout = useCallback(() => {
    if (items.length === 0) return;
    const lines = items
      .map(
        (i, idx) =>
          `${idx + 1}. *${i.name}*\n   Jumlah: ${i.quantity} x ${formatRupiah(
            i.price
          )}\n   Subtotal: ${formatRupiah(i.price * i.quantity)}`
      )
      .join("\n\n");
    const total = formatRupiah(totalPrice);
    const message =
      `Halo *${STORE.name}*, saya ingin memesan buket bunga berikut:\n\n` +
      `${lines}\n\n*Total Pembelian:* ${total}\n\n` +
      `Mohon info ketersediaan stok dan koordinasi pengiriman. Terima kasih!`;
    window.open(
      `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  }, [items, totalPrice]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const value = {
    items,
    isOpen,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    addToCart,
    changeQuantity,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice,
    checkout,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart harus dipakai dalam CartProvider");
  return ctx;
}