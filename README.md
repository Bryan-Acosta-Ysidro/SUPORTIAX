# Suportiax – Frontend Angular (TB1)

Sitio web de Suportiax, empresa de soporte técnico para computadoras y laptops.
Trabajo Parcial 1 del curso Desarrollo para Entorno Web (1FIS0211) – UPC, ciclo 2026-1.

## Integrantes
| Integrante | Código | Parte del proyecto |
|---|---|---|
| Acosta Ysidro, Bryan Antonio | u202516779 | Configuración base, estilos globales e integración |
| Ayala Quijano, Jamyle Jackeline | u202321111 | Layout, logo, menú y rutas |
| Huillca Javier, Mario Walter | u201713192 | Páginas Inicio y Nosotros, consejos con HttpClient |
| Mamani Aliaga, Josie Jadhira | u202516932 | Catálogo y detalle de servicios |
| Rondon Huarez, Cesar David | u202412075 | Formulario de contacto con Reactive Forms |

## Requisitos
- Node.js LTS (versión 20 o superior; se recomienda la 22)
- npm
- Git

## Cómo ejecutarlo
```bash
npm install
npm start
```
Luego abrir http://localhost:4200

## Compilar para producción
```bash
npm run build
```

## Rutas
| Ruta | Página |
|---|---|
| /inicio | Inicio |
| /servicios | Catálogo de servicios |
| /servicios/mantenimiento | Detalle: mantenimiento preventivo |
| /servicios/reparacion | Detalle: reparación de equipos |
| /servicios/software | Detalle: instalación de software |
| /nosotros | Nosotros |
| /contacto | Formulario de solicitud |

## Estructura
```
src/app
├── layout/        → header (menú), footer y logo
├── pages/         → inicio, servicios, detalle de servicio, nosotros, contacto
├── components/    → consejos (HttpClient) e íconos de servicios
├── services/      → ConsejosService (petición HTTP GET)
├── models/        → interfaces Servicio y Consejo
├── data/          → catálogo de servicios
└── app.routes.ts  → rutas de la aplicación
public/data/consejos.json → datos que consume ConsejosService
```
