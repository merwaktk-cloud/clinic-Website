import SectionHeading from './SectionHeading.jsx'
import './About.css'

const clinicFeatures = [
  {
    title: 'Care with compassion',
    description: 'A thoughtful, respectful approach to every conversation.',
    icon: (
      <>
        <path d="M20 34s-13-7.8-13-17a7 7 0 0 1 13-3.5A7 7 0 0 1 33 17c0 9.2-13 17-13 17Z" />
        <path d="M12 21h5l2-4 3 8 2-4h4" />
      </>
    ),
  },
  {
    title: 'Care that feels connected',
    description: 'A welcoming place to discuss your health and next steps.',
    icon: (
      <>
        <circle cx="20" cy="12" r="5" />
        <path d="M10 33v-3a10 10 0 0 1 20 0v3M5 19v-2a5 5 0 0 1 7-4.6M35 19v-2a5 5 0 0 0-7-4.6" />
      </>
    ),
  },
  {
    title: 'Guidance made clear',
    description: 'Helpful explanations to support informed decisions.',
    icon: (
      <>
        <path d="M20 5 35 33H5L20 5Z" />
        <path d="M20 15v8M20 28h.01" />
      </>
    ),
  },
]

function About() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-heading">
      <div className="about-section__layout container">
        <div className="about-section__content">
          <p className="about-section__eyebrow">A more personal approach to care</p>
          <SectionHeading id="about" title="Healthcare that feels a little more human." />
          <p className="about-section__introduction">
            At CarePoint Clinic, we believe good care starts with listening.
            We create space for open conversations, thoughtful guidance, and
            care that considers the whole person.
          </p>

          <ul className="about-section__features">
            {clinicFeatures.map((feature) => (
              <li className="about-feature" key={feature.title}>
                <span className="about-feature__icon" aria-hidden="true">
                  <svg viewBox="0 0 40 40" fill="none">
                    {feature.icon}
                  </svg>
                </span>
                <span>
                  <span className="about-feature__title">{feature.title}</span>
                  <span className="about-feature__description">
                    {feature.description}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          <a className="about-section__link" href="#services">
            Learn more about our care
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M4 10h12m-5-5 5 5-5 5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.7"
              />
            </svg>
          </a>
        </div>

        <div className="about-section__visual">
          <div className="about-section__image-frame">
            <img
              className="about-section__image"
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1100&q=85"
              alt="Doctor in a white coat smiling in a bright clinic"
              loading="lazy"
            />
          </div>
          <div className="about-section__image-note" aria-hidden="true">
            <span className="about-section__note-mark">+</span>
            <span>Care starts with a conversation</span>
          </div>
          <span className="about-section__decoration" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}

export default About
