import { Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './components/HomePage'
import { DriftPage } from './components/DriftPage'
import { ForzaPage } from './components/ForzaPage'
import { TimeAttackPage } from './components/TimeAttackPage'
import { Menu } from './components/Menu'

function App() {

  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/drift' element={<DriftPage />} />
        <Route path='/forza' element={<ForzaPage />} />
        <Route path='/timeattack' element={<TimeAttackPage />}/>
      </Routes>
    </>
  )
}

export default App