import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Details from './pages/Details'
import Favorites from './pages/Favorites'
import Add from './pages/Add'
import NotFound from './pages/NotFound'

function App() {
 

  return (
    <>
     <Routes >
      <Route path='/' element={<MainLayout />}>
      <Route  index element={ <Home />}/>
      <Route path='/bags/:id' element={<Details />} />
      <Route path='/favorites' element={<Favorites />} />
      <Route path='/add' element={<Add />} />
      <Route path='*' element={<NotFound />} />


      </Route>
     </Routes>
    </>
  )
}

export default App
