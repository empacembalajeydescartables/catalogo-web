import { getPublicProducts } from "@/lib/products";
import { isSupabaseConfigured } from "@/lib/supabase";
import CatalogClient from "./components/CatalogClient";

export default async function Home() {
  const products = await getPublicProducts();

  return (
    <main className="min-h-screen">
      <header className="border-b border-line bg-surface">
        <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-inkmuted">
              Catálogo público
            </p>
            <h1 className="font-display font-900 text-2xl sm:text-3xl">
              Descartables &amp; Embalaje
            </h1>
          </div>
          <a
            href="#"
            className="focus-ring hidden sm:inline-block bg-ink text-white text-sm font-600 px-4 py-2 rounded-card hover:bg-teal-dark transition-colors"
          >
            Ingresar mayorista
          </a>
        </div>
        <div className="cut-line" />
      </header>

      {!isSupabaseConfigured && (
        <div className="bg-rust/10 border-b border-rust/30">
          <p className="max-w-6xl mx-auto px-4 py-2 text-xs font-mono text-rust-dark">
            Mostrando productos de ejemplo — conectá Supabase (ver README) para
            cargar tu catálogo real.
          </p>
        </div>
      )}

      <section className="max-w-6xl mx-auto px-4 py-8">
        <CatalogClient products={products} />
      </section>

      <footer className="border-t border-line mt-12">
        <p className="max-w-6xl mx-auto px-4 py-6 text-xs text-inkmuted font-mono">
          {products.length} productos en catálogo
        </p>
      </footer>
    </main>
  );
}
