function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <p className="eyebrow">THE BIGGEST CRICKET FESTIVAL</p>
        <h1>Feel the roar.<br />Live the game.</h1>
        <p className="hero-description">
          Be there for every boundary, every wicket, and every unforgettable
          moment of IPL 2026.
        </p>
        <a className="button button-primary" href="#matches">Explore matches</a>
        <span className="hero-note">The stadium is calling.</span>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="stadium-ring stadium-ring-outer" />
        <div className="stadium-ring stadium-ring-inner" />
        <span className="hero-art-label">IPL<br />2026</span>
      </div>
      <a className="scroll-cue" href="#matches">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a>
    </section>
  )
}

export default Hero
