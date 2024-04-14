import styles from "./Aim.module.css";
import Aimg1 from "../Images/AimImage1.jpg";
import Aimg2 from "../Images/AimImage2.jpg";
import Aimg3 from "../Images/AimImage3.jpg";
import Aimg4 from "../Images/AimImage4.jpg";
import Aimg5 from "../Images/AimImage5.jpg";
import Aimg6 from "../Images/AimImage6.jpg";
import Aimg7 from "../Images/AimImage7.jpg";
import Aimg8 from "../Images/AimImage8.jpg";
import Aimg9 from "../Images/AimImage9.jpg";
import Aimg10 from "../Images/AimImage10.jpg";

function Aim() {
  return (
    <>
      <div className={styles.aimContainer}>
        <h1>OUR AIM - 'LIFE AFTER DEATH'</h1>
        <div className={styles.aimDiv}>
          <div className={styles.imgDiv}>
            <img className={styles.AImg} src={Aimg1}></img>
          </div>
          <div className={styles.contentDiv}>
            <h2 className={styles.head}>Saving Lives</h2>
            <p className={styles.para}>
              Organ donation provides the opportunity to save or enhance the
              lives of those in need. Transplants can significantly improve the
              health and longevity of recipients suffering from organ failure.
            </p>
          </div>
        </div>
        <div className={styles.aimDiv}>
         
          <div className={styles.contentDiv}>
            <h2 className={styles.head}>Alleviating Suffering</h2>
            <p className={styles.para}>
              Organ failure can cause immense suffering and drastically reduce
              the quality of life for individuals affected. Donating organs can
              alleviate this suffering by providing hope and a chance for a
              healthier future.
            </p>
          </div>
          <div className={styles.imgDiv}>
            <img className={styles.AImg} src={Aimg2}></img>
          </div>
        </div>
        <div className={styles.aimDiv}>
          <div className={styles.imgDiv}>
            <img className={styles.AImg} src={Aimg3}></img>
          </div>
          <div className={styles.contentDiv}>
            <h2 className={styles.head}>Ethical Imperative</h2>
            <p className={styles.para}>
              Many view organ donation as an ethical obligation to help others
              in need. It reflects a sense of social responsibility and
              altruism, contributing to the well-being of society as a whole.
            </p>
          </div>
        </div>
        <div className={styles.aimDiv}>
          
          <div className={styles.contentDiv}>
            <h2 className={styles.head}>Legacy of Generosity</h2>
            <p className={styles.para}>
              Organ donation allows individuals to leave behind a powerful
              legacy of generosity and compassion. It represents a selfless act
              that continues to positively impact lives even after one's
              passing.
            </p>
          </div>
          <div className={styles.imgDiv}>
            <img className={styles.AImg} src={Aimg4}></img>
          </div>
        </div>
        <div className={styles.aimDiv}>
          <div className={styles.imgDiv}>
            <img className={styles.AImg} src={Aimg5}></img>
          </div>
          <div className={styles.contentDiv}>
            <h2 className={styles.head}>Fulfilling Final Wishes</h2>
            <p className={styles.para}>
              For many donors, organ donation fulfills their wishes to
              contribute to the greater good even after they're gone. Knowing
              that they've made a tangible difference can bring comfort and
              peace during end-of-life stages.
            </p>
          </div>
        </div>
        <div className={styles.aimDiv}>
          
          <div className={styles.contentDiv}>
            <h2 className={styles.head}>Medical Advancements</h2>
            <p className={styles.para}>
              Organ donation fuels medical research and advancements in
              transplantation techniques. By participating in organ donation,
              individuals contribute to ongoing efforts to improve transplant
              outcomes and develop innovative treatments.
            </p>
          </div>
          <div className={styles.imgDiv}>
            <img className={styles.AImg} src={Aimg6}></img>
          </div>
        </div>
        <div className={styles.aimDiv}>
          <div className={styles.imgDiv}>
            <img className={styles.AImg} src={Aimg7}></img>
          </div>
          <div className={styles.contentDiv}>
            <h2 className={styles.head}>Economic Benefits</h2>
            <p className={styles.para}>
              Organ donation not only saves lives but also generates significant
              economic benefits. It reduces healthcare costs associated with
              prolonged illnesses and dialysis treatments, benefiting both
              individuals and healthcare systems.
            </p>
          </div>
        </div>
        <div className={styles.aimDiv}>
         
          <div className={styles.contentDiv}>
            <h2 className={styles.head}>Addressing Organ Shortages</h2>
            <p className={styles.para}>
              There is a significant disparity between the number of organs
              available for transplantation and the number of patients in need.
              By donating organs, individuals help address this shortage and
              provide hope to those on transplant waiting lists.
            </p>
          </div>
          <div className={styles.imgDiv}>
            <img className={styles.AImg} src={Aimg8}></img>
          </div>
        </div>
        <div className={styles.aimDiv}>
          <div className={styles.imgDiv}>
            <img className={styles.AImg} src={Aimg9}></img>
          </div>
          <div className={styles.contentDiv}>
            <h2 className={styles.head}>Gift of Extended Life</h2>
            <p className={styles.para}>
              Organ recipients often describe their transplant as the gift of
              extended life. By donating organs, individuals provide others with
              the opportunity to experience milestones, celebrate special
              moments, and enjoy precious time with loved ones.
            </p>
          </div>
        </div>
        <div className={styles.aimDiv}>
          
          <div className={styles.contentDiv}>
            <h2 className={styles.head}>Cultural and Religious Significance</h2>
            <p className={styles.para}>
              Many cultures and religions endorse organ donation as a noble and
              compassionate act. It aligns with principles of charity, empathy,
              and solidarity, transcending cultural and religious boundaries to
              save lives.
            </p>
          </div>
          <div className={styles.imgDiv}>
            <img className={styles.AImg} src={Aimg10}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aim;
