import { Product } from "@/types/product";

// Estos productos son solo de ejemplo, para que puedas ver el catálogo
// funcionando antes de conectar y cargar tu base real en Supabase.
// Una vez que definas NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY
// en .env.local, este archivo deja de usarse.
export const sampleProducts: Product[] = [
  {
    id: "s1",
    name: "Vaso térmico 8oz",
    category: "Vasos",
    description: "Vaso de cartón térmico apto café caliente, pack x50.",
    public_price: 4200,
    wholesale_price: 3400,
    photo_url: null,
    stock: 120,
  },
  {
    id: "s2",
    name: "Caja autoarmable 30x20x15",
    category: "Cajas",
    description: "Cartón corrugado doble, ideal envíos.",
    public_price: 850,
    wholesale_price: 620,
    photo_url: null,
    stock: 300,
  },
  {
    id: "s3",
    name: "Film strech 45cm",
    category: "Embalaje",
    description: "Rollo 45cm x 300m, uso industrial.",
    public_price: 5600,
    wholesale_price: 4700,
    photo_url: null,
    stock: 40,
  },
  {
    id: "s4",
    name: "Bolsa papel kraft mediana",
    category: "Bolsas",
    description: "Pack x100, con manija plana.",
    public_price: 3900,
    wholesale_price: 3100,
    photo_url: null,
    stock: 80,
  },
  {
    id: "s5",
    name: "Cinta de embalar transparente",
    category: "Embalaje",
    description: "48mm x 90m, pack x6.",
    public_price: 3200,
    wholesale_price: 2500,
    photo_url: null,
    stock: 200,
  },
  {
    id: "s6",
    name: "Bandeja aluminio N°8",
    category: "Bandejas",
    description: "Pack x10, con tapa.",
    public_price: 2100,
    wholesale_price: 1650,
    photo_url: null,
    stock: 150,
  },
];
