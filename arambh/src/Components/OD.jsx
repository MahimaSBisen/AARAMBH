import myImage1 from "../Images/Slide1OD.png";
import myImage2 from "../Images/slideOD2.png";
import myImage3 from "../Images/slideOD3.png";
import myImage4 from "../Images/slideOD4.png";
import myImage5 from "../Images/slideOD5.png";

function OD() {
  return (
    <>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={myImage1} class="d-block w-100 h-100" />
          </div>
          <div class="carousel-item">
            <img src={myImage2} class="d-block w-100 h-100" />
          </div>
          <div class="carousel-item">
            <img src={myImage3} class="d-block w-100 h-100" />
          </div>
          <div class="carousel-item">
            <img src={myImage4} class="d-block w-100 h-100" />
          </div>
          <div class="carousel-item">
            <img src={myImage5} class="d-block w-100 h-100" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
export default OD;
