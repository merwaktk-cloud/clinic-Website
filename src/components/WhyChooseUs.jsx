import SectionHeading from './SectionHeading.jsx'
import './WhyChooseUs.css'

const highlights = [
  {
    title: 'Patient-focused approach',
    description:
      "We take the time to understand every patient's needs, concerns, and health goals to provide attentive and personalized care.",
    icon: (
      <>
        <path d="M20 34s-13-7.8-13-17a7 7 0 0 1 13-3.5A7 7 0 0 1 33 17c0 9.2-13 17-13 17Z" />
        <path d="M12 21h5l2-4 3 8 2-4h4" />
      </>
    ),
  },
  {
    title: 'Convenient scheduling',
    description:
      'Book your appointments with ease and find a suitable time that fits your daily routine.',
    icon: (
      <>
        <rect x="6" y="9" width="28" height="25" rx="3" />
        <path d="M13 5v8M27 5v8M6 16h28M13 23h.01M20 23h.01M27 23h.01M13 28h.01M20 28h.01" />
      </>
    ),
  },
  {
    title: 'Modern care setting',
    description:
      'Enjoy a welcoming and comfortable environment where your health, safety, and well-being come first.',
    icon: (
      <>
        <path d="M7 34V11l13-6 13 6v23M4 34h32M15 34V22h10v12" />
        <path d="M13 15h.01M20 15h.01M27 15h.01" />
      </>
    ),
  },
  {
    title: 'Friendly, professional care',
    description:
      'Our approach combines kindness, respect, and professionalism to make every patient feel valued and supported.',
    icon: (
      <>
        <circle cx="20" cy="13" r="7" />
        <path d="M7 35v-3a13 13 0 0 1 26 0v3M16 20h8M20 25v6" />
      </>
    ),
  },
]

function WhyChooseUs() {
  return (
    <section
      className="why-choose-us"
      id="why-choose-us"
      aria-labelledby="why-choose-us-heading"
    >
      <div className="container">
        <header className="why-choose-us__header">
          <p className="why-choose-us__eyebrow">The CarePoint difference</p>
          <SectionHeading id="why-choose-us" title="Care with you in mind" />
          <p className="why-choose-us__introduction">
            Our values shape the kind of experience we hope to offer at every
            visit.
          </p>
        </header>

        <ul className="why-choose-us__grid">
          {highlights.map((highlight, index) => (
            <li className="why-highlight" key={highlight.title}>
              <span className="why-highlight__number" aria-hidden="true">
                0{index + 1}
              </span>
              <span className="why-highlight__icon" aria-hidden="true">
                <svg viewBox="0 0 40 40" fill="none">
                  {highlight.icon}
                </svg>
              </span>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </li>
          ))}
        </ul>

        <p className="why-choose-us__disclaimer">
          We put your wellbeing first by focusing on compassionate service, personalized attention, and a comfortable healthcare experience at every step.
        </p>
      </div>
    </section>
  )
}

export default WhyChooseUs
