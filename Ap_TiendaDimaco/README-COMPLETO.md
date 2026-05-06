# 🎬 DIMACO - Sistema Completo de Venta y Alquiler de Pantallas LED

Sistema web profesional con dos secciones completamente funcionales:
- **Venta de Pantallas LED**: Catálogo de productos para compra
- **Alquiler de Pantallas LED**: Sistema de solicitud para eventos

Ambas secciones utilizan WhatsApp para la comunicación con el cliente.

---

## 📁 Estructura de Archivos

### Páginas Principales
- `tienda.html` - Página de venta de pantallas
- `alquiler.html` - Página de alquiler de pantallas

### JavaScript Compartido
- `config.js` - Configuración general (número de WhatsApp)
- `carrito.js` - Sistema de carrito compartido

### JavaScript Específico de Venta
- `productos.js` - Base de datos de productos para venta
- `sistema-whatsapp.js` - Sistema WhatsApp para venta

### JavaScript Específico de Alquiler
- `productos-alquiler.js` - Base de datos de productos para alquiler
- `sistema-whatsapp-alquiler.js` - Sistema WhatsApp para alquiler (con campos de evento)

### Estilos y Assets
- `tienda.css` - Estilos compartidos para ambas páginas
- `img/` - Imágenes de productos

---

## 🚀 Configuración Inicial

### 1. Configurar Número de WhatsApp

Edita el archivo `config.js`:

```javascript
const MI_WHATSAPP = '34XXXXXXXXX'; // Tu número con código de país, sin +
```

### 2. Abrir el Sistema

Simplemente abre los archivos HTML en tu navegador:
- `tienda.html` para la tienda de venta
- `alquiler.html` para el sistema de alquiler

---

## 📱 Sistema de Venta (tienda.html)

### Características
- Catálogo de pantallas LED para compra
- Filtros por categoría (Todas, Eventos, Fija, Accesorios)
- Búsqueda en tiempo real
- Sistema de carrito
- Envío de solicitud por WhatsApp

### Productos Incluidos
1. **Eventos & Escaparates**: Pantallas P2.6, P2.97, P3.91 (500x500mm y 500x1000mm)
2. **Instalación Fija**: Pantallas P4.4, P5.7, P8 (960x960mm) 
3. **Accesorios**: Controladoras Novastar, Procesador VX400

### Mensaje WhatsApp para Venta
El sistema genera un mensaje estructurado con:
- Datos del cliente (nombre, email opcional)
- Lista detallada de productos
- Especificaciones técnicas
- Mensaje adicional del cliente (opcional)
- Fecha y hora de la solicitud

---

## 🎪 Sistema de Alquiler (alquiler.html)

### Características
- Catálogo específico para alquiler
- Filtros por categoría (Todas, Interior, Exterior, Equipamiento)
- Información de duraciones disponibles
- Formulario detallado para eventos
- Envío de solicitud por WhatsApp

### Productos Incluidos
1. **Interior**: Packs de pantallas P2.6, P2.97, P3.91 para eventos indoor
2. **Exterior**: Pantallas P4.4, P5.7, P8 resistentes a exteriores
3. **Equipamiento**: Controladoras, procesadores, cámaras, audio

### Campos del Formulario de Alquiler
- Nombre/Empresa del cliente
- Fecha del evento
- Duración del alquiler (1 día hasta más de 1 mes)
- Ubicación del evento
- Tipo de evento (concierto, conferencia, feria, etc.)
- Teléfono de contacto
- Detalles adicionales (opcional)

### Mensaje WhatsApp para Alquiler
El sistema genera un mensaje estructurado con:
- Datos del cliente
- Detalles del evento (fecha, duración, ubicación, tipo)
- Pantallas solicitadas con especificaciones
- Servicios incluidos automáticos
- Detalles adicionales del cliente

---

## 🎨 Personalización

### Modificar Productos de Venta

Edita `productos.js`:

```javascript
{
    id: 13,
    nombre: "Tu Producto",
    categoria: "eventos-escaparates", // o "fija" o "accesorios"
    categoriaLabel: "Eventos & Escaparates",
    descripcion: "Descripción del producto",
    specs: ["Spec 1", "Spec 2", "Spec 3"],
    imagen: "img/tu-imagen.jpg",
    destacado: true // o false
}
```

### Modificar Productos de Alquiler

Edita `productos-alquiler.js`:

```javascript
{
    id: 401,
    nombre: "Tu Pantalla para Alquiler",
    categoria: "eventos-indoor", // o "eventos-outdoor" o "equipamiento"
    categoriaLabel: "Interior",
    descripcion: "Descripción",
    specs: ["Spec 1", "Spec 2"],
    duraciones: ["1 día", "2-3 días", "Semanal", "Mensual"],
    imagen: "img/tu-imagen.jpg",
    destacado: true,
    incluye: ["Montaje", "Estructura", "Controladora", "Cables"]
}
```

### Cambiar Colores

Edita las variables CSS en `tienda.css`:

```css
:root {
    --primary: #e30613; /* Color principal */
    --primary-light: #ff4444;
    --primary-dark: #b00510;
    --primary-alpha-20: rgba(227, 6, 19, 0.2);
}
```

---

## 📲 Flujo de Usuario

### Venta
1. Cliente navega por el catálogo
2. Añade productos al carrito
3. Abre el carrito y revisa los productos
4. Click en "Pedir Presupuesto por WhatsApp"
5. Completa formulario (nombre, email opcional, mensaje)
6. Sistema abre WhatsApp con mensaje formateado
7. Cliente envía el mensaje

### Alquiler
1. Cliente navega por catálogo de alquiler
2. Añade pantallas a la solicitud
3. Abre carrito y revisa selección
4. Click en "Solicitar Presupuesto por WhatsApp"
5. Completa formulario detallado (evento, fecha, ubicación, etc.)
6. Acepta términos
7. Sistema abre WhatsApp con solicitud completa
8. Cliente envía el mensaje

---

## 🔧 Características Técnicas

### Tecnologías
- HTML5
- CSS3 (Variables CSS, Flexbox, Grid)
- JavaScript Vanilla (ES6+)
- Font Awesome 6.4.0 (iconos)

### Compatibilidad
- ✅ Escritorio (Chrome, Firefox, Safari, Edge)
- ✅ Móvil (iOS Safari, Android Chrome)
- ✅ Tablet

### Responsive
- Diseño adaptativo desde 320px hasta pantallas grandes
- Navegación móvil optimizada
- Formularios táctiles amigables

---

## 💡 Características Avanzadas

### Sistema de Carrito
- Persistencia en localStorage
- Contador de productos en header
- Modal lateral deslizante
- Gestión de cantidades
- Eliminar productos individuales
- Vaciar carrito completo

### Búsqueda y Filtros
- Búsqueda en tiempo real
- Filtros por categoría
- Combinación de búsqueda + filtro
- Sin resultados animado

### Modales de Producto
- Vista detallada de productos
- Galería de imágenes
- Especificaciones técnicas completas
- Información de servicios incluidos
- Añadir al carrito desde modal

### Validaciones
- Formularios con validación HTML5
- Campos obligatorios marcados
- Validación de fechas (no permitir pasado)
- Checkbox de términos y condiciones
- Mensajes de error claros

---

## 🎯 Ventajas del Sistema

### Para el Negocio
- ✅ Sin costos de plataforma externa
- ✅ Comunicación directa por WhatsApp
- ✅ No requiere servidor ni base de datos
- ✅ Fácil de actualizar (solo editar arrays JS)
- ✅ Dos líneas de negocio en un solo sistema
- ✅ Profesional y moderno

### Para el Cliente
- ✅ Navegación rápida e intuitiva
- ✅ Puede consultar sin registrarse
- ✅ Respuesta directa por WhatsApp
- ✅ Formularios claros y completos
- ✅ Información detallada de productos
- ✅ Experiencia móvil optimizada

---

## 📝 Soporte y Mantenimiento

### Añadir Nuevas Imágenes
1. Guarda la imagen en la carpeta `img/`
2. Formato recomendado: PNG o JPG
3. Tamaño recomendado: 800x800px
4. Usa nombres descriptivos: `p26-mini.png`

### Actualizar Información de Contacto
Edita el footer en ambos archivos HTML:
- `tienda.html` - líneas 113-115
- `alquiler.html` - líneas 137-139

### Cambiar Textos
Todos los textos están en los archivos HTML y JavaScript para fácil edición.

---

## 🚨 Solución de Problemas

### WhatsApp no se abre
- Verifica que el número en `config.js` esté correcto
- Asegúrate de tener WhatsApp instalado
- En móvil, debe tener la app de WhatsApp

### Imágenes no cargan
- Verifica que la ruta en `imagen:` sea correcta
- Asegúrate que la imagen existe en la carpeta `img/`
- Si falta, se mostrará placeholder automático

### Carrito no funciona
- Verifica que `carrito.js` esté cargado
- Comprueba la consola del navegador (F12)
- Limpia localStorage: `localStorage.clear()`

---

## 📄 Licencia

Sistema desarrollado para DIMACO. Todos los derechos reservados.

---

## 🎉 ¡Listo para Usar!

Este sistema está 100% funcional y listo para implementar. Solo necesitas:
1. Configurar tu número de WhatsApp en `config.js`
2. Añadir tus imágenes de productos
3. Personalizar los productos en los archivos JS
4. ¡Subir a tu servidor o hosting!

**¿Preguntas?** Contacta con el desarrollador.
