import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StemComposition from "./components/StemComposition";
import Catalog from "./components/Catalog";
import Philosophy from "./components/Philosophy";
import StudioInfo from "./components/StudioInfo";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-surface font-body-md text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
        <Navbar />
        <main className="w-full pt-20 bg-surface min-h-screen">
          <Hero />
          <StemComposition />
          <Catalog />
          <Philosophy />
          <Reviews />
          <StudioInfo />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}