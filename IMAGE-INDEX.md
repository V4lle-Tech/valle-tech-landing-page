# Índice de Imágenes — Valle Tech

Auditoría completa de todas las imágenes de contenido del sitio.
Todas las imágenes actuales son de Unsplash y deben ser reemplazadas por fotografía propia o con licencia.

> **Excluidos de esta auditoría:** logos SVG (`VLogo.astro`, `VIcon.astro`), favicon, íconos emoji.

---

## Resumen

| Sección | Cantidad | Formato sugerido | Ubicación de datos |
|---------|----------|------------------|-------------------|
| OG Default | 1 | WebP | `src/layouts/Base.astro` |
| Servicios | 5 | WebP | `src/content/services.json` |
| Portafolio | 10 | WebP | `src/content/portfolio.json` |
| Blog | 16 | WebP | `src/content/posts.json` |
| Página Inicio (hardcoded) | 1 | WebP | `src/pages/index.astro` |
| Página Sobre mí (hardcoded) | 1 | WebP | `src/pages/sobre-mi.astro` |
| **Total imágenes únicas a reemplazar** | **34** | | |

> **Nota:** Los componentes `HeroBento.astro` y `HeroOrbital.astro` consumen las imágenes de `portfolio.json`, así que no requieren reemplazo adicional.

---

## Convenciones para los archivos locales

- **Directorio destino:** `public/images/`
- **Formato:** WebP (con fallback JPG solo si se requiere compatibilidad extrema)
- **Calidad:** 80-85% para WebP
- **Naming:** `{seccion}/{slug}.webp` — ejemplo: `services/desarrollo-a-medida.webp`

---

## 1. Imagen OG por defecto

| # | Archivo | Propiedad | Unsplash actual | Dimensión sugerida | Peso máx. | Nota de apoyo |
|---|---------|-----------|-----------------|-------------------|-----------|---------------|
| 1 | `src/layouts/Base.astro` L15 | `image` (default prop) | `photo-1498050108023-c5249f4df085` | **1200 × 630 px** | 120 KB | Imagen genérica de marca para redes sociales. Ideal: composición con el logo de Valle Tech sobre fondo oscuro con elementos tech sutiles (código, circuitos, gradientes azules). Debe verse bien recortada como miniatura. |

---

## 2. Servicios (`src/content/services.json`)

Estas imágenes se usan en:
- Tarjetas del listado `/servicios` — alto fijo de 200px, `object-fit: cover`
- Hero de detalle `/servicios/[slug]` — alto 300-360px, `object-fit: cover`
- OG image cuando se comparte un servicio individual

| # | Slug | Unsplash actual | Dimensión sugerida | Peso máx. | Nota de apoyo |
|---|------|-----------------|-------------------|-----------|---------------|
| 2 | `desarrollo-a-medida` | `photo-1498050108023-c5249f4df085` | **800 × 500 px** | 80 KB | Persona trabajando en código en monitor/laptop. Enfoque en pantalla con código visible. Tonos oscuros con acentos azules. Transmitir desarrollo web profesional. |
| 3 | `inteligencia-artificial` | `photo-1555949963-aa79dcee981c` | **800 × 500 px** | 80 KB | Visualización abstracta de datos, redes neuronales o interfaz de IA. Puede ser un dashboard con gráficas inteligentes o una representación visual de procesamiento de lenguaje. Tonos azules/púrpuras. |
| 4 | `automatizacion` | `photo-1460925895917-afdab827c52f` | **800 × 500 px** | 80 KB | Flujo de trabajo automatizado: engranajes digitales, pipelines, dashboards con métricas en tiempo real. Puede mostrar un monitor con scripts corriendo o un tablero de automatización. |
| 5 | `servidores-infraestructura` | `photo-1558494949-ef010cbdcc31` | **800 × 500 px** | 80 KB | Sala de servidores o racks con LEDs encendidos. Cables de red organizados, luces azules indicadoras. Ambiente limpio y profesional. Alternativamente, una terminal con comandos de infraestructura. |
| 6 | `asesoria-tecnica` | `photo-1454165804606-c3d57bc86b40` | **800 × 500 px** | 80 KB | Reunión de consultoría: dos personas frente a una laptop o pizarrón con diagramas. Ambiente profesional pero cercano. Puede ser una mesa de trabajo con notas y dispositivos. |

---

## 3. Portafolio (`src/content/portfolio.json`)

Estas imágenes se usan en:
- Tarjetas del listado `/portafolio` — alto 240-300px, `object-fit: cover`
- Grid Bento del hero (primeras 2 imágenes) — `eager loading`
- Orbital del hero (todas las 10) — tarjetas de 110-160px de alto
- OG image al compartir (via propiedad `image` en JSON)

| # | Slug | Año | Unsplash actual | Dimensión sugerida | Peso máx. | Nota de apoyo |
|---|------|-----|-----------------|-------------------|-----------|---------------|
| 7 | `gocab-plataforma-ride-sharing` | 2018 | `photo-1449965408869-eaa3f722e40d` | **800 × 500 px** | 80 KB | App de transporte: vista de mapa con ruta, interfaz de app móvil de ride-sharing, o conductor con smartphone. Transmitir movilidad urbana y tecnología. |
| 8 | `erp-pymes-bms` | 2025 | `photo-1556742049-0cfed4f6a45d` | **800 × 500 px** | 80 KB | Dashboard de gestión empresarial: pantalla con gráficas de ventas, inventarios, módulos de ERP. Puede ser un mockup de interfaz o persona usando el sistema en mostrador/oficina. |
| 9 | `megacable-plataforma-telecom` | 2013 | `photo-1544197150-b99a580bb7a8` | **800 × 500 px** | 80 KB | Infraestructura de telecomunicaciones: torres de señal, cables de fibra óptica, o centro de operaciones de red. Transmitir escala empresarial y conectividad. |
| 10 | `vincula-uan-plataforma-universitaria` | 2017 | `photo-1523050854058-8df90110c476` | **800 × 500 px** | 80 KB | Campus universitario con tecnología: estudiantes usando plataforma digital, laptop en biblioteca, o fachada de universidad con elementos digitales superpuestos. |
| 11 | `software-forge-pipeline-ia` | 2026 | `photo-1677442136019-21780ecad995` | **800 × 500 px** | 80 KB | Pipeline de desarrollo: diagrama de flujo de CI/CD, terminal con outputs de build, o visualización abstracta de un proceso automatizado de software. Tonos oscuros, estilo terminal. |
| 12 | `claude-tools-open-source` | 2026 | `photo-1555949963-aa79dcee981c` | **800 × 500 px** | 80 KB | Código open source: vista de editor con código TypeScript, interfaz de GitHub con commits/PRs, o terminal con herramientas CLI corriendo. Transmitir desarrollo abierto y colaboración. |
| 13 | `analizador-volumetricos-combustibles` | 2025 | `photo-1611117775350-ac3950990985` | **800 × 500 px** | 80 KB | Estación de combustible o control volumétrico: bomba de gasolina, medidores digitales, o reporte fiscal con datos de volúmenes. Transmitir regulación y precisión. |
| 14 | `sistema-gestion-personal` | 2020 | `photo-1521737711867-e3b97375f902` | **800 × 500 px** | 80 KB | Recursos humanos: equipo de trabajo en oficina, expediente digital de empleado, o dashboard de RRHH con vacaciones/permisos. Transmitir gestión de personas y orden. |
| 15 | `home-lab-infraestructura-codigo` | 2025 | `photo-1558494949-ef010cbdcc31` | **800 × 500 px** | 80 KB | Home lab / infraestructura como código: rack pequeño de servidores, terminal con Terraform, o diagrama de red. Transmitir control, reproducibilidad y automatización. |
| 16 | `punto-de-venta-petreos` | 2022 | `photo-1504307651254-35680f356dfd` | **800 × 500 px** | 80 KB | Punto de venta de materiales: mostrador de ferretería/materiales de construcción, interfaz de POS en tablet, o inventario de productos pétreos. Transmitir comercio local y eficiencia. |

---

## 4. Blog (`src/content/posts.json`)

Estas imágenes se usan en:
- Tarjetas del listado `/blog` — alto fijo 200px, `object-fit: cover`
- Hero de post individual `/blog/[slug]` — alto 250-450px responsive, `eager loading`
- OG image al compartir en redes sociales

| # | Slug | Unsplash actual | Dimensión sugerida | Peso máx. | Nota de apoyo |
|---|------|-----------------|-------------------|-----------|---------------|
| 17 | `tu-negocio-necesita-app-movil` | `photo-1512941937669-90a1b58e7e9c` | **800 × 450 px** | 70 KB | Smartphone con app en pantalla sobre fondo limpio. Puede mostrar una pantalla de inicio genérica o una interfaz móvil. Transmitir la pregunta "¿realmente necesito esto?". |
| 18 | `app-nativa-vs-app-web` | `photo-1551650975-87deedd944c3` | **800 × 450 px** | 70 KB | Comparativa visual: smartphone nativo junto a laptop con navegador web, o pantalla dividida mostrando ambos mundos. Transmitir elección entre dos caminos. |
| 19 | `facturacion-electronica-lo-que-nadie-te-dice` | `photo-1554224155-6726b3ff858f` | **800 × 450 px** | 70 KB | Factura electrónica o documento fiscal en pantalla. Puede ser un CFDI, un sistema de facturación, o calculadora con documentos. Transmitir obligaciones fiscales y tecnología. |
| 20 | `ia-para-pymes-sin-cuentos` | `photo-1677442136019-21780ecad995` | **800 × 450 px** | 70 KB | IA accesible para negocios: chatbot en pantalla, asistente virtual, o interfaz simple de IA. Evitar imágenes de robots futuristas. Transmitir herramienta práctica, no ciencia ficción. |
| 21 | `5-modulos-que-tu-negocio-necesita` | `photo-1460925895917-afdab827c52f` | **800 × 450 px** | 70 KB | Dashboard modular: vista de sistema con módulos (ventas, inventario, RRHH). Puede ser un mockup de interfaz con paneles. Transmitir organización y funcionalidad específica. |
| 22 | `automatizar-para-cumplir-sat` | `photo-1554224154-22dec7ec8818` | **800 × 450 px** | 70 KB | Automatización fiscal: robot/script procesando documentos del SAT, o pantalla con flujo automatizado de facturación. Transmitir cumplimiento sin esfuerzo manual. |
| 23 | `rrhh-sigue-en-excel` | `photo-1521737711867-e3b97375f902` | **800 × 450 px** | 70 KB | Contraste: hoja de cálculo Excel desordenada vs. sistema digital limpio. Puede ser escritorio con papeles vs. pantalla con dashboard. Transmitir la transición de lo manual a lo digital. |
| 24 | `por-que-tu-negocio-necesita-sistema-propio` | `photo-1460925895917-afdab827c52f` | **800 × 450 px** | 70 KB | Sistema a la medida: interfaz personalizada en monitor, o persona configurando un sistema. Transmitir software hecho para un negocio específico, no genérico. |
| 25 | `ia-para-desarrollar-software-mas-rapido` | `photo-1677442136019-21780ecad995` | **800 × 450 px** | 70 KB | Desarrollador usando IA como copiloto: pantalla con editor de código y sugerencias de IA, o terminal con salida de Claude/GPT. Transmitir velocidad y asistencia inteligente. |
| 26 | `open-source-como-estrategia-de-negocio` | `photo-1618401471353-b98afee0b2eb` | **800 × 450 px** | 70 KB | Open source: logo de GitHub, vista de repositorio con estrellas/forks, o diagrama de comunidad contribuyendo. Transmitir colaboración abierta y estrategia de negocio. |
| 27 | `como-elegir-proveedor-tecnologia` | `photo-1522071820081-009f0129c71c` | **800 × 450 px** | 70 KB | Reunión de evaluación: personas en mesa de trabajo comparando opciones, checklist en pizarrón, o laptop con propuestas. Transmitir decisión informada y confianza. |
| 28 | `donde-viven-los-datos-de-tu-negocio` | `photo-1558494949-ef010cbdcc31` | **800 × 450 px** | 70 KB | Almacenamiento de datos: servidor con discos, nube con candado, o visualización de base de datos. Transmitir la pregunta "¿dónde están tus datos?" y seguridad. |
| 29 | `servidor-local-vs-nube` | `photo-1451187580459-43490279c0fa` | **800 × 450 px** | 70 KB | Comparativa: servidor físico de escritorio junto a ícono de nube, o vista dividida de rack local vs. dashboard de cloud. Transmitir dos opciones de infraestructura. |
| 30 | `lo-que-negocios-chicos-aprenden-de-grandes` | `photo-1486406146926-c627a92ad1ab` | **800 × 450 px** | 70 KB | Contraste de escala: negocio local pequeño junto a edificio corporativo, o dueño de PyME mirando hacia arriba a rascacielos. Transmitir aspiración alcanzable y aprendizaje. |
| 31 | `transformacion-digital-instituciones` | `photo-1523050854058-8df90110c476` | **800 × 450 px** | 70 KB | Institución digitalizándose: edificio público/universidad con elementos digitales, o persona en ventanilla usando tablet. Transmitir modernización de procesos institucionales. |
| 32 | `por-que-estandarizar-desarrollo` | `photo-1537884944318-390069bb8665` | **800 × 450 px** | 70 KB | Plantillas y estandarización: editor de código con estructura de proyecto, o diagrama de devcontainers para múltiples tecnologías. Transmitir orden, consistencia y eficiencia. |

---

## 5. Imágenes hardcoded en páginas

| # | Archivo | Línea | Unsplash actual | Dimensión sugerida | Peso máx. | Nota de apoyo |
|---|---------|-------|-----------------|-------------------|-----------|---------------|
| 33 | `src/pages/index.astro` | L93 | `photo-1555949963-aa79dcee981c` | **900 × 600 px** | 90 KB | Sección de IA en homepage. Imagen de fondo con overlay azul fuerte. Debe funcionar con texto blanco encima ("IA al servicio de tu negocio"). Ideal: visualización de datos, circuitos o interfaz tech abstracta con tonos fríos. |
| 34 | `src/pages/sobre-mi.astro` | L58 | `photo-1522071820081-009f0129c71c` | **800 × 500 px** | 80 KB | **Foto personal de Antonio Valle** o su espacio de trabajo real. Tiene overlay con su nombre y ubicación. Ideal: retrato profesional en ambiente de trabajo, o escritorio con setup de desarrollo (monitores, teclado, café). Tepic, Nayarit como contexto. |

---

## Imágenes duplicadas detectadas

Las siguientes fotos de Unsplash se reutilizan en múltiples entradas y deberían tener imágenes distintas:

| Unsplash ID | Usos | Entradas |
|-------------|------|----------|
| `photo-1677442136019-21780ecad995` | 3 | IA (servicio), Software Forge (portafolio), IA para PyMEs (blog), IA para desarrollo (blog) |
| `photo-1460925895917-afdab827c52f` | 3 | Automatización (servicio), 5 módulos (blog), Sistema propio (blog) |
| `photo-1558494949-ef010cbdcc31` | 3 | Infraestructura (servicio), Home Lab (portafolio), Datos de negocio (blog) |
| `photo-1555949963-aa79dcee981c` | 3 | IA (servicio), claude-tools (portafolio), Sección IA homepage |
| `photo-1522071820081-009f0129c71c` | 2 | Sobre mí (página), Elegir proveedor (blog) |
| `photo-1521737711867-e3b97375f902` | 2 | Gestión personal (portafolio), RRHH en Excel (blog) |
| `photo-1523050854058-8df90110c476` | 2 | Vincula UAN (portafolio), Transformación digital (blog) |
| `photo-1498050108023-c5249f4df085` | 2 | Desarrollo (servicio), OG Default |

> Cada una de estas entradas debería tener su propia imagen única para evitar repetición visual y mejorar el SEO de imágenes.

---

## Estructura de archivos sugerida

```
public/
└── images/
    ├── og-default.webp                          ← #1
    ├── services/
    │   ├── desarrollo-a-medida.webp             ← #2
    │   ├── inteligencia-artificial.webp         ← #3
    │   ├── automatizacion.webp                  ← #4
    │   ├── servidores-infraestructura.webp      ← #5
    │   └── asesoria-tecnica.webp                ← #6
    ├── portfolio/
    │   ├── gocab-plataforma-ride-sharing.webp   ← #7
    │   ├── erp-pymes-bms.webp                   ← #8
    │   ├── megacable-plataforma-telecom.webp    ← #9
    │   ├── vincula-uan.webp                     ← #10
    │   ├── software-forge-pipeline-ia.webp      ← #11
    │   ├── claude-tools-open-source.webp        ← #12
    │   ├── analizador-volumetricos.webp         ← #13
    │   ├── sistema-gestion-personal.webp        ← #14
    │   ├── home-lab-infraestructura.webp        ← #15
    │   └── punto-de-venta-petreos.webp          ← #16
    ├── blog/
    │   ├── tu-negocio-necesita-app-movil.webp   ← #17
    │   ├── app-nativa-vs-app-web.webp           ← #18
    │   ├── facturacion-electronica.webp         ← #19
    │   ├── ia-para-pymes-sin-cuentos.webp       ← #20
    │   ├── 5-modulos-negocio.webp               ← #21
    │   ├── automatizar-para-cumplir-sat.webp    ← #22
    │   ├── rrhh-sigue-en-excel.webp             ← #23
    │   ├── sistema-propio.webp                  ← #24
    │   ├── ia-desarrollo-software.webp          ← #25
    │   ├── open-source-estrategia.webp          ← #26
    │   ├── elegir-proveedor-tecnologia.webp     ← #27
    │   ├── donde-viven-los-datos.webp           ← #28
    │   ├── servidor-local-vs-nube.webp          ← #29
    │   ├── negocios-chicos-aprenden.webp        ← #30
    │   ├── transformacion-digital.webp          ← #31
    │   └── estandarizar-desarrollo.webp         ← #32
    └── pages/
        ├── ia-hero.webp                         ← #33
        └── sobre-mi.webp                        ← #34
```

---

## Notas técnicas para el reemplazo

1. **Formato WebP** es el estándar actual. Soportado por todos los navegadores modernos (97%+ global).
2. **Calidad 80-85%** ofrece el mejor balance peso/calidad para WebP.
3. **Las dimensiones `800 × 500`** cubren cards (200px alto) y heroes (360px alto) con margen para pantallas retina (2x).
4. **Las imágenes del blog a `800 × 450`** (ratio 16:9) funcionan bien tanto en cards como en hero de post.
5. **La imagen OG debe ser `1200 × 630`** (ratio requerido por Facebook/Twitter/LinkedIn).
6. **Al migrar a locales**, actualizar las URLs en los JSON y las páginas hardcoded de Unsplash (`https://images.unsplash.com/...`) a rutas relativas (`/images/...`).
7. **El `dns-prefetch` de Unsplash** en `Base.astro` L66 puede eliminarse cuando todas las imágenes sean locales.
