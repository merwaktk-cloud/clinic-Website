function DoctorProfile({ doctor, expanded, onToggle }) {
  const profileId = `doctor-profile-${doctor.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')}`

  return (
    <div className="doctor-card__profile">
      <button
        className="doctor-card__profile-toggle"
        type="button"
        aria-expanded={expanded}
        aria-controls={profileId}
        onClick={onToggle}
      >
        {expanded ? 'Show Less ↑' : 'View Profile ↓'}
      </button>
      <div
        className={`doctor-card__profile-panel${expanded ? ' is-expanded' : ''}`}
        id={profileId}
        aria-hidden={!expanded}
        inert={!expanded}
      >
        {expanded && (
          <div className="doctor-card__profile-inner">
            <div className="doctor-card__profile-section">
              <h4>About</h4>
              <p>{doctor.biography}</p>
            </div>
            <div className="doctor-card__profile-section">
              <h4>Areas of focus</h4>
              <ul>
                {doctor.areasOfFocus.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </div>
            <div className="doctor-card__profile-section">
              <h4>Consultation approach</h4>
              <p>{doctor.consultationApproach}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default DoctorProfile
