import './App.css'

import Characters from './components/characters/Characters'
import CharacterDetail from './components/CharacterDetail/CharacterDetail'
import Landing from './components/Landing/Landing'

import { Routes, Route } from 'react-router-dom'

function App () {
  return (
    <div className='App'>
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route exact path='/home' element={<Characters/>} />
      <Route path='/detail/:id' element={<CharacterDetail/>} />
    </Routes>
    </div>
  )
}



export default App

