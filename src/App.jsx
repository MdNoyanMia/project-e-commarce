
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Componnets/pages/Home'
import Rootlayout from './Componnets/layouts/Rootlayout'
import About from './Componnets/pages/About'
import Shop from './Componnets/pages/Shop'
import Contact from './Componnets/pages/Contact'
import Journal from './Componnets/pages/Journal'
import Productsss from './Componnets/layouts/Productsss'

function App() {


  return (

    <>
      <Routes>
        <Route path='/' element={<Rootlayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='shop' element={<Shop/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='journal' element={<Journal/>} />
          <Route path='Productsss' element={<Productsss/>} />
        
        </Route>

      </Routes>

    </>
  )
}

export default App
