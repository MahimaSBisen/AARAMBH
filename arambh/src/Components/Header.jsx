import myImage from "./LogoOD1.png"; // Importing the image
import styles from "./Header.module.css";
import { Link  } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <img src={myImage} alt="My Image" />
{/*  
<div class={styles.btngroup}>
  <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    HOME
  </button>
  <ul class="dropdown-menu">

  


    <li><a class="dropdown-item" href="#">Home</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"/></li>
    <li><a class="dropdown-item" href="#">Log out</a></li>
  </ul>
</div> */}
<Link to ='/'>

<p className={styles.para}>Home</p>
  </Link>


<Link to ='sign-up'>

<p className={styles.para}>Sign Up</p>
  </Link>


  <Link to='log-in'>
    <p className={styles.para}>Log In</p>
  </Link>

  <Link  to='faq'>
    <p className={styles.para}>FAQs</p>
  </Link>


  
  <Link  to='regis-form'>

    <p className={styles.para}>Donate Organs</p>

    </Link>

{/* <div class={styles.btngroup}>
  <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    SIGN UP 
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Home</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"/></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div> */}


{/* <div class={styles.btngroup}>
  <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    LOG IN
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Home</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"/></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div> */}
{/* 

<div class={styles.btngroup}>
  <button type="button"  class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    FAQs
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Home</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"/></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div> */}




{/* 

<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header"> */}
        {/* <h1 class="modal-title fs-5" id="staticBackdropLabel"></h1> */}
        {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        You have to Sign Up to register for donating organs!
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
</div> */}
{/* 
<div class={styles.btngroup}>
  <button type="button"  class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    DONATE ORGANS
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Home</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"/></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div> */}

<div class={styles.btngroup}>
<form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
</form>
</div>
  

        {/* <h5>Home</h5>
        <h5>Sign Up</h5>
        <h5>Log In</h5>
        <h5>FAQs</h5> */}
       
</div>





    </>
  );
}

export default Header;
