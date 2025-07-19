import React, { useState } from "react";
import styles from "./Presence.module.scss";
import Image from "next/image";

const LOCATIONS = {
  Office: [
    { name: "Bhopal", top: "38%", left: "22%", address: "" },
    { name: "Delhi", top: "47%", left: "39%", address: "" },
    { name: "Bangalore", top: "72%", left: "35%", address: "" },
    {
      name: "Gurugram",
      top: "44%",
      left: "43%",
      address:
        "70A, Delhi - Jaipur Expy, Block A, Sector 34, Gurugram, Haryana 122101",
    },
    { name: "Bihar", top: "56%", left: "54%", address: "" },
    { name: "Tamil nadu", top: "100%", left: "40%", address: "" },
  ],
  Institute: [],
  "R&D centre": [],
};

const TABS = ["Office", "Institute", "R&D centre"];

const PresenceSection = () => {
  const [activeTab, setActiveTab] = useState("Office");
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <section className={styles.presence}>
      {/* <h2>Our presence</h2> */}
      {/* <p className={styles.description}>
        Welcome to DroneVerse, where we redefine India’s drone industry. Driven by a vision to create world-class drone pilots, <br />
        we go above & beyond in everything we do. Recognized in the esteemed World Book of Records.
      </p>

      <div className={styles.tabs}>
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`${styles.tabButton} ${activeTab === tab ? styles.active : ''}`}
            onClick={() => {
              setActiveTab(tab);
              setSelectedLocation(null);
            }}
          >
            {tab}
          </button>
        ))}
      </div> */}

      <div className={styles.textPartContainer}>
        <div className={styles.shadeOverlay}></div>
        <div className={styles.textPart}>
          <h2 className={styles.title}>Our presence</h2>
          <p className={styles.subtitle}>
            Welcome to DroneVerse, where we redefine India’s drone industry.
            Driven by a vision to create world-class drone pilots, we go above &
            beyond in everything we do. Recognized in the esteemed World Book of
            Records.
          </p>
        </div>
        {/* Toggle buttons */}
        <div className={styles.toggleButtons}>
          {["Office", "Institute", "R&D centre"].map((tab) => (
            <button
              key={tab}
              className={`${styles.tabButton} ${
                activeTab === tab ? styles.active : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.mapWrapper}>
        <Image
          src="/assets/img/presence/states.svg"
          alt="India Map"
          width={800}
          height={400}
          className={styles.mapImage}
        />
        {LOCATIONS[activeTab].map((loc, idx) => (
          <div
            key={idx}
            className={styles.pin}
            style={{ top: loc.top, left: loc.left }}
            onClick={() => setSelectedLocation(loc)}
          >
            <Image
              src="/assets/img/presence/location.svg"
              alt="Pin"
              width={40}
              height={40}
            />
            <span className={styles.label}>{loc.name}</span>
            {selectedLocation?.name === loc.name && loc.address && (
              <div className={styles.tooltip}>{loc.address}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PresenceSection;
