import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import GalleryPage from './pages/GalleryPage'


function App() {
  

  return (
    <>
      <h1>Meme generator</h1>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/gallery' element={<GalleryPage />} />
      </Routes>
    </>
  )
}

export default App
