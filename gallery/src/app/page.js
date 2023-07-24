import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <a
            href="https://binchoi.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            with love.
          </a>
        </div>
      </div>

      <div className={styles.grid}>
        {/* <a
          href="https://binchoi.github.io"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image 
              priority
              src="/images/20230722.jpeg"
              height={240}
              width={240}
              alt=""
          />
        </a> */}
        <a
          href="https://binchoi.github.io"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image 
              priority
              src="/images/atom.jpeg"
              height={240}
              width={240}
              alt=""
          />
        </a>
        <a
          href="https://binchoi.github.io"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image 
              priority
              src="/images/20230719.jpeg"
              height={240}
              width={240}
              alt=""
          />
        </a>
        <a
          href="https://binchoi.github.io"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image 
              priority
              src="/images/once-a-day.jpeg"
              height={240}
              width={240}
              alt=""
          />
        </a>
        <a
          href="https://binchoi.github.io"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image 
              priority
              src="/images/circles.jpeg"
              height={240}
              width={240}
              alt=""
          />
        </a>
        <a
          href="https://binchoi.github.io"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image 
              priority
              src="/images/20221111.jpeg"
              height={240}
              width={240}
              alt=""
          />
        </a>
        <a
          href="https://binchoi.github.io"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image 
              priority
              src="/images/wall.jpeg"
              height={240}
              width={240}
              alt=""
          />
        </a>
        <a
          href="https://binchoi.github.io"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image 
              priority
              src="/images/chips.jpeg"
              height={240}
              width={240}
              alt=""
          />
        </a>
        <a
          href="https://binchoi.github.io"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image 
              priority
              src="/images/20221016.jpeg"
              height={240}
              width={240}
              alt=""
          />
        </a>
        <a
          href="https://binchoi.github.io"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image 
              priority
              src="/images/candle.jpeg"
              height={240}
              width={240}
              alt=""
          />
        </a>
        <a
          href="https://binchoi.github.io"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image 
              priority
              src="/images/20230113.jpeg"
              height={240}
              width={240}
              alt=""
          />
        </a>
        <a
          href="https://binchoi.github.io"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image 
              priority
              src="/images/face.jpeg"
              height={240}
              width={240}
              alt=""
          />
        </a>
        <a
          href="https://binchoi.github.io"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image 
              priority
              src="/images/20221026.jpeg"
              height={240}
              width={240}
              alt=""
          />
        </a>
      </div>
    </main>
  )
}
