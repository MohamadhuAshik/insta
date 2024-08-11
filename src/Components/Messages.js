import React from "react";
import "../Components/Messages.css";
import imageSrc1 from "./Images/press.jpg";
import imageSrc2 from "./Images/Siva.jpg";
import imageSrc3 from "./Images/Bullet.jpg";
import imageSrc4 from "./Images/Yogi.jpg";
import imageSrc5 from "./Images/Raj.jpg";
import Navbar2 from "./Navbar2";
import Messagefield from "./Messagefield";


const Messages = () => {
  return (
    <div className="row">
      <div className="col-sm-1">
       <Navbar2/>
       </div>


      <div className="col-sm-4 inbox">
        <div><p><b> PPl_Call_Me_as_hik</b></p></div><br></br>
      <div className="suggestions__header">
        <div className="messagehead">
          <div>Message</div>
          <p>Requests</p>
          </div>
        </div>
        <div className="suggestions__body">
          <div className="suggestions__friends">
            <div style={{ display: "flex" }}>
              <img alt="..." src={imageSrc1} width="10px" height="10px" className="rounded-circle suggestions__image" />
              <div style={{ dispaly: "flex", flexDirection: "column",marginLeft:"10px" }}>
                <div className="suggestions__username">Prasanna</div>
                <div>
                  Active1hrago
                </div>
              </div>
            </div>
          </div>

          <div className="suggestions__friends">
            <div style={{ display: "flex" }}>
              <img alt="..." src={imageSrc2} width="10px" height="10px" className="rounded-circle suggestions__image" />
              <div style={{ dispaly: "flex", flexDirection: "column",marginLeft:"10px" }}>
                <div className="suggestions__username">Siva</div>
                <div>
                  Active1hrago
                </div>
              </div>
            </div>
          </div>

          <div className="suggestions__friends">
            <div style={{ display: "flex" }}>
              <img alt="..." src={imageSrc3} width="10px" height="10px" className="rounded-circle suggestions__image" />
              <div style={{ dispaly: "flex", flexDirection: "column",marginLeft:"10px" }}>
                <div className="suggestions__username">Bullet</div>
                <div>
                  Active1hrago
                </div>
              </div>
            </div>
          </div>

          <div className="suggestions__friends">
            <div style={{ display: "flex" }}>
              <img alt="..." src={imageSrc4} width="10px" height="10px" className="rounded-circle suggestions__image" />
              <div style={{ dispaly: "flex", flexDirection: "column",marginLeft:"10px" }}>
                <div className="suggestions__username">Yogi</div>
                <div>
                  Active1hrago
                </div>
              </div>
            </div>
          </div>

          <div className="suggestions__friends">
            <div style={{ display: "flex" }}>
              <img alt="..." src={imageSrc5} width="10px" height="10px" className="rounded-circle suggestions__image" />
              <div style={{ dispaly: "flex", flexDirection: "column",marginLeft:"10px" }}>
                <div className="suggestions__username">Raj</div>
                <div>
                  Active1hrago
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>



      <div className="col-sm-7">
       <Messagefield/>
      </div>


    </div>
  );
};

export default Messages;
