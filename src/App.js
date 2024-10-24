import React from 'react'
import Header from './layout/Header'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Dynamic from './pages/Dynamic'
import CreateCondexty from './context/CreateCondexty'
import Cart from './pages/Cart'
import Ref from './pages/Ref'

const App = () => {
  return (
    <BrowserRouter>
  <CreateCondexty>
    <Routes>
        <Route path='/' element={<Header/>}>
           <Route index element={<Home/>} />
         
           {/* <Route path='about' element={<About/>} />
          
           <Route path='about/:id' element={<Dynamic/>} />
           <Route path='cart' element={<Cart/>} />
           <Route path='services' element={<Services/>} />
           <Route path='ref' element={<Ref/>} />
           <Route path='*' element={<NotFound/>} /> */}
        
        </Route>
    </Routes>
    </CreateCondexty>
    </BrowserRouter>
  )
}

export default App