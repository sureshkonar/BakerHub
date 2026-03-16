export type ProductCategory =
  | "Cakes"
  | "Pastries"
  | "Cupcakes"
  | "Breads"
  | "Custom Cakes";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: ProductCategory;
  description: string;
  image: string;
  availableToday?: boolean;
  bestSeller?: boolean;
};

export type GalleryItem = {
  id: string;
  title: string;
  image: string;
  caption: string;
};

export type Testimonial = {
  id: string;
  name: string;
  quote: string;
};

export const categories: ProductCategory[] = [
  "Cakes",
  "Pastries",
  "Cupcakes",
  "Breads",
  "Custom Cakes",
];

export const products: Product[] = [
  {
    id: "p1",
    name: "Red Velvet Cake",
    price: 850,
    category: "Cakes",
    description: "Silky cream cheese frosting and deep cocoa notes.",
    image: "/images/red-velvet.svg",
    availableToday: true,
    bestSeller: true,
  },
  {
    id: "p2",
    name: "Chocolate Fudge Cake",
    price: 950,
    category: "Cakes",
    description: "Dark chocolate layers with glossy ganache.",
    image: "/images/choco-fudge.svg",
    availableToday: true,
    bestSeller: true,
  },
  {
    id: "p3",
    name: "Butter Croissant",
    price: 120,
    category: "Pastries",
    description: "Flaky, buttery, and baked fresh every morning.",
    image: "/images/croissant.svg",
    availableToday: true,
  },
  {
    id: "p4",
    name: "Caramel Cupcake",
    price: 140,
    category: "Cupcakes",
    description: "Salted caramel swirl with vanilla bean frosting.",
    image: "/images/cupcake.svg",
  },
  {
    id: "p5",
    name: "Sourdough Loaf",
    price: 180,
    category: "Breads",
    description: "Crackling crust with a soft, tangy center.",
    image: "/images/sourdough.svg",
  },
  {
    id: "p6",
    name: "Custom Celebration Cake",
    price: 1600,
    category: "Custom Cakes",
    description: "Tailored flavors and designs for your event.",
    image: "/images/custom-cake.svg",
    bestSeller: true,
  },
];

export const freshBatch = [
  {
    id: "f1",
    title: "Fresh Croissants",
    image: "/images/croissant.svg",
  },
  {
    id: "f2",
    title: "Red Velvet Cake",
    image: "/images/red-velvet.svg",
  },
  {
    id: "f3",
    title: "Chocolate Muffins",
    image: "/images/choco-muffin.svg",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Birthday Cakes",
    image: "/images/gallery-birthday.svg",
    caption: "Whipped cream florals and gold accents.",
  },
  {
    id: "g2",
    title: "Wedding Cakes",
    image: "/images/gallery-wedding.svg",
    caption: "Elegant tiers for once-in-a-lifetime moments.",
  },
  {
    id: "g3",
    title: "Cupcake Boxes",
    image: "/images/gallery-cupcakes.svg",
    caption: "Hand-piped frostings with seasonal toppings.",
  },
  {
    id: "g4",
    title: "Fresh Breads",
    image: "/images/gallery-breads.svg",
    caption: "Warm loaves baked to golden perfection.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Priya S.",
    quote: "The red velvet cake was the softest I've tasted in Tirunelveli!",
  },
  {
    id: "t2",
    name: "Karthik M.",
    quote: "Perfectly balanced sweetness and gorgeous presentation.",
  },
  {
    id: "t3",
    name: "Asha R.",
    quote: "The croissants were warm, flaky, and absolutely addictive.",
  },
];
