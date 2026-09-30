export const categories = [
  { id: "all", label: "Semua Rangkaian" },
  { id: "romantis", label: "Hand Bouquet Romantis" },
  { id: "wisuda", label: "Graduation & Wisuda" },
  { id: "gift", label: "Flower Gift Bouquet" },
  { id: "snack", label: "Snack Bouquets" },
];

// ====== Import Gambar Katalog =======
import photoBuketPutih from "../assets/photo-buket-menjalar.jpeg";
import photoBuketBoneka from "../assets/photo-buket-boneka-wisuda.png";
import photoBuketHijab from "../assets/photo-buket-hijab.jpeg";
import photoBuketSnack from "../assets/photo-buket-snack.jpeg";
import photoBuketPinkJajanan from "../assets/photo-buket-pink-jajanan.png";
import photoBuketMerah1 from "../assets/photo-buket-merah.png";
import photoBuketMerah2 from "../assets/photo-buket-merah2.png";
import photoBuketSnackCoklat from "../assets/photo-buket-jajanan.jpeg";
import photoBuketMini from "../assets/photo-buket-mini.jpeg";

// ====== Import Gambar Produk Page 2 ======
import photoBuketWarnaWarni from "../assets/photo-buket-warnawarni.jpeg";
import photoBuketBiru from "../assets/photo-buket-biru.jpeg"




//======= Card Produk =======
export const products = [
  {
    id: 1,
    name: "💐Creamy Bloom Bouquet",
    category: ["romantis", "gift"],
    categoryLabel: "Hand Bouquet Romantis",
    price: 150000,
    badge: "FLOWER FAVORITE",
    badgeVariant: "tertiary",
    description:
      "Buket bunga handmade bernuansa cream, putih, peach, dan cokelat dengan rangkaian bunga yang lembut dan unik. Dibungkus dengan wrapping cream elegan, cocok sebagai hadiah untuk berbagai momen spesial.",
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
    categoryLabel: "Snack Bouquet",
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
    category: ["romantis", "gift"],
    categoryLabel: "Artisanal Paper Series",
    price: 125000,
    badge: "ARTISANAL CRAFT",
    badgeVariant: "primary",
    description:
      "Mahakarya Buket bunga kertas berwarna putih dengan gradasi corak merah yang menawan, dibingkai indah oleh wrapping maroon mewah dan pita satin merah yang mekar. Pilihan kado handcrafted yang unik, elegan, dan abadi untuk merayakan momen spesial.",
    prepTime: "Pre-Order",
    prepTime2: "Harga belum termasuk ongkir",
    image:
      [photoBuketMerah1, photoBuketMerah2],
  },
  {
    id: 7,
    name: "🍫Snack Bouquet – Choco Treats",
    category: "snack",
    categoryLabel: "Snack Bouquet",
    price: 35000,
    badge: "BEST SELLER",
    badgeVariant: "gold",
    description:
      "Buket snack dengan aneka camilan cokelat dan keripik yang dikemas dalam wrapping beige elegan, cocok untuk hadiah sederhana namun tetap berkesan.",
    prepTime: "Pre-Order",
    prepTime2: "Harga belum termasuk ongkir",
    image:
      photoBuketSnackCoklat,
  },
  {
    id: 8,
    name: "🌸 Soft Blush Lily Pipe Cleaner Bouquet",
    category: ["romantis", "gift"],
    categoryLabel: "Artisanal Pipe Cleaner",
    price: 25000,
    badge: "CRAFT FAVORITE",
    badgeVariant: "primary",
    description:
      "Buket kawat bulu bunga lily gradasi pink-putih nan anggun dengan wrapping nude cream elegan, pilihan kado abadi yang cantik untuk setiap momen spesial.",
    prepTime: "Pre-Order",
    prepTime2: "Harga belum termasuk ongkir",
    image:
      photoBuketMini,
  },
  {
    id: 9,
    name: "🌈 Pastel Garden Lily Pipe Cleaner Bouquet",
    category: ["romantis", "gift"],
    categoryLabel: "Artisanal Pipe Cleaner",
    price: 45000,
    badge: "NEW ARRIVAL",
    badgeVariant: "primary",
    description:
      "Buket kawat bulu penuh warna ceria menghadirkan bunga lily pink-putih, sentuhan biru-ungu, dan aksen spiral mint. Dibingkai wrapping kertas kraft natural dengan pita satin putih yang manis, kado unik abadi untuk memeriahkan momen istimewa.",
    prepTime: "Pre-Order",
    prepTime2: "Harga belum termasuk ongkir",
    image: photoBuketWarnaWarni,
  },
  {
    id: 10, // ID urutan ke-10
    name: "💙 Royal Ocean Blue Lily Bouquet",
    category: ["romantis", "wisuda", "gift"],
    categoryLabel: "Hand Bouquet Eksklusif",
    price: 50000,
    badge: "ELEGANT CHOICE",
    badgeVariant: "primary",
    description:
      "Rangkaian buket megah bernuansa biru ocean dengan bunga lily biru-putih dan taburan baby's breath cantik. Dibingkai wrapping mekar biru bertingkat yang mewah, pilihan kado istimewa untuk momen wisuda, anniversary, atau ungkapan kagum.",
    prepTime: "Pre-Order",
    prepTime2: "Harga belum termasuk ongkir",
    image: photoBuketBiru,
  },
];

export const formatRupiah = (n) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);