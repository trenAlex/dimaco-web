# DIMACO - Creación de Contenido Digital (Videos con Fotos y Apps)

Esta es una **landing page** para tu servicio de creación de videos publicitarios mediante **edición digital**. No es un estudio de grabación tradicional, sino que creas videos usando **fotos del cliente, apps de edición y material online**.

---

## 🎯 Enfoque del Servicio

Tu servicio se especializa en:
- ✅ Crear videos con **fotos y material del cliente**
- ✅ Usar **apps de edición profesionales** (no cámaras)
- ✅ Buscar **material visual en internet** si es necesario
- ✅ **Edición digital** con efectos, música y transiciones
- ✅ Videos para **redes sociales y pantallas LED**
- ✅ **Entregas rápidas** (24-48 horas)
- ✅ **Precios accesibles** (sin costes de producción física)

---

## 📁 Archivos Incluidos

```
videos-dimaco-independiente/
├── index.html                  # Página principal
├── videos-style.css            # Estilos completos
├── config.js                   # Configuración del WhatsApp
└── sistema-whatsapp-videos.js  # Sistema de formulario
```

---

## 💡 ¿Qué Necesitan tus Clientes?

La página explica claramente que **NO necesitan grabar nada**:

### Opción 1: Traen sus Fotos
- Fotos de productos
- Fotos del local/negocio
- Logo y elementos de marca
- Tú los conviertes en video

### Opción 2: Tú Buscas el Material
- Buscas imágenes en internet
- Usas recursos visuales gratuitos/de pago
- Creas el video desde cero
- Añades su logo y branding

### El Resultado
- Videos editados con apps profesionales
- Música, efectos y transiciones
- Optimizados para cada plataforma
- Listos para publicar

---

## 🚀 Configuración en 3 Pasos

### 1. **Configura tu Número de WhatsApp**

Abre el archivo `config.js` y actualiza:

```javascript
const MI_WHATSAPP = '34XXXXXXXXX';  // ⬅️ Pon tu número aquí (sin + ni espacios)
```

**Ejemplo:**
- Si tu número es: +34 612 345 678
- Escribe: `const MI_WHATSAPP = '34612345678';`

### 2. **Reemplaza los Videos de Ejemplo**

Abre `index.html` y busca estas 3 líneas (una para cada video):

```html
<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"
```

**Cómo obtener el ID de tu video de YouTube:**
1. Ve a tu video en YouTube
2. Fíjate en la URL: `https://www.youtube.com/watch?v=ABC123XYZ`
3. El ID es lo que viene después de `v=` → `ABC123XYZ`
4. Reemplázalo: `src="https://www.youtube.com/embed/ABC123XYZ"`

### 3. **Personaliza las Descripciones**

En cada tarjeta de video, actualiza:
- **Título** (línea `<h3>`)
- **Descripción** (línea `<p>`)
- **Etiquetas** (dentro de `<div class="video-tags">`)

---

## 🎨 Estructura de la Página

### Secciones Incluidas:

1. **Header con Botón de Contacto** - Barra superior fija con logo y CTA
2. **Hero Section** - Título principal con badges informativos
3. **Servicios** - 3 tarjetas explicando tus servicios:
   - Redes Sociales
   - Pantallas LED
   - Videos Corporativos
4. **Portfolio** - Galería con 3 videos de ejemplo
5. **Proceso de Trabajo** - 4 pasos visuales
6. **CTA Principal** - Botón destacado para solicitar presupuesto
7. **Beneficios** - 4 razones para elegirte
8. **Footer** - Información de contacto

---

## 📝 Formulario de Presupuesto

Cuando un cliente hace clic en "Solicitar Presupuesto", se abre un formulario que recopila:

### Datos del Cliente
- Nombre (obligatorio)
- Email (opcional)

### Información del Proyecto
- **Tipo de negocio**: Restauración, Retail, Servicios, Belleza, Deporte, Tecnología, Inmobiliaria, Salud, Educación, Otro
- **Formato del video** (selección múltiple):
  - 📱 Redes Sociales
  - 🎪 Stand Publicitario
  - 📺 Pantalla LED
  - 💼 Web/Corporativo
  - 🎬 Otro formato
- **Cantidad de videos**: 1, 2-3, 4-5, 6-10, +10, o Plan mensual
- **Finalidad**:
  - Promociones y ofertas puntuales
  - Publicidad fija del negocio
  - Lanzamiento de producto/servicio
  - Evento especial
  - Contenido de marca general
  - Testimonios de clientes
  - Tutorial/Educativo
  - Otro
- **Detalles adicionales** (campo de texto libre)

### Mensaje de WhatsApp Generado

```
🎬 SOLICITUD DE PRESUPUESTO - VIDEOS
═══════════════════════════════════

👤 Datos del Cliente:
• Nombre: [nombre]
• Email: [email]

🏢 Información del Proyecto:
─────────────────────────────
• Tipo de Negocio: [tipo]
• Cantidad de Videos: [cantidad]
• Finalidad: [finalidad]

📹 Formatos Solicitados:
  1. [formato 1]
  2. [formato 2]

💬 Detalles del Proyecto:
[mensaje adicional]

─────────────────────────────
📅 [fecha y hora]
```

---

## 🎨 Personalización

### Cambiar Colores

Abre `videos-style.css` y modifica estas variables al inicio:

```css
:root {
    --primary: #e30613;        /* Color principal (rojo DIMACO) */
    --whatsapp: #25D366;       /* Color de WhatsApp (verde) */
    --bg-base: #000000;        /* Fondo principal (negro) */
}
```

### Añadir Más Videos

Para añadir más videos a la galería, copia este bloque en `index.html` dentro de `<div class="videos-grid">`:

```html
<div class="video-card">
    <div class="video-wrapper">
        <iframe 
            src="https://www.youtube.com/embed/TU_VIDEO_ID" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    </div>
    <div class="video-info">
        <h3>Título del Video</h3>
        <p>Descripción del proyecto</p>
        <div class="video-tags">
            <span class="video-tag"><i class="fas fa-mobile-alt"></i> Etiqueta</span>
        </div>
    </div>
</div>
```

### Cambiar Información de Contacto

En el **footer**, actualiza:
- Número de WhatsApp
- Email
- Dirección

```html
<p><i class="fab fa-whatsapp"></i> WhatsApp: +34 XXX XXX XXX</p>
<p><i class="fas fa-envelope"></i> videos@dimaco.es</p>
<p><i class="fas fa-map-marker-alt"></i> Murcia, España</p>
```

---

## 🌐 Publicación

### Opción 1: Abrir Localmente
1. Descomprime el archivo ZIP
2. Abre `index.html` en tu navegador
3. ¡Listo! Todo funciona sin servidor

### Opción 2: Subir a un Hosting
1. Sube todos los archivos a tu hosting (FTP, cPanel, etc.)
2. Asegúrate de que `index.html` esté en la raíz
3. Accede a tu dominio

### Ejemplos de Hosting Gratuito:
- Netlify (arrastra y suelta el ZIP)
- Vercel
- GitHub Pages
- Firebase Hosting

---

## 📱 Responsive

La página está **100% optimizada** para:
- 📱 Móviles (iPhone, Android)
- 💻 Tablets (iPad, etc.)
- 🖥️ Escritorio

---

## ✅ Checklist Final

Antes de publicar, verifica:

- [ ] Configurado el número de WhatsApp en `config.js`
- [ ] Reemplazados los 3 videos de YouTube
- [ ] Actualizadas las descripciones de videos
- [ ] Personalizada la información de contacto en el footer
- [ ] Probado el formulario de presupuesto
- [ ] Verificado en móvil y escritorio

---

## 💡 Ventajas de esta Versión Independiente

✅ **Totalmente autónoma** - No depende de otros archivos  
✅ **Súper ligera** - Solo 4 archivos  
✅ **Fácil de publicar** - Funciona sin servidor  
✅ **Profesional** - Diseño moderno y limpio  
✅ **Optimizada para conversión** - Múltiples CTAs  
✅ **SEO friendly** - Estructura semántica HTML5  

---

## 🆘 Soporte

Si necesitas ayuda con:
- Personalización de colores
- Añadir más secciones
- Modificar el formulario
- Integración con otras herramientas

No dudes en consultarme.

---

**¡Tu landing page de videos está lista para generar clientes!** 🎉🎬
