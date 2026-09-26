export const categories = [
  { id: "all", label: "Semua Rangkaian" },
  { id: "romantis", label: "Hand Bouquet Romantis" },
  { id: "wisuda", label: "Graduation & Wisuda" },
  { id: "gift", label: "Hijab Flower Gift Bouquet" },
  { id: "snack", label: "Snack Bouquets" },
];

// ====== Import Gambar Katalog =======
import photoBuketPutih from "../assets/photo-buket-bunga-putih.png";
import photoBuketBoneka from "../assets/photo-buket-boneka-wisuda.png";
import photoBuketHijab from "../assets/photo-buket-hijab.jpeg";
import photoBuketSnack from "../assets/photo-buket-snack.jpeg";
import photoBuketPinkJajanan from "../assets/photo-buket-pink-jajanan.png";
import photoBuketMerah1 from "../assets/photo-buket-merah.png";
import photoBuketMerah2 from "../assets/photo-buket-merah2.png";


//======= Card Produk =======
export const products = [
  {
    id: 1,
    name: "💐Pastel Blue Bouquet – Elegant Cream",
    category: "romantis",
    categoryLabel: "Hand Bouquet Romantis",
    price: 385000,
    badge: "BEST SELLER",
    badgeVariant: "gold",
    description:
      "Buket cantik dengan perpaduan biru pastel, putih, dan cream yang lembut. Dilengkapi wrapping elegan dan pita putih, cocok menjadi hadiah manis untuk menyampaikan kasih sayang dan ucapan spesial.",
    prepTime: "Pre-Order",
    prepTime2: "Harga belum termasuk ongkir",
    image: photoBuketPutih, // 2. Pakai variabel import di sini
  },
  {
    id: 2,
    name: "🎓 Graduation Teddy Bear Bouquet",
    category: "wisuda",
    categoryLabel: "Graduation & Wisuda",
    price: 75000,
    badge: "WISUDA FAVORIT",
    badgeVariant: "sage",
    description:
      "Buket bunga bernuansa merah, pink, dan putih yang dipadukan dengan boneka teddy bear mengenakan topi dan pakaian wisuda, menciptakan tampilan yang manis, elegan, dan penuh makna.",
    prepTime: "Pre-Order",
    prepTime2: "Harga belum termasuk ongkir",
    image:
      photoBuketBoneka,
  },
  {
    id: 3,
    name: "🎀Buket Hijab Flower – Pink Bloom",
    category: "gift",
    categoryLabel: "Hijab Flower Gift Bouquet",
    price: 85000,
    badge: "LIMITED EDITION",
    badgeVariant: "muted",
    description:
      "Buket hijab cantik yang dibentuk menyerupai bunga dengan perpaduan warna pink, putih, dan maroon. Dilengkapi bunga dekoratif dan wrapping elegan, cocok sebagai hadiah untuk orang tersayang di berbagai momen spesial.",
    prepTime: "Pre-Order",
    prepTime2: "Harga belum termasuk ongkir",
    image:
      photoBuketHijab,
  },
  {
    id: 4,
    name: "✨Pink Blossom Snack Bouquet",
    category: "snack",
    categoryLabel: "Bespoke",
    price: 70000,
    badge: "SWEET BLOOM",
    badgeVariant: "tertiary",
    description:
      "Buket snack manis bernuansa soft pink dan transparan lis emas, memadukan aneka jajanan cokelat dengan aksen pita mekar yang manis. Pilihan hadiah cantik dan ceria untuk menyempurnakan momen istimewa.",
    prepTime: "Pre-Order",
    prepTime2: "Harga belum termasuk ongkir",
    image: photoBuketPinkJajanan,
  },
  {
    id: 5,
    name: "🎓The Nude Graduation Bouquet",
    category: ["wisuda", "snack"],
    categoryLabel: "Graduation & Wisuda",
    price: 45000,
    badge: "WISUDA FAVORITE",
    badgeVariant: "sage",
    description:
      "Buket snack wisuda anggun bernuansa nude cream dengan aksen kain tile dan pita satin elegan. Dilengkapi kartu ucapan serta topper wisudawan, cocok untuk pemanis foto kelulusan.",
    prepTime: "Pre-Order",
    prepTime2: "Harga belum termasuk ongkir",
    image:
      photoBuketSnack,
  },
  {
    id: 6,
    name: "🌺Velvet Crimson Paper Bloom",
    category: "romantis",
    categoryLabel: "Artisanal Paper Series",
    price: 680000,
    badge: "ARTISANAL CRAFT",
    badgeVariant: "primary",
    description:
      "Mahakarya Buket bunga kertas berwarna putih dengan gradasi corak merah yang menawan, dibingkai indah oleh wrapping maroon mewah dan pita satin merah yang mekar. Pilihan kado handcrafted yang unik, elegan, dan abadi untuk merayakan momen spesial.",
    prepTime: "Pre-Order",
    prepTime2: "Harga belum termasuk ongkir",
    image:
      [photoBuketMerah1, photoBuketMerah2],
  },
];

export const formatRupiah = (n) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);