import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useLanguage from '../i18n/useLanguage';

export const MENU_ID = 'menuPrincipal';

const menuLabels = {
  es: { open: 'Abrir menú', close: 'Cerrar menú' },
  en: { open: 'Open menu', close: 'Close menu' },
  fr: { open: 'Ouvrir le menu', close: 'Fermer le menu' },
  zh: { open: '打开菜单', close: '关闭菜单' },
};

/**
 * Lógica del menú lateral responsive.
 *
 * Devuelve el estado (open) y lo que el Navbar necesita enchufar:
 *   - menuRef:   ref del <ul class="nav-links">
 *   - toggleRef: ref del botón hamburguesa
 *   - toggle / close / onMenuClick: manejadores
 *   - label: texto accesible del botón, en el idioma activo
 *
 * El CSS (responsive.css) hace el resto a partir de la clase "rm-open" que
 * este hook pone en <html>.
 */
export default function useResponsiveMenu() {
  const [open, setOpen] = useState(false);
  const lang = useLanguage();
  const { pathname } = useLocation();
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  const toggle = useCallback(() => setOpen((value) => !value), []);
  const close = useCallback(() => setOpen(false), []);

  /* Al navegar a otra ruta el menú se cierra */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /* Tocar un enlace cierra el menú, incluso si es la ruta en la que ya estás */
  const onMenuClick = useCallback((event) => {
    if (event.target.closest('a')) setOpen(false);
  }, []);

  /* La clase en <html> activa los estilos del menú abierto y bloquea el scroll */
  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle('rm-open', open);
    if (open) menuRef.current?.querySelector('a')?.focus({ preventScroll: true });
    return () => html.classList.remove('rm-open');
  }, [open]);

  /* Escape cierra el menú; Tab queda atrapado dentro mientras está abierto */
  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== 'Tab') return;
      const items = [
        toggleRef.current,
        ...(menuRef.current?.querySelectorAll('a, button:not([disabled])') ?? []),
      ].filter((item) => item && item.getClientRects().length > 0);
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  /* Al pasar de teléfono a tablet/laptop, el panel deslizante se cierra */
  useEffect(() => {
    const wide = window.matchMedia('(min-width: 961px)');
    const onChange = (event) => {
      if (event.matches) setOpen(false);
    };
    wide.addEventListener('change', onChange);
    return () => wide.removeEventListener('change', onChange);
  }, []);

  /* Altura real del header, para que el menú empiece justo debajo */
  useEffect(() => {
    const header = menuRef.current?.closest('header');
    if (!header) return undefined;
    const html = document.documentElement;
    const sync = () => html.style.setProperty('--rm-header-h', `${header.offsetHeight}px`);
    sync();
    const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(sync) : null;
    observer?.observe(header);
    return () => {
      observer?.disconnect();
      html.style.removeProperty('--rm-header-h');
    };
  }, []);

  /* El idioma lo gestiona main.js; el hook solo necesita el código activo
     para traducir el texto accesible del botón. */
  const labels = menuLabels[lang] ?? menuLabels.es;
  const label = open ? labels.close : labels.open;

  return { open, label, menuRef, toggleRef, toggle, close, onMenuClick };
}
