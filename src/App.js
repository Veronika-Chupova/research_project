import {Route, Routes} from 'react-router-dom'
import './App.css'
import Start from './Start'
import Pwd from './Pwd'
import Pin from './Pin'
import Finish from './Finish'

function App() {
  
  return <>
    <Routes>
      <Route path='/' element={<Start />}/>
      <Route path='/passcheck' element = {<Pwd />}/>
      <Route path='/pincheck' element = {<Pin />}/>
      <Route path='/complete' element = {<Finish />}/>
      {/* <Route path='/:user' element= {<PageLayout user={user} />} />
      <Route path='*' element= {<NotFound />} /> */}
    </Routes>
  </>
}

export default App
