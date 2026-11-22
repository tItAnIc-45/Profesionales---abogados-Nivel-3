import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MENU_ID, MenuBackdrop, MenuToggle, useResponsiveMenu } from '../../responsive';
import useLanguage from '../../i18n/useLanguage';
import { pick } from '../../i18n/languages';
import { PRACTICE_AREAS } from '../../data/practiceAreas';
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
  { to: '/cotizador', label: { es: 'Servicios', en: 'Services', fr: 'Services', zh: '服务' } },
  { to: '/contacto', label: { es: 'Contacto', en: 'Contact', fr: 'Contact', zh: '联系我们' } },
];

const ctaLabels = {
  es: 'Consulta Legal',
  en: 'Legal Consultation',
  fr: 'Consultation juridique',
  zh: '法律咨询',
};

const dropdownLabels = {
  open: { es: 'Mostrar áreas de práctica', en: 'Show practice areas', fr: 'Afficher les domaines', zh: '显示业务领域' },
  close: { es: 'Ocultar áreas de práctica', en: 'Hide practice areas', fr: 'Masquer les domaines', zh: '隐藏业务领域' },
};

export default function Navbar() {
  const { open, label, menuRef, toggleRef, toggle, close, onMenuClick } = useResponsiveMenu();
  const [areasOpen, setAreasOpen] = useState(false);
  const areasRef = useRef(null);
  const lang = useLanguage();
  const { pathname } = useLocation();
  const cta = pick(ctaLabels, lang);

  useEffect(() => {
    setAreasOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!areasOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setAreasOpen(false);
    };
    const onPointerDown = (event) => {
      if (!areasRef.current?.contains(event.target)) setAreasOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [areasOpen]);

  return (
    <header className="navbar-header">
      <div className="container nav-wrapper">
        <NavLink to="/" className="logo" aria-label="TuPlus Abogados — inicio">
          <i className="fa-solid fa-scale-balanced" aria-hidden="true" />
          TUPLUS <span className="gold-text">ABOGADOS</span>
        </NavLink>

        <ul className="nav-links" id={MENU_ID} ref={menuRef} onClick={onMenuClick}>
          {links.map((link) =>
            link.to === '/areas' ? (
              <li key={link.to} ref={areasRef} className={`nav-item has-dropdown${areasOpen ? ' is-open' : ''}`}>
                <div className="nav-link-row">
                  <NavLink
                    to={link.to}
                    className={({ isActive }) => (isActive || pathname.startsWith('/areas/') ? 'active' : '')}
                  >
                    {pick(link.label, lang)}
                  </NavLink>
                  <button
                    type="button"
                    className="nav-dropdown-toggle"
                    aria-expanded={areasOpen}
                    aria-controls="areasSubmenu"
                    aria-label={pick(areasOpen ? dropdownLabels.close : dropdownLabels.open, lang)}
                    onClick={() => setAreasOpen((value) => !value)}
                  >
                    <i className="fa-solid fa-chevron-down" aria-hidden="true" />
                  </button>
                </div>
                <ul className="nav-dropdown" id="areasSubmenu">
                  {PRACTICE_AREAS.map((area) => (
                    <li key={area.slug}>
                      <NavLink to={`/areas/${area.slug}`}>
                        <i className={area.icon} aria-hidden="true" />
                        <span>{pick(area.navLabel, lang)}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={link.to}>
                <NavLink to={link.to} end={link.to === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>
                  {pick(link.label, lang)}
                </NavLink>
              </li>
            ),
          )}
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
