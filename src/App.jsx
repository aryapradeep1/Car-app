import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddCars from './components/AddCars'
import SearchCar from './components/SearchCar'
import DeleteCar from './components/DeleteCar'
import ViewCar from './components/ViewCar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddCars/>}/>
        <Route path='/search' element={<SearchCar/>}/>
        <Route path='/delete' element={<DeleteCar/>}/>
        <Route path='/view' element={<ViewCar/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
