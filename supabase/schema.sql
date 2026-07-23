-- Ejecutar en Supabase: panel del proyecto > SQL Editor > New query > pegar y correr.

create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text not null,
  description text,
  public_price numeric(12,2) not null,
  wholesale_price numeric(12,2),
  photo_url text,
  stock integer,
  created_at timestamptz not null default now()
);

create index if not exists products_category_idx on products (category);

-- Row Level Security: el catálogo público puede LEER, pero no ver
-- wholesale_price (eso lo resolvemos en la consulta del frontend,
-- no seleccionando esa columna en el catálogo público).
alter table products enable row level security;

create policy "Cualquiera puede ver productos"
  on products for select
  using (true);

-- Más adelante, cuando armemos el portal mayorista (fase 3), vamos a
-- agregar una tabla "wholesalers" con el email/precio especial de cada
-- cuenta, y políticas separadas para que solo el dueño edite productos.
