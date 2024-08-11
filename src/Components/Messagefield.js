import React from 'react'
import instamess from "./Images/instamess.jpg"

import "../Components/Messages.css";
const Messagefield = () => {
  return (
    <div>
         <div className="messagefield">
          <div className="insidemessage">
         <img src={instamess} width="200px" height="200px" alt="..."></img>
          </div><br></br>
          <div><button className="btn">Send Your Message</button></div>
          </div>
    </div>
  )
}

export default Messagefield