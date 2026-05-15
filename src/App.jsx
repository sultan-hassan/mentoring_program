import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Problem from './components/sections/Problem'
import HowItWorks from './components/sections/HowItWorks'
import ApplyMentor from './components/sections/ApplyMentor'
import MentorPlaceholders from './components/sections/MentorPlaceholders'
import ApplyStudent from './components/sections/ApplyStudent'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-night-950">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <ApplyMentor />
        <MentorPlaceholders />
        <ApplyStudent />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
