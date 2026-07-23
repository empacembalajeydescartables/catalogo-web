# Catálogo web — Descartables y Embalaje

Fase 1 y 2 del proyecto: setup del proyecto + catálogo público funcionando.
Con esto ya tenés una página que cualquier visitante puede abrir, buscar y
filtrar tus productos por categoría. Todavía **no** incluye login mayorista
ni pedidos — eso es la fase 3 y 4, lo armamos después.

## 1. Instalar y correr en tu computadora

Necesitás tener [Node.js](https://nodejs.org) instalado (versión 18 o
superior). Después:

```bash
npm install
npm run dev
```

Abrí http://localhost:3000 — vas a ver el catálogo funcionando con **6
productos de ejemplo** (los definidos en `lib/sample-products.ts`). Esto es
para que puedas ver y ajustar el diseño antes de cargar tus más de 200
productos reales.

## 2. Crear tu proyecto en Supabase

1. Andá a [supabase.com](https://supabase.com), creá una cuenta y un
   proyecto nuevo (elegí una región cercana, ej. South America).
2. En el panel del proyecto, andá a **SQL Editor > New query**, pegá el
   contenido de `supabase/schema.sql` y ejecutalo. Esto crea la tabla
   `products` con los permisos correctos.
3. Andá a **Settings > API** y copiá:
   - **Project URL**
   - **anon public key**
4. Copiá el archivo `.env.local.example` a `.env.local` y completá esos dos
   valores:

```bash
cp .env.local.example .env.local
```

5. Reiniciá `npm run dev`. Si las variables están bien cargadas, el aviso
   naranja de "productos de ejemplo" desaparece y el catálogo va a estar
   vacío hasta que cargues productos (paso 3).

## 3. Cargar tus +200 productos

La forma más rápida: en Supabase, andá a **Table Editor > products > Insert
> Import data from CSV**. Armá un CSV con estas columnas (los nombres deben
coincidir exacto):

```
name, category, description, public_price, wholesale_price, photo_url, stock
```

- `wholesale_price` y `stock` son opcionales, podés dejarlos vacíos.
- `photo_url` por ahora podés dejarlo vacío o poner un link a una imagen ya
  alojada en algún lado; en una fase siguiente podemos armar la carga de
  fotos directo a Supabase Storage.
- Usá tu catálogo de Google Sites como fuente para armar este CSV — decime
  si querés que te ayude a pasar esos datos a este formato.

## 4. Publicar el sitio (Vercel)

1. Subí este proyecto a un repositorio de GitHub.
2. Andá a [vercel.com](https://vercel.com), conectá tu cuenta de GitHub e
   importá el repositorio.
3. En **Environment Variables**, cargá las mismas dos variables que en
   `.env.local` (`NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY`).
4. Deploy. Vercel te da un dominio gratis (`tu-proyecto.vercel.app`); más
   adelante podés conectarle un dominio propio desde la misma pantalla.

## Qué sigue

- **Fase 3**: login mayorista con Supabase Auth y precios especiales por
  cuenta.
- **Fase 4**: carrito de pedido + envío por WhatsApp.
- **Fase 5**: estado de envío, hora estimada y panel del dueño.

El botón "Ingresar mayorista" del header ya está en la página pero todavía
no lleva a ningún lado — lo conectamos en la fase 3.
