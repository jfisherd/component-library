// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import { AlertBox } from './components/AlertBox/AlertBox'
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard'
import { ProductDisplay } from './components/ProductDisplay/ProductDisplay'

function App() {

  return (
    <>
      <h2>Alert Box</h2>
      <AlertBox
        type='success'
        message='Process succeeded.'
      ></AlertBox>
      <br></br>

      <AlertBox
        type='error'
        message='An error has occurred'
      ></AlertBox>
      <br></br>

      <AlertBox
        type='apocalypse'
        message='The apocalypse has occurred'
      ></AlertBox>
      <br></br>

      <h2>User Profile Card</h2>

      <UserProfileCard
        user={{ id: '123', name: 'Public_Person', email: 'address@email.com', role: 'somebody' }}
        showEmail={true}
        showRole={true}
      ></UserProfileCard>
      <br></br>

      <UserProfileCard
        user={{ id: '456', name: 'Private_Person', email: 'shhhhh@email.com', role: 'd̵̨̛̛͉̹̫͖̫͉͍͎̝̤̦̺̹̱̭̄̃̅̏̓̍͌̆́͝ế̴̠̟̭̤̯̎̊͋̊͆͂̅̈́̈́̆̕̚͝͝m̷̢̧̡̦̾̽̈́̋̏̅́̌̅͌̕͘͘ó̴̹̠͓̜͕͛̍͛̍̕ñ̵̤̦͊̂́͂͗͊̿̄̋̕͝͝͠' }}
        showEmail={false}
        showRole={false}
      ></UserProfileCard>
      <br></br>

      <h2>Product Display</h2>
      <ProductDisplay
        product={{ id: 'A', name: 'Apple', price: Math.round((Math.PI * 100)) / 100, description: 'A pie apple', inStock: false }}
        showDescription={true}
        showStockStatus={true}
      ></ProductDisplay> {/* optional closing tag, no relevant children in this lab */}
      <br></br>

      <ProductDisplay
        product={{ id: 'B', name: 'Banana', price: 0.1, description: 'Only suitable for bread', inStock: true }}
        showDescription={false}
        showStockStatus={true}
      /> {/* no optional closing tag, no relevant children in this lab */}
      <br />

      <ProductDisplay
        product={{ id: 'C', name: 'Carrot', price: 100, description: 'Restores vision to the blind', inStock: true }}
      /> {/* optional properties not included here */}
    </>
  )
}

export default App
