# Traspaso: web de Galleté (para el chat de webs)
> Resumen del estado de las 3 páginas de Galleté para continuar el trabajo. Todo está LOCAL, sin publicar. Juli revisa antes de publicar. Última actualización: 13 ago 2026.

## Proyecto
- **Repo:** `gallete-web` (GitHub `MomentosCoffee/gallete-web`) -> Vercel. Ruta local: `/Users/mateocorredormontano/Desktop/Claude Code/gallete-web/`
- **3 páginas:**
  - `index.html` = SPLASH (la división de país: Miami / Colombia)
  - `matcha.html` = MIAMI (matcha)
  - `colombia.html` = COLOMBIA (galletas)
- **Deploy:** git push a main. Commit SIEMPRE con `info.momentos.coffee@gmail.com` o Vercel bloquea. (No se ha publicado nada de estos cambios todavía.)

## Preview local (para verlas)
Correr en la carpeta del repo: `python3 -m http.server 8080 --bind 127.0.0.1`
Luego abrir:
- Splash: http://localhost:8080/index.html
- Miami/matcha: http://localhost:8080/matcha.html
- Colombia: http://localhost:8080/colombia.html
(Para ver/capturar sin navegador: Chrome headless con `--screenshot`.)

## Lo que YA se hizo
**Splash (index.html):**
- MIAMI (antes "United States") y COLOMBIA; subtítulos "Ceremonial Matcha" y "New York style".
- Se quitaron las banderas emoji de los lados.
- Logo central con eslogan (crema claro), grande; bajado para no pisar el "Galleté" de la caldera de la foto.
- Se quitaron los chips de las esquinas; los botones de abajo dicen "Shop now" (Miami) y "Conócenos" (Colombia).
- Lado Miami: foto REAL del set de matcha Galleté (`assets/img/splash-miami.jpg`). Lado Colombia: galleta Nutella (`hero-a.jpg`).

**Colombia (colombia.html):**
- "gooey" -> "New York style cookies" (título, cinta, pie).
- Galleta de temporada OCULTA (display:none, reversible).
- "One craving closer" -> "This is how it works".
- "Join the Cookie Club" -> Follow on Instagram.
- Banner de lista de espera en burgundy.
- Nueva sección de galletas personalizadas (slots de foto pendientes).
- Se quitó FR del pie (EN·ES·FR -> EN·ES).

**Matcha (matcha.html):**
- Fondo verde en todo el sitio (se quitó el tono café/beige).
- Se quitaron todos los guiones largos y todos los emojis de la página.
- Se unieron "Matcha, your way" + "Shop" en una sola sección con precios.
- Carrusel de Instagram con 5 espacios listos (para videos/fotos verticales).
- Heading "How to make your matcha latte like a pro".
- Mensaje "nos fuimos de los markets" en la sección de compra.
- Menú (arriba izq.): logo Galleté en ROSADO, 50% más grande.
- Widget "COUNTRY" abajo-derecha: banderas 🇺🇸 🇨🇴 restauradas.

## Logos (todos con eslogan "A cookie to share. A tea to remember")
Están en `assets/img/`:
- `logo-gallete.png` = burgundy (menús, fondo claro)
- `logo-gallete-cream.png` = crema/beige (pies, fondo oscuro)
- `logo-gallete-splash.png` = crema claro (logo grande del splash)
- `logo-gallete-pink.png` = rosado (menú del matcha)
- `logo-gallete-green.png` = verde (guardado, opción)
La tipografía original NO se tocó (Fredoka / Bolze / Plus Jakarta).

## Fotos reales disponibles (YA optimizadas y en `assets/img/`, listas para usar)
- `matcha-flatlay.jpg` = set de matcha burgundy (ya usada en el splash Miami como `splash-miami.jpg`).
- `matcha-latte-1.jpg`, `matcha-latte-2.jpg` = latte de matcha en vaso con sticker rosado (fotos pro DSC).
- `matcha-strawberry-market.jpg` = latte de fresa en el market.
- `matcha-two-cups.jpg` = dos lattes en banca.
- `matcha-market-pour.jpg` = matcha sirviéndose en el market.
- `cookie-matcha.jpg` = galleta + matcha.
- `matcha-tins-display.jpg` = latas/producto ("Which matcha are you today?").
Todas ~1600px, JPG calidad 82. Falta decidir con Juli en qué sección va cada una.

## Próximos pasos priorizados (sugeridos)
1. **Matcha: poner fotos reales** en lugar de las de banco/placeholder:
   - Historia ("A moment to slow down") hoy usa `matcha-whisk.jpg` (stock) -> reemplazar por una real (ej. `matcha-latte-1.jpg` o `matcha-flatlay.jpg`).
   - Carrusel de Instagram (5 slots) -> usar `matcha-latte-1/2.jpg`, `matcha-market-pour.jpg`, `matcha-two-cups.jpg`, `matcha-strawberry-market.jpg` mientras llegan los VIDEOS originales.
   - Sección "nos fuimos de los markets" -> `matcha-market-pour.jpg` / `matcha-two-cups.jpg`.
   - Fotos de producto de la tienda -> se pueden apoyar en `matcha-tins-display.jpg`.
2. **Colombia: sección de personalizadas** -> poner fotos reales (baby shower / temáticas) cuando Valeria las mande; hoy hay slots.
3. **Matcha: efecto hero** (lata abriéndose con polvo) -> requiere 2 fotos (cerrada/abierta) o un video corto. Pendiente de material.
4. **Videos originales de Instagram** para el carrusel (Valeria los sube en calidad original).
5. **Envíos Shopify+UPS** y **sección de suscripción** del matcha -> a definir con el cliente.
6. **Publicar** (git push a main, commit con `info.momentos.coffee@gmail.com`) SOLO cuando Juli dé el visto bueno.

## Decisiones abiertas para Juli
- ¿El logo del splash queda como está o se baja un poco más (para separarlo del "Galleté" de la caldera)?
- ¿Los pies de página usan el crema claro (como el splash) o el beige actual?
- ¿En Colombia se cambia también "gooey" en los textos internos del cuerpo (quedaron los de marca; revisar con Valeria)?

## Reglas de estilo (de Juli)
- En documentos y mensajes de CLIENTE: sin guiones largos (—) ni emojis.
- En la WEB: los emojis del matcha se quitaron por pedido; en el splash las banderas del selector de país SÍ van.
- Nada se publica sin visto bueno de Juli.
