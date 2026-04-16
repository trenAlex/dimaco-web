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
        specs: ["Resolución: 192x192", "500x500mm", "4500/5000 nits", "110-120v","600-700w"],
        imagen: "img/p26-mini.png",
        destacado: true
    },
       {
        id: 2,
        nombre: "Pantalla LED P2.6 500X1000MM",
        categoria: "eventos-escaparates",
        categoriaLabel: "Eventos & Escaparates",
        descripcion: "Ideal para conciertos, conferencias, presentaciones y escaparates. Alta definición y fácil montaje.",
        specs: ["Resolución: 192x384", "500x10000mm", "4500/5000 nits", "110-120v","600-700w"],
        imagen: "img/p26-grande.jpg",
        destacado: true
    },
    {
        id: 3,
        nombre: "Pantalla LED P2.97 500X500MM",
        categoria: "eventos-escaparates",
        categoriaLabel: "Eventos & Escaparates",
        descripcion: "Ideal para conciertos, conferencias, presentaciones y escaparates. Alta definición y fácil montaje.",
        specs: ["Resolución: 168x168", "500x500mm", "4500/5000 nits", "110-120v","600-700w"],
        imagen: "img/p97-mini.png",
        destacado: true
    },
       {
        id: 4,
        nombre: "Pantalla LED P2.6 500X1000MM",
        categoria: "eventos-escaparates",
        categoriaLabel: "Eventos & Escaparates",
        descripcion: "Ideal para conciertos, conferencias, presentaciones y escaparates. Alta definición y fácil montaje.",
        specs: ["Resolución: 168x336", "500x10000mm", "4500/5000 nits", "110-120v","600-700w"],
        imagen: "img/p97-grande.png",
        destacado: true
    },
        {
        id: 5,
        nombre: "Pantalla LED P3.91 500X500MM",
        categoria: "eventos-escaparates",
        categoriaLabel: "Eventos & Escaparates",
        descripcion: "Ideal para conciertos, conferencias, presentaciones y escaparates. Alta definición y fácil montaje.",
        specs: ["Resolución: 128x256", "500x10000mm", "4500/5000 nits", "110-120v","600-700w"],
        imagen: "img/p391-grande.png",
        destacado: true
    },
        {
        id: 6,
        nombre: "Pantalla LED P3.91 500X1000MM",
        categoria: "eventos-escaparates",
        categoriaLabel: "Eventos & Escaparates",
        descripcion: "Ideal para conciertos, conferencias, presentaciones y escaparates. Alta definición y fácil montaje.",
        specs: ["Resolución: 128x256", "500x10000mm", "4500/5000 nits", "110-120v","600-700w"],
        imagen: "img/p391-grande.png",
        destacado: true
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
