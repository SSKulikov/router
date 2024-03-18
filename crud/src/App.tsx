import { Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage'
import { Created } from './pages/Created'
import { ViewId } from './pages/ViewId'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/posts/new' element={<Created />} />
        <Route path='/posts/:id' element={<ViewId />} />
      </Routes> 
    </>
  )
}

export default App