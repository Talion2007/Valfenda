import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Drivers from './pages/Drivers';
import Sprints from './pages/Sprints';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/sprints" element={<Sprints />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
