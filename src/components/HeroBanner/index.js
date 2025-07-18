import React from 'react';
import styles from './HeroBanner.module.scss';
import Image from 'next/image';

const HeroBanner = () => {
    return (
        // <section className={styles.heroContainer}>
        //     {/* Drones */}
        //     <Image
        //         src="/assets/img/hero-section/drone.png"
        //         alt="Top Drone"
        //         width={100}
        //         height={100}
        //         className={`${styles.drone} ${styles.droneTop}`}
        //     />
        //     <Image
        //         src="/assets/img/hero-section/drone.png"
        //         alt="Bottom Left Drone"
        //         width={100}
        //         height={100}
        //         className={`${styles.drone} ${styles.droneBottomLeft}`}
        //     />
        //     <Image
        //         src="/assets/img/hero-section/drone.png"
        //         alt="Bottom Right Drone"
        //         width={100}
        //         height={100}
        //         className={`${styles.drone} ${styles.droneBottomRight}`}
        //     />

        //     {/* Main Heading */}
        //     <h1 className={styles.heading}>
        //         India's No. 1 DGCA-Approved <br /> Remote Pilot Program
        //     </h1>

        //     {/* Trusted avatars */}
        //     <div className={styles.avatarGroup}>
        //         <div className={styles.avatars}>
        //             <img src="/assets/img/avatar/happy-clients.png" alt="Avatar" width={0} height={0} className={styles.avatar} />
        //         </div>
        //     </div>

        //     {/* Scroll Indicator */}
        //     <div className={styles.scrollIndicator}></div>
        // </section>
        <section className={styles.hero}>
            <div className={styles.content}>
                <div className={styles.badge}>For government and military</div>
                <h1 className={styles.heading}>
                    AI-Driven <br />
                    <span className={styles.highlight}>Autonomous</span><br />
                    <span className={styles.highlight}>CsUAS</span>
                </h1>
            </div>

            {/* Floating Drone Image */}
            <div className={styles.droneWrapper}>
                <Image
                    src="/assets/img/hero-section/drone.png"
                    alt="Drone"
                    width={246}
                    height={126}
                    className={styles.drone}
                />
            </div>

            {/* Earth Globe */}
            <div className={styles.globeWrapper}>
                <video autoPlay loop muted playsInline className={styles.earth}>
                    <source src="/assets/videos/globe.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
};

export default HeroBanner;
