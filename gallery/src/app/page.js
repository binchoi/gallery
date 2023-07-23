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

      {/* <div className={styles.center}>
        .
      </div> */}

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image 
              priority
              src="/artex.jpg"
              height={240}
              width={240}
              alt=""
          />
        </a>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image 
              priority
              src="/artex.jpg"
              height={240}
              width={240}
              alt=""
          />
        </a>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image 
              priority
              src="/artex.jpg"
              height={240}
              width={240}
              alt=""
          />
        </a>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image 
              priority
              src="/artex2.jpg"
              height={240}
              width={240}
              alt=""
          />
        </a>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image 
              priority
              src="/artex.jpg"
              height={240}
              width={240}
              alt=""
          />
        </a>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image 
              priority
              src="/artex.jpg"
              height={240}
              width={240}
              alt=""
          />
        </a>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image 
              priority
              src="/artex3.jpg"
              height={240}
              width={240}
              alt=""
          />
        </a>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image 
              priority
              src="/artex.jpg"
              height={240}
              width={240}
              alt=""
          />
        </a>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image 
              priority
              src="/artex.jpg"
              height={240}
              width={240}
              alt=""
          />
        </a>

      </div>
    </main>
  )
}
