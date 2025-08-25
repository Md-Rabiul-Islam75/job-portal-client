import React, { useContext } from "react";
import registerLottieData from "../../assets/lottie/register.json"
import Lottie from "lottie-react";
import AuthContext from "../../context/AuthContext/AuthContext";
import SocialLogin from "../shared/SocialLogin";

const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        console.log(email, password);

        createUser(email, password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
         
          <Lottie className="w-80" animationData={registerLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
             <h1 className="text-5xl font-bold ml-5 mt-5">Register now!</h1>
          <div className="card-body">
            <form onSubmit={handleRegister} className="form">
              <label className="label">Email</label>
              <input type="email" className="input"
              name="email" 
              placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input"
              name="password"
               placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
