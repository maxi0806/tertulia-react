import './styles/style.css'
import './styles/menu.css'
import './styles/contacto.css'

import Header from './components/Header'
import Menu from './components/Menu'
import Contacto from './components/Contacto'
import Videos from './components/Videos'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Contacto />
      <Videos />
      <Footer />
    </>
  )
}

export default App

