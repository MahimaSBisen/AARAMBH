import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';



const SignUp = () => {
  return <>
  {/* <Header></Header> */}
 
  <div className="signupDIV">
  {/* <h1 className="logH">Sign Up</h1> */}
      <button className="but1">Continue with Google</button>
      <h5 className="p1">or</h5>
      <input className="uinput" type="text" id="username" name="username" placeholder="Username" required/><br/><br/>
      <input className="uinput" type="text" id="email" name="email" placeholder="Email Address" required/><br/><br/>
      <input className="uinput" type="text" id="password" name="password" placeholder="Password" required/><br/><br/>
      <input className="uinput" type="text" id="Cpassword" name="Cpassword" placeholder="Confirm Password" required/><br/><br/>
      <input  type="checkbox" id="checkbox" name="checkbox"></input>&nbsp;
      <label className="checkB" for="checkbox">I agree to the Terms of service and Privacy Policy</label><br/>
      <button className="but2">Sign Up</button><br/>
      <p className="p2">Already have an account?</p><Link to='/log-in'><p className="p2" >Log In </p></Link>
      


  </div>
  {/* <Footer></Footer> */}
  </>;
}

export default SignUp;
