import { Routes, Route } from 'react-router'
import PageHome from './components/PageHome'
import { PageLogin } from './components/PageLogin'

function App () {
  return (
    <Routes>
      <Route path='/' element={<PageHome />}/>
      <Route path='/login' element={<PageLogin />}/>
    </Routes>
  )
}

export default App
