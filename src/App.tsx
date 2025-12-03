// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import { AlertBox } from './components/AlertBox/AlertBox'
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard'

function App() {

  return (
    <>
    <h2>Alert Box</h2>
      <AlertBox
        type='success'
        message='my alert box message'
        onClose={()=>alert('an alert')}
      ></AlertBox>
      <br></br>
      <UserProfileCard
        user={{id:'123', name: 'myName', email: 'address@email.com', role: 'somebody'}}
        showEmail={false}
        showRole={true}
      ></UserProfileCard>
    </>
  )
}

export default App
