// ==========================================
// AGENT: WHATSAPP INTEGRATION
// ==========================================

// CONFIGURACIÓN - CAMBIAR ESTE NÚMERO POR EL TUYO
const WHATSAPP_NUMBER = '34XXXXXXXXX'; // Cambiar por tu número (sin espacios, con código de país)

// ==========================================
// ENVIAR PRESUPUESTO POR WHATSAPP
// ==========================================

function sendToWhatsApp() {
    const cart = getCart();
    
    if (cart.length === 0) {
        alert('El carrito está vacío');
        return;
    }
    
    // Construir mensaje
    let mensaje = '🛒 *SOLICITUD DE PRESUPUESTO - DIMACO*\n\n';
    mensaje += '📋 *Lista de productos:*\n';
    mensaje += '━━━━━━━━━━━━━━━━━━━━━━\n\n';
    
    cart.forEach((item, index) => {
        mensaje += `${index + 1}. *${item.nombre}*\n`;
        mensaje += `   📁 Categoría: ${item.categoria}\n`;
        mensaje += `   📦 Cantidad: ${item.cantidad} ${item.cantidad === 1 ? 'unidad' : 'unidades'}\n`;
        
        if (item.specs && item.specs.length > 0) {
            mensaje += `   🔧 Specs: ${item.specs.join(', ')}\n`;
        }
        
        mensaje += '\n';
    });
    
    // Resumen
    const totalItems = cart.reduce((sum, item) => sum + item.cantidad, 0);
    mensaje += '━━━━━━━━━━━━━━━━━━━━━━\n';
    mensaje += `📊 *Total:* ${totalItems} ${totalItems === 1 ? 'producto' : 'productos'}\n\n`;
    mensaje += '💬 Me gustaría recibir un presupuesto detallado para estos productos.\n\n';
    mensaje += '✅ Gracias por su atención.';
    
    // Codificar mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);
    
    // Crear URL de WhatsApp
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensajeCodificado}`;
    
    // Abrir WhatsApp en nueva ventana
    window.open(whatsappURL, '_blank');
    
    // Mostrar confirmación
    showWhatsAppConfirmation();
}

// ==========================================
// CONFIRMACIÓN DE ENVÍO
// ==========================================

function showWhatsAppConfirmation() {
    const confirmacion = document.createElement('div');
    confirmacion.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 2rem;
        border-radius: 15px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        z-index: 10000;
        text-align: center;
        max-width: 400px;
        animation: zoomIn 0.3s ease;
    `;
    
    confirmacion.innerHTML = `
        <div style="font-size: 3rem; color: var(--success-color); margin-bottom: 1rem;">
            <i class="fab fa-whatsapp"></i>
        </div>
        <h3 style="margin-bottom: 1rem; color: var(--dark);">¡Redirigiendo a WhatsApp!</h3>
        <p style="color: var(--gray); margin-bottom: 1.5rem;">
            Tu solicitud de presupuesto está lista para enviar. 
            Si no se abre WhatsApp automáticamente, haz clic en el enlace.
        </p>
        <button onclick="this.parentElement.remove()" 
                style="background: var(--primary-color); color: white; padding: 0.8rem 2rem; border: none; border-radius: 8px; font-weight: 600; cursor: pointer;">
            Cerrar
        </button>
    `;
    
    document.body.appendChild(confirmacion);
    
    // Auto-cerrar después de 5 segundos
    setTimeout(() => {
        if (confirmacion.parentElement) {
            confirmacion.remove();
        }
    }, 5000);
}

// ==========================================
// FUNCIÓN AUXILIAR: FORMATEAR NÚMERO
// ==========================================

function formatPhoneNumber(number) {
    // Eliminar espacios, guiones y otros caracteres
    return number.replace(/[^0-9]/g, '');
}

// ==========================================
// VALIDAR CONFIGURACIÓN DE WHATSAPP
// ==========================================

function validateWhatsAppConfig() {
    if (WHATSAPP_NUMBER === '34XXXXXXXXX' || WHATSAPP_NUMBER.includes('X')) {
        console.warn('⚠️ ADVERTENCIA: Debes configurar tu número de WhatsApp en js/whatsapp.js');
        console.warn('Cambia la variable WHATSAPP_NUMBER por tu número real (con código de país, sin espacios)');
        console.warn('Ejemplo: const WHATSAPP_NUMBER = "34612345678";');
        return false;
    }
    return true;
}

// ==========================================
// BOTÓN FLOTANTE DE WHATSAPP (OPCIONAL)
// ==========================================

function createFloatingWhatsAppButton() {
    // Solo crear si no existe
    if (document.getElementById('floatingWhatsApp')) return;
    
    const button = document.createElement('a');
    button.id = 'floatingWhatsApp';
    button.href = `https://wa.me/${WHATSAPP_NUMBER}`;
    button.target = '_blank';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 60px;
        height: 60px;
        background: var(--success-color);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 2rem;
        box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
        z-index: 1000;
        transition: all 0.3s ease;
        text-decoration: none;
    `;
    
    button.innerHTML = '<i class="fab fa-whatsapp"></i>';
    
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
        button.style.boxShadow = '0 6px 16px rgba(37, 211, 102, 0.6)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
        button.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.4)';
    });
    
    document.body.appendChild(button);
}

// ==========================================
// INICIALIZACIÓN
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Validar configuración
    const isConfigured = validateWhatsAppConfig();
    
    if (!isConfigured) {
        // Mostrar advertencia en consola pero permitir que funcione para pruebas
        console.error('❌ Configura tu número de WhatsApp para producción');
    }
    
    // Crear botón flotante (opcional - comentar si no lo quieres)
    // createFloatingWhatsAppButton();
});

// ==========================================
// COMPARTIR PRODUCTO INDIVIDUAL
// ==========================================

function shareProductWhatsApp(productId) {
    const producto = productos.find(p => p.id === productId);
    if (!producto) return;
    
    let mensaje = `🔥 *${producto.nombre}*\n\n`;
    mensaje += `${producto.descripcion}\n\n`;
    mensaje += `📁 Categoría: ${producto.categoriaLabel}\n`;
    mensaje += `🔧 Especificaciones:\n`;
    producto.specs.forEach(spec => {
        mensaje += `  • ${spec}\n`;
    });
    mensaje += `\n💬 Me interesa este producto. ¿Podrían darme más información?`;
    
    const mensajeCodificado = encodeURIComponent(mensaje);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensajeCodificado}`;
    
    window.open(whatsappURL, '_blank');
}
