// ==========================================
// AGENT: CART MANAGEMENT SYSTEM
// ==========================================

// Obtener carrito del localStorage
function getCart() {
    const cart = localStorage.getItem('dimacoCart');
    return cart ? JSON.parse(cart) : [];
}

// Guardar carrito en localStorage
function saveCart(cart) {
    localStorage.setItem('dimacoCart', JSON.stringify(cart));
    updateCartUI();
}

// ==========================================
// AÑADIR AL CARRITO
// ==========================================

function addToCart(productId) {
    const producto = productos.find(p => p.id === productId);
    if (!producto) return;
    
    let cart = getCart();
    
    // Verificar si el producto ya está en el carrito
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.cantidad++;
    } else {
        cart.push({
            id: producto.id,
            nombre: producto.nombre,
            categoria: producto.categoriaLabel,
            imagen: producto.imagen,
            specs: producto.specs,
            cantidad: 1
        });
    }
    
    saveCart(cart);
    
    // Animación de feedback
    showNotification('✓ Producto añadido al carrito');
}

// ==========================================
// ACTUALIZAR CANTIDAD
// ==========================================

function updateQuantity(productId, change) {
    let cart = getCart();
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.cantidad += change;
        
        if (item.cantidad <= 0) {
            removeFromCart(productId);
            return;
        }
        
        saveCart(cart);
    }
}

// ==========================================
// ELIMINAR DEL CARRITO
// ==========================================

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    
    showNotification('Producto eliminado del carrito');
}

// ==========================================
// VACIAR CARRITO
// ==========================================

function clearCart() {
    if (confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
        localStorage.removeItem('dimacoCart');
        updateCartUI();
        showNotification('Carrito vaciado');
    }
}

// ==========================================
// ACTUALIZAR UI DEL CARRITO
// ==========================================

function updateCartUI() {
    const cart = getCart();
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartFooter = document.getElementById('cartFooter');
    const cartTotalItems = document.getElementById('cartTotalItems');
    
    // Actualizar contador del icono
    const totalItems = cart.reduce((sum, item) => sum + item.cantidad, 0);
    cartCount.textContent = totalItems;
    
    if (cart.length === 0) {
        cartItems.style.display = 'none';
        cartEmpty.style.display = 'block';
        cartFooter.style.display = 'none';
    } else {
        cartItems.style.display = 'block';
        cartEmpty.style.display = 'none';
        cartFooter.style.display = 'block';
        
        cartTotalItems.textContent = `${totalItems} ${totalItems === 1 ? 'producto' : 'productos'}`;
        
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.imagen}" alt="${item.nombre}" 
                         onerror="this.src='img/placeholder.jpg'">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.nombre}</div>
                    <div class="cart-item-category">${item.categoria}</div>
                    <div class="cart-item-quantity">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="qty-value">${item.cantidad}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
    }
}

// ==========================================
// TOGGLE CARRITO MODAL
// ==========================================

function toggleCart() {
    const modal = document.getElementById('cartModal');
    modal.classList.toggle('active');
    
    if (modal.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

// Cerrar carrito al hacer clic fuera
document.addEventListener('click', (e) => {
    const modal = document.getElementById('cartModal');
    const cartIcon = document.querySelector('.cart-icon');
    
    if (modal.classList.contains('active') && 
        e.target === modal && 
        !cartIcon.contains(e.target)) {
        toggleCart();
    }
});

// ==========================================
// NOTIFICACIONES
// ==========================================

function showNotification(message) {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--dark);
        color: var(--white);
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 9999;
        animation: slideInRight 0.3s ease, fadeOut 0.3s ease 2.7s;
        font-weight: 600;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Eliminar después de 3 segundos
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Agregar estilos de animación
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);

// ==========================================
// INICIALIZACIÓN
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
});
