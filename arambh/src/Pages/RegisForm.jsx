import Footer from "../Components/Footer";
import Header from "../Components/Header";
import styles from "./RegisForm.module.css";

function RegisForm() {
  return<>
  {/* <Header></Header> */}
  <h1 className="regishead">ORGAN DONAR REGISTRATION</h1>
  <hr className="hr1"/>
  <div className="formBody">
  <h2 className="regishead2">Personal Information</h2>

  <form action="/submit_form" method="post">
  <div className="flex-container">
    <div className="item">
    <label for="fname">First Name</label><br/>
    <input className="input" type="text" id="fname" name="fname"  required/>
    </div>
    <div className="item">
    <label for="mname">Middle Name</label><br/>
    <input className="input" type="text" id="mname" name="mname" />
    </div>
    <div className="item">
    <label for="lname">Last Name</label><br/>
    <input className="input" type="text" id="lname" name="lname"  required/>
    </div>
  </div>

  <div className="flex-container">
    <div className="item">
    <label for="age">Age</label><br/>
    <input className="input" type="text" id="age" name="age"  required/>
    </div>
    <div className="item">
    <label for="birthdate">Date of Birth</label><br/>
    <input  className="date" type="date" id="birthdate" name="birthdate"></input>
    </div>
    <div className="item">
    <label >Blood Group</label><br/>
        <select id="BG" required>
           
            <option value="1">A+</option>
            <option value="2">B+</option>
            <option value="3">O+</option>
            <option value="4">AB+</option>
            <option value="5">A-</option>
            <option value="6">B-</option>
            <option value="7">O-</option>
            <option value="8">AB-</option>
            <option value="9">Other</option>
        </select>    
   </div>
   </div>

    <div className="flex-container">
    <div className="item">
    <label for="phone">Phone</label><br/>
    <input className="input" type="text" id="phone" name="phone"  required/>
    </div>
    <div className="item">
    <label for="email">Email Address</label><br/>
    <input className="input" type="text" id="email" name="email" />
    </div>
    <div className="item">
    <label for="aadhar">Aadhar No.</label><br/>
    <input className="input" type="text" id="aadhar" name="aadhar"  required/>
    </div>
    </div>

    <div className="flex-container">
    <div className="item">
    <label for="gender">Gender</label><br/>
        <input type="radio" id="male" name="gender" value="male" required/>
        <label for="male">Male</label>&nbsp;&nbsp;
        <input type="radio" id="female" name="gender" value="female"required/>
        <label for="female">Female</label>&nbsp;&nbsp;
        
        <input type="radio" id="others" name="gender" value="others"required/>
        <label for="others">Others</label><br/>
   </div>
    
    </div>
    {/* <hr className="hr2"/> */}
<br/>
    <h2 className="regishead2">Address Details</h2>

    <div className="flex-container">
    <div className="item">
    <label for="address">Address</label><br/>
    <input className="inputA" type="text" id="address" name="address"  required/>
    </div>
    </div>
    

    <div className="flex-container">
    <div className="item">
    <label for="state">State</label><br/>
    <input className="input" type="text" id="state" name="state"  required/>
    </div>
    <div className="item">
    <label for="city">City</label><br/>
    <input className="input" type="text" id="city" name="city" />
    </div>
    <div className="item">
    <label for="pincode">Pin Code</label><br/>
    <input className="input" type="text" id="pincode" name="pincode"  required/>
    </div>
  </div>
  
  {/* <hr className="hr2"/> */}
  <br/>
 
  <h2 className="regishead2">Pledge Details</h2>
<div className="flex-container">
  <div className="item">
  <fieldset>
    <legend className="pledge">Organ(s)</legend>
    <label for="interest1">
      <input type="checkbox" id="interest1" name="interests[]" value="kidneys"/>
      Kidneys
    </label><br/>
    <label for="interest2">
      <input type="checkbox" id="interest2" name="interests[]" value="liver"/>
      Liver
    </label><br/>
    <label for="interest3">
      <input type="checkbox" id="interest3" name="interests[]" value="heart"/>
      Heart
    </label><br/>
    <label for="interest4">
      <input type="checkbox" id="interest4" name="interests[]" value="lungs"/>
      Lungs
    </label><br/>
    <label for="interest5">
      <input type="checkbox" id="interest5" name="interests[]" value="pancreas"/>
      Pancreas
    </label><br/>
    <label for="interest6">
      <input type="checkbox" id="interest6" name="interests[]" value="intestine"/>
      Intestine
    </label><br/>
  </fieldset>
  </div>
    <div className="item">
    <fieldset>

    <legend className="pledge">Tissues(s)</legend>
    <label for="interest7">
      <input type="checkbox" id="interest7" name="interests[]" value="cornea"/>
      Cornea
    </label><br/>
    <label for="interest8">
      <input type="checkbox" id="interest8" name="interests[]" value="bones"/>
      Bones
    </label><br/>
    <label for="interest9">
      <input type="checkbox" id="interest9" name="interests[]" value="skin"/>
      Skin
    </label><br/>
    <label for="interest10">
      <input type="checkbox" id="interest10" name="interests[]" value="veins"/>
      Veins
    </label><br/>
    <label for="interest11">
      <input type="checkbox" id="interest11" name="interests[]" value="heart valves"/>
      Heart Valves
    </label><br/>
    <label for="interest12">
      <input type="checkbox" id="interest12" name="interests[]" value="blood vessels"/>
      Blood Vessels
    </label><br/>
  </fieldset>
   
    </div>
  </div>
    
  {/* <hr className="hr2"/> */}
  <br/>
    <h2 className="regishead2">Emergency Contact Details</h2>
    <div className="flex-container">
    <div className="item">
    <label for="fname">First Name</label><br/>
    <input className="input" type="text" id="fname" name="fname"  required/>
    </div>
    <div className="item">
    <label for="mname">Middle Name</label><br/>
    <input className="input" type="text" id="mname" name="mname" />
    </div>
    <div className="item">
    <label for="lname">Last Name</label><br/>
    <input className="input" type="text" id="lname" name="lname"  required/>
    </div>
  </div>

  <div className="flex-container">
    <div className="item">
    <label for="age">Age</label><br/>
    <input className="input" type="text" id="age" name="age"  required/>
    </div>
    <div className="item">
    <label for="birthdate">Date of Birth</label><br/>
    <input  className="date" type="date" id="birthdate" name="birthdate" required />
    </div>
    <div className="item">
    <label >Blood Group</label><br/>
        <select id="BG" required>
           
            <option value="1">A+</option>
            <option value="2">B+</option>
            <option value="3">O+</option>
            <option value="4">AB+</option>
            <option value="5">A-</option>
            <option value="6">B-</option>
            <option value="7">O-</option>
            <option value="8">AB-</option>
            <option value="9">Other</option>
        </select>    
   </div>
   </div>

    <div className="flex-container">
    <div className="item">
    <label for="phone">Phone</label><br/>
    <input className="input" type="text" id="phone" name="phone"  required/>
    </div>
    <div className="item">
    <label for="email">Email Address</label><br/>
    <input className="input" type="text" id="email" name="email" required />
    </div>
    <div className="item">
    <label for="aadhar">Aadhar No.</label><br/>
    <input className="input" type="text" id="aadhar" name="aadhar"  required/>
    </div>
    </div>

    <div className="flex-container">
    <div className="item">
    <label for="gender1">Gender</label><br/>
        <input type="radio" id="male" name="gender1" value="male" required/>
        <label for="male">Male</label>&nbsp;&nbsp;
        <input type="radio" id="female" name="gender1" value="female"required/>
        <label for="female">Female</label>&nbsp;&nbsp;
        
        <input type="radio" id="others" name="gender1" value="others"required/>
        <label for="others">Others</label><br/>
       
   </div>
    
    </div>
  
  <div className="flex-container">
    <div className="item">
    <label for="address">Address</label><br/>
    <input className="inputA" type="text" id="address" name="address"  required/>
    </div>
    </div>
    

    <div className="flex-container">
    <div className="item">
    <label for="state">State</label><br/>
    <input className="input" type="text" id="state" name="state"  required/>
    </div>
    <div className="item">
    <label for="city">City</label><br/>
    <input className="input" type="text" id="city" name="city" required />
    </div>
    <div className="item">
    <label for="pincode">Pin Code</label><br/>
    <input className="input" type="text" id="pincode" name="pincode"  required/>
    </div>

  </div>
  <div className="flex-container">
    <div className="item">
    <label for="rel">Your Relation with applicant</label><br/>
    <input className="inputA" type="text" id="rel" name="rel"  required/>
    </div>
    </div>
  <br/>
 <p>Organ donation is a family decision, necessitating discussion with loved ones for easier adherence to one's wishes. Pledges are voluntary and can be withdrawn. </p>
  

    <input className="subBut" type="submit" value="Submit"/>
  </form>
  </div>
  {/* <Footer></Footer> */}
  </>
}

export default RegisForm;
