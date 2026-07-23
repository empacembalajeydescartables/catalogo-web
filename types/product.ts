export type Product = {
  id: string;
  name: string;
  category: string;
  description: string | null;
  public_price: number;
  wholesale_price: number | null;
  photo_url: string | null;
  stock: number | null;
};
