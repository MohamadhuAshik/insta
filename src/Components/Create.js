import React from 'react'
import Navbar from './Navbar'
import createfile from './Images/createfile.png'
import '../Components/Create.css'

//Instagram Create Component

const Create = () => {
  return (
    <div className='row'>
      <div className='col-sm-3'>
      <Navbar/>
      </div>
      <div className='col-sm-5 ms-5'>
         <div className='card text-center'>
          <div className='card-header'>
            <p><b>Create New Post</b></p>
            </div> 
            <div className='card-body uploadfile my-5'>
              <img width="50%" height="50%" src={createfile} alt='...'/>
              <p>Drag photos and videos here</p>
                <button className='btn btn-primary upload'>Select From Computer</button>
            </div>
         </div>
      </div>
      <div className='col-sm-4'>

      </div>
     
      </div>
  )
}

export default Create