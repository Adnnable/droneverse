import styles from './Certification.module.scss';

const certifications = [
  {
    img: '/certifications/cert-1.jpg',
    title: 'Rotocraft sub-category',
    subtitle: 'RPAS class:small',
  },
  {
    img: '/certifications/cert-2.jpg',
    title: 'Rotocraft sub-category',
    subtitle: 'RPAS class:small',
  },
  {
    img: '/certifications/cert-3.jpg',
    title: 'Rotocraft sub-category',
    subtitle: 'RPAS class:small',
  },
];

export default function Certifications() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Our Certifications</h2>
      <p className={styles.subtitle}>
        Welcome to DroneVerse, where we redefine India’s drone industry. Driven by a vision to create world-class drone pilots, <br />
        we go above & beyond in everything we do. Recognized in the esteemed World Book of Records.
      </p>

      <div className={styles.grid}>
        {certifications.map((item, index) => (
          <div className={styles.card} key={index}>
            <img src={item.img} alt={`Certificate ${index + 1}`} className={styles.image} />
            <div className={styles.text}>
              <p>{item.title}</p>
              <strong>{item.subtitle}</strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
