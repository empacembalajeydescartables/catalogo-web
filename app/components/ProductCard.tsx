import { Product } from "@/types/product";

const money = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});

export default function ProductCard({ product }: { product: Product }) {
  const lowStock =
    typeof product.stock === "number" && product.stock > 0 && product.stock <= 10;
  const noStock = product.stock === 0;

  return (
    <article className="group bg-surface border border-line rounded-card overflow-hidden flex flex-col">
      <div className="aspect-[4/3] bg-paper flex items-center justify-center overflow-hidden border-b border-line">
        {product.photo_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.photo_url}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <span className="font-mono text-xs text-inkmuted">SIN FOTO</span>
        )}
      </div>

      <div className="p-4 flex flex-col gap-1.5 flex-1">
        <span className="font-mono text-[11px] uppercase tracking-wide text-teal-dark">
          {product.category}
        </span>
        <h3 className="font-display font-800 text-base leading-snug">
          {product.name}
        </h3>
        {product.description && (
          <p className="text-sm text-inkmuted leading-snug flex-1">
            {product.description}
          </p>
        )}

        <div className="mt-2 flex items-end justify-between">
          <span className="font-mono text-lg font-600">
            {money.format(product.public_price)}
          </span>
          {noStock ? (
            <span className="font-mono text-[11px] text-rust-dark">
              SIN STOCK
            </span>
          ) : lowStock ? (
            <span className="font-mono text-[11px] text-rust-dark">
              ÚLTIMAS UNIDADES
            </span>
          ) : null}
        </div>
      </div>
    </article>
  );
}
