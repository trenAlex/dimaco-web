// ==========================================
// AGENT: EMAIL INTEGRATION
// Sistema de envío de presupuestos por correo
// ==========================================

// CONFIGURACIÓN - CAMBIAR ESTE EMAIL POR EL TUYO
const COMPANY_EMAIL = 'info@dimaco.es'; // Cambiar por tu email

// ==========================================
// ENVIAR PRESUPUESTO POR EMAIL
// ==========================================

function sendToEmail() {
    const cart = getCart();
    
    if (cart.length === 0) {
        alert('El carrito está vacío');
        return;
    }
    
    // Construir asunto del email
    const subject = 'Consulta de presupuesto - Pantallas LED';
    
    // Construir cuerpo del email
    let body = 'Hola,\n\n';
    body += 'He visto en vuestra web y estoy interesado en saber cuánto sería el presupuesto de los siguientes productos:\n\n';
    
    body += '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n';
    body += 'PRODUCTOS DE INTERÉS:\n';
    body += '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n';
    
    cart.forEach((item, index) => {
        body += `${index + 1}. ${item.nombre}\n`;
        body += `   • Cantidad: ${item.cantidad} ${item.cantidad === 1 ? 'unidad' : 'unidades'}\n`;
        
        if (item.specs && item.specs.length > 0) {
            body += `   • Especificaciones: ${item.specs.join(', ')}\n`;
        }
        
        body += '\n';
    });
    
    // Resumen
    const totalItems = cart.reduce((sum, item) => sum + item.cantidad, 0);
    body += '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n';
    body += `TOTAL: ${totalItems} ${totalItems === 1 ? 'producto' : 'productos'}\n`;
    body += '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n';
    
    body += 'Agradecería que me pudieran facilitar:\n';
    body += '• Precio de cada producto\n';
    body += '• Disponibilidad\n';
    body += '• Plazo de entrega\n';
    body += '• Condiciones de pago\n\n';
    
    body += 'Quedo a la espera de su respuesta.\n\n';
    body += 'Saludos cordiales.';
    
    // Codificar para URL
    const subjectEncoded = encodeURIComponent(subject);
    const bodyEncoded = encodeURIComponent(body);
    
    // Crear URL de mailto
    const mailtoURL = `mailto:${COMPANY_EMAIL}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    
    // Abrir cliente de email
    window.location.href = mailtoURL;
    
    // Mostrar confirmación
    showEmailConfirmation();
}

// ==========================================
// CONFIRMACIÓN DE ENVÍO
// ==========================================

function showEmailConfirmation() {
    const confirmacion = document.createElement('div');
    confirmacion.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--bg-card);
        border: 1px solid var(--border-default);
        padding: 2.5rem;
        border-radius: var(--radius-xl);
        box-shadow: var(--shadow-2xl);
        z-index: 10000;
        text-align: center;
        max-width: 440px;
        animation: zoomIn 0.4s ease;
    `;
    
    confirmacion.innerHTML = `
        <div style="font-size: 3.5rem; color: var(--primary); margin-bottom: 1.5rem;">
            <i class="fas fa-envelope-open-text"></i>
        </div>
        <h3 style="margin-bottom: 1rem; color: var(--neutral-0); font-size: 1.5rem; font-weight: 700;">
            ¡Abriendo tu correo!
        </h3>
        <p style="color: var(--neutral-400); margin-bottom: 1.5rem; line-height: 1.6;">
            Se abrirá tu programa de correo (Gmail, Outlook, etc.) con el mensaje ya preparado.
        </p>
        <div style="background: var(--bg-elevated); padding: 1rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; border-left: 3px solid var(--primary);">
            <p style="color: var(--neutral-300); font-size: 0.9rem; line-height: 1.6; margin: 0;">
                <strong>Importante:</strong> El correo se enviará desde TU cuenta de email personal. 
                Solo tienes que hacer clic en "Enviar" en tu programa de correo.
            </p>
        </div>
        <button onclick="this.parentElement.remove()" 
                style="background: var(--primary); color: white; padding: 0.875rem 2rem; border: none; border-radius: var(--radius-lg); font-weight: 600; cursor: pointer; font-size: 0.9375rem; transition: all 0.2s ease;">
            Entendido
        </button>
    `;
    
    // Hover effect para el botón
    const btn = confirmacion.querySelector('button');
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'translateY(-2px)';
        btn.style.boxShadow = '0 8px 16px rgba(227, 6, 19, 0.3)';
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translateY(0)';
        btn.style.boxShadow = 'none';
    });
    
    document.body.appendChild(confirmacion);
    
    // Auto-cerrar después de 6 segundos
    setTimeout(() => {
        if (confirmacion.parentElement) {
            confirmacion.remove();
        }
    }, 6000);
}

// ==========================================
// VALIDAR CONFIGURACIÓN DE EMAIL
// ==========================================

function validateEmailConfig() {
    if (COMPANY_EMAIL === 'info@dimaco.es') {
        console.warn('⚠️ ADVERTENCIA: Debes configurar tu email en js/email.js');
        console.warn('Cambia la variable COMPANY_EMAIL por tu email real');
        console.warn('Ejemplo: const COMPANY_EMAIL = "ventas@tuempresa.com";');
        return false;
    }
    return true;
}

// ==========================================
// ENVIAR PRODUCTO INDIVIDUAL POR EMAIL
// ==========================================

function shareProductEmail(productId) {
    const producto = productos.find(p => p.id === productId);
    if (!producto) return;
    
    const subject = `Consulta sobre: ${producto.nombre}`;
    
    let body = 'Hola,\n\n';
    body += 'He visto en vuestra web y estoy interesado en obtener más información sobre el siguiente producto:\n\n';
    
    body += '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n';
    body += `PRODUCTO: ${producto.nombre}\n`;
    body += '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n';
    
    body += `Categoría: ${producto.categoriaLabel}\n\n`;
    
    body += `Especificaciones:\n`;
    producto.specs.forEach(spec => {
        body += `• ${spec}\n`;
    });
    
    body += '\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n';
    
    body += 'Me gustaría conocer:\n';
    body += '• Precio\n';
    body += '• Disponibilidad\n';
    body += '• Plazo de entrega\n';
    body += '• Garantía y soporte técnico\n\n';
    
    body += 'Quedo a la espera de su respuesta.\n\n';
    body += 'Saludos cordiales.';
    
    const subjectEncoded = encodeURIComponent(subject);
    const bodyEncoded = encodeURIComponent(body);
    
    const mailtoURL = `mailto:${COMPANY_EMAIL}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    window.location.href = mailtoURL;
}

// ==========================================
// BOTÓN FLOTANTE DE EMAIL (OPCIONAL)
// ==========================================

function createFloatingEmailButton() {
    // Solo crear si no existe
    if (document.getElementById('floatingEmail')) return;
    
    const button = document.createElement('a');
    button.id = 'floatingEmail';
    button.href = `mailto:${COMPANY_EMAIL}`;
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 60px;
        height: 60px;
        background: var(--primary);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.75rem;
        box-shadow: var(--shadow-glow-sm);
        z-index: 1000;
        transition: all 0.3s ease;
        text-decoration: none;
        border: 2px solid rgba(227, 6, 19, 0.3);
    `;
    
    button.innerHTML = '<i class="fas fa-envelope"></i>';
    
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1) translateY(-2px)';
        button.style.boxShadow = 'var(--shadow-glow)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1) translateY(0)';
        button.style.boxShadow = 'var(--shadow-glow-sm)';
    });
    
    document.body.appendChild(button);
}

// ==========================================
// INICIALIZACIÓN
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Validar configuración
    const isConfigured = validateEmailConfig();
    
    if (!isConfigured) {
        console.error('❌ Configura tu email en js/email.js para producción');
    }
    
    // Crear botón flotante (opcional - descomentar si lo quieres)
    // createFloatingEmailButton();
    
    console.log('✅ Sistema de email configurado correctamente');
});

// ==========================================
// ANIMACIÓN CSS
// ==========================================

const style = document.createElement('style');
style.textContent = `
    @keyframes zoomIn {
        from {
            transform: translate(-50%, -50%) scale(0.9);
            opacity: 0;
        }
        to {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
