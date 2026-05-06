// ═══════════════════════════════════════════════════════════
// 🚀 SISTEMA WHATSAPP - TODO EN UNO
// ═══════════════════════════════════════════════════════════

function sendToWhatsApp() {
    const cart = getCart();
    
    if (cart.length === 0) {
        alert('El carrito está vacío');
        return;
    }
    
    showWhatsAppPopup(cart);
}

function showWhatsAppPopup(cart) {
    const overlay = document.createElement('div');
    overlay.id = 'whatsappPopup';
    overlay.style.cssText = `
        position: fixed; inset: 0; background: rgba(0,0,0,0.85); 
        backdrop-filter: blur(8px); z-index: 9999; 
        display: flex; align-items: center; justify-content: center; 
        padding: 20px; animation: fadeIn 0.3s;
    `;
    
    const modal = document.createElement('div');
    modal.style.cssText = `
        background: #141414; border: 1px solid rgba(255,255,255,0.1); 
        border-radius: 16px; max-width: 500px; width: 100%; 
        padding: 2rem; box-shadow: 0 25px 50px rgba(0,0,0,0.9); 
        animation: slideUp 0.4s; max-height: 90vh; overflow-y: auto;
    `;
    
    const totalItems = cart.reduce((sum, item) => sum + item.cantidad, 0);
    
    modal.innerHTML = `
        <div style="text-align: center; margin-bottom: 1.5rem;">
            <div style="font-size: 3rem; color: #25D366; margin-bottom: 1rem;">
                <i class="fab fa-whatsapp"></i>
            </div>
            <h2 style="color: white; font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem;">
                Solicitar por WhatsApp
            </h2>
            <p style="color: #a3a3a3; font-size: 0.9rem;">
                ${totalItems} ${totalItems === 1 ? 'producto' : 'productos'} en tu carrito
            </p>
        </div>
        
        <form id="whatsappForm" style="margin-bottom: 1.5rem;">
            <div style="margin-bottom: 1rem;">
                <label style="display: block; color: #e5e5e5; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem;">
                    Tu nombre <span style="color: #25D366;">*</span>
                </label>
                <input type="text" id="clientName" required placeholder="Ej: Juan García"
                    style="width: 100%; padding: 0.875rem 1rem; background: #0f0f0f; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; color: white; font-size: 1rem;">
            </div>
            
            <div style="margin-bottom: 1rem;">
                <label style="display: block; color: #e5e5e5; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem;">
                    Tu email (opcional)
                </label>
                <input type="email" id="clientEmail" placeholder="Ej: tu@email.com"
                    style="width: 100%; padding: 0.875rem 1rem; background: #0f0f0f; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; color: white; font-size: 1rem;">
            </div>
            
            <div style="margin-bottom: 1.5rem;">
                <label style="display: block; color: #e5e5e5; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem;">
                    Mensaje adicional (opcional)
                </label>
                <textarea id="clientMessage" rows="3" placeholder="Añade cualquier información..."
                    style="width: 100%; padding: 0.875rem 1rem; background: #0f0f0f; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; color: white; font-size: 0.95rem; resize: vertical; font-family: inherit;"></textarea>
            </div>
            
            <div style="display: flex; gap: 0.75rem;">
                <button type="button" onclick="document.getElementById('whatsappPopup').remove()"
                    style="flex: 1; padding: 0.875rem; background: #0f0f0f; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; color: #d4d4d4; font-weight: 600; cursor: pointer; font-size: 0.95rem;">
                    Cancelar
                </button>
                <button type="submit"
                    style="flex: 2; padding: 0.875rem; background: #25D366; border: none; border-radius: 12px; color: white; font-weight: 700; cursor: pointer; font-size: 0.95rem; text-transform: uppercase;">
                    <i class="fab fa-whatsapp"></i> Enviar por WhatsApp
                </button>
            </div>
        </form>
        
        <div style="background: #0f0f0f; padding: 1rem; border-radius: 10px; border-left: 3px solid #25D366;">
            <p style="color: #a3a3a3; font-size: 0.85rem; line-height: 1.5; margin: 0;">
                <i class="fas fa-info-circle" style="color: #25D366;"></i>
                Se abrirá WhatsApp con tu presupuesto ya preparado.
            </p>
        </div>
    `;
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
    
    document.getElementById('whatsappForm').addEventListener('submit', function(e) {
        e.preventDefault();
        sendWhatsAppMessage(cart);
    });
    
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            overlay.remove();
            document.body.style.overflow = 'auto';
        }
    });
    
    setTimeout(() => document.getElementById('clientName').focus(), 100);
}

function sendWhatsAppMessage(cart) {
    const clientName = document.getElementById('clientName').value.trim();
    const clientEmail = document.getElementById('clientEmail').value.trim();
    const clientMessage = document.getElementById('clientMessage').value.trim();
    
    if (!clientName) {
        alert('Por favor, introduce tu nombre');
        return;
    }
    
    const totalItems = cart.reduce((sum, item) => sum + item.cantidad, 0);
    
    let message = '🛒 *SOLICITUD DE PRESUPUESTO*\n';
    message += '═══════════════════════════\n\n';
    message += '👤 *Datos del Cliente:*\n';
    message += `• Nombre: ${clientName}\n`;
    if (clientEmail) message += `• Email: ${clientEmail}\n`;
    message += '\n📦 *Productos Solicitados:*\n';
    message += '─────────────────────────\n';
    
    cart.forEach((item, index) => {
        message += `\n${index + 1}. *${item.nombre}*\n`;
        message += `   📊 Cantidad: ${item.cantidad}\n`;
        message += `   🏷️ Categoría: ${item.categoria}\n`;
        if (item.specs && item.specs.length > 0) {
            message += `   📋 Specs: ${item.specs.slice(0, 2).join(', ')}\n`;
        }
    });
    
    message += '\n─────────────────────────\n';
    message += `📊 *TOTAL:* ${totalItems} ${totalItems === 1 ? 'producto' : 'productos'}\n`;
    
    if (clientMessage) {
        message += '\n💬 *Mensaje:*\n' + clientMessage + '\n';
    }
    
    message += '\n📅 ' + new Date().toLocaleString('es-ES');
    
    const encodedMessage = encodeURIComponent(message);
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const whatsappURL = isMobile 
        ? `whatsapp://send?phone=${MI_WHATSAPP}&text=${encodedMessage}`
        : `https://wa.me/${MI_WHATSAPP}?text=${encodedMessage}`;
    
    document.getElementById('whatsappPopup').remove();
    document.body.style.overflow = 'auto';
    
    window.open(whatsappURL, '_blank');
    
    setTimeout(() => {
        const success = document.createElement('div');
        success.style.cssText = `
            position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
            background: #141414; border: 1px solid rgba(255,255,255,0.1);
            padding: 2rem; border-radius: 16px; box-shadow: 0 25px 50px rgba(0,0,0,0.9);
            z-index: 10000; text-align: center; max-width: 400px; animation: zoomIn 0.4s;
        `;
        success.innerHTML = `
            <div style="font-size: 4rem; color: #25D366; margin-bottom: 1rem;">
                <i class="fab fa-whatsapp"></i>
            </div>
            <h3 style="color: white; font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;">
                ¡WhatsApp Abierto!
            </h3>
            <p style="color: #a3a3a3; margin-bottom: 1.5rem; line-height: 1.6;">
                Hola ${clientName}, solo pulsa <strong style="color: white;">"Enviar"</strong> en WhatsApp.
            </p>
            <button onclick="this.parentElement.remove()"
                style="width: 100%; padding: 0.875rem; background: #25D366; border: none; border-radius: 12px; color: white; font-weight: 700; cursor: pointer;">
                Entendido
            </button>
        `;
        document.body.appendChild(success);
        setTimeout(() => success.remove(), 8000);
    }, 300);
}

const styles = document.createElement('style');
styles.textContent = `
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideUp { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    @keyframes zoomIn { from { transform: translate(-50%, -50%) scale(0.9); opacity: 0; } to { transform: translate(-50%, -50%) scale(1); opacity: 1; } }
`;
document.head.appendChild(styles);

console.log('✅ Sistema WhatsApp listo | Número:', MI_WHATSAPP);
