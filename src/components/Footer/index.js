import styles from "./Footer.module.scss";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.logoColumn}>
          <h2 className={styles.logo}>Drone <span className={styles.highlight}>Verse</span></h2>
          <p>701A, Delhi - Jaipur Exp, Block A,<br />Sector 34, Gurugram, Haryana 122001</p>
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
        <p>© 2024 Droneverse Pvt Ltd. All rights reserved | Digital Partner | <a href="#">K2 Solutions</a></p>
        <div className={styles.socialIcons}>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
}
