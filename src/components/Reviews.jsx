import SectionHeading from './SectionHeading.jsx'
import './Reviews.css'

const sampleTestimonials = [
  {
    initials: 'JD',
    quote:
      'The team took time to listen and made each step feel easy to understand.',
    label: 'Patient A',
  },
  {
    initials: 'SM',
    quote:
      'A welcoming space and a thoughtful conversation helped me feel at ease.',
    label: 'Patient B',
  },
  {
    initials: 'AL',
    quote:
      'I appreciated having my questions answered in a clear and caring way.',
    label: 'Patient C',
  },
]

function Reviews() {
  return (
    <section
      className="reviews-section"
      id="reviews"
      aria-labelledby="reviews-heading"
    >
      <div className="container">
        <header className="reviews-section__header">
          <p className="reviews-section__eyebrow">A welcoming experience</p>
          <SectionHeading id="reviews" title="Words that reflect the care we value" />
          <p className="reviews-section__disclaimer">
           We believe exceptional healthcare goes beyond treatment. It's about listening, understanding, and making every patient feel valued, respected, and cared for.
          </p>
        </header>

        <div className="reviews-grid">
          {sampleTestimonials.map((testimonial) => (
            <article className="review-card" key={testimonial.label}>
              <span className="review-card__sample-label">
                Testimonial
              </span>
              <blockquote className="review-card__quote">
                “{testimonial.quote}”
              </blockquote>
              <div className="review-card__author">
                <span className="review-card__avatar" aria-hidden="true">
                  {testimonial.initials}
                </span>
                <span className="review-card__author-label">
                  {testimonial.label}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
