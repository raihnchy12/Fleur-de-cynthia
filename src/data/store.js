export const STORE = {
  name: "Fleur De Cynthia",
  tagline: "Artisanal Florist",
  whatsapp: "62882003671855",
  whatsappDisplay: "+62 882-0036-71855",
  instagram: "haiisyinn",
  email: "info@fleurdecynthia.com",
  address: "Dsn. Derman, rt.05, rw.09, Karangmojo, Tasikmadu, Karanganyar, Jawa Tengah",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.19300052376715!2d110.919993109237!3d-7.5653835564897705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a19f93b108f55%3A0xa0d428572abcab13!2s2R%20CELL!5e0!3m2!1sid!2sid!4v1790263045942!5m2!1sid!2sid",
  mapsUrl: "https://maps.app.goo.gl/RMNZf5fqnF4i7ZwY7",
  hoursWeekday: "Senin – Sabtu: 08.00 – 21.00 WIB",
  hoursWeekend: "Minggu & Hari Libur: Pemesanan Online 24 Jam",
};

export const waLink = (msg = "Halo Fleur De Cynthia, saya ingin konsultasi pesanan buket bunga") =>
  `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(msg)}`;