import Formater from './pages/Formater'
import Footer from './components/Footer'
import { Analytics } from "@vercel/analytics/react";
import './App.css'

function App() {

  return (
    <>
      <Analytics/>
      <Formater/>
      <Footer/>
    </>
  )
}

export default App
