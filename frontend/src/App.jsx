import './App.css'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Navbar from './components/Utilities/Navbar'
import Home from './components/Home/Home'
import Signup from './components/Authentication/Signup'
import About from './components/Home/About'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>}>
            <Route index element={<Home/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/about' element={<About/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
