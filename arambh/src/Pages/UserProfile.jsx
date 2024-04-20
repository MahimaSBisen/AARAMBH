import styles from './UserProfile.module.css'
import { MdPhotoCamera } from "react-icons/md";
import { Link } from "react-router-dom";


function UserProfile() {
  return (
    <>
    <div className={styles.userDiv}>
        <h1 className={styles.head}>Profile</h1>
        
        <div className={styles.menu}>
        {/* <div className={styles.camera}>  */}
        <Link><MdPhotoCamera className={styles.cameraIcon}/></Link>
        {/* </div> */}
        <h4 className={styles.menuHead}>Your Account</h4>
        <h4 className={styles.menuHead}>Eligibility</h4>
        
        <h4 className={styles.menuHead}>Setting</h4>
        <hr></hr>
        <h4 className={styles.menuHead}>Log Out</h4>
        {/* <h4 className={styles.menuHead}>My Account</h4> */}
        </div>
    </div>
    </>
  )
}
export default UserProfile;