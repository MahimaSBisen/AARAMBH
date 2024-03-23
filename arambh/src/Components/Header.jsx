import myImage from "./LogoOD1.png"; // Importing the image


function Header() {
  return (
    <>
      <div className="header">
        <img src={myImage} alt="My Image" />
        <h5>Home</h5>
        <h5>Sign Up</h5>
        <h5>Log In</h5>
        <h5>FAQs</h5>
       
</div>


    </>
  );
}

export default Header;
