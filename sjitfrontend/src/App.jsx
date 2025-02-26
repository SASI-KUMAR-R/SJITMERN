import Home from './Components/FunctionComponents/Home'
import About from './Components/FunctionComponents/About'
import Image from './Components/FunctionComponents/Image'
import Signup from './Components/FunctionComponents/SignUp'
import UseEffectComponent from './Components/FunctionComponents/Hooks/useEffect'
import Navbar from './Components/FunctionComponents/Navbar'
import Gallery from './Components/FunctionComponents/Gallery'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/FunctionComponents/Login'
import UseEffectAPI from './Components/FunctionComponents/Hooks/useEffectAPI'
import UseRef from './Components/FunctionComponents/Hooks/useRef'
import UseMemo from './Components/FunctionComponents/Hooks/UseMemo'
import UseCallback from './Components/FunctionComponents/Hooks/UseCallback'
import UseMemoize from './Components/FunctionComponents/Hooks/useMemoize'
import HoC from './Components/FunctionComponents/HoC/HoC'
import Memo from './Components/FunctionComponents/Memoization/Memo'
import LazyLoadingAndSusepense from './Components/FunctionComponents/Memoization/LazyLoadingAndSuspense'
// import StudentResults from './Components/FunctionComponents/ContextAPI/StudentResults'
import CoE from './Components/FunctionComponents/ContextAPI/CoE'
function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home properties="OKAY" sjit="BYE" />} />
          <Route path='/about' element={<About />} />
          <Route path='/img' element={<Image />} />
          <Route path='/use-effect' element={<UseEffectComponent />} />
          <Route path='/Gallery' element={<Gallery />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/use-effect-api' element={<UseEffectAPI />} />
          <Route path='/hoc' element={<HoC />} />
          <Route path='/use-ref' element={<UseRef />} />
          <Route path='/use-memo' element={<UseMemo />} />
          <Route path='/result' element={<CoE/>} />
          <Route path='/lazy' element={<LazyLoadingAndSusepense />} />
          <Route path='/use-callback' element={<UseCallback />} />
          <Route path='/use-memoize' element={<UseMemoize />} />
          <Route path='/example' element={<Memo />} />
          {/* <Route path='/example2' element={<NumberFile />} /> */}
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
