import {Route, Routes } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import './App.css'
import StartPage from './StartPage'
import PasswordPage from './PasswordPage'
import PinPage from './PinPage'
import FinishPage from './FinishPage'
import WrongDevicePage from './WrongDevicePage'
import NotFoundPage from './NotFoundPage'
import NotNewUser from './NotNewUser'
import setKeyboard from './keyboard'
import setNumboard from './numboard'

function App({ isNewUser }) {
  const userDevice = navigator.userAgent
  const userConsent = useRef ({
    age: null,
    participantInfo: null,
    termsOfUse: null,
  })
  const userData = useRef ({
    pwd: '',
    pin: ''
  })
  const userLog = useRef([])
  const keyboard = useRef (setKeyboard())
  const numboard = useRef (setNumboard())
  const isMobile = /Android|iPhone/i.test(userDevice)

  useEffect (() => {
    const now = Date.now()
    userLog.current.push({'initialisation': now})
  }, [])

  useEffect (() => {

  })
  
  function handleSubmission (event) {
        event.preventDefault()
          if (userData.current?.pwd.length>0 && userData.current?.pin.length>0) {
            localStorage.setItem('visit', Date.now())
            fetch('http://localhost:3500/submission', {
                method: 'POST',
                headers: {"Content-type" : "application/json"},
                body: JSON.stringify({userData: userData.current, keyboard: keyboard.current, numboard: numboard.current}),
                credentials: 'include'
            })
        } else {
            console.log ('Problems with data!')
        }
  }
  
  return <>
    <Routes>
      <Route 
        path='/' 
        element={(isMobile && isNewUser) ? 
          <StartPage currentConsent={userConsent} userLog={userLog}/> : 
          (isNewUser ? 
            <WrongDevicePage /> :
            <NotNewUser />
          )}
      />
      <Route path='/passcheck' element = {<PasswordPage userData={userData} keyboard={keyboard} userLog={userLog}/>}/>
      <Route path='/pincheck' element = {<PinPage userData={userData} keyboard={numboard} submitData={handleSubmission} userLog={userLog}/>}/>
      <Route path='/complete' element = {<FinishPage userLog={userLog}/>}/>
      <Route path='*' element= {<NotFoundPage />} />
      {/* <Route path='/:user' element= {<PageLayout user={user} />} />
      <Route path='*' element= {<NotFound />} />  THIS SHOULD BE DONE*/}
    </Routes>
  </>
}

export default App
