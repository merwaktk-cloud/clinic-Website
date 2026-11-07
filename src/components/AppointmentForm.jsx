import { useState } from 'react'
import SectionHeading from './SectionHeading.jsx'
import './AppointmentForm.css'

const initialFormValues = {
  patientName: '',
  email: '',
  phone: '',
  department: '',
  doctor: '',
  date: '',
  time: '',
  message: '',
}

const departments = [
  'General Medicine',
  'Cardiology',
  'Dermatology',
  'Pediatrics',
  'Dental Care',
  'Orthopedics',
]

const demoDoctors = [
  'Dr. Maya Bennett',
  'Dr. Elias Morgan',
  'Dr. Lena Patel',
  'Dr. Adrian Brooks',
]

function getLocalDateString(date = new Date()) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

function validateForm(values) {
  const errors = {}
  const requiredFields = {
    patientName: 'Please enter a name for this demo.',
    email: 'Please enter an email address.',
    phone: 'Please enter a phone number.',
    department: 'Please select a department.',
    doctor: 'Please select a preferred doctor.',
    date: 'Please select an appointment date.',
    time: 'Please select a preferred time.',
  }

  Object.entries(requiredFields).forEach(([field, message]) => {
    if (!values[field].trim()) {
      errors[field] = message
    }
  })

  if (
    values.email &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())
  ) {
    errors.email = 'Please enter a valid email address.'
  }

  const phone = values.phone.trim()
  const phoneDigits = phone.replace(/\D/g, '')
  if (
    phone &&
    (!/^\+?[\d\s().-]+$/.test(phone) ||
      phoneDigits.length < 7 ||
      phoneDigits.length > 15)
  ) {
    errors.phone = 'Please enter a valid phone number.'
  }

  if (values.date && values.date < getLocalDateString()) {
    errors.date = 'Please choose today or a future date.'
  }

  return errors
}

function AppointmentForm() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target

    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }))
    setErrors((currentErrors) => {
      if (!currentErrors[name]) {
        return currentErrors
      }

      const nextErrors = { ...currentErrors }
      delete nextErrors[name]
      return nextErrors
    })
    setSubmitted(false)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validateForm(formValues)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false)
      return
    }

    setFormValues(initialFormValues)
    setErrors({})
    setSubmitted(true)
  }

  function renderError(field) {
    return errors[field] ? (
      <span className="appointment-form__error" id={`${field}-error`}>
        {errors[field]}
      </span>
    ) : null
  }

  return (
    <section
      className="appointment-section"
      id="appointment"
      aria-labelledby="appointment-heading"
    >
      <div className="container appointment-section__layout">
        <div className="appointment-section__intro">
          <p className="appointment-section__eyebrow">Take the next step</p>
          <SectionHeading id="appointment" title="Request an appointment" />
          <p>
            Take the first step towards better health. Fill out the form below with your preferred appointment details.
          </p>
          <p className="appointment-section__notice">
            <strong>Schedule Your Visit:</strong> Your health deserves the best care. 
            Share your appointment preferences below, and our team will be happy to assist you.
          </p>
          {submitted && (
            <p className="appointment-form__success" role="status">
              Request complete.
            </p>
          )}
        </div>

        <form
          className="appointment-form"
          onSubmit={handleSubmit}
          noValidate
          aria-describedby="appointment-demo-notice"
        >
          <p className="appointment-form__demo" id="appointment-demo-notice">
            Please add your details.
          </p>

          <div className="appointment-form__grid">
            <div className="appointment-form__field">
              <label htmlFor="patientName">Patient name</label>
              <input
                autoComplete="off"
                id="patientName"
                name="patientName"
                type="text"
                value={formValues.patientName}
                onChange={handleChange}
                aria-invalid={Boolean(errors.patientName)}
                aria-describedby={
                  errors.patientName ? 'patientName-error' : undefined
                }
                required
              />
              {renderError('patientName')}
            </div>

            <div className="appointment-form__field">
              <label htmlFor="email">Email address</label>
              <input
                autoComplete="off"
                id="email"
                name="email"
                type="email"
                value={formValues.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
                required
              />
              {renderError('email')}
            </div>

            <div className="appointment-form__field">
              <label htmlFor="phone">Phone number</label>
              <input
                autoComplete="off"
                id="phone"
                name="phone"
                type="tel"
                value={formValues.phone}
                onChange={handleChange}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                required
              />
              {renderError('phone')}
            </div>

            <div className="appointment-form__field">
              <label htmlFor="department">Medical department</label>
              <select
                id="department"
                name="department"
                value={formValues.department}
                onChange={handleChange}
                aria-invalid={Boolean(errors.department)}
                aria-describedby={
                  errors.department ? 'department-error' : undefined
                }
                required
              >
                <option value="">Select a department</option>
                {departments.map((department) => (
                  <option key={department} value={department}>
                    {department}
                  </option>
                ))}
              </select>
              {renderError('department')}
            </div>

            <div className="appointment-form__field">
              <label htmlFor="doctor">Preferred doctor</label>
              <select
                id="doctor"
                name="doctor"
                value={formValues.doctor}
                onChange={handleChange}
                aria-invalid={Boolean(errors.doctor)}
                aria-describedby={errors.doctor ? 'doctor-error' : undefined}
                required
              >
                <option value="">Select a doctor</option>
                {demoDoctors.map((doctor) => (
                  <option key={doctor} value={doctor}>
                    {doctor} 
                  </option>
                ))}
              </select>
              {renderError('doctor')}
            </div>

            <div className="appointment-form__field">
              <label htmlFor="date">Appointment date</label>
              <input
                id="date"
                name="date"
                type="date"
                min={getLocalDateString()}
                value={formValues.date}
                onChange={handleChange}
                aria-invalid={Boolean(errors.date)}
                aria-describedby={errors.date ? 'date-error' : undefined}
                required
              />
              {renderError('date')}
            </div>

            <div className="appointment-form__field">
              <label htmlFor="time">Preferred time</label>
              <input
                id="time"
                name="time"
                type="time"
                value={formValues.time}
                onChange={handleChange}
                aria-invalid={Boolean(errors.time)}
                aria-describedby={errors.time ? 'time-error' : undefined}
                required
              />
              {renderError('time')}
            </div>

            <div className="appointment-form__field appointment-form__field--full">
              <label htmlFor="message">Additional message (optional)</label>
              <textarea
                autoComplete="off"
                id="message"
                name="message"
                rows="4"
                value={formValues.message}
                onChange={handleChange}
                aria-describedby="message-hint"
              />
             
            </div>
          </div>

          {Object.keys(errors).length > 0 && (
            <p className="appointment-form__error-summary" role="alert">
              Please correct the highlighted fields before continuing.
            </p>
          )}

          <button className="button button--primary" type="submit">
            Submit request
          </button>
        </form>
      </div>
    </section>
  )
}

export default AppointmentForm
