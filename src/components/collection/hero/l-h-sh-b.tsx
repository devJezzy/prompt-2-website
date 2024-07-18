import React from 'react';
import styles from './l-h-sh-b.module.css';

const Hero: React.FC = () => {
  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <nav className={styles.container}>
          <div>LOGO</div>
          <div>NAVIGATION</div>
        </nav>

        <div className={styles.headerContainer}>
          <div className={styles.headerContainerInner}>
            <h1>A healthy meal delivered to your door, every single day</h1>
            <p>
              The smart 365-days-per-year food subscription that will make you eat
              healthy again. Tailored to your personal tastes and nutritional
              needs
            </p>
            <a href="#" className={styles.btn}>Start eating well</a>
          </div>
        </div>
      </header>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Some random heading</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni veniam
            laborum esse, id doloribus nemo hic nulla, fugiat autem atque ipsum
            quaerat illum qui in expedita labore eaque, impedit fugit! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Impedit dicta praesentium
            nostrum optio, fugit, quaerat alias accusamus quia, laboriosam numquam
            enim temporibus dignissimos voluptates dolor? Illo eligendi
            perferendis veritatis assumenda!
          </p>
        </div>
      </section>
    </div>
  );
}

export default Hero;
