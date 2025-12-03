// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import { AlertBox } from './components/AlertBox/AlertBox'

function App() {

  return (
    <>
      <AlertBox
        type='success'
        message='my alert box message'
        onClose={()=>alert('an alert')}
      >

      </AlertBox>
    </>
  )
}

export default App
