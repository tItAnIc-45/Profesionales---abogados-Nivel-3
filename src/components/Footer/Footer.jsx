import './Footer.css';

const footerMarkup = `<footer>
<div class="container">
<div class="footer-grid">
<div>
<a class="footer-logo" href="/">
<i class="fa-solid fa-scale-balanced gold-text"></i> TUPLUS ABOGADOS
</a>
<p class="footer-desc" data-lang="footer_desc">Firma legal comprometida con el desarrollo corporativo, la defensa jurídica integral y la excelencia en el patrocinio de nuestros clientes.</p>
</div>
<div>
<h3 class="footer-title" data-lang="foot_nav">Navegación</h3>
<ul class="footer-links">
<li><a data-lang="nav_firm" href="/la-firma">La Firma</a></li>
<li><a data-lang="nav_practices" href="/areas">Áreas de Práctica</a></li>
<li><a data-lang="nav_team" href="/equipo">Nuestros Abogados</a></li>
<li><a data-lang="nav_calculator" href="/cotizador">Servicios y Honorarios</a></li>
</ul>
</div>
<div>
<h3 class="footer-title" data-lang="foot_legal">Legal</h3>
<ul class="footer-links">
<li><a data-en="Terms of Service" data-es="Términos de Servicio" data-fr="Conditions d’utilisation" data-zh="服务条款" href="/legal#terminos">Términos de Servicio</a></li>
<li><a data-en="Privacy Policy" data-es="Política de Privacidad" data-fr="Politique de confidentialité" data-zh="隐私政策" href="/legal#privacidad">Política de Privacidad</a></li>
<li><a data-en="Code of Ethics" data-es="Código de Ética" data-fr="Code d’éthique" data-zh="职业道德准则" href="/legal#etica">Código de Ética</a></li>
</ul>
</div>
<div>
<h3 class="footer-title">TuPlus Abogados</h3>
<p class="footer-doc-text" data-es="Comprometidos con la excelencia jurídica y el éxito de nuestros clientes corporativos y personales." data-en="Committed to legal excellence and the success of our corporate and individual clients." data-fr="Engagés pour l’excellence juridique et la réussite de nos clients, entreprises comme particuliers." data-zh="致力于法律卓越，助力企业与个人客户取得成功。">Comprometidos con la excelencia jurídica y el éxito de nuestros clientes corporativos y personales.</p>
</div>
</div>
<div class="footer-bottom">
<div data-en="© 2026 TuPlus Abogados. All rights reserved." data-es="© 2026 TuPlus Abogados. Todos los derechos reservados." data-fr="© 2026 TuPlus Abogados. Tous droits réservés." data-zh="© 2026 TuPlus Abogados. 版权所有。">© 2026 TuPlus Abogados. Todos los derechos reservados.</div>
<div data-en="Designed for High-Level Law Firm" data-es="Diseñado para Firma Jurídica de Alto Nivel" data-fr="Conçu pour un cabinet juridique d’excellence" data-zh="为高水平律师事务所而设计">Diseñado para Firma Jurídica de Alto Nivel</div>
</div>
</div>
</footer>`;

export default function Footer() {
  return <div dangerouslySetInnerHTML={{ __html: footerMarkup }} />;
}
