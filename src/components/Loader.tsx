import React from 'react';
import styles from './Loader.module.css';

const Loader: React.FC = () => {
  return (
    <section className={styles.test}>
      <div className={styles.loader}>
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} style={{ '--i': i + 1 } as React.CSSProperties}></span>
        ))}
      </div>
    </section>
  );
};

export default Loader;
