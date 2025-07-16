import React from 'react';
import styles from './HeroBanner.module.scss';
import Image from 'next/image';

const HeroBanner = () => {
    return (
        <section className={styles.heroContainer}>
            {/* Drones */}
            <Image
                src="/assets/img/hero-section/drone.png"
                alt="Top Drone"
                width={100}
                height={100}
                className={`${styles.drone} ${styles.droneTop}`}
            />
            <Image
                src="/assets/img/hero-section/drone.png"
                alt="Bottom Left Drone"
                width={100}
                height={100}
                className={`${styles.drone} ${styles.droneBottomLeft}`}
            />
            <Image
                src="/assets/img/hero-section/drone.png"
                alt="Bottom Right Drone"
                width={100}
                height={100}
                className={`${styles.drone} ${styles.droneBottomRight}`}
            />

            {/* Main Heading */}
            <h1 className={styles.heading}>
                India's No. 1 DGCA-Approved <br /> Remote Pilot Program
            </h1>

            {/* Trusted avatars */}
            <div className={styles.avatarGroup}>
                <div className={styles.avatars}>
                    <img src="/assets/img/avatar/happy-clients.png" alt="Avatar" width={0} height={0} className={styles.avatar} />
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className={styles.scrollIndicator}></div>
        </section>
    );
};

export default HeroBanner;
