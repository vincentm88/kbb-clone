import { Navigationbar } from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from './components/home/home';

import './App.css'
import { Footer } from './components/footer/footer';

function App() {

  return (
    <>
    <BrowserRouter>
      <Navigationbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
