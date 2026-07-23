"use client";

import { useMemo, useState } from "react";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

export default function CatalogClient({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("Todas");

  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category));
    return ["Todas", ...Array.from(set).sort()];
  }, [products]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = category === "Todas" || p.category === category;
      const matchesQuery =
        query.trim().length === 0 ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description?.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [products, query, category]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar producto..."
          aria-label="Buscar producto"
          className="focus-ring flex-1 bg-surface border border-line rounded-card px-4 py-2.5 text-sm placeholder:text-inkmuted"
        />
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1 mb-8 -mx-1 px-1">
        {categories.map((cat) => {
          const active = cat === category;
          return (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`focus-ring shrink-0 tape-label px-4 py-1.5 text-xs font-mono uppercase tracking-wide transition-colors ${
                active
                  ? "bg-teal text-white"
                  : "bg-surface text-inkmuted border border-line hover:text-ink"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="text-inkmuted text-sm py-16 text-center">
          No encontramos productos para &ldquo;{query}&rdquo;. Probá con otra
          búsqueda.
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
