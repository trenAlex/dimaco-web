# 🛒 TIENDA DIMACO - Pantallas LED

## 📋 Descripción

Sistema de tienda online para venta de pantallas LED profesionales con estética **negra y rojo neón**. Incluye integración directa con WhatsApp para solicitudes de presupuesto.

## ✨ Características

### 🎨 Diseño
- **Estética negra con rojo neón** acorde a la marca Dimaco
- Efectos de glow y sombras neón
- Scrollbar personalizado
- Animaciones suaves
- 100% responsive

### 📦 Catálogo
- **3 Categorías principales**:
  - 🎪 **Eventos & Escaparates** (8 productos) - Pantallas temporales
  - 🏢 **Instalación Fija** (5 productos) - Pantallas permanentes
  - 🔌 **Accesorios** (7 productos) - Complementos y hardware

- **20 productos pre-configurados**
- Filtros por categoría
- Búsqueda en tiempo real
- Modal de detalles

### 🛒 Sistema de Carrito
- Añadir/eliminar productos
- Ajustar cantidades
- Contador en tiempo real
- Persistencia con localStorage
- Modal lateral animado

### 📱 Integración WhatsApp
- Formato profesional de mensajes
- Lista detallada de productos
- Envío directo a WhatsApp Business

## 🚀 Instalación Rápida

### 1. Configurar WhatsApp (OBLIGATORIO)

Abre `js/whatsapp.js` línea 7:
```javascript
const WHATSAPP_NUMBER = '34XXXXXXXXX'; // Cambia por tu número
```

**Formato:** sin +, con código de país, sin espacios
- España: `34612345678`
- México: `52556677889`

### 2. Añadir Imágenes

Sube tus fotos a la carpeta `img/` con los nombres indicados en el código.

### 3. Subir al Servidor

Sube todos los archivos manteniendo la estructura:
```
tienda.html
css/tienda.css
js/*.js
img/*.jpg
```

### 4. ¡Listo!

Accede a `tienda.html` en tu navegador.

## 📁 Estructura

```
tienda-dimaco/
├── tienda.html          # Página principal
├── css/
│   └── tienda.css      # Estilos (negro + rojo neón)
├── js/
│   ├── productos.js    # 20 productos en 3 categorías
│   ├── carrito.js      # Sistema de carrito
│   └── whatsapp.js     # Integración WhatsApp
└── img/                # Imágenes de productos
```

## 🎨 Personalización de Colores

Si necesitas ajustar los tonos de rojo, abre `css/tienda.css` y modifica:

```css
:root {
    --neon-red: #ff0000;        /* Rojo principal */
    --primary-dark: #cc0000;     /* Rojo oscuro */
    --primary-light: #ff3333;    /* Rojo claro */
}
```

## 📝 Modificar Productos

Abre `js/productos.js` y edita el array `productos[]`.

**Añadir producto:**
```javascript
{
    id: 21,
    nombre: "Mi Producto",
    categoria: "eventos-escaparates", // o "fija" o "accesorios"
    categoriaLabel: "Eventos & Escaparates",
    descripcion: "Descripción del producto",
    specs: ["Spec1", "Spec2", "Spec3"],
    imagen: "img/mi-producto.jpg",
    destacado: false
}
```

## ⚙️ Categorías

### Eventos & Escaparates
Pantallas para uso temporal:
- Eventos (conciertos, ferias, conferencias)
- Escaparates (retail, tiendas)
- Instalaciones móviles

### Instalación Fija
Pantallas permanentes:
- Fachadas de edificios
- Estadios
- Oficinas corporativas
- Aeropuertos

### Accesorios
Hardware y complementos:
- Procesadores de video
- Tarjetas emisoras
- Cables profesionales
- Kits de montaje
- Software de control

## 🌐 Publicar Online

### Opción 1: Tu Hosting
Sube todos los archivos por FTP

### Opción 2: GitHub Pages (gratis)
1. Sube a GitHub
2. Settings → Pages
3. Source: main branch
4. Tu tienda estará en: `https://tu-usuario.github.io/nombre-repo/tienda.html`

### Opción 3: Netlify/Vercel (gratis)
Arrastra la carpeta y publica

## 🆘 Solución de Problemas

**El carrito no guarda:**
- Verifica que localStorage esté habilitado

**WhatsApp no abre:**
- Revisa el número en `js/whatsapp.js`
- Formato correcto: `34612345678`

**Imágenes no se ven:**
- Verifica nombres de archivo
- Se mostrará placeholder si falta la imagen

**Los filtros no funcionan:**
- Abre consola (F12)
- Verifica que todos los JS estén cargados

## 📱 Compatibilidad

✅ Chrome 90+
✅ Firefox 88+  
✅ Safari 14+
✅ Edge 90+
✅ Móviles iOS/Android

## 🔧 Tecnologías

- HTML5
- CSS3 (Variables, Grid, Flexbox)
- JavaScript ES6+ (Vanilla)
- Font Awesome 6.4.0
- LocalStorage API

## 📞 Soporte

Para dudas sobre implementación, revisa:
- Este README
- Comentarios en el código
- Consola del navegador (F12)

---

**Versión Negra y Roja - Dimaco 2026**
