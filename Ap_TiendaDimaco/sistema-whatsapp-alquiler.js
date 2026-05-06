// ═══════════════════════════════════════════════════════════
// 🚀 SISTEMA WHATSAPP - ALQUILER
// ═══════════════════════════════════════════════════════════

function sendToWhatsApp() {
    const cart = getCart();
    
    if (cart.length === 0) {
        alert('No has seleccionado ninguna pantalla');
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
        border-radius: 16px; max-width: 550px; width: 100%; 
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
                Solicitar Alquiler por WhatsApp
            </h2>
            <p style="color: #a3a3a3; font-size: 0.9rem;">
                ${totalItems} ${totalItems === 1 ? 'pantalla seleccionada' : 'pantallas seleccionadas'}
            </p>
        </div>
        
        <form id="whatsappForm" style="margin-bottom: 1.5rem;">
            <div style="margin-bottom: 1rem;">
                <label style="display: block; color: #e5e5e5; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem;">
                    Tu nombre / Empresa <span style="color: #25D366;">*</span>
                </label>
                <input type="text" id="clientName" required placeholder="Ej: Juan García / Eventos XYZ"
                    style="width: 100%; padding: 0.875rem 1rem; background: #0f0f0f; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; color: white; font-size: 1rem;">
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                <div>
                    <label style="display: block; color: #e5e5e5; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem;">
                        Fecha del evento <span style="color: #25D366;">*</span>
                    </label>
                    <input type="date" id="eventDate" required
                        style="width: 100%; padding: 0.875rem 1rem; background: #0f0f0f; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; color: white; font-size: 1rem;">
                </div>
                <div>
                    <label style="display: block; color: #e5e5e5; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem;">
                        Duración <span style="color: #25D366;">*</span>
                    </label>
                    <select id="eventDuration" required
                        style="width: 100%; padding: 0.875rem 1rem; background: #0f0f0f; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; color: white; font-size: 1rem;">
                        <option value="">Selecciona...</option>
                        <option value="1 día">1 día</option>
                        <option value="2 días">2 días</option>
                        <option value="3 días">3 días</option>
                        <option value="4-7 días">4-7 días</option>
                        <option value="1 semana">1 semana</option>
                        <option value="2 semanas">2 semanas</option>
                        <option value="1 mes">1 mes</option>
                        <option value="Más de 1 mes">Más de 1 mes</option>
                    </select>
                </div>
            </div>
            
            <div style="margin-bottom: 1rem;">
                <label style="display: block; color: #e5e5e5; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem;">
                    Ubicación del evento <span style="color: #25D366;">*</span>
                </label>
                <input type="text" id="eventLocation" required placeholder="Ej: Madrid, Barcelona, Valencia..."
                    style="width: 100%; padding: 0.875rem 1rem; background: #0f0f0f; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; color: white; font-size: 1rem;">
            </div>
            
            <div style="margin-bottom: 1rem;">
                <label style="display: block; color: #e5e5e5; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem;">
                    Tipo de evento <span style="color: #25D366;">*</span>
                </label>
                <select id="eventType" required
                    style="width: 100%; padding: 0.875rem 1rem; background: #0f0f0f; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; color: white; font-size: 1rem;">
                    <option value="">Selecciona...</option>
                    <option value="Concierto">Concierto</option>
                    <option value="Conferencia">Conferencia</option>
                    <option value="Feria">Feria</option>
                    <option value="Festival">Festival</option>
                    <option value="Evento corporativo">Evento corporativo</option>
                    <option value="Boda">Boda</option>
                    <option value="Evento deportivo">Evento deportivo</option>
                    <option value="Teatro">Teatro</option>
                    <option value="Otro">Otro</option>
                </select>
            </div>
            
            <div style="margin-bottom: 1rem;">
                <label style="display: block; color: #e5e5e5; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem;">
                    Tu teléfono <span style="color: #25D366;">*</span>
                </label>
                <input type="tel" id="clientPhone" required placeholder="Ej: +34 600 000 000"
                    style="width: 100%; padding: 0.875rem 1rem; background: #0f0f0f; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; color: white; font-size: 1rem;">
            </div>
            
            <div style="margin-bottom: 1.5rem;">
                <label style="display: block; color: #e5e5e5; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem;">
                    Detalles adicionales (opcional)
                </label>
                <textarea id="clientMessage" rows="3" placeholder="Servicios adicionales, horarios específicos, requisitos técnicos..."
                    style="width: 100%; padding: 0.875rem 1rem; background: #0f0f0f; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; color: white; font-size: 0.95rem; resize: vertical; font-family: inherit;"></textarea>
            </div>
            
            <div style="background: #0f0f0f; padding: 1rem; border-radius: 10px; border-left: 3px solid #25D366; margin-bottom: 1.5rem;">
                <div style="display: flex; gap: 0.5rem; margin-bottom: 0.5rem;">
                    <input type="checkbox" id="acceptTerms" required style="margin-top: 2px;">
                    <label for="acceptTerms" style="color: #a3a3a3; font-size: 0.85rem; line-height: 1.5;">
                        Acepto que se contacte conmigo para proporcionar un presupuesto personalizado
                    </label>
                </div>
            </div>
            
            <div style="display: flex; gap: 0.75rem;">
                <button type="button" onclick="document.getElementById('whatsappPopup').remove(); document.body.style.overflow='auto';"
                    style="flex: 1; padding: 0.875rem; background: #0f0f0f; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; color: #d4d4d4; font-weight: 600; cursor: pointer; font-size: 0.95rem;">
                    Cancelar
                </button>
                <button type="submit"
                    style="flex: 2; padding: 0.875rem; background: #25D366; border: none; border-radius: 12px; color: white; font-weight: 700; cursor: pointer; font-size: 0.95rem; text-transform: uppercase;">
                    <i class="fab fa-whatsapp"></i> Enviar Solicitud
                </button>
            </div>
        </form>
        
        <div style="background: #0f0f0f; padding: 1rem; border-radius: 10px; border-left: 3px solid #25D366;">
            <p style="color: #a3a3a3; font-size: 0.85rem; line-height: 1.5; margin: 0;">
                <i class="fas fa-clock" style="color: #25D366;"></i>
                Te responderemos en menos de 2 horas con un presupuesto detallado
            </p>
        </div>
    `;
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
    
    // Establecer fecha mínima como hoy
    const dateInput = document.getElementById('eventDate');
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    
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
    const eventDate = document.getElementById('eventDate').value;
    const eventDuration = document.getElementById('eventDuration').value;
    const eventLocation = document.getElementById('eventLocation').value.trim();
    const eventType = document.getElementById('eventType').value;
    const clientPhone = document.getElementById('clientPhone').value.trim();
    const clientMessage = document.getElementById('clientMessage').value.trim();
    const acceptTerms = document.getElementById('acceptTerms').checked;
    
    if (!clientName || !eventDate || !eventDuration || !eventLocation || !eventType || !clientPhone) {
        alert('Por favor, completa todos los campos obligatorios');
        return;
    }
    
    if (!acceptTerms) {
        alert('Debes aceptar los términos para continuar');
        return;
    }
    
    const totalItems = cart.reduce((sum, item) => sum + item.cantidad, 0);
    
    // Formatear fecha
    const dateObj = new Date(eventDate + 'T00:00:00');
    const formattedDate = dateObj.toLocaleDateString('es-ES', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
    });
    
    let message = '🎬 *SOLICITUD DE ALQUILER DE PANTALLAS LED*\n';
    message += '═══════════════════════════════════\n\n';
    
    message += '👤 *DATOS DEL CLIENTE:*\n';
    message += `• Nombre/Empresa: ${clientName}\n`;
    message += `• Teléfono: ${clientPhone}\n`;
    
    message += '\n🎪 *DETALLES DEL EVENTO:*\n';
    message += `• Fecha: ${formattedDate}\n`;
    message += `• Duración: ${eventDuration}\n`;
    message += `• Ubicación: ${eventLocation}\n`;
    message += `• Tipo de evento: ${eventType}\n`;
    
    message += '\n📺 *PANTALLAS SOLICITADAS:*\n';
    message += '───────────────────────────────\n';
    
    cart.forEach((item, index) => {
        message += `\n${index + 1}. *${item.nombre}*\n`;
        message += `   📊 Cantidad: ${item.cantidad} ${item.cantidad === 1 ? 'unidad' : 'unidades'}\n`;
        message += `   🏷️ Categoría: ${item.categoria}\n`;
        if (item.specs && item.specs.length > 0) {
            message += `   📋 Specs: ${item.specs.slice(0, 3).join(', ')}\n`;
        }
    });
    
    message += '\n───────────────────────────────\n';
    message += `📊 *TOTAL:* ${totalItems} ${totalItems === 1 ? 'pantalla' : 'pantallas'}\n`;
    
    if (clientMessage) {
        message += '\n💬 *DETALLES ADICIONALES:*\n' + clientMessage + '\n';
    }
    
    message += '\n───────────────────────────────\n';
    message += '✅ *Servicios incluidos:*\n';
    message += '• Montaje y desmontaje profesional\n';
    message += '• Soporte técnico durante el evento\n';
    message += '• Estructura y cableado completo\n';
    message += '• Seguro todo riesgo\n';
    
    message += '\n📅 Solicitud enviada: ' + new Date().toLocaleString('es-ES');
    
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
                ¡Solicitud Enviada!
            </h3>
            <p style="color: #a3a3a3; margin-bottom: 1rem; line-height: 1.6;">
                Hola ${clientName.split(' ')[0]}, tu solicitud de alquiler está lista en WhatsApp.
            </p>
            <p style="color: #25D366; font-weight: 600; margin-bottom: 1.5rem;">
                Te responderemos en menos de 2 horas
            </p>
            <button onclick="this.parentElement.remove()"
                style="width: 100%; padding: 0.875rem; background: #25D366; border: none; border-radius: 12px; color: white; font-weight: 700; cursor: pointer;">
                Perfecto
            </button>
        `;
        document.body.appendChild(success);
        setTimeout(() => success.remove(), 10000);
    }, 300);
}

const styles = document.createElement('style');
styles.textContent = `
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideUp { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    @keyframes zoomIn { from { transform: translate(-50%, -50%) scale(0.9); opacity: 0; } to { transform: translate(-50%, -50%) scale(1); opacity: 1; } }
    
    .rental-info {
        margin: 0.75rem 0;
    }
    
    .rental-badge {
        background: linear-gradient(135deg, #e30613, #ff4444);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        font-size: 0.85rem;
        font-weight: 600;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .product-featured-badge {
        position: absolute;
        top: 10px;
        right: 10px;
        background: linear-gradient(135deg, #FFD700, #FFA500);
        color: #000;
        padding: 0.4rem 0.8rem;
        border-radius: 20px;
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        box-shadow: 0 4px 12px rgba(255, 215, 0, 0.4);
    }
    
    .header-nav {
        display: flex;
        gap: 1rem;
        margin-right: 1rem;
    }
    
    .nav-link {
        padding: 0.5rem 1rem;
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 8px;
        color: #d4d4d4;
        text-decoration: none;
        font-weight: 600;
        font-size: 0.9rem;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .nav-link:hover {
        background: rgba(227,6,19,0.1);
        border-color: #e30613;
        color: white;
    }
    
    .nav-link.active {
        background: #e30613;
        border-color: #e30613;
        color: white;
    }
    
    .hero-badges {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
        margin-top: 2rem;
    }
    
    .hero-badge {
        background: rgba(255,255,255,0.1);
        border: 1px solid rgba(255,255,255,0.2);
        padding: 0.75rem 1.5rem;
        border-radius: 50px;
        color: white;
        font-weight: 600;
        font-size: 0.95rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        backdrop-filter: blur(10px);
    }
    
    @media (max-width: 768px) {
        .header-nav {
            display: none;
        }
    }
`;
document.head.appendChild(styles);

console.log('✅ Sistema WhatsApp Alquiler listo | Número:', MI_WHATSAPP);
