// ==========================================
// BASE DE DATOS DE PRODUCTOS - ALQUILER DIMACO
// ========================================== */

const productos = [
    // ===== EVENTOS INDOOR (Interior) =====
    {
        id: 101,
        nombre: "Pantalla LED P2.6 Indoor - Pack Evento",
        categoria: "eventos-indoor",
        categoriaLabel: "Interior",
        descripcion: "Perfecta para eventos indoor, conferencias, presentaciones corporativas y stands. Alta definición y fácil montaje modular.",
        specs: ["P2.6 - 500x500mm", "4500 nits", "192x192 píxeles", "Pack de 12 módulos"],
        duraciones: ["1 día", "2-3 días", "4-7 días", "Semanal", "Mensual"],
        imagen: "img/p26-mini.png",
        destacado: true,
        incluye: ["Montaje y desmontaje", "Estructura soporte", "Controladora", "Cables y conexiones"]
    },
    {
        id: 102,
        nombre: "Pantalla LED P2.97 Indoor - Pack Grande",
        categoria: "eventos-indoor",
        categoriaLabel: "Interior",
        descripcion: "Solución completa para eventos de gran formato. Ideal para conciertos indoor, teatros y producciones televisivas.",
        specs: ["P2.97 - 500x1000mm", "4500 nits", "168x336 píxeles", "Pack de 20 módulos"],
        duraciones: ["1 día", "2-3 días", "4-7 días", "Semanal", "Mensual"],
        imagen: "img/p97-grande.png",
        destacado: true,
        incluye: ["Montaje profesional", "Estructura completa", "Procesador de video", "Técnico de apoyo"]
    },
    {
        id: 103,
        nombre: "Pantalla LED P3.91 Indoor - Formato Estándar",
        categoria: "eventos-indoor",
        categoriaLabel: "Interior",
        descripcion: "Equilibrio perfecto entre calidad y precio. Ideal para eventos corporativos, bodas y celebraciones privadas.",
        specs: ["P3.91 - 500x500mm", "4500 nits", "128x128 píxeles", "Pack de 16 módulos"],
        duraciones: ["1 día", "2-3 días", "4-7 días", "Semanal", "Mensual"],
        imagen: "img/p391-mini.png",
        destacado: false,
        incluye: ["Montaje incluido", "Estructura básica", "Controladora estándar", "Manual de uso"]
    },

    // ===== EVENTOS OUTDOOR (Exterior) =====
    {
        id: 204,
        nombre: "Pantalla LED P2.6 Outdoor - Alta Definición",
        categoria: "eventos-outdoor",
        categoriaLabel: "Exterior",
        descripcion: "Pantalla exterior de alta definición para eventos premium al aire libre. Imagen nítida incluso con luz solar directa, perfecta para conferencias outdoor, presentaciones corporativas y ferias.",
        specs: ["P2.6 - 500x500mm", "6000 nits", "IP65", "Pack de 12 módulos"],
        duraciones: ["1 día", "2-3 días", "4-7 días", "Semanal", "Mensual"],
        imagen: "img/p26-grande.jpg",
        destacado: true,
        incluye: ["Montaje exterior", "Estructura reforzada", "Controladora", "Protección IP65"]
    },
    {
        id: 205,
        nombre: "Pantalla LED P3.91 Outdoor - Versátil",
        categoria: "eventos-outdoor",
        categoriaLabel: "Exterior",
        descripcion: "Solución versátil para exteriores con excelente relación calidad-precio. Ideal para festivales, eventos municipales y señalización publicitaria al aire libre.",
        specs: ["P3.91 - 500x1000mm", "6000 nits", "IP65", "Pack de 16 módulos"],
        duraciones: ["1 día", "2-3 días", "4-7 días", "Semanal", "Mensual"],
        imagen: "img/p391-grande.png",
        destacado: true,
        incluye: ["Montaje exterior", "Estructura estándar", "Controladora", "Protección clima"]
    },
    {
        id: 201,
        nombre: "Pantalla LED P4.4 Outdoor - Resistente",
        categoria: "eventos-outdoor",
        categoriaLabel: "Exterior",
        descripcion: "Diseñada para soportar condiciones climáticas adversas. Perfecta para festivales, eventos deportivos y ferias al aire libre.",
        specs: ["P4.4 - 960x960mm", "6000 nits", "IP65", "Pack de 9 módulos"],
        duraciones: ["1 día", "2-3 días", "4-7 días", "Semanal", "Mensual"],
        imagen: "img/p44.png",
        destacado: true,
        incluye: ["Montaje exterior", "Estructura reforzada", "Protección IP65", "Seguro todo riesgo"]
    },
    {
        id: 202,
        nombre: "Pantalla LED P5.7 Outdoor - Gran Formato",
        categoria: "eventos-outdoor",
        categoriaLabel: "Exterior",
        descripcion: "Solución de alto brillo para exteriores. Ideal para conciertos masivos, eventos deportivos y publicidad exterior.",
        specs: ["P5.7 - 960x960mm", "6000 nits", "IP65", "Pack de 15 módulos"],
        duraciones: ["1 día", "2-3 días", "4-7 días", "Semanal", "Mensual"],
        imagen: "img/p57.png",
        destacado: true,
        incluye: ["Montaje completo", "Grúa y estructura", "Sistema de control", "Operador técnico"]
    },
    {
        id: 203,
        nombre: "Pantalla LED P8 Outdoor - Económica",
        categoria: "eventos-outdoor",
        categoriaLabel: "Exterior",
        descripcion: "Solución económica para eventos outdoor. Perfecta para ferias, mercados y eventos comunitarios.",
        specs: ["P8 - 960x960mm", "6000 nits", "IP65", "Pack de 12 módulos"],
        duraciones: ["1 día", "2-3 días", "4-7 días", "Semanal", "Mensual"],
        imagen: "img/p8.png",
        destacado: false,
        incluye: ["Montaje básico", "Estructura estándar", "Controladora", "Protección clima"]
    },

    // ===== EQUIPAMIENTO TÉCNICO =====
    {
        id: 301,
        nombre: "Controladora Novastar TB20 + Portátil",
        categoria: "equipamiento",
        categoriaLabel: "Equipamiento",
        descripcion: "Control profesional para tus pantallas. Incluye portátil configurado y software de gestión de contenidos.",
        specs: ["650 mil píxeles", "4K desde USB", "WiFi integrado", "Software incluido"],
        duraciones: ["1 día", "2-3 días", "4-7 días", "Semanal", "Mensual"],
        imagen: "img/Ctb20.png",
        destacado: false,
        incluye: ["Portátil Windows", "Software NovaLCT", "Formación básica", "Cable HDMI"]
    },
    {
        id: 302,
        nombre: "Procesador de Video VX400 Pro",
        categoria: "equipamiento",
        categoriaLabel: "Equipamiento",
        descripcion: "Procesador avanzado para eventos exigentes. Múltiples entradas y salidas, perfecta para producciones complejas.",
        specs: ["2,6M píxeles", "HDMI/DVI/SDI", "4 salidas Ethernet", "Fibra óptica"],
        duraciones: ["1 día", "2-3 días", "4-7 días", "Semanal", "Mensual"],
        imagen: "img/vx400.png",
        destacado: false,
        incluye: ["Configuración previa", "Cables profesionales", "Técnico de apoyo", "Rack de transporte"]
    },
    {
        id: 303,
        nombre: "Cámara + Streaming Pack",
        categoria: "equipamiento",
        categoriaLabel: "Equipamiento",
        descripcion: "Solución completa para retransmisiones en directo. Incluye cámara 4K, streaming encoder y todos los accesorios.",
        specs: ["Cámara 4K", "Encoder H.264", "Streaming ready", "Trípode profesional"],
        duraciones: ["1 día", "2-3 días", "4-7 días", "Semanal", "Mensual"],
        imagen: "img/placeholder.jpg",
        destacado: false,
        incluye: ["Cámara 4K", "Encoder streaming", "Trípode", "Configuración completa"]
    },
    {
        id: 304,
        nombre: "Sistema de Audio Básico",
        categoria: "equipamiento",
        categoriaLabel: "Equipamiento",
        descripcion: "Complementa tu pantalla con sonido profesional. Mesa de mezclas, altavoces y microfonía inalámbrica.",
        specs: ["Mesa 12 canales", "2 altavoces activos", "2 micros inalámbricos", "Cables incluidos"],
        duraciones: ["1 día", "2-3 días", "4-7 días", "Semanal", "Mensual"],
        imagen: "img/placeholder.jpg",
        destacado: false,
        incluye: ["Mesa de mezclas", "Altavoces", "Microfonía", "Montaje incluido"]
    }
];

// ==========================================
// FUNCIONES DE RENDERIZADO
// ==========================================

let currentCategory = 'todas';

function renderProducts(productsToRender = productos) {
    const grid = document.getElementById('productsGrid');
    const noResults = document.getElementById('noResults');
    
    if (productsToRender.length === 0) {
        grid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    grid.style.display = 'grid';
    noResults.style.display = 'none';
    
    grid.innerHTML = productsToRender.map(producto => `
        <div class="product-card" data-categoria="${producto.categoria}">
            <div class="product-image" onclick="openProductModal(${producto.id})">
                <img src="${producto.imagen}" alt="${producto.nombre}" 
                     onerror="this.src='img/placeholder.jpg'">
                <span class="product-category-badge">${producto.categoriaLabel}</span>
                ${producto.destacado ? '<span class="product-featured-badge"><i class="fas fa-star"></i> Destacado</span>' : ''}
            </div>
            <div class="product-info">
                <h3 class="product-title">${producto.nombre}</h3>
                <p class="product-description">${producto.descripcion}</p>
                <div class="product-specs">
                    ${producto.specs.map(spec => `<span class="spec-tag">${spec}</span>`).join('')}
                </div>
                <div class="rental-info">
                    <div class="rental-badge">
                        <i class="fas fa-calendar-alt"></i> Desde ${producto.duraciones[0]}
                    </div>
                </div>
                <div class="product-footer">
                    <button class="btn-add-cart" onclick="addToCart(${producto.id})">
                        <i class="fas fa-cart-plus"></i> Solicitar
                    </button>
                    <button class="btn-view-details" onclick="openProductModal(${producto.id})">
                        <i class="fas fa-info-circle"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// ==========================================
// FILTRADO DE PRODUCTOS
// ==========================================

function filterByCategory(categoria) {
    currentCategory = categoria;
    
    // Actualizar botones activos
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.closest('.filter-btn').classList.add('active');
    
    // Filtrar productos
    if (categoria === 'todas') {
        renderProducts(productos);
    } else {
        const filtered = productos.filter(p => p.categoria === categoria);
        renderProducts(filtered);
    }
    
    // Limpiar búsqueda
    document.getElementById('searchInput').value = '';
}

function filterProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    let filtered = productos;
    
    // Aplicar filtro de categoría
    if (currentCategory !== 'todas') {
        filtered = filtered.filter(p => p.categoria === currentCategory);
    }
    
    // Aplicar búsqueda
    if (searchTerm) {
        filtered = filtered.filter(p => 
            p.nombre.toLowerCase().includes(searchTerm) ||
            p.descripcion.toLowerCase().includes(searchTerm) ||
            p.specs.some(spec => spec.toLowerCase().includes(searchTerm))
        );
    }
    
    renderProducts(filtered);
}

// ==========================================
// MODAL DE PRODUCTO
// ==========================================

function openProductModal(productId) {
    const producto = productos.find(p => p.id === productId);
    if (!producto) return;
    
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('productModalBody');
    
    modalBody.innerHTML = `
        <div style="padding: 2rem;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem;">
                <div>
                    <img src="${producto.imagen}" alt="${producto.nombre}" 
                         style="width: 100%; border-radius: 10px; border: 2px solid var(--primary, #e30613);"
                         onerror="this.src='img/placeholder.jpg'">
                </div>
                <div>
                    <span style="background: var(--primary, #e30613); color: white; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.85rem; font-weight: 700; text-transform: uppercase;">
                        ${producto.categoriaLabel}
                    </span>
                    <h2 style="margin: 1rem 0; font-size: 2rem; color: var(--neutral-0, white);">${producto.nombre}</h2>
                    <p style="color: var(--neutral-400, #a3a3a3); line-height: 1.8; margin-bottom: 1.5rem;">${producto.descripcion}</p>
                    
                    <h3 style="margin-bottom: 1rem; color: var(--neutral-0, white);"><i class="fas fa-cogs"></i> Especificaciones:</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem;">
                        ${producto.specs.map(spec => `
                            <span style="background: var(--bg-elevated, #0f0f0f); color: var(--neutral-300, #d4d4d4); padding: 0.5rem 1rem; border-radius: 8px; font-weight: 600; border: 1px solid var(--border-subtle, rgba(255,255,255,0.06));">
                                ${spec}
                            </span>
                        `).join('')}
                    </div>
                    
                    <h3 style="margin-bottom: 1rem; color: var(--neutral-0, white);"><i class="fas fa-calendar-check"></i> Duraciones disponibles:</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem;">
                        ${producto.duraciones.map(duracion => `
                            <span style="background: linear-gradient(135deg, #e30613, #ff4444); color: white; padding: 0.5rem 1rem; border-radius: 8px; font-weight: 600;">
                                ${duracion}
                            </span>
                        `).join('')}
                    </div>
                    
                    <h3 style="margin-bottom: 1rem; color: var(--neutral-0, white);"><i class="fas fa-check-circle"></i> Incluye:</h3>
                    <ul style="color: var(--neutral-400, #a3a3a3); line-height: 2; margin-bottom: 2rem; list-style: none; padding: 0;">
                        ${producto.incluye.map(item => `
                            <li><i class="fas fa-check" style="color: var(--primary, #e30613); margin-right: 0.5rem;"></i>${item}</li>
                        `).join('')}
                    </ul>
                    
                    <button onclick="addToCart(${producto.id}); closeProductModal();" 
                            style="width: 100%; background: var(--primary, #e30613); color: white; padding: 1rem; border-radius: 10px; font-size: 1.1rem; font-weight: 700; border: none; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px;"
                            onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 16px rgba(227,6,19,0.3)';"
                            onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none';">
                        <i class="fas fa-cart-plus"></i> Solicitar Presupuesto
                    </button>
                </div>
            </div>
            
            <div style="background: var(--bg-elevated, #0f0f0f); padding: 1.5rem; border-radius: 10px; border: 2px solid var(--border-subtle, rgba(255,255,255,0.06));">
                <h3 style="margin-bottom: 1rem; color: var(--neutral-0, white);"><i class="fas fa-info-circle"></i> Información de Alquiler</h3>
                <p style="color: var(--neutral-400, #a3a3a3); line-height: 1.8;">
                    Todos nuestros alquileres incluyen montaje, desmontaje y soporte técnico. Los precios varían según la duración del evento y requisitos específicos. 
                    Solicita un presupuesto personalizado a través de WhatsApp y te responderemos en menos de 2 horas.
                </p>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    document.getElementById('productModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Cerrar modal al hacer clic fuera
document.addEventListener('click', (e) => {
    const modal = document.getElementById('productModal');
    if (e.target === modal) {
        closeProductModal();
    }
});

// ==========================================
// INICIALIZACIÓN
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartUI();
});
