import { NavLink } from 'react-router-dom';
import { MENU_ID, MenuBackdrop, MenuToggle, useResponsiveMenu } from '../../responsive';
import useLanguage from '../../i18n/useLanguage';
import { pick } from '../../i18n/languages';
import LanguageSwitcher from './LanguageSwitcher';
import './Navbar.css';

const links = [
  { to: '/', label: { es: 'Inicio', en: 'Home', fr: 'Accueil', zh: '首页' } },
  { to: '/la-firma', label: { es: 'La Firma', en: 'The Firm', fr: 'Le Cabinet', zh: '本所简介' } },
  {
    to: '/areas',
    label: { es: 'Áreas de Práctica', en: 'Practice Areas', fr: 'Domaines d’activité', zh: '业务领域' },
  },
  { to: '/equipo', label: { es: 'Equipo', en: 'Team', fr: 'Équipe', zh: '团队' } },
  { to: '/cotizador', label: { es: 'Cotizador', en: 'Calculator', fr: 'Estimateur', zh: '费用估算' } },
  { to: '/contacto', label: { es: 'Contacto', en: 'Contact', fr: 'Contact', zh: '联系我们' } },
];

const ctaLabels = {
  es: 'Consulta Legal',
  en: 'Legal Consultation',
  fr: 'Consultation juridique',
  zh: '法律咨询',
};

export default function Navbar() {
  const { open, label, menuRef, toggleRef, toggle, close, onMenuClick } = useResponsiveMenu();
  const lang = useLanguage();
  const cta = pick(ctaLabels, lang);

  return (
    <header className="navbar-header">
      <div className="container nav-wrapper">
        <NavLink to="/" className="logo" aria-label="TuPlus Abogados — inicio">
          <i className="fa-solid fa-scale-balanced" aria-hidden="true" />
          TUPLUS <span className="gold-text">ABOGADOS</span>
        </NavLink>

        <ul className="nav-links" id={MENU_ID} ref={menuRef} onClick={onMenuClick}>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.to === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>
                {pick(link.label, lang)}
              </NavLink>
            </li>
          ))}
          {/* Solo se ve en teléfono, dentro del menú deslizante */}
          <li className="rm-drawer-cta">
            <NavLink to="/contacto" className="btn-gold">
              {cta}
            </NavLink>
          </li>
        </ul>

        <div className="nav-actions">
          <LanguageSwitcher />

          <button
            className="btn-theme"
            id="themeToggle"
            type="button"
            onClick={() => window.toggleTheme?.()}
            title="Cambiar Tema"
            aria-label="Cambiar Tema"
          >
            <i className="fa-solid fa-moon" id="themeIcon" aria-hidden="true" />
          </button>

          <NavLink to="/contacto" className="btn-gold nav-cta">
            {cta}
          </NavLink>
        </div>

        <MenuToggle open={open} label={label} onClick={toggle} buttonRef={toggleRef} />
      </div>

      <MenuBackdrop onClick={close} />
    </header>
  );
}
