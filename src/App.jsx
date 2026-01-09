import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './SideComponents/ScrollToTop'
import './App.css'
import Home from "./Components/Home"
import ContactUs from "./Pages/Contactus"
import Header2 from "../src/Layouts/Header2"
import Aboutus from './Pages/Aboutus'
import Reservation from './Pages/Reservation'
import TermsandCondition from './Pages/T&C'
import PrivacyPolicy from './Pages/Policy'

function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/header2' element={<Header2 />} />
          <Route path='/about-us' element={<Aboutus />} />
          <Route path='/reservation' element={<Reservation />} />
          <Route path='/terms&condition' element={<TermsandCondition />} />
          <Route path='/privacypolicy' element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
