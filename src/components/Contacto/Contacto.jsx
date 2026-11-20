import './Contacto.css';

const formspreeUrl = import.meta.env.VITE_FORMSPREE_URL || import.meta.env.VITE_FORMSPREE_ENDPOINT || '';

const contactoMarkup = `<section class="section-secondary" id="contacto">
<div class="container">
<div class="section-header">
<span class="section-tag" data-lang="tag_direct">Contacto Directo</span>
<h2 class="section-title" data-lang="contact_title">Agende una Consulta</h2>
<p class="section-desc" data-lang="contact_desc">Atención presencial en nuestra sede corporativa o virtual a través de videollamada.</p>
</div>
<div class="contact-grid">
<div>
<div class="contact-info-card">
<h3><i class="fa-solid fa-location-dot"></i> <span data-lang="addr_title">Dirección Institucional</span></h3>
<p>Av. Víctor Andrés Belaúnde 147, San Isidro, Lima, Perú</p>
</div>
<div class="contact-info-card">
<h3><i class="fa-solid fa-phone"></i> <span data-lang="phone_title">Central Telefónica</span></h3>
<p>+51 (1) 555-666 / +51 999 888 777</p>
</div>
<div class="contact-info-card">
<h3><i class="fa-solid fa-envelope"></i> <span data-lang="email_title">Correo de Atención</span></h3>
<p>contacto@tuplusabogados.com.pe</p>
</div>
<div class="map-container">
<iframe allowfullscreen="" height="220" loading="lazy" title="Ubicación de TuPlus Abogados en San Isidro, Lima" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.968270544158!2d-77.0304!3d-12.0975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA1JzUxLjAiUyA3N8KwMDEnNDkuNCJX!5e0!3m2!1ses!2spe!4v1620000000000!5m2!1ses!2spe" width="100%">
</iframe>
</div>
</div>

<form action="${formspreeUrl}" class="calculator-container form-reset" method="POST">

<div class="form-group">
<label data-lang="form_name" for="nombre">Nombre Completo / Razón Social</label>
<input class="form-control" data-placeholder-en="E.g.: John Doe / Company LLC" data-placeholder-es="Ej: Juan Pérez / Empresa S.A.C." data-placeholder-fr="Ex. : Jean Dupont / Société SARL" data-placeholder-zh="例如：张伟 / 某某有限公司" id="nombre" name="nombre" placeholder="Ej: Juan Pérez / Empresa S.A.C." required="" type="text"/>
</div>
<div class="form-group">
<label data-lang="form_email" for="email">Correo Electrónico</label>
<input class="form-control" id="email" name="email" placeholder="correo@empresa.com" required="" type="email"/>
</div>
<div class="form-group">
<label data-lang="form_phone" for="telefono">Teléfono / WhatsApp</label>
<input class="form-control" id="telefono" name="telefono" placeholder="+51 999 888 777" type="tel"/>
</div>
<div class="form-group">
<label data-lang="form_spec" for="especialidad">Área de Consulta / Especialidad</label>
<select class="form-control" id="especialidad" name="especialidad">
<option data-en="Corporate Law" data-es="Derecho Corporativo" data-fr="Droit des sociétés" data-zh="公司法" value="Derecho Corporativo">Derecho Corporativo</option>
<option data-en="Litigation &amp; Arbitration" data-es="Litigios y Arbitraje" data-fr="Contentieux &amp; arbitrage" data-zh="诉讼与仲裁" value="Litigios y Arbitraje">Litigios y Arbitraje</option>
<option data-en="Economic Criminal Law" data-es="Derecho Penal Económico" data-fr="Droit pénal des affaires" data-zh="经济刑法" value="Derecho Penal Económico">Derecho Penal Económico</option>
<option data-en="Real Estate Law" data-es="Derecho Inmobiliario" data-fr="Droit immobilier" data-zh="房地产法" value="Derecho Inmobiliario">Derecho Inmobiliario</option>
<option data-en="Labor Law" data-es="Derecho Laboral" data-fr="Droit du travail" data-zh="劳动法" value="Derecho Laboral">Derecho Laboral</option>
<option data-en="Tax Law" data-es="Derecho Tributario" data-fr="Droit fiscal" data-zh="税法" value="Derecho Tributario">Derecho Tributario</option>
<option data-en="General Inquiry" data-es="Consulta General" data-fr="Demande générale" data-zh="一般咨询" value="Consulta General">Consulta General</option>
</select>
</div>
<div class="form-group">
<label data-lang="form_msg" for="mensaje">Detalle de la Consulta Legal</label>
<textarea class="form-control" data-placeholder-en="Briefly describe your legal situation..." data-placeholder-es="Describa brevemente su situación jurídica..." data-placeholder-fr="Décrivez brièvement votre situation juridique…" data-placeholder-zh="请简要描述您的法律情况……" id="mensaje" name="mensaje" placeholder="Describa brevemente su situación jurídica..." required="" rows="4"></textarea>
</div>
<div class="form-group form-check">
<input id="privacidad" name="privacidad" required="" type="checkbox"/>
<label for="privacidad">
<span data-lang="form_privacy">Acepto la Política de Privacidad</span>
<a data-lang="form_privacy_link" href="/legal#privacidad" rel="noopener noreferrer" target="_blank">Ver política</a>
</label>
</div>
<button class="btn-gold btn-full" data-lang="form_btn" type="submit">Enviar Consulta a TuPlus Abogados</button>
</form>
</div>
</div>
</section>`;

export default function Contacto() {
  return <div dangerouslySetInnerHTML={{ __html: contactoMarkup }} />;
}
