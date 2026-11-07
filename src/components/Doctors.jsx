import { useState } from 'react'
import SectionHeading from './SectionHeading.jsx'
import DoctorProfile from './DoctorProfile.jsx'
import './Doctors.css'

const doctors = [
  {
    name: 'Dr. Maya Bennett',
    specialty: 'General Medicine',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=85',
    introduction:
      "Dedicated to understanding each patient's needs and providing thoughtful guidance for better everyday health and wellness.",
    biography:
      'Dr. Bennett provides primary care for adults and families, with an emphasis on prevention and long-term wellbeing.',
    areasOfFocus: ['Preventive care', 'Everyday health concerns', 'Wellness planning'],
    consultationApproach:
      'She takes time to understand each patient’s goals and builds practical care plans together.',
  },
  {
    name: 'Dr. Elias Morgan',
    specialty: 'Cardiology',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=85',
    introduction:
      'Focused on heart health, preventive care, and helping patients make informed decisions for a healthier life.',
    biography:
      'Dr. Morgan supports patients in understanding their heart health and navigating cardiovascular care.',
    areasOfFocus: ['Heart health', 'Blood pressure management', 'Cardiovascular prevention'],
    consultationApproach:
      'He explains options clearly and works with patients on achievable steps to support heart health.',
  },
  {
    name: 'Dr. Lena Patel',
    specialty: 'Dermatology',
    image:
      'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=85',
    introduction:
      'Passionate about skin health, offering personalized guidance to help patients feel confident and comfortable in their skin.',
    biography:
      'Dr. Patel cares for a range of skin concerns and helps patients make informed choices about their skin health.',
    areasOfFocus: ['Skin health', 'Acne care', 'Rashes and common skin conditions'],
    consultationApproach:
      'She listens closely to each concern and tailors recommendations to the patient’s needs and routine.',
  },
  {
    name: 'Dr. Adrian Brooks',
    specialty: 'Pediatrics',
    image:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=85',
    introduction:
      "Committed to supporting children's health and development while making every visit a comfortable experience for families.",
    biography:
      'Dr. Brooks works with children and families through the different stages of growth and development.',
    areasOfFocus: ['Child wellness visits', 'Growth and development', 'Common childhood illnesses'],
    consultationApproach:
      'He creates a calm, family-friendly visit and makes space for caregivers’ questions and concerns.',
  },
]

function Doctors() {
  const [expandedDoctors, setExpandedDoctors] = useState(() => new Set())

  function toggleDoctorProfile(doctorName) {
    setExpandedDoctors((currentDoctors) => {
      const nextDoctors = new Set(currentDoctors)
      if (nextDoctors.has(doctorName)) {
        nextDoctors.delete(doctorName)
      } else {
        nextDoctors.add(doctorName)
      }
      return nextDoctors
    })
  }

  return (
    <section
      className="doctors-section"
      id="doctors"
      aria-labelledby="doctors-heading"
    >
      <div className="container">
        <header className="doctors-section__header">
          <p className="doctors-section__eyebrow">People who care</p>
          <SectionHeading id="doctors" title="Meet our doctors" />
          <p className="doctors-section__disclaimer">
            Our team is dedicated to making every patient feel heard, valued, and cared for.
          </p>
        </header>

        <div className="doctors-grid">
          {doctors.map((doctor) => (
            <article className="doctor-card" key={doctor.name}>
              <div className="doctor-card__portrait">
                <img
                  src={doctor.image}
                  alt="Illustrative portrait of a healthcare professional"
                  loading="lazy"
                />
              </div>
              <div className="doctor-card__content">
                <p className="doctor-card__specialty">{doctor.specialty}</p>
                <h3 className="doctor-card__name">{doctor.name}</h3>
                <p className="doctor-card__introduction">
                  {doctor.introduction}
                </p>
                <DoctorProfile
                  doctor={doctor}
                  expanded={expandedDoctors.has(doctor.name)}
                  onToggle={() => toggleDoctorProfile(doctor.name)}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Doctors
