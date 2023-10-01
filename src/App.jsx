import { useState } from 'react'
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar';
import MainSection from './Components/MainSection';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <MainSection/>
    </>
  )
}

export default App
