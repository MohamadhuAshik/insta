import React from 'react'
import Navbar2 from './Navbar2'
import Messagefield from './Messagefield'
import imageSrc1 from "./Images/press.jpg";
import imageSrc2 from "./Images/Siva.jpg";
import imageSrc3 from "./Images/Bullet.jpg";
import imageSrc4 from "./Images/Yogi.jpg";
import imageSrc5 from "./Images/Raj.jpg";
import yogi from "./Images/YogiInsta.jpg";
import "../Components/Messages.css";
import "../Components/Notification.css";

const Notification = () => {
  return (
    <div className='row'>
      <div className='col-sm-1'>
      <Navbar2/>
      </div>
      <div className='col-sm-3'>
      <div className="suggestions__container">
        <div className="suggestions__header notification">
          <div><p><b>Notification</b></p></div>
          <br></br>
          <p>ThisWeek</p>
          
        </div>
        <div className="suggestions__body notificationbody">
        <div className="suggestions__friends notifyinfo">
            <div style={{ display: "flex" }}>
              <img alt='...' src={imageSrc1} width="10px" height="10px"  className="rounded-circle suggestions__image" />
              <div className="suggestions__username">Prasanna...</div>
            </div>
           <img className='yogiimg' src={yogi} width="30px" height="30px" alt='...'></img>
          </div>
          <div className="suggestions__friends notifyinfo">
            <div style={{ display: "flex" }}>
              <img alt="..." src={imageSrc1} width="10px" height="10px" className="rounded-circle suggestions__image" />
              <div className="suggestions__username">Prasanna</div>
            </div>
            <button className="btn btn-primary notifybutton">Follow</button>
          </div>
          <div className="suggestions__friends notifyinfo">
            <div style={{ display: "flex" }}>
              <img alt='...' src={imageSrc2} width="10px" height="10px" className="rounded-circle suggestions__image" />
              <div className="suggestions__username">Siva</div>
            </div>
            <button className="btn btn-primary notifybutton">Follow</button>
          </div>
          <div className="suggestions__friends notifyinfo">
            <div style={{ display: "flex" }}>
              <img alt='...' src={imageSrc3} width="10px" height="10px" className="rounded-circle suggestions__image" />
              <div className="suggestions__username">Bullet</div>
            </div>
            <button className="btn btn-primary notifybutton">Follow</button>
          </div>
          <div className="suggestions__friends notifyinfo">
            <div style={{ display: "flex" }}>
              <img alt="..." src={imageSrc4} width="10px" height="10px" className="rounded-circle suggestions__image" />
              <div className="suggestions__username">Kundan</div>
            </div>
            <button className="btn btn-primary notifybutton">Follow</button>
          </div>
          <div className="suggestions__friends notifyinfo">
            <div style={{ display: "flex" }}>
              <img alt='...' src={imageSrc5} className="rounded-circle suggestions__image" />
              <div className="suggestions__username">Raj</div>
            </div>
            <button className="btn btn-primary notifybutton">Follow</button>
          </div>
          <div className="suggestions__friends notifyinfo">
            <div style={{ display: "flex" }}>
              <img alt='...' src={imageSrc5} width="10px" height="10px" className="rounded-circle suggestions__image" />
              <div className="suggestions__username">Raj</div>
            </div>
            <button className="btn btn-primary notifybutton">Follow</button>
          </div>
          <div className="suggestions__friends notifyinfo">
            <div style={{ display: "flex" }}>
              <img alt='...' src={imageSrc5} width="10px" height="10px"  className="rounded-circle suggestions__image" />
              <div className="suggestions__username">Raj</div>
            </div>
            <button className="btn btn-primary notifybutton">Follow</button>
          </div>
          <div className="suggestions__friends notifyinfo">
            <div style={{ display: "flex" }}>
              <img alt='...' src={imageSrc4} width="10px" height="10px"  className="rounded-circle suggestions__image" />
              <div className="suggestions__username">Raj</div>
            </div>
            <button className="btn btn-primary notifybutton">Follow</button>
          </div>
          <div className="suggestions__friends notifyinfo">
            <div style={{ display: "flex" }}>
              <img alt='...' src={imageSrc3} width="10px" height="10px"  className="rounded-circle suggestions__image" />
              <div className="suggestions__username">Raj</div>
            </div>
            <button className="btn btn-primary notifybutton">Follow</button>
          </div>
          <div className="suggestions__friends notifyinfo">
            <div style={{ display: "flex" }}>
              <img alt='...' src={imageSrc1} width="10px" height="10px"  className="rounded-circle suggestions__image" />
              <div className="suggestions__username">Raj</div>
            </div>
            <button className="btn btn-primary notifybutton">Follow</button>
          </div>
          
        </div>
      </div>
      </div>
      <div className='col-sm-8'>
        <Messagefield/>
      </div>
      </div>
  )
}

export default Notification