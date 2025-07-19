// import React from 'react';
// import styles from './AboutSection.module.scss';
// import { Box, Button } from '@mui/material';

// const stats = [
//     { number: '10+', label: 'Drone products' },
//     { number: '50+', label: 'Team members' },
//     { number: '500+', label: 'Student trained' },
//     { number: '8+', label: 'Locations' },
// ];

// const AboutSection = () => {
//     return (
//         <section className={styles.aboutContainer}>
//             <h2 className={styles.heading}>About droneverse</h2>
//             <p className={styles.subtext}>
//                 Welcome to DroneVerse, where we redefine India’s drone industry. Driven by a vision to create world-class drone pilots, we go above & beyond in everything we do. Recognized in the esteemed World Book ofin drone training & innovation. Welcome to DroneVerse, where we redefine to create world-class drone pilots, we go above & beyond in everything we do. Recognized in the esteemed World Book of Records, we are proud trailblazers in drone training & innovation. Welcome to DroneVerse, where we redefine India’s drone industry. Driven by a vision to create world-class drone pilots, we go above & beyond in everything we do. Recognized in the esteemed World Book of Records, we are proud trailblazers.
//             </p>

//             <Box className={styles.statsGrid}>
//                 {stats.map((item, index) => (
//                     <Box key={index} className={styles.statCard}>
//                         <div className={styles.statNumber}>{item.number}</div>
//                         <div className={styles.statLabel}>{item.label}</div>
//                     </Box>
//                 ))}
//             </Box>

//             <Button variant="contained" className={styles.ctaButton}>
//                 Know more
//             </Button>
//         </section>
//     );
// };

// export default AboutSection;

import React from 'react';
import styles from './AboutSection.module.scss';
import { Box, Button } from '@mui/material';
import ShieldIcon from '@mui/icons-material/Security';
import Image from 'next/image';

const services = [
    { title: 'Defence', subtitle: 'Single Pane of Glass for Complete End-to-End Kill Chain' },
    { title: 'Training', subtitle: 'Single Pane of Glass for Complete End-to-End Kill Chain' },
    { title: 'Manufacturing', subtitle: 'Single Pane of Glass for Complete End-to-End Kill Chain' },
    { title: 'Service', subtitle: 'Single Pane of Glass for Complete End-to-End Kill Chain' },
];

const AboutSection = () => {
    return (
        <>
            <section className={styles.aboutContainer}>
                <div className={styles.icon}>
                    <img src="/assets/icons/about-icon.png" alt="decorative icon" />
                </div>
                <h2 className={styles.heading}>About droneverse</h2>
                <p className={styles.subtext}>
                    Welcome to DroneVerse, where we redefine India’s drone industry. Driven by a vision to create world-class drone pilots, we go above & beyond in everything we do. Recognized in the esteemed World Book ofin drone training & innovation. Welcome to DroneVerse, where we redefine to create world-class drone pilots, we go above & beyond in everything we do. Recognized in the esteemed World Book of Records, we are proud trailblazers in drone training & innovation. Welcome to DroneVerse, where we redefine India’s drone industry. Driven by a vision to create world-class drone pilots, we go above & beyond in everything we do. Recognized in the esteemed World Book of Records, we are proud trailblazers.
                </p>
            </section>
            <div className={styles.aboutUsBg}>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={styles.videoBackground}
                >
                    <source src="/assets/videos/about-bg.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <section className={styles.aboutContainer}>
                    <div className={styles.overlay}></div>
                    <Box className={styles.cardGrid}>
                        {services.map((item, index) => (
                            <Box key={index} className={styles.card}>
                                <div className={styles.cardBody}>
                                    <Image src="/assets/icons/lock.svg" width={34} height={38} alt='lock icon' />
                                    <div className={styles.cardTitle}>{item.title}</div>
                                    <div className={styles.cardSubtitle}>{item.subtitle}</div>
                                </div>
                            </Box>
                        ))}

                        <Box className={styles.buttonGroup}>
                            <Button className={styles.yellowBtn}>Know more</Button>
                            <Button className={styles.whiteBtn}>Get in touch</Button>
                        </Box>
                    </Box>


                </section>
            </div>
        </>
    );
};

export default AboutSection;
