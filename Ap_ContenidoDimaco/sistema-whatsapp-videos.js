// ═══════════════════════════════════════════════════════════
// 🎬 SISTEMA WHATSAPP VIDEOS - CREACIÓN DE CONTENIDO
// ═══════════════════════════════════════════════════════════

function showVideoQuoteForm() {
    const overlay = document.createElement('div');
    overlay.id = 'videoQuotePopup';
    overlay.style.cssText = `
        position: fixed; inset: 0; background: rgba(0,0,0,0.85); 
        backdrop-filter: blur(8px); z-index: 9999; 
        display: flex; align-items: center; justify-content: center; 
        padding: 20px; animation: fadeIn 0.3s;
    `;
    
    const modal = document.createElement('div');
    modal.style.cssText = `
        background: #141414; border: 1px solid rgba(255,255,255,0.1); 
        border-radius: 16px; max-width: 600px; width: 100%; 
        padding: 2rem; box-shadow: 0 25px 50px rgba(0,0,0,0.9); 
        animation: slideUp 0.4s; max-height: 90vh; overflow-y: auto;
    `;
    
    modal.innerHTML = `
        <div style="text-align: center; margin-bottom: 1.5rem;">
            <div style="font-size: 3rem; color: #25D366; margin-bottom: 1rem;">
                <i class="fas fa-video"></i>
            </div>
            <h2 style="color: white; font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem;">
                Solicitar Presupuesto de Video
            </h2>
            <p style="color: #a3a3a3; font-size: 0.9rem;">
                Completa el formulario y nos pondremos en contacto contigo
            </p>
        </div>
        
        <form id="videoQuoteForm" style="margin-bottom: 1.5rem;">
            <!-- DATOS DEL CLIENTE -->
            <div style="margin-bottom: 1.5rem;">
                <h3 style="color: #e5e5e5; font-size: 1.1rem; font-weight: 700; margin-bottom: 1rem; border-bottom: 2px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem;">
                    <i class="fas fa-user"></i> Tus Datos
                </h3>
                
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
            </div>

            <!-- INFORMACIÓN DEL PROYECTO -->
            <div style="margin-bottom: 1.5rem;">
                <h3 style="color: #e5e5e5; font-size: 1.1rem; font-weight: 700; margin-bottom: 1rem; border-bottom: 2px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem;">
                    <i class="fas fa-briefcase"></i> Tu Proyecto
                </h3>
                
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; color: #e5e5e5; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem;">
                        Tipo de negocio <span style="color: #25D366;">*</span>
                    </label>
                    <select id="businessType" required
                        style="width: 100%; padding: 0.875rem 1rem; background: #0f0f0f; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; color: white; font-size: 1rem; cursor: pointer;">
                        <option value="" disabled selected>Selecciona tu tipo de negocio</option>
                        <option value="Restauración">🍽️ Restauración (Bar, Restaurante, Cafetería)</option>
                        <option value="Retail/Tienda">🛍️ Retail/Tienda</option>
                        <option value="Servicios profesionales">💼 Servicios Profesionales</option>
                        <option value="Belleza y estética">💅 Belleza y Estética</option>
                        <option value="Deporte y fitness">🏋️ Deporte y Fitness</option>
                        <option value="Tecnología">💻 Tecnología</option>
                        <option value="Inmobiliaria">🏢 Inmobiliaria</option>
                        <option value="Salud">🏥 Salud</option>
                        <option value="Educación">📚 Educación</option>
                        <option value="Otro">🔧 Otro</option>
                    </select>
                </div>
                
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; color: #e5e5e5; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem;">
                        Formato del video <span style="color: #25D366;">*</span>
                    </label>
                    <div id="videoFormats" style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
                        <label class="checkbox-card" style="display: flex; align-items: center; padding: 0.75rem; background: #0f0f0f; border: 1px solid rgba(255,255,255,0.06); border-radius: 10px; cursor: pointer; transition: all 0.2s;">
                            <input type="checkbox" name="videoFormat" value="Redes Sociales" style="margin-right: 0.5rem; cursor: pointer;">
                            <span style="color: #e5e5e5; font-size: 0.9rem;">📱 Redes Sociales</span>
                        </label>
                        <label class="checkbox-card" style="display: flex; align-items: center; padding: 0.75rem; background: #0f0f0f; border: 1px solid rgba(255,255,255,0.06); border-radius: 10px; cursor: pointer; transition: all 0.2s;">
                            <input type="checkbox" name="videoFormat" value="Stand Publicitario" style="margin-right: 0.5rem; cursor: pointer;">
                            <span style="color: #e5e5e5; font-size: 0.9rem;">🎪 Stand Publicitario</span>
                        </label>
                        <label class="checkbox-card" style="display: flex; align-items: center; padding: 0.75rem; background: #0f0f0f; border: 1px solid rgba(255,255,255,0.06); border-radius: 10px; cursor: pointer; transition: all 0.2s;">
                            <input type="checkbox" name="videoFormat" value="Pantalla LED" style="margin-right: 0.5rem; cursor: pointer;">
                            <span style="color: #e5e5e5; font-size: 0.9rem;">📺 Pantalla LED</span>
                        </label>
                        <label class="checkbox-card" style="display: flex; align-items: center; padding: 0.75rem; background: #0f0f0f; border: 1px solid rgba(255,255,255,0.06); border-radius: 10px; cursor: pointer; transition: all 0.2s;">
                            <input type="checkbox" name="videoFormat" value="Web/Corporativo" style="margin-right: 0.5rem; cursor: pointer;">
                            <span style="color: #e5e5e5; font-size: 0.9rem;">💼 Web/Corporativo</span>
                        </label>
                        <label class="checkbox-card" style="display: flex; align-items: center; padding: 0.75rem; background: #0f0f0f; border: 1px solid rgba(255,255,255,0.06); border-radius: 10px; cursor: pointer; transition: all 0.2s; grid-column: 1 / -1;">
                            <input type="checkbox" name="videoFormat" value="Otro formato" style="margin-right: 0.5rem; cursor: pointer;">
                            <span style="color: #e5e5e5; font-size: 0.9rem;">🎬 Otro formato</span>
                        </label>
                    </div>
                </div>
                
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; color: #e5e5e5; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem;">
                        ¿Cuántos videos necesitas? <span style="color: #25D366;">*</span>
                    </label>
                    <select id="videoQuantity" required
                        style="width: 100%; padding: 0.875rem 1rem; background: #0f0f0f; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; color: white; font-size: 1rem; cursor: pointer;">
                        <option value="" disabled selected>Selecciona cantidad</option>
                        <option value="1 video">1 video</option>
                        <option value="2-3 videos">2-3 videos</option>
                        <option value="4-5 videos">4-5 videos</option>
                        <option value="6-10 videos">6-10 videos</option>
                        <option value="Más de 10 videos">Más de 10 videos</option>
                        <option value="Plan mensual">Plan mensual (varios videos al mes)</option>
                    </select>
                </div>
                
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; color: #e5e5e5; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem;">
                        Finalidad del video <span style="color: #25D366;">*</span>
                    </label>
                    <select id="videoPurpose" required
                        style="width: 100%; padding: 0.875rem 1rem; background: #0f0f0f; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; color: white; font-size: 1rem; cursor: pointer;">
                        <option value="" disabled selected>Selecciona la finalidad</option>
                        <option value="Promociones y ofertas puntuales">🎉 Promociones y ofertas puntuales</option>
                        <option value="Publicidad fija del negocio">🏪 Publicidad fija del negocio</option>
                        <option value="Lanzamiento de producto/servicio">🚀 Lanzamiento de producto/servicio</option>
                        <option value="Evento especial">🎊 Evento especial</option>
                        <option value="Contenido de marca general">✨ Contenido de marca general</option>
                        <option value="Testimonios de clientes">💬 Testimonios de clientes</option>
                        <option value="Tutorial/Educativo">📖 Tutorial/Educativo</option>
                        <option value="Otro">🔧 Otro</option>
                    </select>
                </div>
            </div>

            <!-- MENSAJE ADICIONAL -->
            <div style="margin-bottom: 1.5rem;">
                <label style="display: block; color: #e5e5e5; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem;">
                    <i class="fas fa-comment"></i> Cuéntanos más sobre tu proyecto (opcional)
                </label>
                <textarea id="projectDetails" rows="3" placeholder="Ej: Necesito videos cortos para Instagram promocionando mi nuevo menú del día..."
                    style="width: 100%; padding: 0.875rem 1rem; background: #0f0f0f; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; color: white; font-size: 0.95rem; resize: vertical; font-family: inherit;"></textarea>
            </div>
            
            <div style="display: flex; gap: 0.75rem;">
                <button type="button" onclick="closeVideoQuoteForm()"
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
                <i class="fas fa-info-circle" style="color: #25D366;"></i>
                Se abrirá WhatsApp con toda tu información. Responderemos en menos de 24 horas.
            </p>
        </div>
    `;
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
    
    // Añadir estilos hover para los checkboxes
    const checkboxCards = modal.querySelectorAll('.checkbox-card');
    checkboxCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = 'rgba(37, 211, 102, 0.3)';
            card.style.background = 'rgba(37, 211, 102, 0.05)';
        });
        card.addEventListener('mouseleave', () => {
            const checkbox = card.querySelector('input[type="checkbox"]');
            if (!checkbox.checked) {
                card.style.borderColor = 'rgba(255,255,255,0.06)';
                card.style.background = '#0f0f0f';
            }
        });
        
        const checkbox = card.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                card.style.borderColor = '#25D366';
                card.style.background = 'rgba(37, 211, 102, 0.1)';
            } else {
                card.style.borderColor = 'rgba(255,255,255,0.06)';
                card.style.background = '#0f0f0f';
            }
        });
    });
    
    document.getElementById('videoQuoteForm').addEventListener('submit', function(e) {
        e.preventDefault();
        sendVideoQuoteWhatsApp();
    });
    
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            closeVideoQuoteForm();
        }
    });
    
    setTimeout(() => document.getElementById('clientName').focus(), 100);
}

function closeVideoQuoteForm() {
    const popup = document.getElementById('videoQuotePopup');
    if (popup) {
        popup.remove();
        document.body.style.overflow = 'auto';
    }
}

function sendVideoQuoteWhatsApp() {
    const clientName = document.getElementById('clientName').value.trim();
    const clientEmail = document.getElementById('clientEmail').value.trim();
    const businessType = document.getElementById('businessType').value;
    const videoQuantity = document.getElementById('videoQuantity').value;
    const videoPurpose = document.getElementById('videoPurpose').value;
    const projectDetails = document.getElementById('projectDetails').value.trim();
    
    // Obtener formatos seleccionados
    const formatCheckboxes = document.querySelectorAll('input[name="videoFormat"]:checked');
    const selectedFormats = Array.from(formatCheckboxes).map(cb => cb.value);
    
    // Validaciones
    if (!clientName) {
        alert('Por favor, introduce tu nombre');
        return;
    }
    
    if (!businessType) {
        alert('Por favor, selecciona tu tipo de negocio');
        return;
    }
    
    if (selectedFormats.length === 0) {
        alert('Por favor, selecciona al menos un formato de video');
        return;
    }
    
    if (!videoQuantity) {
        alert('Por favor, indica cuántos videos necesitas');
        return;
    }
    
    if (!videoPurpose) {
        alert('Por favor, selecciona la finalidad del video');
        return;
    }
    
    // Construir mensaje de WhatsApp
    let message = '🎬 *SOLICITUD DE PRESUPUESTO - VIDEOS*\n';
    message += '═══════════════════════════════════\n\n';
    
    message += '👤 *Datos del Cliente:*\n';
    message += `• Nombre: ${clientName}\n`;
    if (clientEmail) message += `• Email: ${clientEmail}\n`;
    
    message += '\n🏢 *Información del Proyecto:*\n';
    message += '─────────────────────────────\n';
    message += `• Tipo de Negocio: ${businessType}\n`;
    message += `• Cantidad de Videos: ${videoQuantity}\n`;
    message += `• Finalidad: ${videoPurpose}\n`;
    
    message += '\n📹 *Formatos Solicitados:*\n';
    selectedFormats.forEach((format, index) => {
        message += `  ${index + 1}. ${format}\n`;
    });
    
    if (projectDetails) {
        message += '\n💬 *Detalles del Proyecto:*\n';
        message += projectDetails + '\n';
    }
    
    message += '\n─────────────────────────────\n';
    message += '📅 ' + new Date().toLocaleString('es-ES');
    
    const encodedMessage = encodeURIComponent(message);
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const whatsappURL = isMobile 
        ? `whatsapp://send?phone=${MI_WHATSAPP}&text=${encodedMessage}`
        : `https://wa.me/${MI_WHATSAPP}?text=${encodedMessage}`;
    
    closeVideoQuoteForm();
    
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
            <p style="color: #a3a3a3; margin-bottom: 1.5rem; line-height: 1.6;">
                Gracias ${clientName}, hemos recibido tu solicitud. Te responderemos pronto por WhatsApp.
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

// Estilos de animación
const styles = document.createElement('style');
styles.textContent = `
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideUp { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    @keyframes zoomIn { from { transform: translate(-50%, -50%) scale(0.9); opacity: 0; } to { transform: translate(-50%, -50%) scale(1); opacity: 1; } }
`;
document.head.appendChild(styles);

console.log('✅ Sistema WhatsApp Videos listo | Número:', MI_WHATSAPP);
