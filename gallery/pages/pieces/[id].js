import Image from "next/image";
import { getAllPieceIds, getPieceData } from "../../lib/pieces";
import styles from "../../styles/Home.module.css";

export default function Piece({ pieceData }) {
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
            <div>
                <article>
                    <h1>{pieceData.title}</h1>
                    <div>
                        <Date dateString={pieceData.date} />
                    </div>
                    <Image
                        priority
                        src={pieceData.imagepath}
                        height={480}
                        width={480}
                        alt=""
                    />
                    <div
                        dangerouslySetInnerHTML={{
                            __html: pieceData.contentHtml,
                        }}
                    />
                </article>
            </div>
        </main>
    );
}

export async function getStaticPaths() {
    const paths = getAllPieceIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const pieceData = await getPieceData(params.id);
    return {
        props: {
            pieceData,
        },
    };
}
