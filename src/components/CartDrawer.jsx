import { useCart } from "../context/CartContext";
import { formatRupiah } from "../data/products";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    changeQuantity,
    removeFromCart,
    totalPrice,
    checkout,
  } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 z-[200] bg-on-surface/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        aria-hidden={!isOpen}
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-label="Keranjang Belanja"
        className={`fixed top-0 right-0 h-full w-full max-w-[420px] bg-surface-container-lowest z-[201] flex flex-col shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-space-lg border-b border-outline-variant/30 flex items-center justify-between">
          <div>
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em]">
              Keranjang Anda
            </span>
            <h3 className="font-display text-headline-sm text-headline-sm text-on-surface">
              Buket Pilihan
            </h3>
          </div>
          <button
            onClick={closeCart}
            aria-label="Tutup keranjang"
            className="w-9 h-9 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-space-lg space-y-space-md">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-space-sm py-space-xl">
              <span className="material-symbols-outlined text-[56px] text-outline-variant">
                local_florist
              </span>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Keranjang Anda masih kosong.
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant/70">
                Pilih buket favorit dari katalog kami.
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-space-md p-space-sm rounded-DEFAULT bg-surface-container-low/60 border border-outline-variant/20"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-title-md text-title-md text-on-surface font-semibold leading-tight">
                        {item.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        aria-label={`Hapus ${item.name}`}
                        className="text-on-surface-variant hover:text-error transition-colors flex-shrink-0"
                      >
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                      </button>
                    </div>
                    <p className="font-body-sm text-body-sm text-primary font-semibold mt-1">
                      {formatRupiah(item.price)}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-space-sm">
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => changeQuantity(item.id, -1)}
                        aria-label="Kurangi jumlah"
                        className="w-7 h-7 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface transition-colors"
                      >
                        <span className="material-symbols-outlined text-[16px]">remove</span>
                      </button>
                      <span className="w-8 text-center font-title-md text-title-md text-on-surface">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => changeQuantity(item.id, 1)}
                        aria-label="Tambah jumlah"
                        className="w-7 h-7 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface transition-colors"
                      >
                        <span className="material-symbols-outlined text-[16px]">add</span>
                      </button>
                    </div>
                    <p className="font-label-md text-label-md text-on-surface font-semibold">
                      {formatRupiah(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-space-lg border-t border-outline-variant/30 bg-surface-container-low/60 space-y-space-md">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                Total Estimasi
              </span>
              <span className="font-headline-sm text-headline-sm text-primary font-bold">
                {formatRupiah(totalPrice)}
              </span>
            </div>
            <button
              onClick={checkout}
              className="w-full inline-flex items-center justify-center gap-space-xs px-space-md py-3 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-label-lg text-label-lg shadow-sm transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>Pesan via WhatsApp</span>
            </button>
            <p className="text-center font-body-sm text-body-sm text-on-surface-variant">
              Konfirmasi stok &amp; ongkir akan dilakukan via WhatsApp.
            </p>
          </div>
        )}
      </aside>
    </>
  );
}