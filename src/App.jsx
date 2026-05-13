import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Problem from './components/sections/Problem'
import HowItWorks from './components/sections/HowItWorks'
import MentorshipAreas from './components/sections/MentorshipAreas'
import Testimonials from './components/sections/Testimonials'
import Resources from './components/sections/Resources'
import CommunityImpact from './components/sections/CommunityImpact'
import Events from './components/sections/Events'
import MentorSpotlight from './components/sections/MentorSpotlight'
import ApplyMentor from './components/sections/ApplyMentor'
import ApplyStudent from './components/sections/ApplyStudent'
import FAQ from './components/sections/FAQ'
import CallToAction from './components/sections/CallToAction'

export default function App() {
  return (
    <div className="min-h-screen bg-night-950">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <MentorshipAreas />
        <Testimonials />
        <Resources />
        <CommunityImpact />
        <Events />
        <MentorSpotlight />
        <ApplyMentor />
        <ApplyStudent />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
