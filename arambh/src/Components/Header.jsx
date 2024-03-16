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


<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={myImage} class="d-block w-100" />
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" />
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>




    </>
  );
}

export default Header;
