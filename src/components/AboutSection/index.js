import React from 'react';
import styles from './AboutSection.module.scss';
import { Box, Button } from '@mui/material';

const stats = [
    { number: '10+', label: 'Drone products' },
    { number: '50+', label: 'Team members' },
    { number: '500+', label: 'Student trained' },
    { number: '8+', label: 'Locations' },
];

const AboutSection = () => {
    return (
        <section className={styles.aboutContainer}>
            <h2 className={styles.heading}>About droneverse</h2>
            <p className={styles.subtext}>
                Welcome to DroneVerse, where we redefine India’s drone industry. Driven by a vision to create world-class drone pilots, we go above & beyond in everything we do. Recognized in the esteemed World Book of Records, we are proud trailblazers in drone training & innovation.
            </p>

            <Box className={styles.statsGrid}>
                {stats.map((item, index) => (
                    <Box key={index} className={styles.statCard}>
                        <div className={styles.statNumber}>{item.number}</div>
                        <div className={styles.statLabel}>{item.label}</div>
                    </Box>
                ))}
            </Box>

            <Button variant="contained" className={styles.ctaButton}>
                Know more
            </Button>
        </section>
    );
};

export default AboutSection;
