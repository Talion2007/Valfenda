import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Drivers from './pages/Drivers';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drivers" element={<Drivers />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
