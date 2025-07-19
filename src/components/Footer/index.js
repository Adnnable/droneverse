// src/components/Footer/Footer.js
import styles from "./Footer.module.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Background Video */}
      <video autoPlay loop muted playsInline className={styles.videoBackground}>
        <source src="../../../assets/img/footer/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Content Overlay */}
      <div className={styles.overlay}>
        <div className={styles.overlayinner}></div>
        <div className={styles.topSection}>
          <div className={styles.logoColumn}>
            <h2 className={styles.logo}>
              <img className={styles.logo} src={'/assets/logo/white-logo.svg'} alt='Droneverse Logo' width={266} height={52} />
            </h2>
            <p className={styles.text}>
              701A, Delhi - Jaipur Exp, Block A,
              <br />
              Sector 34, Gurugram, Haryana 122001
            </p>
            <p>📧 info@droneverse.com</p>
            <p>📞 +91-98810-12300</p>
          </div>

          <div className={styles.linkGroup}>
            <h4>Quick links</h4>
            <ul>
              <li>About us</li>
              <li>Defence</li>
              <li>Contact us</li>
              <li>Career</li>
              <li>Blogs</li>
            </ul>
          </div>

          <div className={styles.linkGroup}>
            <h4>Defence</h4>
            <ul>
              <li>Small class drone pilot</li>
              <li>Medium class</li>
              <li>Professional agricultural</li>
              <li>Professional FPV drone</li>
              <li>Drone masterclass</li>
            </ul>
          </div>

          <div className={styles.linkGroup}>
            <h4>Training</h4>
            <ul>
              <li>Precision agricultural</li>
              <li>Land survey</li>
              <li>Creative aerial photography</li>
              <li>Smart city inspection</li>
              <li>Agricultural survey</li>
              <li>Wind infrastructure</li>
              <li>Oil & gas inspection</li>
            </ul>
          </div>

          <div className={styles.linkGroup}>
            <h4>Products & Services</h4>
            <ul>
              <li>Power line drone</li>
              <li>Fire fighting drone</li>
              <li>Delivery drone</li>
              <li>Defence drone</li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p>
            © 2024 Droneverse Pvt Ltd. All rights reserved | Digital Partner |{" "}
            <a href="#">K2 Solutions</a>
          </p>
          <div className={styles.socialIcons}>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
