// ==========================================
// BASE DE DATOS DE PRODUCTOS - DIMACO
// ========================================== */

const productos = [
    // ===== EVENTOS & ESCAPARATES (Pantallas Temporales) =====
    {
        id: 1,
        nombre: "Pantalla LED P2.6 500X500MM",
        categoria: "eventos-escaparates",
        categoriaLabel: "Eventos & Escaparates",
        descripcion: "Ideal para conciertos, conferencias, presentaciones y escaparates. Alta definición y fácil montaje.",
        specs: ["P2.6", "500x500mm", "4500/5000 nits", "110-120v","600-700w"],
        imagen: "img/p26-mini.png",
        destacado: true
    },
    {
        id: 2,
        nombre: "Pantalla LED P4.8 Exterior",
        categoria: "eventos-escaparates",
        categoriaLabel: "Eventos & Escaparates",
        descripcion: "Resistente al agua IP65. Perfecta para festivales, eventos deportivos y escaparates exteriores.",
        specs: ["P4.8mm", "500x1000mm", "5000 nits", "IP65"],
        imagen: "img/pantalla-p4.8.jpg",
        destacado: false
    },
    {
        id: 3,
        nombre: "Pantalla LED Flexible P5",
        categoria: "eventos-escaparates",
        categoriaLabel: "Eventos & Escaparates",
        descripcion: "Pantalla curva flexible para diseños creativos en eventos y escaparates innovadores.",
        specs: ["P5mm", "Flexible", "3500 nits", "Curva"],
        imagen: "img/pantalla-flexible.jpg",
        destacado: false
    },
    {
        id: 4,
        nombre: "Pantalla LED P2.9 Alta Definición",
        categoria: "eventos-escaparates",
        categoriaLabel: "Eventos & Escaparates",
        descripcion: "Máxima calidad de imagen para eventos premium y escaparates de lujo.",
        specs: ["P2.9mm", "4K Ready", "800 nits", "Ultra HD"],
        imagen: "img/pantalla-hd.jpg",
        destacado: true
    },
    {
        id: 5,
        nombre: "Pantalla Transparente P3.9",
        categoria: "eventos-escaparates",
        categoriaLabel: "Eventos & Escaparates",
        descripcion: "Transparencia del 70%. Perfecta para escaparates manteniendo visibilidad interior.",
        specs: ["P3.9mm", "70% transparente", "1200 nits", "Vidrio"],
        imagen: "img/pantalla-transparente.jpg",
        destacado: true
    },
    {
        id: 6,
        nombre: "Pantalla LED Poster P2.5",
        categoria: "eventos-escaparates",
        categoriaLabel: "Eventos & Escaparates",
        descripcion: "Formato vertical tipo cartel. Ideal para retail, eventos y centros comerciales.",
        specs: ["P2.5mm", "720x1280mm", "800 nits", "Portrait"],
        imagen: "img/pantalla-poster.jpg",
        destacado: false
    },
    {
        id: 7,
        nombre: "Vitrina LED Interactiva",
        categoria: "eventos-escaparates",
        categoriaLabel: "Eventos & Escaparates",
        descripcion: "Con sensor táctil. Interacción del cliente con catálogo desde el escaparate o evento.",
        specs: ["Touch", "P3mm", "1500 nits", "Interactivo"],
        imagen: "img/vitrina-touch.jpg",
        destacado: true
    },
    {
        id: 8,
        nombre: "Pantalla LED Ultra Delgada",
        categoria: "eventos-escaparates",
        categoriaLabel: "Eventos & Escaparates",
        descripcion: "Solo 39mm de espesor. Diseño minimalista perfecto para espacios reducidos.",
        specs: ["P2mm", "39mm grosor", "1000 nits", "Slim"],
        imagen: "img/pantalla-slim.jpg",
        destacado: false
    },

    // ===== INSTALACIÓN FIJA =====
    {
        id: 9,
        nombre: "Videowall LED P1.9 Indoor",
        categoria: "fija",
        categoriaLabel: "Instalación Fija",
        descripcion: "Para salas de control, centros de datos y espacios corporativos. Operación 24/7.",
        specs: ["P1.9mm", "24/7", "600 nits", "Control Room"],
        imagen: "img/videowall-control.jpg",
        destacado: true
    },
    {
        id: 10,
        nombre: "Pantalla LED Exterior P6",
        categoria: "fija",
        categoriaLabel: "Instalación Fija",
        descripcion: "Para fachadas de edificios y publicidad exterior permanente. Resistencia extrema.",
        specs: ["P6mm", "IP65", "6500 nits", "Outdoor"],
        imagen: "img/pantalla-fachada.jpg",
        destacado: false
    },
    {
        id: 11,
        nombre: "Pantalla LED Estadio P10",
        categoria: "fija",
        categoriaLabel: "Instalación Fija",
        descripcion: "Diseñada para estadios deportivos. Gran formato y alto brillo visible desde cualquier ángulo.",
        specs: ["P10mm", "Estadio", "8000 nits", "Gran formato"],
        imagen: "img/pantalla-estadio.jpg",
        destacado: true
    },
    {
        id: 12,
        nombre: "Pantalla LED Corporativa P2",
        categoria: "fija",
        categoriaLabel: "Instalación Fija",
        descripcion: "Para lobbies corporativos, salas de juntas y recepciones. Elegante y profesional.",
        specs: ["P2mm", "Corporate", "700 nits", "Premium"],
        imagen: "img/pantalla-corporativa.jpg",
        destacado: false
    },
    {
        id: 13,
        nombre: "Pantalla LED Aeropuerto P4",
        categoria: "fija",
        categoriaLabel: "Instalación Fija",
        descripcion: "Para información de vuelos, publicidad y señalización en terminales. Ultra confiable.",
        specs: ["P4mm", "FIDS", "2500 nits", "Alta confiabilidad"],
        imagen: "img/pantalla-aeropuerto.jpg",
        destacado: false
    },

    // ===== ACCESORIOS =====
    {
        id: 14,
        nombre: "Procesador de Video 4K",
        categoria: "accesorios",
        categoriaLabel: "Accesorios",
        descripcion: "Procesador de señal de video profesional. Múltiples entradas HDMI, SDI y DisplayPort.",
        specs: ["4K/60Hz", "8 entradas", "Calibración", "HDMI 2.0"],
        imagen: "img/procesador-video.jpg",
        destacado: true
    },
    {
        id: 15,
        nombre: "Sistema de Rigging Flight Case",
        categoria: "accesorios",
        categoriaLabel: "Accesorios",
        descripcion: "Estructura de aluminio con flight case para transporte seguro y montaje rápido.",
        specs: ["Aluminio", "Ruedas", "Plegable", "Para 6 paneles"],
        imagen: "img/flight-case.jpg",
        destacado: false
    },
    {
        id: 16,
        nombre: "Tarjeta Emisora 4K",
        categoria: "accesorios",
        categoriaLabel: "Accesorios",
        descripcion: "Tarjeta de emisión de señal para control de pantallas LED. Compatible con múltiples resoluciones.",
        specs: ["4K", "Gigabit", "8 salidas", "Software incluido"],
        imagen: "img/tarjeta-emisora.jpg",
        destacado: true
    },
    {
        id: 17,
        nombre: "Cable de Datos Profesional 50m",
        categoria: "accesorios",
        categoriaLabel: "Accesorios",
        descripcion: "Cable de red Cat6 blindado para conexión de larga distancia. Resistente y duradero.",
        specs: ["Cat6", "50m", "Blindado", "RJ45"],
        imagen: "img/cable-datos.jpg",
        destacado: false
    },
    {
        id: 18,
        nombre: "Software de Control Profesional",
        categoria: "accesorios",
        categoriaLabel: "Accesorios",
        descripcion: "Software avanzado para programación de contenidos, calibración y monitoreo remoto.",
        specs: ["Cloud", "Multi-pantalla", "Scheduling", "Analytics"],
        imagen: "img/software-control.jpg",
        destacado: false
    },
    {
        id: 19,
        nombre: "Kit de Montaje en Pared",
        categoria: "accesorios",
        categoriaLabel: "Accesorios",
        descripcion: "Sistema de montaje robusto para instalación permanente en pared. Incluye todos los herrajes.",
        specs: ["Acero", "Ajustable", "Max 500kg", "Universal"],
        imagen: "img/kit-montaje.jpg",
        destacado: false
    },
    {
        id: 20,
        nombre: "Fuente de Alimentación 5V 200W",
        categoria: "accesorios",
        categoriaLabel: "Accesorios",
        descripcion: "Fuente de alimentación switching de alta eficiencia. Protección contra cortocircuitos.",
        specs: ["5V DC", "200W", "IP65", "Certificada"],
        imagen: "img/fuente-poder.jpg",
        destacado: false
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
            </div>
            <div class="product-info">
                <h3 class="product-title">${producto.nombre}</h3>
                <p class="product-description">${producto.descripcion}</p>
                <div class="product-specs">
                    ${producto.specs.map(spec => `<span class="spec-tag">${spec}</span>`).join('')}
                </div>
                <div class="product-footer">
                    <button class="btn-add-cart" onclick="addToCart(${producto.id})">
                        <i class="fas fa-cart-plus"></i> Añadir
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
                         style="width: 100%; border-radius: 10px; border: 2px solid var(--neon-red);"
                         onerror="this.src='img/placeholder.jpg'">
                </div>
                <div>
                    <span style="background: var(--neon-red); color: white; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.85rem; font-weight: 700; text-transform: uppercase;">
                        ${producto.categoriaLabel}
                    </span>
                    <h2 style="margin: 1rem 0; font-size: 2rem; color: var(--white);">${producto.nombre}</h2>
                    <p style="color: var(--gray); line-height: 1.8; margin-bottom: 1.5rem;">${producto.descripcion}</p>
                    
                    <h3 style="margin-bottom: 1rem; color: var(--white);">Especificaciones:</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem;">
                        ${producto.specs.map(spec => `
                            <span style="background: var(--dark-3); color: var(--gray); padding: 0.5rem 1rem; border-radius: 8px; font-weight: 600; border: 1px solid var(--light-gray);">
                                ${spec}
                            </span>
                        `).join('')}
                    </div>
                    
                    <button onclick="addToCart(${producto.id}); closeProductModal();" 
                            style="width: 100%; background: var(--neon-red); color: white; padding: 1rem; border-radius: 10px; font-size: 1.1rem; font-weight: 700; border: none; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px;">
                        <i class="fas fa-cart-plus"></i> Añadir al Carrito
                    </button>
                </div>
            </div>
            
            <div style="background: var(--dark-3); padding: 1.5rem; border-radius: 10px; border: 2px solid var(--light-gray);">
                <h3 style="margin-bottom: 1rem; color: var(--white);"><i class="fas fa-info-circle"></i> Información Adicional</h3>
                <p style="color: var(--gray); line-height: 1.8;">
                    Este producto incluye garantía del fabricante y soporte técnico. Para más información sobre disponibilidad, 
                    instalación y precios especiales para proyectos, añádelo al carrito y solicita un presupuesto personalizado.
                </p>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
}

function closeProductModal() {
    document.getElementById('productModal').classList.remove('active');
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
