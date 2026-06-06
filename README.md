# Galleté — Web 🐻

Web de marca + tienda para **Galleté** (galletas gooey + matcha ceremonial, South Florida).
HTML/CSS/JS puro, una sola página, bilingüe **EN/ES**, mobile-first, lista para GitHub → Vercel.

---

## 🚀 Verla en tu compu (1 comando)

Abre la Terminal, entra a esta carpeta y corre:

```bash
python3 -m http.server 3456
```

Luego abre en tu navegador: **http://localhost:3456**
(Para apagarla: `Ctrl + C` en la Terminal.)

---

## 📷 Poner las fotos (lo más importante)

La web ya funciona con *placeholders* rosados. Para que aparezca una foto real,
**solo arrastra el archivo a `assets/img/` con el nombre exacto** — la web lo detecta sola,
sin tocar código. Sirve `.jpg`, `.jpeg`, `.png` o `.webp`.

| Nombre del archivo | Dónde aparece |
|---|---|
| `hero-cookie.jpg` | Foto grande del hero (la galleta partida) |
| `cookie-box.jpg`  | Caja de galletas (menú + tienda) |
| `matcha-box.jpg`  | Caja de té matcha (menú + tienda) |
| `mini-jar.jpg`    | Tarro de mini galletas (menú + tienda) |
| `about.jpg`       | Sección "Nosotras" (tú en el market) |
| `dog-mug.jpg`     | Mug del perro pop-art (tienda) |
| `gift-box.jpg`    | La caja regalo (tienda) |
| `drop.jpg`        | Drop del mes (tienda) |

> Tip: fotos cuadradas (1:1) para las cards y vertical (4:5) para el hero/about se ven mejor.

---

## ✏️ Qué falta llenar (todo en un solo lugar)

Abre `index.html`, busca el bloque **`⚙️ CONFIG`** (arriba del `<script>` final). Ahí editas SOLO 3 cosas:

1. **`ORDER_PHONE`** → el número de WhatsApp real de Galleté (formato `1XXXXXXXXXX`, sin `+` ni espacios).
   Hoy está en placeholder, así que el botón de checkout no funciona hasta ponerlo.
2. **`PRODUCTS`** → precios, nombres y descripciones. El **orden** de la lista = el orden en la tienda
   (lo más viral/fotogénico primero, como pediste).
3. **`MARKETS`** → el calendario itinerante. Pon `live:true` en el market de esta semana
   (sale resaltado en rosa). Agrega/borra mercados según dónde vayan a estar.

---

## 🌐 Subir a GitHub + Vercel

1. Crea un repo nuevo en GitHub (ej. `gallete-web`).
2. Conéctalo y sube:
   ```bash
   git remote add origin https://github.com/TU-USUARIO/gallete-web.git
   git push -u origin main
   ```
3. En Vercel → **Add New Project** → importa el repo → Deploy. Listo.
   Cada `git push` vuelve a desplegar solo.

---

## 🔎 SEO + IA (ya incluido)

- `<title>`, meta description, keywords, Open Graph y Twitter Cards.
- **Schema.org** `Bakery` + `FAQPage` (para que Google y los buscadores con IA entiendan
  qué es Galleté, qué vende y dónde — y la citen).
- `hreflang` EN/ES, HTML semántico, `alt` en imágenes, favicons.
- **Pendiente cuando tengas dominio:** cambiar `https://gallete.co/` en las meta tags por el dominio real.

---

## 🧩 Secciones

Hero → Menú (las 3 estrella) → Nosotras → **Dónde estamos** (calendario) → Tienda (carrito rápido) → Reseñas → Cookie Club → Footer.

Carrito → checkout por **WhatsApp** (mensaje con el pedido ya armado) o DM de Instagram.
Cuando crezcan, esto se cambia por Shopify/Stripe sin rehacer la web.
