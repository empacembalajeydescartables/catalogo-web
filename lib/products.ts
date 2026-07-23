import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import { sampleProducts } from "@/lib/sample-products";
import { Product } from "@/types/product";

// Trae el catálogo público. Solo se piden las columnas que un visitante
// sin login puede ver — nunca wholesale_price acá, eso se filtra en el
// portal mayorista con el usuario autenticado.
export async function getPublicProducts(): Promise<Product[]> {
  if (!isSupabaseConfigured || !supabase) {
    return sampleProducts;
  }

  const { data, error } = await supabase
    .from("products")
    .select("id, name, category, description, public_price, photo_url, stock")
    .order("category", { ascending: true })
    .order("name", { ascending: true });

  if (error) {
    console.error("Error al traer productos:", error.message);
    return sampleProducts;
  }

  return (data ?? []).map((p) => ({ ...p, wholesale_price: null }));
}
