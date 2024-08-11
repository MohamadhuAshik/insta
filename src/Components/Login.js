import React from "react";
import image1 from "./Images/instalatest.png";
import image2 from "./Images/logoinsta.png";
import fb from "./Images/faceb.png";
import appstore from "./Images/app.png";
import playstore from "./Images/play.png";
import "../Components/Login.css";
import { useState } from "react";


import { useNavigate,Link } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleClik(event) {
    if (username === "mohamadashik268@gmail.com" && password === "password") {
      navigate("Insta");
    }
  }

  return (
    <div className="row d-flex justify-center align-center">
      <div className="col-sm-3"></div>
      <div className="col-sm-6">
        <div className="main">
          <img src={image1} width="450px" alt="MainImg"></img>
          <div>
            <div className="right">
              <img className="instalogo" src={image2} alt="..." />
              <div className="loginPage__signin">
                   {/*Login Input Box*/}
                <input
                  className="Logininput"
                  type="text"
                  placeholder="Phone number, username, or email"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
             
                <input
                  className="Logininput"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <button onClick={(e) => handleClik(e)} className="click">
                  Log In
                </button>
              </div>
              <div className="or">
                <div className="dividor"></div>
                <div className="loginOR">OR</div>
                <div className="dividor"></div>
              </div>
              <div className="fb">
                <img
                  src={fb}
                  alt="fbpng"
                  width="15px"
                  style={{ marginRight: "5px" }}
                />
                Log in with Facebook
              </div>
              <div className="forgot"> Forgot password?</div>
            </div>
            <div className="signupOpp">
              <div className="loginPage__signin">
                Don't have an account?{" "}
                <Link to="signup"
                  className="pointer"
                  style={{ fontWeight: "bold", color: "#0395F6" }}
                >
                  Sign up
                </Link>
              </div>
              :
              <div style={{ display: "none" }} className="loginPage__signup">
                Have an account?{" "}
                <span style={{ fontWeight: "bold", color: "#0395F6" }}>
                  Sign in
                </span>
              </div>
            </div>
            <div className="downloadSection">
              <div>Get the app.</div>
              <div className="loginPage__option pointer">
               <Link to="https://apps.apple.com/in/app/instagram/id389801252"> <img
                  alt="app"
                  className="loginPage_dwimg"
                  src={appstore}
                  width="136px"
                /></Link>
                <Link to="https://play.google.com/store/apps/details?id=com.instagram.android&hl=en&gl=US"><img
                  alt="app"
                  className="loginPage_dwimg"
                  src={playstore}
                  width="136px"
                /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-3"></div>
    </div>
  );
};

export default Login;
