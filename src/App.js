import React from 'react'

import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './routes/Home';
import Product from './routes/Product';
import Contact from './routes/Contact';
import Serv from './routes/Serv';

function App() {
  return (
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home />} />
      < Route path="Product" element={<Product />} />
      < Route path="Serv" element={<Serv />} />
      < Route path="Contact" element={<Contact />} />
     </Routes>
   </BrowserRouter>
  )
}

export default App