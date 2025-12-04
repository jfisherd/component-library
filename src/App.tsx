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
        message='my alert box message'
        onClose={() => alert('an alert')}
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

      <h2>Product Display</h2>
      <ProductDisplay
        product={{ id: 'A', name: 'Apple', price: 2, description: 'A pie apple', inStock: true }}
        showDescription={true}
        showStockStatus={true}
      ></ProductDisplay>
      <br></br>
    <ProductDisplay
      product={{ id:'B', name: 'Banana', price: 0.5, description: 'Only suitable for bread', inStock: true}}
      showDescription={false}
      // showStockStatus={false}
      />
    </>
  )
}

export default App
