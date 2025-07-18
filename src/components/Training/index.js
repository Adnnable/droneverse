
import styles from './Training.module.scss';
import { useState } from 'react';

const tabs = ['Defence', 'Student', 'Training'];

const courses = [
  {
    tab: 'Defence',
    title: 'Small Class Drone Pilot Course',
    type: 'DGCA approved',
    duration: '5 days | Weight upto 2KG',
    features: [
      'Understand the regulatory framework',
      'Learn flight planning, navigation and safety protocols',
      'Practical flight training',
      'Training on a drone simulator and remote pilot certification',
    ],
    image: '../../../assets/img/course&instruction/img1.png',
  },
  {
    tab: 'Defence',
    title: 'Advanced Drone Operations',
    type: 'Industry recognized certification',
    duration: '5 days | Weight upto 2KG',
    features: [
      'Understand the regulatory framework',
      'Learn flight planning, navigation and safety protocols',
      'Practical flight training',
      'Training on a drone simulator and remote pilot certification',
    ],
    image: '../../../assets/img/course&instruction/img2.png',
  },
  {
    tab: 'Defence',
    title: 'Drone Maintenance & Repair',
    type: 'Comprehensive training module',
    duration: '5 days | Weight upto 2KG',
    features: [
      'Learn about drone components',
      'Learn flight planning, navigation and safety protocols',
      'Practical flight training',
      'Training on a drone simulator and remote pilot certification',
    ],
    image: '../../../assets/img/course&instruction/img3.png',
  },
];

const instructors = [
  {
    name: 'Ambuj Verma',
    description: 'A seasoned veteran with extensive experience in both civilian and military drone...',
    image: '../../../assets/img/course&instruction/1.png',
  },
  {
    name: 'Harsh Goel',
    description: 'An innovative thinker, pioneering cutting-edge techniques and methodologies in ...',
    image: '../../../assets/img/course&instruction/2.png',
  },
];

export default function Courses() {
  const [activeTab, setActiveTab] = useState('Defence');

  const filteredCourses = courses.filter((course) => course.tab === activeTab);

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Turning passion into professions</h2>
      <p className={styles.subheading}>
        Welcome to DroneVerse, where we redefine India’s drone industry. Driven by a vision to create world-class drone pilots,
        we go above & beyond in everything we do. Recognized in the esteemed World Book of Records.
      </p>

      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${styles.tabButton} ${activeTab === tab ? styles.active : ''}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className={styles.cards}>
        {filteredCourses.map((course, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.imageWrapper}>
              <img src={course.image} alt={course.title} />
            </div>
            <div className={styles.cardContent}>
              <span className={styles.badge}>{course.type}</span>
              <h4>{course.title}</h4>
              <p className={styles.duration}>{course.duration}</p>
              <ul>
                {course.features.map((feature, idx) => (
                  <li key={idx}>✔ {feature}</li>
                ))}
              </ul>
              <div className={styles.actions}>
                <button className={styles.detailsBtn}>Details</button>
                <button className={styles.enrollBtn}>Enroll now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Top Instructors Section */}
      <div className={styles.instructors}>
        <h2 className={styles.instructorHeading}>Top instructor</h2>
        <p className={styles.subheading}>
          Welcome to DroneVerse, where we redefine India’s drone industry. Driven by a vision to create world-class drone pilots,
          we go above & beyond in everything we do. Recognized in the esteemed World Book of Records.
        </p>
        <div className={styles.instructorGrid}>
          {instructors.map((inst, idx) => (
            <div className={styles.instructorCard} key={idx}>
              <div>
                <h4>{inst.name}</h4>
                <p>{inst.description}</p>
              </div>
              <img src={inst.image} alt={inst.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
