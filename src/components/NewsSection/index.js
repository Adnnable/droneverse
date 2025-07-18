import styles from './News.module.scss'

const bannerImages = [
  '/news/banner-1.jpg',
  '/news/banner-2.jpg',
  '/news/banner-3.jpg',
  '/news/banner-1.jpg', // repeat for visual continuity
];

const newsItems = [
  {
    title: 'Defence department',
    image: '/news/news-1.jpg',
    description:
      "Welcome to DroneVerse, where we redefine India’s drone industry. Driven by a vision to create world-class drone pilots, we go above & beyond in everything we do. Recognized in the esteemed World Book of Records.",
    link: 'https://www.linkedin.com',
  },
  {
    title: 'Defence department',
    image: '/news/news-2.jpg',
    description:
      "Welcome to DroneVerse, where we redefine India’s drone industry. Driven by a vision to create world-class drone pilots, we go above & beyond in everything we do. Recognized in the esteemed World Book of Records.",
    link: 'https://www.linkedin.com',
  },
  {
    title: 'Defence department',
    image: '/news/news-2.jpg',
    description:
      "Welcome to DroneVerse, where we redefine India’s drone industry. Driven by a vision to create world-class drone pilots, we go above & beyond in everything we do. Recognized in the esteemed World Book of Records.",
    link: 'https://www.linkedin.com',
  },
  {
    title: 'Defence department',
    image: '/news/news-1.jpg',
    description:
      "Welcome to DroneVerse, where we redefine India’s drone industry. Driven by a vision to create world-class drone pilots, we go above & beyond in everything we do. Recognized in the esteemed World Book of Records.",
    link: 'https://www.linkedin.com',
  },
];

export default function NewsSection() {
  return (
    <section className={styles.wrapper}>
      {/* Banner Carousel */}
      <div className={styles.carousel}>
        {bannerImages.map((src, index) => (
          <div key={index} className={styles.bannerImage}>
            <img src={src} alt={`Banner ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* News Content */}
      <div className={styles.newsHeader}>
        <h2>Our latest news</h2>
        <p>
          Welcome to DroneVerse, where we redefine India’s drone industry. Driven by a vision to create world-class drone pilots, <br />
          we go above & beyond in everything we do. Recognized in the esteemed World Book of Records.
        </p>
      </div>

      {/* News Cards */}
      <div className={styles.newsGrid}>
        {newsItems.map((item, index) => (
          <div key={index} className={styles.card}>
            <img src={item.image} alt={item.title} className={styles.cardImage} />
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <h4>{item.title}</h4>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img src="/icons/linkedin.svg" alt="LinkedIn" className={styles.icon} />
                </a>
              </div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows (static for now) */}
      <div className={styles.arrows}>
        <button className={styles.arrowBtn}>◀</button>
        <button className={styles.arrowBtn}>▶</button>
      </div>
    </section>
  );
}
