import React from "react";
import "../Components/Suggestion.css";
import imageSrc1 from "./Images/press.jpg";
import imageSrc2 from "./Images/Siva.jpg";
import imageSrc3 from "./Images/Bullet.jpg";
import imageSrc4 from "./Images/Yogi.jpg";
import imageSrc5 from "./Images/Raj.jpg";
import Avatar from "@mui/material/Avatar";

const Suggestion = () => {
  return (
    <div>
      <div className="suggestions__container">
        <div className="suggestions__header">
          <div>Suggestions For You</div>
          <p>See All</p>
        </div>
        <div className="suggestions__body">
          <div className="suggestions__friends">
            <div style={{ display: "flex" }}>
              <Avatar src={imageSrc1} className="suggestions__image" />
              <div className="suggestions__username">Prasanna</div>
            </div>
            <button className="btn follow">Follow</button>
          </div>
          <div className="suggestions__friends">
            <div style={{ display: "flex" }}>
              <Avatar src={imageSrc2} className="suggestions__image" />
              <div className="suggestions__username">Siva</div>
            </div>
            <button className="btn follow">Follow</button>
          </div>
          <div className="suggestions__friends">
            <div style={{ display: "flex" }}>
              <Avatar src={imageSrc3} className="suggestions__image" />
              <div className="suggestions__username">Bullet</div>
            </div>
            <button className="btn follow">Follow</button>
          </div>
          <div className="suggestions__friends">
            <div style={{ display: "flex" }}>
              <Avatar src={imageSrc4} className="suggestions__image" />
              <div className="suggestions__username">Kundan</div>
            </div>
            <button className="btn follow">Follow</button>
          </div>
          <div className="suggestions__friends">
            <div style={{ display: "flex" }}>
              <Avatar src={imageSrc5} className="suggestions__image" />
              <div className="suggestions__username">Raj</div>
            </div>
            <button className="btn follow">Follow</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestion;
