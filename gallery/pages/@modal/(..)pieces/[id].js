import Modal from "../../../components/modal";
import { getAllPieceIds, getPieceData } from "../../../lib/pieces";

export default function PieceModal({ pieceData }) {
    return (
        <Modal>
            hello
            {/* <main className={styles.main}>
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
                <div className={styles.piecedescription}>
                    <article>
                        <h1>{pieceData.title}</h1>
                        <h4>
                            <Date dateString={pieceData.date} />
                        </h4>
                        <div>
                            <Image
                                priority
                                src={pieceData.imagepath}
                                alt=""
                                height={720}
                                width={720}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                }}
                            />
                        </div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: pieceData.contentHtml,
                            }}
                        />
                    </article>
                </div>
            </main> */}
        </Modal>
    );
}

// Is below necessary
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
