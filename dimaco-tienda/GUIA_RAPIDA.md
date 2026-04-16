# 🚀 GUÍA DE INICIO RÁPIDO - DIMACO TIENDA

## ⚡ Configuración en 5 Minutos

### 1️⃣ CONFIGURAR WHATSAPP (OBLIGATORIO)

Abre el archivo: **`js/whatsapp.js`**

Busca esta línea (línea 7):
```javascript
const WHATSAPP_NUMBER = '34XXXXXXXXX';
```

Cámbiala por tu número de WhatsApp:
```javascript
const WHATSAPP_NUMBER = '34612345678'; // ← TU NÚMERO AQUÍ
```

**IMPORTANTE:** 
- Sin el símbolo +
- Sin espacios ni guiones
- Con código de país (34 para España)

### 2️⃣ SUBIR ARCHIVOS AL SERVIDOR

Sube TODA la carpeta manteniendo esta estructura:

```
📁 tu-servidor/
  └─ 📁 tienda/
       ├─ 📄 tienda.html
       ├─ 📁 css/
       │   └─ 📄 tienda.css
       ├─ 📁 js/
       │   ├─ 📄 productos.js
       │   ├─ 📄 carrito.js
       │   └─ 📄 whatsapp.js
       └─ 📁 img/
           └─ (tus imágenes aquí)
```

### 3️⃣ AÑADIR IMÁGENES

Sube tus fotos de productos a la carpeta **`img/`**

Si no tienes todas las imágenes, no pasa nada. Se mostrará un placeholder automáticamente.

### 4️⃣ PROBAR LA TIENDA

Abre en tu navegador:
```
http://tu-dominio.com/tienda/tienda.html
```

### 5️⃣ ENLAZAR DESDE TU WEB

En tu menú principal (portada.html, sobre_nosotros.html):

```html
<a href="tienda.html">Tienda</a>
```

---

## ✅ CHECKLIST DE VERIFICACIÓN

- [ ] Número de WhatsApp configurado
- [ ] Archivos subidos al servidor
- [ ] Carpetas (css, js, img) en su lugar
- [ ] Al menos 1 imagen de producto
- [ ] Probado en navegador
- [ ] Probado en móvil
- [ ] Botón de WhatsApp funciona
- [ ] Carrito guarda productos

---

## 🎨 PERSONALIZACIÓN BÁSICA (OPCIONAL)

### Cambiar Colores

Abre **`css/tienda.css`** y en las primeras líneas cambia:

```css
--primary-color: #0066cc;     /* Azul principal */
--secondary-color: #ff6b00;   /* Naranja acento */
```

Por tus colores corporativos:

```css
--primary-color: #TU-COLOR;
--secondary-color: #TU-COLOR;
```

### Modificar Productos

Abre **`js/productos.js`** y edita los productos del array.

Para **AÑADIR** un producto:
```javascript
{
    id: 21,
    nombre: "Mi Producto Nuevo",
    categoria: "eventos",
    categoriaLabel: "Eventos",
    descripcion: "Descripción de mi producto",
    specs: ["Característica 1", "Característica 2"],
    imagen: "img/mi-producto.jpg",
    destacado: false
}
```

Para **ELIMINAR** un producto:
- Simplemente borra todo el objeto (desde { hasta })

---

## 🆘 PROBLEMAS COMUNES

### ❌ "El carrito no guarda"
**Solución:** Prueba en navegador modo incógnito. Si funciona, limpia cookies.

### ❌ "WhatsApp no abre"
**Solución:** 
1. Verifica el número en `js/whatsapp.js`
2. Formato correcto: `34612345678` (sin + ni espacios)
3. Prueba desde móvil (WhatsApp debe estar instalado)

### ❌ "No se ven las imágenes"
**Solución:**
1. Verifica que las imágenes estén en la carpeta `img/`
2. Nombres de archivo deben coincidir exactamente
3. Si falta una imagen, se verá un placeholder gris

### ❌ "Los filtros no funcionan"
**Solución:**
1. Abre la consola del navegador (F12)
2. Si hay errores rojos, verifica que todos los archivos JS estén cargados
3. Asegúrate de que las rutas en el HTML sean correctas

---

## 📱 PROBAR EN MÓVIL

1. Abre desde tu smartphone: `http://tu-dominio.com/tienda/tienda.html`
2. Añade productos al carrito
3. Presiona el botón de WhatsApp
4. Debe abrirse la app de WhatsApp con el mensaje

---

## 🎯 PRÓXIMOS PASOS

Una vez todo funcione:

1. **Añade tus productos reales**
2. **Sube fotos profesionales**
3. **Personaliza los colores a tu marca**
4. **Comparte el enlace con clientes**

---

## 💡 TIPS PRO

### Optimizar Imágenes
- Tamaño recomendado: 800x800px
- Formato: JPG o PNG
- Peso máximo: 200KB cada una
- Usa herramientas como TinyPNG para comprimir

### SEO Básico
Añade estas etiquetas en el `<head>` de `tienda.html`:
```html
<meta name="description" content="Tienda de pantallas LED profesionales - Dimaco">
<meta name="keywords" content="pantallas LED, eventos, escaparates, instalación">
```

### Backup
Haz una copia de seguridad de:
- `js/productos.js` (tu catálogo)
- `js/whatsapp.js` (tu configuración)

---

**¿Todo listo? ¡Tu tienda ya está funcionando! 🎉**

Si necesitas ayuda, revisa el README.md completo.
