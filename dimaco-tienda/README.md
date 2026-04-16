# 🛒 SISTEMA DE TIENDA - DIMACO PANTALLAS LED

## 📋 Descripción del Proyecto

Sistema completo de tienda online para venta de pantallas LED profesionales con integración a WhatsApp para solicitudes de presupuesto.

## ✨ Características Principales

### 🎯 **Agent Team - 10 Agentes Especializados**

1. **Design System Agent** - Sistema de diseño y variables CSS
2. **Layout Agent** - Estructura y maquetación responsive
3. **Product Catalog Agent** - Gestión de productos y categorías
4. **Filter & Search Agent** - Sistema de búsqueda y filtros
5. **Shopping Cart Agent** - Carrito de compras persistente
6. **WhatsApp Integration Agent** - Integración con WhatsApp Business
7. **UI/UX Agent** - Experiencia de usuario y animaciones
8. **Storage Agent** - LocalStorage para persistencia de datos
9. **Notification Agent** - Sistema de notificaciones
10. **Responsive Agent** - Adaptación a todos los dispositivos

### 🚀 Funcionalidades

- ✅ **4 Categorías de Productos**:
  - 🎪 Pantallas para Eventos
  - 🏪 Pantallas para Escaparates
  - 🏢 Instalación Fija
  - 🔌 Accesorios

- ✅ **Sistema de Carrito Completo**:
  - Añadir/eliminar productos
  - Ajustar cantidades
  - Persistencia con localStorage
  - Contador en tiempo real

- ✅ **Filtros Avanzados**:
  - Por categoría
  - Búsqueda por texto
  - Filtros combinables

- ✅ **Integración WhatsApp**:
  - Envío automático de lista de productos
  - Formato profesional del mensaje
  - Redirección directa a WhatsApp

- ✅ **Responsive Design**:
  - Desktop (1400px+)
  - Tablet (768px - 992px)
  - Mobile (< 768px)

## 📁 Estructura de Archivos

```
tienda/
├── tienda.html              # Página principal
├── css/
│   └── tienda.css          # Estilos completos
├── js/
│   ├── productos.js        # Base de datos de productos
│   ├── carrito.js          # Gestión del carrito
│   └── whatsapp.js         # Integración WhatsApp
└── img/                    # Imágenes de productos
    └── placeholder.jpg     # Imagen por defecto
```

## 🔧 Instalación y Configuración

### Paso 1: Copiar Archivos

Copia todos los archivos a tu servidor web manteniendo la estructura de carpetas.

### Paso 2: Configurar WhatsApp

Abre `js/whatsapp.js` y modifica esta línea:

```javascript
const WHATSAPP_NUMBER = '34XXXXXXXXX'; // ← Cambiar por tu número
```

**Formato del número:**
- Sin espacios ni guiones
- Con código de país
- Ejemplo España: `34612345678`
- Ejemplo México: `52556677889`
- Ejemplo Argentina: `541123456789`

### Paso 3: Añadir Imágenes de Productos

Coloca las imágenes de tus productos en la carpeta `img/` con los siguientes nombres:

**Eventos:**
- `pantalla-p3.9.jpg`
- `pantalla-p4.8.jpg`
- `pantalla-flexible.jpg`
- `pantalla-hd.jpg`

**Escaparates:**
- `pantalla-transparente.jpg`
- `pantalla-poster.jpg`
- `vitrina-touch.jpg`
- `pantalla-slim.jpg`

**Instalación Fija:**
- `videowall-control.jpg`
- `pantalla-fachada.jpg`
- `pantalla-estadio.jpg`
- `pantalla-corporativa.jpg`
- `pantalla-aeropuerto.jpg`

**Accesorios:**
- `procesador-video.jpg`
- `flight-case.jpg`
- `tarjeta-emisora.jpg`
- `cable-datos.jpg`
- `software-control.jpg`
- `kit-montaje.jpg`
- `fuente-poder.jpg`

**Nota:** Si falta alguna imagen, se mostrará un placeholder automáticamente.

### Paso 4: Personalizar Productos

Abre `js/productos.js` y edita el array `productos` para:
- Modificar nombres y descripciones
- Cambiar especificaciones
- Añadir o eliminar productos
- Ajustar categorías

**Ejemplo de producto:**
```javascript
{
    id: 21, // ID único
    nombre: "Tu Producto",
    categoria: "eventos", // eventos, escaparates, fija, accesorios
    categoriaLabel: "Eventos",
    descripcion: "Descripción del producto",
    specs: ["Spec1", "Spec2", "Spec3"],
    imagen: "img/tu-imagen.jpg",
    destacado: false
}
```

### Paso 5: Personalizar Colores

Abre `css/tienda.css` y modifica las variables CSS al inicio:

```css
:root {
    --primary-color: #0066cc;     /* Color principal */
    --primary-dark: #004a99;      /* Color principal oscuro */
    --secondary-color: #ff6b00;   /* Color secundario */
    --success-color: #25D366;     /* Verde WhatsApp */
    /* ... más variables ... */
}
```

### Paso 6: Integrar con tu Web Existente

**Opción A - Página Independiente:**
```html
<!-- En tu menú principal -->
<a href="tienda.html">Tienda</a>
```

**Opción B - Integrar Header/Footer:**
Copia el header y footer de `portada.html` y `sobre_nosotros.html` a `tienda.html`.

## 🎨 Personalización Avanzada

### Cambiar Fuentes

En `css/tienda.css`:
```css
:root {
    --font-main: 'Tu Fuente', sans-serif;
    --font-heading: 'Tu Fuente Títulos', serif;
}
```

### Ajustar Espaciado

Modifica las variables de espaciado:
```css
:root {
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 1.5rem;
    --spacing-lg: 2rem;
    --spacing-xl: 3rem;
}
```

### Cambiar Layout del Grid

En `css/tienda.css`, busca `.products-grid`:
```css
.products-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    /* Cambia 300px por el ancho mínimo deseado */
}
```

## 📱 Características Técnicas

### Tecnologías Utilizadas
- HTML5 semántico
- CSS3 con Variables y Grid
- JavaScript ES6+ (Vanilla)
- Font Awesome 6.4.0
- LocalStorage API

### Compatibilidad
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

### Performance
- Sin dependencias externas (excepto Font Awesome)
- Carga rápida
- Optimizado para móviles
- Imágenes lazy-loading automático

## 🔍 Solución de Problemas

### El carrito no guarda productos
**Solución:** Verifica que localStorage esté habilitado en el navegador.

### Las imágenes no se ven
**Solución:** 
1. Verifica que las rutas sean correctas
2. Asegúrate de que los archivos existan en `img/`
3. Se mostrará un placeholder si falta la imagen

### WhatsApp no se abre
**Solución:**
1. Verifica que el número esté configurado correctamente
2. Formato: código de país + número (sin +, espacios ni guiones)
3. Ejemplo: `34612345678` para España

### Los filtros no funcionan
**Solución:**
1. Abre la consola del navegador (F12)
2. Busca errores en rojo
3. Verifica que todos los archivos JS estén cargados

## 📊 Gestión de Productos

### Añadir un Producto Nuevo

```javascript
{
    id: 999, // Número único no usado
    nombre: "Nombre del Producto",
    categoria: "eventos", // eventos | escaparates | fija | accesorios
    categoriaLabel: "Eventos",
    descripcion: "Descripción completa",
    specs: ["Spec1", "Spec2", "Spec3", "Spec4"],
    imagen: "img/nombre-imagen.jpg",
    destacado: false // true para destacar
}
```

### Eliminar un Producto

Simplemente borra el objeto completo del array en `js/productos.js`.

### Modificar Categorías

Para añadir una nueva categoría:

1. En `tienda.html`, añade un botón de filtro:
```html
<button class="filter-btn" onclick="filterByCategory('nueva-categoria')">
    <i class="fas fa-icon"></i> Nueva Categoría
</button>
```

2. En `js/productos.js`, usa la nueva categoría:
```javascript
categoria: "nueva-categoria"
```

## 🚀 Mejoras Futuras (Opcional)

- [ ] Sistema de precios y cálculo de totales
- [ ] Integración con pasarela de pago
- [ ] Panel de administración
- [ ] Base de datos backend
- [ ] Sistema de usuarios
- [ ] Historial de pedidos
- [ ] Notificaciones por email
- [ ] Galería de imágenes múltiples
- [ ] Sistema de reviews y valoraciones
- [ ] Comparador de productos
- [ ] Productos relacionados
- [ ] Wishlist / Lista de deseos

## 📞 Soporte

Para dudas o problemas:
1. Revisa este README
2. Verifica la consola del navegador (F12)
3. Comprueba que todos los archivos estén en su lugar

## 📝 Licencia

Este código es de uso libre para proyectos de Dimaco.

## 🎉 ¡Listo para Usar!

Tu sistema de tienda está completo y listo para funcionar. Solo necesitas:
1. ✅ Configurar tu número de WhatsApp
2. ✅ Añadir las imágenes de tus productos
3. ✅ Personalizar colores si lo deseas
4. ✅ Subir a tu servidor

---

**Desarrollado por Agent Team - Sistema Profesional de E-commerce**
