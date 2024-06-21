import React from 'react'
import Header from './commponent/Header'
import Body from './commponent/Body'
import Aside from './commponent/sideMenu/Aside'


function App() {
  return (
    <div>
      <Header />
      <div className='container containerSection' >
        <div className='bodySize'>
          <Body />
        </div>
        <div className='asideSize' >
          <Aside />
        </div>
      </div>


    </div>
  )
}

export default App
