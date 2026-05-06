// ==========================================
// AGENT: EMAIL INTEGRATION CON POPUP
// Sistema de envío con formulario modal
// ==========================================

// CONFIGURACIÓN - CAMBIAR ESTE EMAIL POR EL TUYO
const COMPANY_EMAIL = 'dimacoled@gmail.es'; // Email de tu empresa

// ==========================================
// MOSTRAR POPUP PARA PEDIR EMAIL DEL CLIENTE
// ==========================================

function sendToEmail() {
    const cart = getCart();
    
    if (cart.length === 0) {
        alert('El carrito está vacío');
        return;
    }
    
    // Crear y mostrar el popup modal
    showEmailPopup(cart);
}

function showEmailPopup(cart) {
    // Crear overlay
    const overlay = document.createElement('div');
    overlay.id = 'emailPopupOverlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.85);
        backdrop-filter: blur(8px);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        animation: fadeIn 0.3s ease;
    `;
    
    // Crear modal
    const modal = document.createElement('div');
    modal.style.cssText = `
        background: var(--bg-card, #141414);
        border: 1px solid var(--border-default, rgba(255,255,255,0.1));
        border-radius: var(--radius-xl, 16px);
        max-width: 500px;
        width: 100%;
        padding: 2rem;
        box-shadow: var(--shadow-2xl, 0 25px 50px -12px rgba(0,0,0,0.9));
        animation: slideUp 0.4s ease;
        position: relative;
    `;
    
    const totalItems = cart.reduce((sum, item) => sum + item.cantidad, 0);
    
    modal.innerHTML = `
        <div style="text-align: center; margin-bottom: 1.5rem;">
            <div style="font-size: 3rem; color: var(--primary, #e30613); margin-bottom: 1rem;">
                <i class="fas fa-envelope-open-text"></i>
            </div>
            <h2 style="color: var(--neutral-0, white); font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem;">
                Solicitar Presupuesto
            </h2>
            <p style="color: var(--neutral-400, #a3a3a3); font-size: 0.9rem;">
                ${totalItems} ${totalItems === 1 ? 'producto' : 'productos'} en tu carrito
            </p>
        </div>
        
        <form id="emailForm" style="margin-bottom: 1.5rem;">
            <div style="margin-bottom: 1rem;">
                <label for="clientName" style="display: block; color: var(--neutral-200, #e5e5e5); font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem;">
                    Tu nombre <span style="color: var(--primary, #e30613);">*</span>
                </label>
                <input 
                    type="text" 
                    id="clientName" 
                    required
                    placeholder="Ej: Juan García"
                    style="width: 100%; padding: 0.875rem 1rem; background: var(--bg-elevated, #0f0f0f); border: 1px solid var(--border-subtle, rgba(255,255,255,0.06)); border-radius: var(--radius-lg, 12px); color: var(--neutral-0, white); font-size: 1rem; transition: all 0.2s ease;"
                    onfocus="this.style.borderColor='var(--primary, #e30613)'; this.style.boxShadow='0 0 0 3px rgba(227,6,19,0.1)';"
                    onblur="this.style.borderColor='var(--border-subtle, rgba(255,255,255,0.06))'; this.style.boxShadow='none';"
                >
            </div>
            
            <div style="margin-bottom: 1rem;">
                <label for="clientEmail" style="display: block; color: var(--neutral-200, #e5e5e5); font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem;">
                    Tu email <span style="color: var(--primary, #e30613);">*</span>
                </label>
                <input 
                    type="email" 
                    id="clientEmail" 
                    required
                    placeholder="Ej: tu@email.com"
                    style="width: 100%; padding: 0.875rem 1rem; background: var(--bg-elevated, #0f0f0f); border: 1px solid var(--border-subtle, rgba(255,255,255,0.06)); border-radius: var(--radius-lg, 12px); color: var(--neutral-0, white); font-size: 1rem; transition: all 0.2s ease;"
                    onfocus="this.style.borderColor='var(--primary, #e30613)'; this.style.boxShadow='0 0 0 3px rgba(227,6,19,0.1)';"
                    onblur="this.style.borderColor='var(--border-subtle, rgba(255,255,255,0.06))'; this.style.boxShadow='none';"
                >
            </div>
            
            <div style="margin-bottom: 1.5rem;">
                <label for="clientPhone" style="display: block; color: var(--neutral-200, #e5e5e5); font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem;">
                    Teléfono (opcional)
                </label>
                <input 
                    type="tel" 
                    id="clientPhone" 
                    placeholder="Ej: 600 123 456"
                    style="width: 100%; padding: 0.875rem 1rem; background: var(--bg-elevated, #0f0f0f); border: 1px solid var(--border-subtle, rgba(255,255,255,0.06)); border-radius: var(--radius-lg, 12px); color: var(--neutral-0, white); font-size: 1rem; transition: all 0.2s ease;"
                    onfocus="this.style.borderColor='var(--primary, #e30613)'; this.style.boxShadow='0 0 0 3px rgba(227,6,19,0.1)';"
                    onblur="this.style.borderColor='var(--border-subtle, rgba(255,255,255,0.06))'; this.style.boxShadow='none';"
                >
            </div>
            
            <div style="margin-bottom: 1.5rem;">
                <label for="clientMessage" style="display: block; color: var(--neutral-200, #e5e5e5); font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem;">
                    Mensaje adicional (opcional)
                </label>
                <textarea 
                    id="clientMessage" 
                    rows="3"
                    placeholder="Añade cualquier información adicional..."
                    style="width: 100%; padding: 0.875rem 1rem; background: var(--bg-elevated, #0f0f0f); border: 1px solid var(--border-subtle, rgba(255,255,255,0.06)); border-radius: var(--radius-lg, 12px); color: var(--neutral-0, white); font-size: 0.95rem; resize: vertical; transition: all 0.2s ease; font-family: inherit;"
                    onfocus="this.style.borderColor='var(--primary, #e30613)'; this.style.boxShadow='0 0 0 3px rgba(227,6,19,0.1)';"
                    onblur="this.style.borderColor='var(--border-subtle, rgba(255,255,255,0.06))'; this.style.boxShadow='none';"
                ></textarea>
            </div>
            
            <div style="display: flex; gap: 0.75rem;">
                <button 
                    type="button" 
                    onclick="closeEmailPopup()"
                    style="flex: 1; padding: 0.875rem; background: var(--bg-elevated, #0f0f0f); border: 1px solid var(--border-default, rgba(255,255,255,0.1)); border-radius: var(--radius-lg, 12px); color: var(--neutral-300, #d4d4d4); font-weight: 600; cursor: pointer; font-size: 0.95rem; transition: all 0.2s ease;">
                    Cancelar
                </button>
                <button 
                    type="submit"
                    style="flex: 2; padding: 0.875rem; background: var(--primary, #e30613); border: none; border-radius: var(--radius-lg, 12px); color: white; font-weight: 700; cursor: pointer; font-size: 0.95rem; transition: all 0.2s ease; text-transform: uppercase; letter-spacing: 0.5px;"
                    onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 16px rgba(227,6,19,0.3)';"
                    onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none';">
                    <i class="fas fa-paper-plane"></i> Enviar Solicitud
                </button>
            </div>
        </form>
        
        <div style="background: var(--bg-elevated, #0f0f0f); padding: 1rem; border-radius: var(--radius-md, 10px); border-left: 3px solid var(--primary, #e30613);">
            <p style="color: var(--neutral-400, #a3a3a3); font-size: 0.85rem; line-height: 1.5; margin: 0;">
                <i class="fas fa-info-circle" style="color: var(--primary, #e30613);"></i>
                Recibirás una copia del presupuesto en tu email. Nos pondremos en contacto contigo lo antes posible.
            </p>
        </div>
    `;
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    // Prevenir scroll del body
    document.body.style.overflow = 'hidden';
    
    // Manejar el envío del formulario
    document.getElementById('emailForm').addEventListener('submit', function(e) {
        e.preventDefault();
        sendEmailWithData(cart);
    });
    
    // Cerrar al hacer click fuera
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            closeEmailPopup();
        }
    });
    
    // Focus en el primer campo
    setTimeout(() => {
        document.getElementById('clientName').focus();
    }, 100);
}

// ==========================================
// CERRAR POPUP
// ==========================================

function closeEmailPopup() {
    const overlay = document.getElementById('emailPopupOverlay');
    if (overlay) {
        overlay.style.animation = 'fadeOut 0.2s ease';
        setTimeout(() => {
            overlay.remove();
            document.body.style.overflow = 'auto';
        }, 200);
    }
}

// ==========================================
// ENVIAR EMAIL CON DATOS DEL FORMULARIO
// ==========================================

function sendEmailWithData(cart) {
    // Obtener datos del formulario
    const clientName = document.getElementById('clientName').value.trim();
    const clientEmail = document.getElementById('clientEmail').value.trim();
    const clientPhone = document.getElementById('clientPhone').value.trim();
    const clientMessage = document.getElementById('clientMessage').value.trim();
    
    // Validar email básico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(clientEmail)) {
        alert('Por favor, introduce un email válido');
        return;
    }
    
    // Construir asunto
    const subject = `Solicitud de presupuesto - ${clientName}`;
    
    // Construir cuerpo del email
    let body = '════════════════════════════════════════\n';
    body += 'NUEVA SOLICITUD DE PRESUPUESTO\n';
    body += '════════════════════════════════════════\n\n';
    
    body += '👤 DATOS DEL CLIENTE:\n';
    body += '────────────────────────────────────────\n';
    body += `Nombre: ${clientName}\n`;
    body += `Email: ${clientEmail}\n`;
    if (clientPhone) {
        body += `Teléfono: ${clientPhone}\n`;
    }
    body += '\n';
    
    body += '📦 PRODUCTOS SOLICITADOS:\n';
    body += '────────────────────────────────────────\n\n';
    
    cart.forEach((item, index) => {
        body += `${index + 1}. ${item.nombre}\n`;
        body += `   • Cantidad: ${item.cantidad} ${item.cantidad === 1 ? 'unidad' : 'unidades'}\n`;
        body += `   • Categoría: ${item.categoria}\n`;
        
        if (item.specs && item.specs.length > 0) {
            body += `   • Especificaciones:\n`;
            item.specs.forEach(spec => {
                body += `     - ${spec}\n`;
            });
        }
        body += '\n';
    });
    
    const totalItems = cart.reduce((sum, item) => sum + item.cantidad, 0);
    body += '────────────────────────────────────────\n';
    body += `📊 RESUMEN: ${totalItems} ${totalItems === 1 ? 'producto' : 'productos'}\n';
    body += '────────────────────────────────────────\n\n';
    
    if (clientMessage) {
        body += '💬 MENSAJE DEL CLIENTE:\n';
        body += '────────────────────────────────────────\n';
        body += clientMessage + '\n\n';
    }
    
    body += '════════════════════════════════════════\n';
    body += `Solicitud enviada desde: ${window.location.href}\n`;
    body += `Fecha: ${new Date().toLocaleString('es-ES')}\n`;
    body += '════════════════════════════════════════\n\n';
    body += 'Por favor, responder a: ' + clientEmail;
    
    // Codificar para URL
    const subjectEncoded = encodeURIComponent(subject);
    const bodyEncoded = encodeURIComponent(body);
    
    // Crear URL mailto
    const mailtoURL = `mailto:${COMPANY_EMAIL}?subject=${subjectEncoded}&body=${bodyEncoded}&reply-to=${clientEmail}`;
    
    // Intentar abrir cliente de email
    try {
        window.location.href = mailtoURL;
        
        // Cerrar popup
        closeEmailPopup();
        
        // Mostrar confirmación
        showSuccessMessage(clientEmail);
        
        // Opcional: Vaciar carrito después de enviar
        // localStorage.removeItem('dimacoCart');
        // updateCartUI();
        
    } catch (error) {
        console.error('Error al abrir email:', error);
        alert('Hubo un error al abrir el cliente de email. Por favor, contacta directamente a: ' + COMPANY_EMAIL);
    }
}

// ==========================================
// MENSAJE DE ÉXITO
// ==========================================

function showSuccessMessage(clientEmail) {
    const successDiv = document.createElement('div');
    successDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--bg-card, #141414);
        border: 1px solid var(--border-default, rgba(255,255,255,0.1));
        padding: 2rem;
        border-radius: var(--radius-xl, 16px);
        box-shadow: var(--shadow-2xl, 0 25px 50px -12px rgba(0,0,0,0.9));
        z-index: 10000;
        text-align: center;
        max-width: 400px;
        animation: zoomIn 0.4s ease;
    `;
    
    successDiv.innerHTML = `
        <div style="font-size: 4rem; color: #10b981; margin-bottom: 1rem;">
            <i class="fas fa-check-circle"></i>
        </div>
        <h3 style="color: var(--neutral-0, white); font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;">
            ¡Solicitud Enviada!
        </h3>
        <p style="color: var(--neutral-400, #a3a3a3); margin-bottom: 1.5rem; line-height: 1.6;">
            Hemos abierto tu programa de correo. Haz click en "Enviar" para completar la solicitud.
        </p>
        <div style="background: var(--bg-elevated, #0f0f0f); padding: 1rem; border-radius: var(--radius-md, 10px); margin-bottom: 1.5rem; border-left: 3px solid #10b981;">
            <p style="color: var(--neutral-300, #d4d4d4); font-size: 0.9rem; margin: 0;">
                Recibirás una copia en:<br>
                <strong style="color: var(--neutral-0, white);">${clientEmail}</strong>
            </p>
        </div>
        <button 
            onclick="this.parentElement.remove()"
            style="width: 100%; padding: 0.875rem; background: var(--primary, #e30613); border: none; border-radius: var(--radius-lg, 12px); color: white; font-weight: 700; cursor: pointer; font-size: 0.95rem; transition: all 0.2s ease;">
            Entendido
        </button>
    `;
    
    document.body.appendChild(successDiv);
    
    // Auto-cerrar después de 8 segundos
    setTimeout(() => {
        if (successDiv.parentElement) {
            successDiv.remove();
        }
    }, 8000);
}

// ==========================================
// ANIMACIONES CSS
// ==========================================

const emailStyles = document.createElement('style');
emailStyles.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
    
    @keyframes slideUp {
        from {
            transform: translateY(30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
    
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
document.head.appendChild(emailStyles);

// ==========================================
// INICIALIZACIÓN
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ Sistema de email con popup inicializado');
});
