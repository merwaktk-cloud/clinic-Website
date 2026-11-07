import About from './components/About.jsx'
import AppointmentForm from './components/AppointmentForm.jsx'
import Contact from './components/Contact.jsx'
import Doctors from './components/Doctors.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Reviews from './components/Reviews.jsx'
import Services from './components/Services.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex="-1">
        <Hero />
        <About />
        <Services />
        <Doctors />
        <WhyChooseUs />
        <AppointmentForm />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
