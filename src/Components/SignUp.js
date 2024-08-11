import React from "react";
import "../Components/Signup.css";
import image2 from "./Images/logoinsta.png";
import fbsignup from "./Images/fbsignup.png";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

//Using YUP Resolvers
const schema = yup.object().shape({
  Name: yup.string().required("Name Is Required"),
  EmailId: yup.string().email().required("Please Enter Valid Email"),

  PassWord: yup
    .string()
    .required("set Your Password")
    .min(4, "Minimum 4 characters required")
    .max(15, "Enter Upto 15 Characters Only"),
});

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className="row d-flex justify-center align-center">
      <div className="col-sm-5"></div>
      <div className="col-sm-6">
        <div className="main">
          <div className="signbox">
            <div className="right">
              <img className="instalogo" src={image2} alt="..." />
              <div className="loginPage__signin">
                <p>
                  Sign up to see photos and videos from <br></br>your friends.
                </p>
              </div>
              <button className="click">
                <img src={fbsignup} height="15px" width="15px" alt="btnfb" />
                Log in with Facebook
              </button>
              <div className="or">
                <div className="dividor"></div>
                <div className="loginOR">OR</div>
                <div className="dividor"></div>
              </div>
              <form

                onSubmit={handleSubmit((data) => {
                  setTimeout(() => {
                    window.location.href = "/";
                  }, 1000);
                })}
                className="loginPage__signin"
              >

                <input
                  {...register("EmailId")}
                  className="Logininput"
                  type="text"
                  placeholder="Mobile number or Email"
                />
                <p style={{ color: "red" }}>{errors.EmailId?.message}</p>

                <input
                  {...register("Name")}
                  className="Logininput"
                  type="text"
                  placeholder="Full Name"
                />
                <p style={{ color: "red" }}>{errors.Name?.message}</p>

                <input
                  className="Logininput"
                  type="text"
                  placeholder="Username"
                  {...register("Name")}
                />
                <p style={{ color: "red" }}>{errors.Name?.message}</p>

                <input
                  className="Logininput"
                  type="password"
                  placeholder="Password"
                  {...register("PassWord")}
                />
                <p style={{ color: "red" }}>{errors.PassWord?.message}</p>

                <div className="box">
                  <div className="loginPage__signin text-muted ">
                    <p>
                     People who use our service may have uploaded your contact
                      information to Instagram. Learn More
                    </p>
                  </div>

                  <div className="loginPage__signin text-muted">
                    <p>
                      By signing up, you agree to our Terms , Privacy Policy and
                      Cookies Policy .
                    </p>
                  </div>
                </div>
                <button className="click">Sign up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-1"></div>
    </div>
  );
};

export default SignUp;

