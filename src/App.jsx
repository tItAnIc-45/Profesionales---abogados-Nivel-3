import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import LaFirma from './components/LaFirma/LaFirma';
import Practicas from './components/Practicas/Practicas';
import Equipo from './components/Equipo/Equipo';
import Cotizador from './components/Cotizador/Cotizador';
import Contacto from './components/Contacto/Contacto';
import WhatsappFloat from './components/WhatsappFloat/WhatsappFloat';

import Footer from './components/Footer/Footer';
import Legal from './components/Legal/Legal';
import ScrollTop from './components/ScrollTop/ScrollTop';
import './responsive/responsive.css'; // debe ir después de los CSS de los componentes
import useLanguage, { readLanguage } from './i18n/useLanguage';
import { pick } from './i18n/languages';
import './scripts/main.js';
import './scripts/calculator.js';

const pageTitles = {
  '/': {
    es: 'TuPlus Abogados | Firma Legal de Alto Nivel',
    en: 'TuPlus Abogados | High-Level Law Firm',
    fr: 'TuPlus Abogados | Cabinet juridique d’excellence',
    zh: 'TuPlus Abogados | 高水平律师事务所',
  },
  '/la-firma': {
    es: 'La Firma | TuPlus Abogados',
    en: 'The Firm | TuPlus Abogados',
    fr: 'Le Cabinet | TuPlus Abogados',
    zh: '本所简介 | TuPlus Abogados',
  },
  '/areas': {
    es: 'Áreas de Práctica | TuPlus Abogados',
    en: 'Practice Areas | TuPlus Abogados',
    fr: 'Domaines d’activité | TuPlus Abogados',
    zh: '业务领域 | TuPlus Abogados',
  },
  '/equipo': {
    es: 'Equipo | TuPlus Abogados',
    en: 'Team | TuPlus Abogados',
    fr: 'Équipe | TuPlus Abogados',
    zh: '团队 | TuPlus Abogados',
  },
  '/cotizador': {
    es: 'Cotizador | TuPlus Abogados',
    en: 'Calculator | TuPlus Abogados',
    fr: 'Estimateur | TuPlus Abogados',
    zh: '费用估算 | TuPlus Abogados',
  },
  '/contacto': {
    es: 'Contacto | TuPlus Abogados',
    en: 'Contact | TuPlus Abogados',
    fr: 'Contact | TuPlus Abogados',
    zh: '联系我们 | TuPlus Abogados',
  },
  '/legal': {
    es: 'Marco Legal | TuPlus Abogados',
    en: 'Legal Framework | TuPlus Abogados',
    fr: 'Cadre juridique | TuPlus Abogados',
    zh: '法律信息 | TuPlus Abogados',
  },
  '/perfil': {
    es: 'Perfil | TuPlus Abogados',
    en: 'Profile | TuPlus Abogados',
    fr: 'Profil | TuPlus Abogados',
    zh: '个人简介 | TuPlus Abogados',
  },
};

const skipLabels = {
  es: 'Saltar al contenido',
  en: 'Skip to content',
  fr: 'Aller au contenu',
  zh: '跳至主要内容',
};

function Home() {
  return (
    <>
      <Banner />
      <LaFirma />
      <Practicas />
      <Equipo />
      <Cotizador />
      <Contacto />
    </>
  );
}

export default function App() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();
  const lang = useLanguage();

  useEffect(() => {
    document.documentElement.dataset.theme ||= 'dark';

    const saved = window.localStorage.getItem('tuplus-theme');
    if (saved === 'light' || saved === 'dark') {
      document.documentElement.dataset.theme = saved;
      const icon = document.getElementById('themeIcon');
      if (icon) icon.className = saved === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }

    // Aplica el idioma guardado en la primera carga.
    window.setLanguage?.(readLanguage());
  }, []);

  useEffect(() => {
    document.title = pick(pageTitles[pathname], lang) || 'TuPlus Abogados';
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [pathname, hash, lang]);

  // Las páginas heredadas (dangerouslySetInnerHTML) se traducen con data-lang.
  // Al cambiar de ruta hay que reaplicar el idioma activo.
  useEffect(() => {
    window.applyLanguage?.();
    const timer = window.setTimeout(() => window.applyLanguage?.(), 80);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  // Los componentes heredados usan enlaces <a href="/...">. Se interceptan
  // para navegar como SPA sin recargar la página completa.
  useEffect(() => {
    const onClick = (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target instanceof Element ? event.target : null;
      const anchor = target?.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('/') || href.startsWith('//')) return;
      if (anchor.target && anchor.target !== '_self') return;
      if (anchor.hasAttribute('download')) return;

      event.preventDefault();
      navigate(href);
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [navigate]);

  return (
    <>
      <a className="skip-link" href="#main">
        {pick(skipLabels, lang)}
      </a>

      <Navbar />
      <WhatsappFloat />
      <ScrollTop />

      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/la-firma" element={<LaFirma />} />
          <Route path="/areas" element={<Practicas />} />
          <Route path="/equipo" element={<Equipo />} />
          <Route path="/cotizador" element={<Cotizador />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/perfil" element={<Navigate to="/equipo" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
