import './Hero.css'

function Hero() {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-heading">
      <div className="hero-section__layout container">
        <div className="hero-section__content">
          <p className="hero-section__eyebrow">
            Thoughtful care, centered around you
          </p>
          <h1 id="hero-heading">Your Health Deserves Exceptional Care.</h1>
          <p className="hero-section__description">
            Personalized healthcare, experienced professionals and
            compassionate care — all in one place.
          </p>
          <div className="hero-section__actions">
            <a className="button button--primary" href="#appointment">
              Book an Appointment
            </a>
            <a className="button button--outline" href="#services">
              Explore Our Services
            </a>
          </div>
          <p className="hero-section__demo-note">
            QUALITY CARE. PERSONAL ATTENTION.
          </p>
        </div>

        <div className="hero-section__visual">
          <span className="hero-section__shape hero-section__shape--back" aria-hidden="true" />
          <div className="hero-section__image-stack">
            <div className="hero-section__image-frame">
              <img
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80"
                alt="Modern medical clinic interior with consultation room and warm lighting"
                fetchPriority="high"
              />
            </div>
            <div className="hero-section__mini-card">
              <img
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80"
                alt="Medical equipment in a clinic"
              />
              <div className="hero-section__mini-card__badge">24/7 Care</div>
            </div>
          </div>
          <div className="hero-section__image-caption">
            <span className="hero-section__caption-icon" aria-hidden="true">
              +
            </span>
            <span>
              <strong>Care that listens</strong>
              <span>Here for your wellbeing</span>
            </span>
          </div>
          <span className="hero-section__shape hero-section__shape--dot" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}

export default Hero
