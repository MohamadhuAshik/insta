import React from "react";
import ppl from "./Images/Ashik.jpg";
import Avatar from "@mui/material/Avatar";
import '../Components/Info.css'

//Instagram Info Component

const Info = () => {
  return (
    <div>
      <div className="info__container">
        <Avatar className="info__image" src={ppl} />
        <div className="info__content">
          <div style={{fontWeight:"bold"}} className="info_usename">ppl_call_me_as_hik</div>
          <div className="info_description">Mohamadhu_ashik</div>
        </div>
      </div>
    </div>
  );
};

export default Info;
