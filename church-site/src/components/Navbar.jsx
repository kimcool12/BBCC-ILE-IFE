import { useEffect, useState } from 'react';

// Top bar: logo + name on the left, links on desktop.
// On mobile: a hamburger that turns into an X and slides a menu in from the left,
// while the rest of the page is blurred.
export default function Navbar({ name, logo, links }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Add a shadow once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // While the menu is open: stop the page behind from scrolling, and let Esc close it.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <a href="#home" className="navbar__brand">
          <img src={logo} alt="" />
          <span>{name}</span>
        </a>

        {/* Desktop links (hidden on mobile) */}
        <nav className="navbar__links">
          {links.map((l) => <a key={l.id} href={`#${l.id}`}>{l.label}</a>)}
        </nav>
      </header>

      {/* Hamburger -> X button (mobile only) */}
      <button className={`burger ${open ? 'burger--open' : ''}`} onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>
        <span /><span /><span />
      </button>

      {/* Blur layer over the page; tapping it closes the menu */}
      <div className={`backdrop ${open ? 'backdrop--open' : ''}`} onClick={close} />

      {/* Slide-in menu from the left (mobile only) */}
      <aside className={`drawer ${open ? 'drawer--open' : ''}`}>
        <div className="drawer__brand"><img src={logo} alt="" /><span>{name}</span></div>
        {links.map((l, i) => (
          <a key={l.id} href={`#${l.id}`} onClick={close} style={{ transitionDelay: open ? `${120 + i * 60}ms` : '0ms' }}>
            {l.label}
          </a>
        ))}
      </aside>
    </>
  );
}
