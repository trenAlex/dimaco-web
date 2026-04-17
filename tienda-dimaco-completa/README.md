# 🛒 TIENDA DIMACO - Pantallas LED Profesionales

## 📋 Descripción

Sistema de tienda online profesional para venta de pantallas LED con diseño corporativo negro y rojo. Incluye sistema de carrito y formulario de contacto por email integrado.

---

## ✨ Características Principales

### 🎨 Diseño Profesional
- Estética corporativa negra con acentos rojos
- Animaciones sutiles y elegantes
- 100% responsive (móvil, tablet, desktop)
- Scrollbar personalizado

### 📦 Catálogo de Productos
- **3 Categorías:**
  - 🎪 Eventos & Escaparates (6 productos)
  - 🏢 Instalación Fija (3 productos)
  - 🔌 Accesorios (3 productos)
- Búsqueda en tiempo real
- Filtros por categoría
- Modal con detalles de producto

### 🛒 Sistema de Carrito Avanzado
- Añadir/eliminar productos
- Ajustar cantidades
- Contador en tiempo real
- Persistencia con localStorage
- Modal lateral animado

### 📧 Sistema de Presupuestos
- **Popup modal profesional** para datos del cliente
- Formulario con validación
- Envío por email
- Recopila: Nombre, Email, Teléfono, Mensaje

---

## 🚀 Instalación Rápida (3 Pasos)

### 1️⃣ Configura tu Email

Abre el archivo **`email.js`** y en la **línea 7** cambia:

```javascript
const COMPANY_EMAIL = 'info@dimaco.es'; // ← PON AQUÍ TU EMAIL
```

**Ejemplo:**
```javascript
const COMPANY_EMAIL = 'ventas@tuempresa.com';
```

### 2️⃣ Estructura de Archivos

Coloca todos los archivos en la **misma carpeta**:

```
mi-tienda/
├── tienda.html          ← Página principal
├── tienda.css           ← Estilos
├── productos.js         ← Catálogo de productos
├── carrito.js           ← Sistema de carrito
├── email.js             ← Sistema de email
└── img/                 ← Carpeta de imágenes
    ├── p26-mini.png
    ├── p26-grande.jpg
    ├── p97-mini.png
    ├── p97-grande.png
    ├── p391-mini.png
    ├── p391-grande.png
    ├── p44.png
    ├── p57.png
    ├── p8.png
    ├── Ctb20.png
    ├── Ctb40.jpg
    ├── vx400.png
    └── placeholder.jpg
```

### 3️⃣ ¡Listo!

Abre **`tienda.html`** en tu navegador.

---

## 💡 Cómo Funciona el Sistema de Email

### Proceso Completo:

1. **Cliente añade productos** al carrito
2. **Click en "Solicitar Presupuesto"**
3. **Se abre un popup modal** pidiendo:
   - ✅ Nombre (obligatorio)
   - ✅ Email (obligatorio)
   - ✅ Teléfono (opcional)
   - ✅ Mensaje (opcional)
4. **Cliente rellena el formulario** y da click en "Enviar Solicitud"
5. **Se abre su programa de email** (Outlook, Gmail, Apple Mail, etc.)
6. **Email ya preparado** con toda la información
7. **Cliente hace click en "Enviar"** en su programa de correo
8. **Tú recibes el email** con todos los detalles

---

## 🆘 Solución de Problemas

### ❌ "El botón de presupuesto no hace nada"

**Verificación rápida:**
```
mi-tienda/
├── tienda.html    ✅
├── email.js       ✅ (¿Está aquí?)
├── productos.js   ✅ (¿Está aquí?)
└── carrito.js     ✅ (¿Está aquí?)
```

**Solución:**
1. Abre la **consola del navegador** (F12)
2. Ve a la pestaña **"Console"**
3. Busca errores en rojo
4. Verifica que los archivos `.js` estén en la misma carpeta que el HTML

### ❌ "El email no se abre"

**Solución:**
- **Windows:** Instala Outlook o Thunderbird
- **Mac:** Usa Apple Mail (viene instalado)

### ❌ "Las imágenes no se ven"

**Solución:**
1. Crea la carpeta `img/` en la misma ubicación que `tienda.html`
2. Coloca todas las imágenes dentro
3. Verifica que los nombres coincidan

---

## 🌐 Publicar Online

### Opción 1: Hosting Propio (FTP)
Sube todos los archivos manteniendo la estructura

### Opción 2: GitHub Pages (Gratis)
Settings → Pages → Activar main branch

### Opción 3: Netlify/Vercel (Gratis)
Arrastra la carpeta al sitio web

---

## 📱 Compatibilidad

✅ Chrome 90+  
✅ Firefox 88+  
✅ Safari 14+  
✅ Edge 90+  
✅ iOS y Android

---

**DIMACO © 2026 - Sistema de Email con Popup Modal v2.0**
