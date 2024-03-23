import React from 'react';



const SignUp = () => {
  return <>
  <div className="signupDIV">
      <button className="but1">Continue with Google</button>
      <h5 className="p1">or</h5>
      <input className="uinput" type="text" id="username" name="username" placeholder="Username" required/><br/><br/>
      <input className="uinput" type="text" id="email" name="email" placeholder="Email Address" required/><br/><br/>
      <input className="uinput" type="text" id="password" name="password" placeholder="Password" required/><br/><br/>
      <input className="uinput" type="text" id="Cpassword" name="Cpassword" placeholder="Confirm Password" required/><br/><br/>
      <input  type="checkbox" id="checkbox" name="checkbox"></input>&nbsp;
      <label className="checkB" for="checkbox">I agree to the Terms of service and Privacy Policy</label><br/>
      <button className="but2">Sign Up</button><br/>
      <p className="p2">Already have an account? Log In</p>


  </div>
  </>;
}

export default SignUp;
