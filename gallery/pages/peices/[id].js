import { getAllPieceIds } from "../../lib/pieces";

export default function Piece({ pieceData }) {
    return <div>{pieceData.id}</div>;
}

export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = getAllPieceIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    // const postData = await getPostData(params.id);
    const pieceData = { id: params.id };
    return {
        props: {
            pieceData,
        },
    };
}
