import styles from './Presence.module.scss'
import { useState } from 'react';

const locations = [
  {
    name: 'Gurugram',
    top: '30%',
    left: '55%',
    address: '70A, Delhi - Jaipur Expy, Block A, Sector 34, Gurugram, Haryana 122101',
  },
  { name: 'Delhi', top: '40%', left: '45%' },
  { name: 'Bhopal', top: '30%', left: '30%' },
  { name: 'Banglore', top: '70%', left: '40%' },
  { name: 'Tamil naidu', top: '80%', left: '60%' },
  { name: 'Bihar', top: '50%', left: '60%' },
];

export default function Presence() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [activeTab, setActiveTab] = useState('Office');

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Our presence</h2>
      <p className={styles.subtitle}>
        Welcome to DroneVerse, where we redefine India’s drone industry. Driven by a vision to create world-class drone pilots, we go above & beyond in everything we do. Recognized in the esteemed World Book of Records.
      </p>

      {/* Toggle buttons */}
      <div className={styles.toggleButtons}>
        {['Office', 'Institute', 'R&D centre'].map(tab => (
          <button
            key={tab}
            className={`${styles.tabButton} ${activeTab === tab ? styles.active : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Map container */}
      <div className={styles.mapContainer}>
        <img src="/images/india-map.png" alt="India Map" className={styles.mapImage} />

        {locations.map((loc, index) => (
          <div
            key={index}
            className={styles.marker}
            style={{ top: loc.top, left: loc.left }}
            onClick={() => setSelectedLocation(loc.name === 'Gurugram' ? loc : null)}
          >
            <div className={styles.pin}>
              <div className={styles.icon}>✦</div>
            </div>

            {selectedLocation === loc.name && loc.address && (
              <div className={styles.tooltip}>
                {loc.address}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
