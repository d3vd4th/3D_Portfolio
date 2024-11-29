import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components'

const App = () => {
  return (
    <div >
      <BrowserRouter>
        <div className="relative z-0  bg-primary">
          <div className="relative z-0">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          {/* <StarsCanvas /> */}
          </div>
          <div className="relative z-0">
          <Experience />
          <Tech />
          <StarsCanvas />
         </div>
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App