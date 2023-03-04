import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Accueil from './pages/Accueil'
import Apropos from './pages/Apropos'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Planning from './pages/Planning'
import Stream from './pages/Stream'

const App = () => {
  return (
    <div className='h-full'>
      <Menu />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/stream" element={<Stream />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
)
