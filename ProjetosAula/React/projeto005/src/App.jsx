import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {

  function Home() {
    return (
      <div className="App">
        <h1>Home</h1>
      </div>
    );
  }

  function About() {
    return (
      <div className="App">
        <h1>About</h1>
      </div>
    );
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
