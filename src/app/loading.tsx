import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className='bg-zinc-900 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-sreen w-screen'>
      <div
        aria-label='Orange and tan hamster running in a metal wheel'
        role='img'
        className={styles.wheelandhamster}
      >
        <div className={styles.wheel}></div>
        <div className={styles.hamster}>
          <div className={styles.hamster__body}>
            <div className={styles.hamster__head}>
              <div className={styles.hamster__ear}></div>
              <div className={styles.hamster__eye}></div>
              <div className={styles.hamster__nose}></div>
            </div>
            <div
              className={`${styles.hamster__limb} ${styles.hamster__limbfl}`}
            ></div>
            <div
              className={`${styles.hamster__limb} ${styles.hamster__limbfl}`}
            ></div>
            <div
              className={`${styles.hamster__limb} ${styles.hamster__limbfl}`}
            ></div>
            <div
              className={`${styles.hamster__limb} ${styles.hamster__limbfl}`}
            ></div>
            <div className={styles.hamster__tail}></div>
          </div>
        </div>
        <div className={styles.spoke}></div>
      </div>
    </div>
  );
}