import Footer from "../Components/Footer";
import Header from "../Components/Header";

function Login() {
  return <>
  <Header></Header>
  <div className="signupDIV">
     <h1 className="logH">Log In</h1>
      <button className="but1">Continue with Google</button>
      <h5 className="p1">or</h5>
      {/* <input className="uinput" type="text" id="username" name="username" placeholder="Username" required/><br/><br/> */}
      <input className="uinput" type="text" id="email" name="email" placeholder="Email Address" required/><br/><br/>
      <input className="uinput" type="text" id="password" name="password" placeholder="Password" required/><br/><br/>
      {/* <input className="uinput" type="text" id="Cpassword" name="Cpassword" placeholder="Confirm Password" required/><br/><br/> */}
      {/* <input  type="checkbox" id="checkbox" name="checkbox"></input>&nbsp;
      <label className="checkB" for="checkbox">I agree to the Terms of service and Privacy Policy</label><br/> */}
     <h6 className="p3">Forgot Password?</h6>
      <button className="but2">Log In</button><br/>
      <p className="p2">Don't have an account? </p><Link><p className="p2">Sign Up</p></Link>


  </div>
  <Footer></Footer>
  </>;
}

export default Login;
