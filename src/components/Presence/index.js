import styles from './Presence.module.scss';
import { useState } from 'react';

const locations = [
  {
    name: 'Gurugram',
    top: '42%',
    left: '55%',
    address: '70A, Delhi - Jaipur Expy, Block A, Sector 34, Gurugram, Haryana 122101',
  },
  { name: 'Delhi', top: '37%', left: '49%' },
  { name: 'Bhopal', top: '33%', left: '39%' },
  { name: 'Bihar', top: '45%', left: '62%' },
  { name: 'Banglore', top: '65%', left: '44%' },
  { name: 'Tamil naidu', top: '75%', left: '57%' },
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
        {['Office', 'Institute', 'R&D centre'].map((tab) => (
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
        <img
          src="/images/india-map.png"
          alt="India Map"
          className={styles.mapImage}
        />

        {locations.map((loc, index) => (
          <div
            key={index}
            className={styles.marker}
            style={{ top: loc.top, left: loc.left }}
            onClick={() =>
              setSelectedLocation(
                selectedLocation === loc.name ? null : loc.name
              )
            }
          >
            <div className={styles.pin}>
              <div className={styles.icon}>✦</div>
            </div>

            {selectedLocation === loc.name && loc.address && (
              <div className={styles.tooltip}>{loc.address}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
