import SectionHeading from './SectionHeading.jsx'
import './Services.css'

const services = [
  {
    name: 'General Medicine',
    description:
      'Everyday health support, checkups, and guidance for your wellbeing.',
    icon: (
      <>
        <path d="M20 5v30M5 20h30" />
        <circle cx="20" cy="20" r="16" />
      </>
    ),
  },
  {
    name: 'Cardiology',
    description:
      'Heart health consultations with thoughtful, personalized attention.',
    icon: (
      <>
        <path d="M4 21h7l4-9 6 16 4-9h11" />
        <path d="M20 35S4 26 4 14a8 8 0 0 1 16-2 8 8 0 0 1 16 2c0 12-16 21-16 21Z" />
      </>
    ),
  },
  {
    name: 'Dermatology',
    description:
      'Support for healthy skin with care tailored to your individual needs.',
    icon: (
      <>
        <circle cx="20" cy="20" r="16" />
        <path d="M13 16h.01M24 13h.01M27 23h.01M15 27h.01M18 19c2-2 5-2 7 0" />
      </>
    ),
  },
  {
    name: 'Pediatrics',
    description:
      'Welcoming care to support children through every stage of growing up.',
    icon: (
      <>
        <circle cx="20" cy="13" r="8" />
        <path d="M12 12h.01M28 12h.01M17 17c2 2 4 2 6 0M20 21v5M10 35v-3a10 10 0 0 1 20 0v3M15 29h10" />
      </>
    ),
  },
  {
    name: 'Dental Care',
    description:
      'Gentle, practical dental care to help you look after your smile.',
    icon: (
      <>
        <path d="M20 7c-3-3-10-2-12 3-2 6 2 21 6 24 3 2 4-8 6-8s3 10 6 8c4-3 8-18 6-24-2-5-9-6-12-3Z" />
        <path d="M14 13c2-2 4-2 6 0s4 2 6 0" />
      </>
    ),
  },
  {
    name: 'Orthopedics',
    description:
      'Guidance for joint, bone, and movement concerns at every age.',
    icon: (
      <>
        <path d="M13 7a4 4 0 1 0-5.7 5.7l14 14A4 4 0 1 0 27 21L13 7Z" />
        <path d="M27 7a4 4 0 1 1 5.7 5.7l-4.1 4.1M13 33a4 4 0 1 1-5.7-5.7l4.1-4.1" />
      </>
    ),
  },
]

function Services() {
  return (
    <section
      className="services-section"
      id="services"
      aria-labelledby="services-heading"
    >
      <div className="container">
        <header className="services-section__header">
          <p className="services-section__eyebrow">Care for every chapter</p>
          <SectionHeading id="services" title="Services to support your health" />
          <p className="services-section__introduction">
            Explore a range of care options designed around your needs and
            wellbeing.
          </p>
        </header>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.name}>
              <span className="service-card__icon" aria-hidden="true">
                <svg viewBox="0 0 40 40" fill="none">
                  {service.icon}
                </svg>
              </span>
              <h3 className="service-card__title">{service.name}</h3>
              <p className="service-card__description">
                {service.description}
              </p>
              <a
                className="service-card__link"
                href="#appointment"
                aria-label={`Learn more about ${service.name}`}
              >
                Learn more
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
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
