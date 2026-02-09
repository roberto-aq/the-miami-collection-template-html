# The Miami Collection — Premium Real Estate Investment Template

> Plantilla web multipágina para plataformas de inversión inmobiliaria de lujo. Diseño dark premium con animaciones cinematográficas GSAP. 10 páginas, 29 archivos, 100% responsiva, zero frameworks CSS.

---

## Descripción general

**The Miami Collection** es una plantilla web premium diseñada para empresas de inversión inmobiliaria, desarrolladoras de bienes raíces de lujo, y plataformas de crowdfunding inmobiliario. El diseño combina una estética dark elegante con acentos verde olivo que transmite sofisticación, confianza y exclusividad — los tres pilares que un inversionista busca antes de depositar su capital.

No es solo un landing page. Es un ecosistema completo de 10 páginas interconectadas que cubre todo el journey del usuario: desde el descubrimiento (Home), pasando por la exploración (Propiedades, Detalle), la educación (Inversión, Nosotros), hasta la conversión (Login, Register) y la retención (Dashboard).

---

## Ideal para

- Plataformas de inversión inmobiliaria y crowdfunding
- Desarrolladoras y constructoras de proyectos residenciales de lujo
- Fondos de inversión en bienes raíces (REITs)
- Agencias inmobiliarias premium y boutique
- Startups fintech enfocadas en real estate tokenizado
- Asesores de inversión con portafolio de propiedades

---

## Stack técnico

| Tecnología | Detalle |
|---|---|
| **HTML5** | Semántico, accesible, SEO-friendly |
| **CSS3** | Anidamiento nativo (CSS Nesting), variables custom, zero frameworks |
| **JavaScript** | Vanilla JS, sin dependencias excepto GSAP |
| **GSAP 3.13** | Animaciones profesionales con ScrollTrigger |
| **Google Fonts** | Playfair Display (display) + Outfit (body) |
| **Responsive** | Mobile-first con breakpoints en 768px y 1100px |

### Sin dependencias pesadas

No usa React, Vue, Tailwind, Bootstrap ni ningún framework. Esto significa tiempos de carga ultrarrápidos, cero build tools necesarios, y máxima flexibilidad para integrar con cualquier backend o CMS.

---

## Las 10 páginas incluidas

### 1. Home (`index.html`)
La página de aterrizaje principal. Diseñada para causar una primera impresión impactante y guiar al visitante hacia la conversión.

**Secciones:**
- **Hero** con galería de imágenes tipo slider automático y texto animado con split reveal
- **Barra de estadísticas** con contadores animados ($200M+, 14.5% ROI, 342 inversionistas, 150+ propiedades)
- **Gráfico de inversión** — SVG animado que muestra el crecimiento de $10K a $42K con barras y línea de tendencia
- **Propiedades destacadas** — Grid de 3 cards con badges de estado, ROI, y hover effects
- **Why Invest** — 4 cards con íconos SVG explicando ventajas competitivas
- **CTA final** — Call to action de cierre con gradiente radial y botones duales

**Animaciones:** Loader SVG del logo, text reveal por línea, counters numéricos, barras del gráfico con stagger, cards con scroll reveal, parallax sutil en hero.

---

### 2. Propiedades (`propiedades.html`)
Catálogo completo de propiedades con sistema de filtrado funcional.

**Secciones:**
- **Page header** con breadcrumb animado
- **Filtros interactivos** — Botones: Todas / En construcción / Preventa / Listo para entrega + selector de ordenamiento
- **Grid de 6 propiedades** — Cards con imagen, badge de estado, ROI, ubicación, stats (inversión mínima, fecha entrega, % vendido), botones de acción

**Animaciones:** Cards con stagger reveal (0.12s delay), imágenes con clip-path reveal (inset 100% → 0%), filtros funcionales con transición de opacity/scale/grayscale para las cards no seleccionadas.

**Funcionalidad JS:** Los filtros realmente funcionan — al hacer clic en una categoría, las propiedades que no coinciden se desvanecen con grayscale y las que sí se mantienen visibles.

---

### 3. Detalle de propiedad (`propiedad.html`)
La página más importante para la conversión. Aquí el inversionista toma la decisión.

**Secciones:**
- **Galería hero** — Grid asimétrico: imagen principal grande + 4 thumbnails laterales clickeables con transiciones suaves entre fotos
- **Header** — Nombre del proyecto, ubicación completa, badges (estado, ROI, % vendido), y caja de precio con CTA destacado
- **Descripción** — Texto detallado del proyecto (arquitecto, acabados, amenities)
- **Especificaciones** — Grid de 6 specs con íconos: tipo, torres, pisos, unidades, entrega, tamaño
- **Progreso de construcción** — Timeline vertical con 5 etapas, dots de estado (completado/activo/pendiente), y barra de progreso animada al 68%
- **Proyección financiera** — 4 metric cards (ROI, valorización, ingreso por alquiler, cap rate) + ejemplo concreto de inversión ($10K → $14,934)
- **Amenidades** — Grid de 8 amenities con íconos SVG
- **Documentos** — Lista de 4 PDFs descargables (brochure, análisis financiero, planos, auditoría)
- **Sidebar sticky** — Resumen de inversión con barra de progreso de ventas, CTA, contacto con asesor, y navegación de sección con scroll tracking activo

**Animaciones:** Galería con fade entre slides, header slide desde los lados, info blocks con scroll reveal, timeline steps con stagger, barras de progreso que se llenan, spec items con scale reveal, amenities y documentos con stagger horizontal.

**Funcionalidad JS:** Galería interactiva con click en thumbnails, sidebar nav que detecta la sección visible con IntersectionObserver, barras de progreso que se animan al entrar en viewport.

---

### 4. Inversión (`inversion.html`)
Página educativa que explica el modelo de inversión y permite calcular retornos.

**Secciones:**
- **Timeline de 4 pasos** — Regístrate → Elige → Invierte → Recibe rendimientos, con dots conectados por línea horizontal
- **Calculadora interactiva** — Slider de monto ($5K–$100K) sincronizado con input numérico + botones de plazo (2/3/5 años). Resultados en tiempo real: inversión inicial, ROI %, retorno total, ganancia neta
- **FAQ** — 5 preguntas frecuentes con accordions `<details>` nativos

**Animaciones:** Timeline con stagger secuencial (refleja el proceso paso a paso), línea que se dibuja horizontalmente, calculadora con slide desde lados opuestos, resultados con GSAP counter animation (números creciendo = inversión creciendo), FAQ items con stagger.

**Funcionalidad JS:** Calculadora 100% funcional — el slider y el input numérico están sincronizados bidireccionalente, los botones de plazo cambian el cálculo, y los resultados se actualizan con animación de contador. Fórmula: interés compuesto al 14.5% anual.

---

### 5. Nosotros (`nosotros.html`)
Página de credibilidad y confianza.

**Secciones:**
- **Story** — Layout 50/50 con imagen de skyline + texto narrativo sobre la fundación en 2015 y los $200M en activos
- **Valores** — Grid de 4 cards numeradas: Transparencia, Excelencia, Innovación, Compromiso
- **Equipo** — Grid de 4 miembros con fotos, nombre, cargo y bio breve (CEO, COO, CTO, Directora Legal)

**Animaciones:** Imagen de story con clip-path reveal horizontal (cortina que se abre), texto con stagger, value cards con stagger y hover lift, team photos con clip-path reveal vertical, team cards con stagger.

---

### 6. Contacto (`contacto.html`)
Punto de contacto directo con el equipo.

**Secciones:**
- **Info cards** — 3 cards con íconos: oficina (dirección), teléfono (horario), email (dos direcciones)
- **Mapa embebido** — Google Maps con filtro dark aplicado via CSS
- **Formulario** — Campos: nombre, email, teléfono, interés de inversión (select), mensaje (textarea), botón de envío

**Animaciones:** Info cards con stagger desde la izquierda, mapa con fade in, formulario con slide up, feedback visual en el botón al enviar (cambia a "✓ Mensaje enviado" con animación bounce).

---

### 7. Soporte (`soporte.html`)
Centro de ayuda con búsqueda y categorías.

**Secciones:**
- **Barra de búsqueda** — Input con ícono de lupa, búsqueda en tiempo real
- **4 categorías de ayuda** — Seguridad y Cuenta, Pagos y Transacciones, Inversiones, Preguntas Generales. Cada una con ícono, descripción y 3 links de artículos
- **Banner CTA** — "¿No encuentras lo que buscas?" con botones de contacto y chat en vivo

**Animaciones:** Search box reveal, cards con stagger, banner con scroll reveal.

**Funcionalidad JS:** La búsqueda funciona en tiempo real — al escribir, las categorías que no coinciden se desvanecen con grayscale/opacity.

---

### 8. Login (`login.html`)
Inicio de sesión con diseño split-screen.

**Layout:**
- **Lado izquierdo** — Imagen fullscreen con overlay oscuro, logo, headline animado ("Invierte en el futuro de Miami"), y 3 stats (activos, ROI, inversionistas)
- **Lado derecho** — Formulario: email con ícono, contraseña con toggle de visibilidad, checkbox "Recordar sesión", botón de submit, divisor "o continúa con", botones de Google y GitHub, link a registro

**Animaciones:** Form container con slide up, side text con slide desde izquierda, stats con stagger, form fields con stagger.

**Funcionalidad JS:** Toggle de visibilidad de contraseña, animación de salida al hacer submit → redirección a `dashboard.html`.

---

### 9. Registro (`register.html`)
Creación de cuenta con el mismo layout split-screen del login.

**Formulario extendido:**
- Nombre y apellido (row de 2 columnas)
- Email con ícono
- Teléfono con ícono
- Contraseña con toggle + **indicador de fortaleza** (4 barras que cambian de color: rojo → amarillo → verde según complejidad)
- Selector de rango de inversión ($5K–$25K, $25K–$50K, $50K–$100K, $100K+)
- Checkbox de términos y condiciones con links
- Botones de Google y GitHub
- Link a login

**Funcionalidad JS:** Indicador de fortaleza evalúa: longitud ≥8, mayúsculas, números y caracteres especiales. Cada criterio enciende una barra. Submit → animación de salida → redirección a `dashboard.html`.

---

### 10. Dashboard (`dashboard.html`)
Panel del inversionista. Layout tipo aplicación web.

**Layout:**
- **Navbar simplificado** — Logo, notificación con dot rojo, avatar del usuario con nombre
- **Sidebar** — 5 links: Dashboard, Mis inversiones, Transacciones, Documentos, Configuración + "Volver al sitio"
- **Contenido principal** scrolleable

**Secciones:**
- **Welcome** — Saludo personalizado + botón "Explorar propiedades"
- **4 Metric cards** — Portafolio total ($47,500), Ganancia acumulada ($8,934), Rendimiento mensual ($628), Inversiones activas (3). Cada una con indicador de cambio porcentual
- **Gráfico de rendimiento** — SVG con línea de tendencia, fill con gradiente, dot en el punto actual. Tabs de período: 6M / 1A / Todo
- **Donut chart de distribución** — Anillo SVG con 3 segmentos (Park Grove 60%, Brickell Heights 24%, Edgewater Towers 16%) + leyenda
- **Tabla de inversiones activas** — 3 filas con: foto del proyecto, nombre, ubicación, monto invertido, ROI actual, barra de progreso de construcción, badge de estado, botón de detalles
- **Feed de actividad reciente** — 4 items con íconos por tipo (depósito ↓, rendimiento ↑, documento 📄): inversión, distribución trimestral, reporte disponible, depósito anterior

**Animaciones:** Welcome slide up, metric cards con stagger + counter animation (números que crecen desde 0), chart con line draw (stroke-dashoffset), donut ring que se llena progresivamente, tabla con row stagger, activity items con stagger horizontal.

---

## Sistema de diseño

### Paleta de colores

| Variable | Valor | Uso |
|---|---|---|
| `--bg` | `#0d0f0d` | Fondo principal |
| `--bg-elevated` | `#141714` | Secciones alternadas |
| `--bg-card` | `#1a1d1a` | Cards y contenedores |
| `--bg-surface` | `#1f221f` | Inputs y superficies interactivas |
| `--text` | `#eae8e3` | Texto principal (crema cálido) |
| `--text-muted` | `#9a9890` | Texto secundario |
| `--text-dim` | `#5c5a55` | Labels, hints, texto terciario |
| `--accent` | `#8CB63C` | Color de acento principal (verde olivo) |
| `--accent-light` | `#a4cc55` | Hover y énfasis positivo |
| `--accent-dark` | `#6a8f28` | Variante oscura para gráficos |
| `--accent-glow` | `rgba(140,182,60,0.15)` | Fondos con glow sutil |
| `--border` | `rgba(255,255,255,0.07)` | Bordes sutiles |

### Tipografía

| Fuente | Uso | Weights |
|---|---|---|
| **Playfair Display** | Títulos, precios, números grandes | 400, 500, 600, 700 + italic |
| **Outfit** | Cuerpo, navegación, botones, labels | 200, 300, 400, 500, 600, 700 |

La combinación serif + sans-serif comunica lujo (Playfair) con modernidad (Outfit).

### Componentes reutilizables

Definidos en `global.css` y compartidos en todas las páginas:

- **Navbar** — Fixed, backdrop-blur, links con underline animado, hamburger responsive
- **Botones** — 5 variantes: `--primary` (verde sólido), `--outline` (borde), `--ghost` (transparente), `--sm`, `--lg`
- **Page Header** — Breadcrumb + título con spans animables + descripción centrada + radial gradient decorativo
- **Section Tag** — Label uppercase verde para categorizar secciones
- **Footer** — Logo, descripción, 3 columnas de links, copyright

### CSS Nesting nativo

Todo el CSS usa anidamiento nativo del navegador (no Sass ni PostCSS):

```css
.prop-card {
  background: var(--bg-card);
  border: 1px solid var(--border);

  .prop-card-img {
    position: relative;
    overflow: hidden;

    img { transition: transform 0.8s; }
    .prop-badge { position: absolute; top: 16px; }
  }

  .prop-card-body {
    padding: 24px;

    h3 { font-family: var(--font-display); }
    .prop-stats { display: grid; grid-template-columns: repeat(3,1fr); }
  }

  &:hover {
    border-color: rgba(140,182,60,0.2);
    .prop-card-img img { transform: scale(1.05); }
  }
}
```

Ventajas: menos repetición de selectores, jerarquía visual clara, mantenibilidad superior, compatible con todos los navegadores modernos (Chrome 120+, Firefox 117+, Safari 17.2+).

---

## Animaciones GSAP — Filosofía

Cada página tiene animaciones diseñadas con intención, no decorativas. La animación comunica algo sobre el contenido:

| Página | Técnica | Por qué |
|---|---|---|
| Home | Counters numéricos | Los números creciendo transmiten crecimiento financiero |
| Propiedades | Clip-path image reveal | "Descubrir" propiedades, como revelar algo oculto |
| Detalle | Progress bar fill | Muestra avance tangible de la construcción |
| Inversión | Timeline secuencial | Refleja el proceso paso a paso de invertir |
| Inversión | Calculator counters | Dinero creciendo = tu inversión creciendo |
| Nosotros | Clip-path horizontal | Cortina que se abre = transparencia de la empresa |
| Dashboard | Line draw del gráfico | Traza el rendimiento como si se dibujara en tiempo real |
| Dashboard | Donut ring fill | Portafolio que se llena progresivamente |
| Login/Register | Form stagger | Campos que aparecen uno a uno = proceso guiado |

### Técnicas GSAP utilizadas

- `ScrollTrigger` — Animaciones activadas por scroll en todas las páginas
- `stagger` — Delays progresivos para grids y listas
- `clipPath` — Reveals cinematográficos en imágenes (inset, polygon)
- `strokeDashoffset` — Line draw para gráficos SVG
- `counter animation` — Números que crecen para métricas y calculadora
- `fromTo` — Control preciso de estado inicial y final
- `ease: power3.out` — Curva de ease consistente para movimientos fluidos

---

## Estructura de archivos

```
miami-collection/
│
├── global.css              # CSS base compartido (navbar, footer, buttons, variables)
│
├── index.html              # Home
├── styles.css              # CSS del Home
├── scripts.js              # JS del Home
│
├── propiedades.html        # Catálogo de propiedades
├── propiedades.css
├── propiedades.js
│
├── propiedad.html          # Detalle de propiedad (Park Grove)
├── propiedad.css
├── propiedad.js
│
├── inversion.html          # Cómo invertir + calculadora
├── inversion.css
├── inversion.js
│
├── nosotros.html           # Sobre la empresa + equipo
├── nosotros.css
├── nosotros.js
│
├── contacto.html           # Formulario de contacto
├── contacto.css
├── contacto.js
│
├── soporte.html            # Centro de ayuda
├── soporte.css
├── soporte.js
│
├── login.html              # Inicio de sesión
├── register.html           # Crear cuenta
├── auth.css                # CSS compartido login/register
├── auth.js                 # JS compartido login/register
│
├── dashboard.html          # Panel del inversionista
├── dashboard.css
├── dashboard.js
│
└── 29 archivos total — ~200KB
```

---

## Responsive Design

Tres breakpoints principales cubren todos los dispositivos:

| Breakpoint | Cambios principales |
|---|---|
| **> 1100px** | Layout completo, grids de 3-4 columnas, sidebars visibles |
| **768px — 1100px** | Grids de 2 columnas, sidebar oculto en dashboard, timeline vertical |
| **< 768px** | Navbar hamburger, grids de 1 columna, padding reducido, footer stacked, tablas con scroll horizontal |

---

## Flujo de usuario

```
Visitante nuevo:
Home → Propiedades → Detalle → Inversión → Register → Dashboard

Visitante recurrente:
Home → Login → Dashboard → Detalle de propiedad → Invertir

Visitante explorando:
Home → Nosotros → Inversión (calculadora) → Contacto → Register

Soporte:
Cualquier página → Soporte → Buscar → Contacto
```

Todas las páginas están interconectadas. El navbar es consistente en las 8 páginas públicas. Login y Register usan layout independiente. Dashboard tiene su propio navbar y sidebar.

---

## Funcionalidades interactivas

| Feature | Página | Descripción |
|---|---|---|
| Filtros de propiedades | Propiedades | Filtra por estado con transición animada |
| Galería de imágenes | Detalle | Click en thumbnails cambia imagen principal |
| Scroll section tracking | Detalle | Sidebar nav resalta la sección visible |
| Calculadora de inversión | Inversión | Slider + input sincronizados, cálculo en tiempo real |
| Búsqueda en vivo | Soporte | Filtra categorías mientras escribes |
| Toggle de contraseña | Login/Register | Muestra/oculta contraseña |
| Indicador de fortaleza | Register | 4 barras que evalúan complejidad de contraseña |
| Submit con redirect | Login/Register | Animación de salida → dashboard |
| Counters animados | Dashboard | Métricas que crecen desde 0 |
| Chart line draw | Dashboard | Gráfico SVG que se dibuja |
| Donut ring animation | Dashboard | Anillo de distribución que se llena |

---

## Personalización rápida

### Cambiar colores
Editar las variables en `global.css`:
```css
:root {
  --accent: #8CB63C;      /* Cambiar a tu color de marca */
  --accent-light: #a4cc55;
  --accent-dark: #6a8f28;
}
```

### Cambiar tipografía
Actualizar el import de Google Fonts en cada HTML y las variables:
```css
:root {
  --font-display: 'Tu Fuente Display', serif;
  --font-body: 'Tu Fuente Body', sans-serif;
}
```

### Cambiar imágenes
Todas las imágenes usan URLs de Unsplash. Reemplazar con las URLs de tu proyecto.

### Cambiar contenido
Todo el texto es semántico y fácil de localizar en el HTML. No hay texto hardcodeado en JS (excepto la calculadora).

---

## Compatibilidad

| Navegador | Soporte |
|---|---|
| Chrome 120+ | ✓ Completo |
| Firefox 117+ | ✓ Completo |
| Safari 17.2+ | ✓ Completo |
| Edge 120+ | ✓ Completo |
| Mobile Safari | ✓ Completo |
| Chrome Android | ✓ Completo |

> Requiere soporte de CSS Nesting nativo. Navegadores anteriores a las versiones listadas no renderizarán los estilos anidados correctamente.

---

## Performance

- **0 dependencias CSS** — No Tailwind, no Bootstrap, no PostCSS
- **1 dependencia JS** — Solo GSAP (cargado desde CDN)
- **~200KB total** — Todo el proyecto pesa menos que una sola imagen
- **No requiere build tools** — No webpack, no Vite, no npm install
- **Imágenes externas** — Cargadas desde Unsplash CDN con parámetros de calidad optimizados

---

## Lo que incluye

- ✓ 10 páginas HTML completamente funcionales
- ✓ CSS con anidamiento nativo y variables custom
- ✓ Animaciones GSAP profesionales con ScrollTrigger
- ✓ Calculadora de inversión funcional
- ✓ Sistema de filtrado de propiedades
- ✓ Galería de imágenes interactiva
- ✓ Dashboard con gráficos SVG animados
- ✓ Login y Register con flujo completo
- ✓ Indicador de fortaleza de contraseña
- ✓ Búsqueda en vivo en centro de soporte
- ✓ Diseño 100% responsive (mobile, tablet, desktop)
- ✓ Componentes reutilizables (navbar, footer, buttons)
- ✓ Código limpio, comentado y organizado
- ✓ Zero build tools necesarios — abre y funciona

---

*The Miami Collection — Donde el lujo inmobiliario se encuentra con la tecnología web moderna.*
