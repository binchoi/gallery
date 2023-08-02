import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { getDescendingPiecesData } from "../lib/pieces";

export async function getStaticProps() {
    const allPiecesData = getDescendingPiecesData();
    return {
        props: {
            allPiecesData,
        },
    };
}

export default function Home({ allPiecesData }) {
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

            {/* Pieces Grid */}
            <div className={styles.grid}>
                {allPiecesData.map(({ id, imagepath }) => (
                    <Link
                        href={`/pieces/${id}`}
                        className={styles.card}
                        key={id}
                    >
                        <Image
                            priority
                            src={imagepath}
                            height={240}
                            width={240}
                            alt=""
                        />
                    </Link>
                ))}
            </div>
        </main>
    );
}
