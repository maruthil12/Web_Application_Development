const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Matches', href: '#matches' },
]

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="IPL 2026 home">
          <span className="brand-mark" aria-hidden="true">IPL</span>
          <span className="brand-name">TICKET BOOKING</span>
        </a>
        <div className="nav-links">
          {navigationLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a className="nav-cta" href="#matches">Find tickets</a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
