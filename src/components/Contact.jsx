import { useState } from 'react'
import SectionHeading from './SectionHeading.jsx'
import './Contact.css'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <header className="contact-section__header">
          <p className="contact-section__eyebrow">We’re here to help</p>
          <SectionHeading id="contact" title="Get in touch" />
          <p>Reach out to our team for appointments, enquiries, or assistance with your healthcare needs.</p>
        </header>

        <div className="contact-section__layout">
          <div className="contact-details">
            <section className="contact-details__group" aria-labelledby="visit-heading">
              <h3 id="visit-heading">Visit us</h3>
              <p>24 Wellness Avenue, Rosewood District</p>
              
              <p>Peshawar, Khyber Pakhtunkhwa, 25000</p>
            </section>
            <section className="contact-details__group" aria-labelledby="reach-heading">
              <h3 id="reach-heading">Reach us</h3>
              <p>
                <span>Phone:</span> +92 300 123 4567
              </p>
              <p>
                <span>Email:</span> hello@carepointclinic.example
              </p>
            </section>
            <section className="contact-details__group" aria-labelledby="hours-heading">
              <h3 id="hours-heading">Opening hours </h3>
              <dl className="contact-hours">
                <div><dt>Monday – Friday</dt><dd>9:00 am – 5:00 pm</dd></div>
                <div><dt>Saturday</dt><dd>10:00 am – 2:00 pm</dd></div>
                <div><dt>Sunday</dt><dd>Closed</dd></div>
              </dl>
            </section>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send an inquiry message</h3>
            <p className="contact-form__notice">
             Have a question or need more information? Send us your inquiry, and our team will be happy to assist you.
            </p>
            <div className="contact-form__field">
              <label htmlFor="contact-name">Name </label>
              <input
                autoComplete="off"
                id="contact-name"
                name="name"
                type="text"
                placeholder="Your name"
                required
              />
            </div>
            <div className="contact-form__field">
              <label htmlFor="contact-email">Email </label>
              <input
                autoComplete="off"
                id="contact-email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div className="contact-form__field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                autoComplete="off"
                id="contact-message"
                name="message"
                rows="4"
                placeholder="Describe your inquiry..."
                required
              />
            </div>
            <button className="button button--primary" type="submit">
              Send inquiry message
            </button>
            {submitted && (
              <p className="contact-form__confirmation" role="status">
                Inquiry complete. Your message was sent.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
