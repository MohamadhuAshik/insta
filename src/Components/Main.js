import React from 'react'
import Story from './Story'
import Info from './Info'
import Suggestion from './Suggestion'
import '../Components/Main.css'
import Navbar from './Navbar'
import MainContentPage from './MainContentPage'




const Main = () => {
  
  return (
    <div className='row'>
   
      <div  className='col-sm-3'>
        <Navbar/>
      </div>
      <div className='col-sm-6  maincontent__container'>
        <div>
          <Story/>
          
          <br></br>
          <MainContentPage/>
        </div>
      </div>
      <div className='col-sm-3'>
        <Info/>
        <Suggestion/>
      </div>
      
    </div>
  )
}

export default Main

