# Rosso Maquinarias — Design System

Sistema de diseño para **Rosso Maquinarias**: transporte de maquinaria agrícola y maquinaria pesada, montajes industriales, servicio de autoelevador y servicio de grúa.

Es un sistema **industrial, no corporativo**: tipografía display ancha en mayúsculas, un único acento rojo, superficies planas sin sombras, esquinas cortadas a 45° en lugar de radios, y una trama de puntos como suelo permanente de la página.

---

## Índice

| Ruta | Qué hay |
|---|---|
| `styles.css` | Punto de entrada único. Sólo `@import`. Los consumidores enlazan este archivo. |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `motion.css`, `base.css` |
| `components/core/` | Icon, BrandGlyph, HexButton, CornerClose, Wordmark, Eyebrow, Heading, Button, ArrowLink, ClipPanel, ScrollCue |
| `components/navigation/` | SiteHeader, TabNav |
| `components/content/` | MediaCard, NotchCard, FeatureRow, InfoBlock, TextField, StatVideoCard |
| `components/layout/` | Section, SiteFooter, DiagonalStripes |
| `ui_kits/website/` | Recreación navegable del sitio público (`index.html`) |
| `guidelines/` | 17 fichas de fundamentos (color, tipografía, espaciado, marca, efectos, movimiento) |
| `assets/` | Ver `assets/README.md` — **no se entregó logotipo** |
| `templates/pagina-rosso/` | Plantilla “Página Rosso” (hero + sección + footer) para proyectos que consumen el sistema |
| `SKILL.md` | Envoltorio para usar este sistema como Agent Skill |

### Componentes

**core** — `Icon`, `Wordmark`, `Eyebrow`, `Heading`, `Button`, `ArrowLink`, `ClipPanel`
**navigation** — `SiteHeader`, `TabNav`
**content** — `MediaCard`, `InfoBlock`, `TextField`
**layout** — `Section`, `SiteFooter`, `DiagonalStripes`

Cada componente trae `.d.ts` (contrato de props) y `.prompt.md` (cuándo usarlo + ejemplo).

---

## Fuentes de este sistema

Lo entregado fueron **siete capturas de pantalla** de un sitio industrial de referencia (`uploads/`): sección de productos con tabs, sección de historias de empleados, grilla de tarjetas con panel recortado, footer sobre ink con franjas diagonales, y dos estados de la barra de navegación.

- **No se entregó código fuente, archivo Figma ni repositorio.** Los valores de layout, tipografía y color se midieron pixel a pixel sobre las capturas (los hex son muestreos directos, no aproximaciones).
- Las capturas pertenecen a **otra empresa** (un fabricante de transformadores). Se tomaron de ellas **el lenguaje visual y los patrones de componente**, nunca la marca: no se copió el logotipo, el nombre, las fotografías ni el copy.
- El contenido de este sistema está escrito para Rosso Maquinarias.

### Sustituciones señaladas
| Qué | Original | Sustituto | Por qué |
|---|---|---|---|
| ~~Tipografía~~ | — | **Resuelto:** el cliente entregó los archivos reales (ver abajo) | — |
| Iconografía | Set propio del sitio de referencia | **Lucide** vía CDN (`lucide-static@0.446.0`) | Mismo trazo de 2px, esquinas rectas, sin relleno. |
| Fotografía | Archivos del cliente | Banco propio en `assets/photos/` | Flota en marcha (insignia, apaisada), izaje de tótem, taller, mecanizado, autoelevador, aéreo de campo y retrato de dirección. Ver la ficha **Brand · Fotografía**. |
| Logotipo | Archivos del cliente | `Wordmark` sobre los archivos oficiales | Logotipo blanco, navy e isotipo RM en `assets/`; el badge de barra (`variant="badge"`) compone la placa ink con esquina cortada en CSS sobre el logotipo blanco. |

---

### Tipografías entregadas
Instaladas en `assets/fonts/` y declaradas con `@font-face` en `tokens/fonts.css`:

| Rol | Archivo | Uso |
|---|---|---|
| `--font-display` | **TT Octosquares Trial Compressed Bold** (`.ttf`, peso 700) | Titulares, botones, links de navegación, eyebrows, micro-etiquetas |
| `--font-body` | **Red Hat Display** Regular + Medium (`.otf`, 400 / 500–700) | Todo el texto corrido |
| `--font-mono` | JetBrains Mono (CDN) | Valores de ficha técnica — sustituto señalado |

⚠️ El archivo de Octosquares es una **versión Trial**. Antes de producción hay que reemplazarlo por la licencia comprada (mismo nombre de familia, no hay que tocar CSS). Es una única variante (Compressed Bold): no usar pesos distintos de 700 ni cursivas — el navegador las sintetizaría.

## CONTENT FUNDAMENTALS

**Idioma.** Español rioplatense. Voseo (“contanos”, “necesitás”, “llamanos”), nunca “tú” ni “usted”.

**Persona.** *Nosotros* para la empresa, *vos* para el cliente. “**Movemos** lo que nadie más mueve.” “Contanos qué hay que mover.” Nunca en tercera persona (“Rosso Maquinarias ofrece…”): eso suena a folleto.

**Titulares.** Frases cortas, declarativas, en mayúsculas, sin punto final. Verbo en primera línea siempre que se pueda. Se rompen manualmente en 2–3 líneas para formar un bloque compacto:

> MOVEMOS LO QUE
> NADIE MÁS MUEVE

> CADA CARGA
> TIENE SU HISTORIA

**Eyebrows.** Una a tres palabras, mayúsculas, rojo: `NUESTROS SERVICIOS`, `TRABAJOS`, `FLOTA`, `CONTACTO`. Nombran la sección, no la venden.

**Cuerpo.** Dos a cuatro oraciones. Concreto y numérico antes que adjetivo: “Carretones de 3 a 6 ejes, escoltas y permisos gestionados por nosotros” gana a “soluciones logísticas integrales”. Las cifras llevan unidad y formato local: **80 t**, **3,20 m**, **24/7**, **+54 341 456-7890**.

**Casing.** Mayúsculas totales sólo en display, botones, eyebrows y micro-etiquetas. El cuerpo va en oración normal. Nunca *Title Case* en español.

**Acciones.** Verbo en infinitivo: *Pedir cotización*, *Ver servicios*, *Consultar*, *Reservar*, *Leer más*. Los links con flecha usan la misma forma.

**Prohibido.** Emoji (cero, en toda la marca). Signos de admiración. Superlativos vacíos (“líderes”, “excelencia”, “de primer nivel”). Jerga de startup. Mayúsculas de énfasis en medio de una oración.

**Vibra.** Gente que llega a horario con un carretón de 45 toneladas. Serio, directo, sin pose. Cuando algo se puede probar con un número, se prueba con un número.

---

## VISUAL FOUNDATIONS

### Color
Un ink azul grisado dominante, un acento rojo y un celeste secundario. Nada más.
- **Ink** `#202a33` (`--ink-800`) — footer, barra de navegación, banda de cifras, secciones oscuras y **todo el texto** sobre papel. La escala baja a `#151d24` y sube a `#46545f`. El navy `#00144d` del logotipo vive sólo en los archivos de marca.
- **Rosso** `#b41f00` (`--red-600`) — eyebrows, botón primario, hover de links, anillo de foco. Sobre ink sube a `#d4300e` (`--text-accent-on-ink`), que es lo mínimo legible. Nunca más del ~4% de una página; el rojo señala, no rellena. Hover `#d4300e`, press `#8f1900`.
- **Celeste** `#dbe6f8` (`--mint-100`, derivado del `#94b3e8` del isotipo) — única superficie secundaria: paneles recortados de tarjeta, fichas técnicas, secciones tranquilas. Siempre con texto ink, nunca blanco ni rojo.
- **Neutros** `#797f85` (texto secundario), `#b4b9c9` (tabs inactivos), `#d1d3d4`–`#f6f7f7` (líneas y fondos hundidos).
- Sobre ink: blanco puro para texto, `#a5a9ad` para secundario, 40% de blanco para deshabilitado.

### Tipografía
- **Display** — TT Octosquares Compressed Bold, peso 700, mayúsculas, interlineado 1.03, tracking +0.005em. Escala 76 / 58 / 44 / 32 / 22 px. Comprimida y cuadrada: es lo único que grita.
- **Texto** — Red Hat Display 400 (500–700 para énfasis), 18 / 16 / 14 px, interlineado 1.5, ancho máximo ~62 caracteres.
- **Micro** — el display comprimido a etiqueta: eyebrow 15px/tracking .1em, nav y botones 17px/tracking .04em, micro-etiquetas 13px/tracking .1em.
- **Mono** — JetBrains Mono sólo para valores de ficha técnica (`45 t`, `13 – 21 m`). Nunca para texto corrido.

### Espaciado y layout
Escala de 4px (4→160). Contenedor **1180px**, gutters **50px**, 12 columnas con gaps de 20px. Ritmo vertical de **120px** entre secciones (80px en tramos densos). Todo alineado a la izquierda: el centrado se reserva para un único elemento aislado. La barra de navegación flota sobre el hero, no es fija al hacer scroll.

### Fondos
Trama de puntos **siempre**: `radial-gradient` de 1.2px cada 50px, ink al 12% sobre papel y blanco al 16% sobre ink. Nunca degradados decorativos de color. El único degradado permitido es el velo oscuro sobre una fotografía de hero (`rgba(21,29,36,.35)` → `.86`), para proteger el texto. Las fotografías van a sangre completa; el recorte a capsulita no existe.

### Esquinas, bordes y tarjetas
- `border-radius: 0` en todo el sistema. La forma de la marca es el **corte a 45°**: 20px (chips, botones), 44px (tarjetas y paneles), 80px (footer y bloques a escala de página). El corte siempre desciende de arriba-izquierda hacia abajo-derecha.
- Tarjetas: sin sombra, sin radio. Una foto a sangre con un panel mint encajado abajo, retirado 24px del borde derecho, con la esquina superior derecha cortada. Las tarjetas de contenido sobre papel usan un filete de 1px `rgba(32,42,51,.14)`.
- Bordes: filete 1px al 14% para separar, 55% para botones outline, blanco al 24% sobre ink.

### Sombras y transparencia
El sistema es **plano**: `--shadow-none` es el valor por defecto. Sólo la barra de navegación usa profundidad — ink al 62% con `backdrop-filter: blur(10px)` y una sombra suave. El blur no se usa en ningún otro lugar. La transparencia aparece únicamente en esa barra, en el velo de las fotos y en las franjas diagonales.

### Decoración
Franjas diagonales de 45°, 78px de ancho cada 78px, en `--ink-600` sobre `--ink-800`. Van sólo en esquinas de superficies ink (footer, paneles de contacto, overlay de menú) y nunca por debajo de un texto.

### Movimiento
Mecánico y corto. 140ms para color, 240ms para desplazamiento, 420ms para el zoom de imagen (1 → 1.035 máximo), 640ms para la entrada de sección (opacidad + 16px hacia arriba). Easing `cubic-bezier(.16,.84,.44,1)`. **Sin rebotes, sin resortes, sin parallax.**

### Estados
- *Hover* link/flecha: el texto pasa a rojo y la flecha se desplaza 2px arriba-derecha.
- *Hover* botón sólido: rojo un paso más claro. *Hover* outline: se invierte (relleno ink o blanco).
- *Press*: `translateY(1px)`. No hay escalado hacia abajo.
- *Focus*: contorno rojo de 2px con 3px de separación.
- *Tab inactivo*: `--grey-300`; al pasar el mouse sube a `--grey-500`; el activo es ink.
- *Disabled*: 38% de opacidad, sin cambio de color.

### Vibra de las imágenes
Fotografía documental en obra: luz real, tonos cálidos de tierra y óxido contra el ink frío, sin filtros ni grano añadido. Gente trabajando y máquinas en su escala, nunca renders ni stock de oficina.

---

## ICONOGRAPHY

- **Set:** [Lucide](https://lucide.dev) `0.446.0`, cargado desde jsDelivr por el componente `Icon`, que trae el SVG y lo inyecta en el DOM para que herede `currentColor`. Trazo de 2px, extremos rectos, sin relleno — igual criterio que los glifos del sitio de referencia. **Sustitución señalada:** el set original no venía con los materiales.
- **Regla:** nunca dibujar un SVG a mano para esta marca. Si falta un ícono, se agrega el nombre de Lucide.
- **Tamaños:** 16px dentro de etiquetas, 20–22px en línea con texto, 24px en la fila de redes del footer.
- **Nombres en uso:** `arrow-up-right` (todos los links), `align-left` (menú), `x` (cerrar), `truck`, `wrench`, `construction`, `forklift` (servicios), `check` (confirmación), `facebook`, `instagram`, `linkedin`, `mail` (redes).
- **La flecha diagonal ↗ es un elemento de marca**, no un ícono cualquiera: precede a todo link de navegación y se desplaza al hacer hover.
- **Sin emoji. Sin caracteres unicode como íconos. Sin íconos PNG.**

---

## Adiciones intencionales

Las capturas no definen un inventario completo de componentes, así que estos se agregaron para que el sistema sea utilizable, cada uno con motivo:

- **`Icon`** — envoltorio necesario para tener un único punto de control del set de glifos.
- **`TextField`** — las capturas no muestran formularios, pero el sitio necesita una pantalla de contacto; el estilo (cuadrado, filete de 1px, foco rojo) se deriva del resto del sistema.
- **`InfoBlock`** — formaliza el bloque de dirección que sí aparece en el footer de referencia.
- **`Wordmark`** — monta los archivos oficiales del logotipo (blanco / navy / isotipo RM).

## Pendientes para el cliente

1. **Logotipo** en SVG (versión sobre ink y sobre papel).
2. **Licencia definitiva de TT Octosquares** (el archivo actual es Trial).
3. Más **fotografía** de flota e izaje en obra (el banco actual cubre taller, mecanizado, logística, agro y personas).
4. Datos reales de contacto, domicilio y habilitaciones (los del kit son de ejemplo).
