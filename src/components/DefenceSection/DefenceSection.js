import styles from "./DefenceSection.module.scss";
import Image from "next/image";

export default function DefenceSection() {
  return (
    <section className={styles.defenceSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>
            Defence Solutions by <br />
            <span>DroneVerse</span>
          </h2>
          <p>
            At DroneVerse, we are redefining modern defence operations with our
            advanced ecosystem of aerial technologies. From AI-powered
            counter-drone systems to DGCA-certified drone training for combat
            forces, we deliver future-ready solutions tailored for tactical
            advantage. Our core expertise spans surveillance and FPV drones,
            built for frontline intelligence and real-time mission execution. We
            also offer full-scale customization labs for defence units and
            agencies, enabling rapid prototyping, specialized payload
            integration, and training module setups—all aligned with national
            security needs and evolving battlefield dynamics.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/assets/images/fighter-jet.png"
            alt="Fighter Jet"
            width={700}
            height={450}
            className={styles.image}
            priority
          />
        </div>
      </div>
    </section>
  );
}
