import styles from './Partners.module.scss'
const partners = [
  { name: 'IndianOil', img: '/partners/indian-oil.png' },
  { name: 'IFFCO', img: '/partners/iffco.png' },
  { name: 'Sanshtha Sevak', img: '/partners/sanstha-sevak.png' },
  { name: 'Tata Power', img: '/partners/tata-power.png' },
  { name: 'Garuda Aerospace', img: '/partners/garuda.png' },
  { name: 'Defense Org', img: '/partners/defense.png' },
  { name: 'Air Force', img: '/partners/air-force.png' },
  { name: 'CRPF', img: '/partners/crpf.png' },
  { name: 'General Aeronautics', img: '/partners/general-aeronautics.png' },
  { name: 'Go Green', img: '/partners/go-green.png' },
  { name: 'SB Jain', img: '/partners/sb-jain.png' },
  { name: 'Agri Wings', img: '/partners/agri-wings.png' },
];

export default function Partners() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Our partners</h2>
      <p className={styles.subtitle}>
        Welcome to DroneVerse, where we redefine India’s drone industry. Driven by a vision to create world-class drone pilots,<br />
        we go above & beyond in everything we do. Recognized in the esteemed World Book of Records.
      </p>

      <div className={styles.grid}>
        {partners.map((partner, index) => (
          <div className={styles.card} key={index}>
            <img src={partner.img} alt={partner.name} />
          </div>
        ))}
      </div>
    </section>
  );
}
